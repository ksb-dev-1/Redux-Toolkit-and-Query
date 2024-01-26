import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

// Dev Only
const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: `http://localhost:3005`,
    // fetchFn: async (...args) => {
    //   await pause(3000);
    //   return fetch(...args);
    // },
  }),
  tagTypes: ["Album", "UsersAlbums"],
  endpoints: (builder) => ({
    addAlbum: builder.mutation<any, User>({
      invalidatesTags: (result, error, user) => {
        return [{ type: "UsersAlbums", id: user.id }];
      },
      query: (user: User) => {
        return {
          url: "/albums",
          method: "POST",
          body: {
            userId: user.id,
            title: faker.commerce.productName(),
          },
        };
      },
    }),
    removeAlbum: builder.mutation<any, Album>({
      invalidatesTags: (result, error, album) => {
        return [{ type: "Album", id: album.id }];
      },
      query: (album: Album) => {
        return {
          url: `/albums/${album.id}`,
          method: "DELETE",
        };
      },
    }),
    fetchAlbums: builder.query<any, User>({
      providesTags: (result, error, user) => {
        // if (error || !result) {
        //   return [{ type: "Album", id: user.id }];
        // }

        // return [
        //   { type: "Album", id: user.id },
        //   ...result.map((album: any) => ({ type: "Album", id: album.id })),
        // ];

        //return [{ type: "Album", id: user.id }];

        const tags = result.map((album: Album) => {
          return { type: "Album", id: album.id };
        });
        tags.push({ type: "UsersAlbums", id: user.id });
        return tags;
      },
      query: (user: User) => {
        return {
          url: "/albums",
          method: "GET",
          params: {
            userId: user.id,
          },
        };
      },
    }),
  }),
});

export const {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
