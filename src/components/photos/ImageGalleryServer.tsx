import { ImageGalleryClient } from './ImageGalleryClient';
import Image from '@/data/models/Images'; // Update the import path accordingly

type ImageGalleryServerProps = {
    collection: string;
    };

export type ImageType = {
    id: number;
    collection: string;
    filename: string;
    description: string;
}

export default async function ImageGalleryServer({ collection }: ImageGalleryServerProps) {
  const images:ImageType[] = JSON.parse(JSON.stringify(await Image.findAll({
    where: {
      collection,
      visible: true,
    },
  })));

  return <ImageGalleryClient images={images} />;
}