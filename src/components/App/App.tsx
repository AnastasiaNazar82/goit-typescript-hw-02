import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import { getImages } from "../../articles-api";

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import ImageModal from "../ImageModal/ImageModal";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import Loader from "../Loader/Loader";
import ErrorMessag from "../ErrorMessage/ErrorMessage";

interface Image {
  id: string;
  description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface ImageUrl {
  alt: string;
  url: string;
}

const App: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageUrl, setImageUrl] = useState<ImageUrl | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalImages, setTotalImages] = useState<number>(1);

  useEffect(() => {
    if (query === "") return;

    const asyncWrapper = async () => {
      try {
        setError(null);
        setIsLoading(true);
        const { results, total_pages } = await getImages(query, page);

        setImages((prevState) => [...prevState, ...results]);
        setTotalImages(total_pages);
      } catch (error: any) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    asyncWrapper();
  }, [query, page]);

  const getQuery = (query: string) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalImages(1);
  };

  const loadMoreImg = () => {
    setPage(page + 1);
  };

  // ======  Modal ============

  const openModal = (alt: string, url: string) => {
    setIsOpen(true);
    setImageUrl({ alt, url });
  };
  const closeModal = () => {
    setIsOpen(false);
    setImageUrl(null);
  };

  return (
    <div>
      <SearchBar onSubmit={getQuery} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {page === totalImages && images.length > 0 && (
        <p>Sorry, no more images available</p>
      )}
      {page < totalImages && !isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={loadMoreImg} />
      )}
      {isOpen && imageUrl && (
        <ImageModal isOpen={isOpen} imageUrl={imageUrl} onClose={closeModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessag />}
      <Toaster />
    </div>
  );
};

export default App;
