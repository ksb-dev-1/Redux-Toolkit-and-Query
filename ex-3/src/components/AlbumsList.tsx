"use client";

// store
import { useFetchAlbumsQuery, useAddAlbumMutation } from "@/store";

// components
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsListItem from "./AlbumsListItem";

export default function AlbumsList({ user }: { user: User }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, addAlbumResults] = useAddAlbumMutation();

  let content;

  if (isLoading) {
    content = <Skeleton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div>Error loading albums!</div>;
  } else {
    content = data.map((album: any) => (
      <AlbumsListItem key={album.id} album={album} />
    ));
  }

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      <div className="flex items-center justify-between m-2">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button onClick={handleAddAlbum} loading={addAlbumResults.isLoading}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}
