'use client';

import { useState } from 'react';
import ImageModal from './ImageModal';
import { ImageType } from './ImageGalleryServer';

type ImageGalleryClientProps = {
    images: ImageType[];
    };

export function ImageGalleryClient({ images }:ImageGalleryClientProps) {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const openModal = (image:ImageType) => {
    console.log("open clicked");
    setSelectedImage(image);
  };

  const closeModal = () => {
    console.log("close clicked");
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`relative h-52 rounded-xl overflow-hidden drop-shadow-md hover:drop-shadow-lg ${index % 4 === 0 || index % 4 === 3 ? 'lg:col-span-2' : 'col-span-1'}`}
          onClick={() => openModal(image)}
        >
          <img 
            src={`${process.env.NEXT_PUBLIC_PHOTO_URL}/${image.collection}/${image.filename}`} 
            alt={image.description} 
            className="object-cover object-center w-full h-full cursor-pointer" />
        </div>
      ))}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
}