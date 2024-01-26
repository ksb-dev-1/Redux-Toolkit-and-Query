import Image from "next/image";

// react-icons
import { GoTrash } from "react-icons/go";
import { useRemovePhotoMutation } from "@/store";

export default function PhotoListItem({ photo }: { photo: Photo }) {
  const [removePhoto] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  };

  return (
    <div onClick={handleRemovePhoto} className="relative cursor-pointer m-2">
      <Image
        src={photo.url}
        blurDataURL={photo.url}
        placeholder="blur"
        alt="random pic"
        height={100}
        width={100}
        className="rounded mr-2"
      />
      <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80">
        <GoTrash className="text-3xl" />
      </div>
    </div>
  );
}
