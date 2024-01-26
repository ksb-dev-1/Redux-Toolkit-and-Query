import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// Dev Only
const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3005`,
    // fetchFn: async (...args) => {
    //   await pause(3000);
    //   return fetch(...args);
    // },
  }),
  tagTypes: ["Photo", "AlbumPhoto"],
  endpoints: (builder) => ({
    addPhoto: builder.mutation<any, Album>({
      invalidatesTags: (result, error, album) => {
        return [{ type: "AlbumPhoto", id: album.id }];
      },
      query: (album: Album) => {
        return {
          url: "/photos",
          method: "POST",
          body: {
            albumId: album.id,
            url: faker.image.urlLoremFlickr({
              category: "nature",
              width: 150,
              height: 150,
            }),
          },
        };
      },
    }),
    removePhoto: builder.mutation<any, Photo>({
      invalidatesTags: (result, error, photo) => {
        return [{ type: "Photo", id: photo.id }];
      },
      query: (photo: Photo) => {
        return {
          url: `/photos/${photo.id}`,
          method: "DELETE",
        };
      },
    }),
    fetchPhotos: builder.query<any, Album>({
      providesTags: (result, error, album) => {
        const tags = result.map((photo: Photo) => {
          return { type: "Photo", id: photo.id };
        });
        tags.push({ type: "AlbumPhoto", id: album.id });
        return tags;
      },
      query: (album: Album) => {
        return {
          url: "/photos",
          method: "GET",
          params: {
            albumId: album.id,
          },
        };
      },
    }),
  }),
});

export const {
  useAddPhotoMutation,
  useRemovePhotoMutation,
  useFetchPhotosQuery,
} = photosApi;
export { photosApi };
