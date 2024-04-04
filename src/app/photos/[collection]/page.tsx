import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ImageGalleryServer from "@/components/photos/ImageGalleryServer";

export default function page({ params } : { params: { collection: string } }) {
    return (
      <>
        <Navbar />
        <div className="p-6 min-h-screen bg-gray-300">
          <ImageGalleryServer collection={params.collection} />
        </div>
        <Footer />
      </>
    );
}