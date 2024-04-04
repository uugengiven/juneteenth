import UploadForm from "./UploadForm";
import ImageGalleryServer from "@/components/photos/ImageGalleryServer";

export default function Page() {
  return (
    <div className="flex">
      <div className="w-1/2">
        <UploadForm />
      </div>
      <div className="w-1/2">
        <ImageGalleryServer collection="juneteenth" />
      </div>
    </div>
  );
}