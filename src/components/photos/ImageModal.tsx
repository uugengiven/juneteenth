import { ImageType } from './ImageGalleryServer';

type ImageModalProps = {
    image: ImageType;
    onClose: () => void;
  };

export default function ImageModal({ image, onClose } : ImageModalProps) {
    const url = `${process.env.NEXT_PUBLIC_PHOTO_URL}/${image.collection}/${image.filename}`;
    return (
    <div className="h-screen w-screen fixed top-0 left-0 bg-black bg-opacity-75 flex align-middle justify-center" onClick={onClose}>
      <div className="inset-0 flex items-center justify-center z-50 max-h-full">
        <div className="bg-white p-4 rounded-lg max-h-screen flex flex-col text-center">
          <img src={url} alt={image.description} className="max-h-[80vh]" />
          {image.description && <p className="mt-2 text-xl">{image.description}</p>}
          <button
            className="mt-4 px-4 py-2 bg-gray-200 rounded-lg"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
    );
  }