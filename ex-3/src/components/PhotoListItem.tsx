import Image from "next/image";

export default function PhotoListItem({ photo }: { photo: Photo }) {
  return (
    <div>
      <Image
        src={photo.url}
        blurDataURL={photo.url}
        placeholder="blur"
        alt="random pic"
        height={100}
        width={100}
        className="rounded mr-2"
      />
    </div>
  );
}
