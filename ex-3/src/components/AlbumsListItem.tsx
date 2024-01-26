// store
import { useRemoveAlbumMutation } from "@/store";

// react-icons
import { GoTrash } from "react-icons/go";

// components
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotoList from "./PhotoList";

export default function AlbumsListItem({ album }: { album: Album }) {
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        onClick={handleRemoveAlbum}
        loading={removeAlbumResults.isLoading}
        className="mr-2"
      >
        <GoTrash />
      </Button>
      {album.title}
    </>
  );

  return (
    <ExpandablePanel key={album.id!} header={header}>
      <PhotoList album={album} />
    </ExpandablePanel>
  );
}
