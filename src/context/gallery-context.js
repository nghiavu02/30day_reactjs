import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    isFavorite: false,
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    isFavorite: false,
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    isFavorite: false,
  },
];
const GalleryContext = createContext();
const GalleryProvider = (props) => {
  const { storedValue, setValue } = useLocalStorage("photo", fakeData);
  const { storedValue: cartlist, setValue: setCartlist } = useLocalStorage(
    "cart",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cart, setCart] = useState(cartlist);
  const [favorites, setFavorites] = useState([]);
  const handleDelete = (id) => {
    setCart((prev) => {
      const result = prev.filter((item) => item.id !== id);
      setCartlist(result);
      return result;
    });
  };
  const handleAddCart = (newItem) => {
    setCart((prev) => {
      const isExist = prev.some((item) => item.id === newItem.id);
      if (isExist) {
        setCartlist([...prev]);
        return [...prev];
      }
      setCartlist([...prev, newItem]);
      return [...prev, newItem];
    });
  };
  const handleToggleFavorite = (newItem) => {
    // newItem.isFavorite = !newItem.isFavorite;
    // setFavorites((prev) => {
    //   const isExist = prev.some((item) => item.id === newItem.id);
    //   if (isExist) {
    //     // newItem.isFavorite = false;
    //     return prev.filter((item) => item.id !== newItem.id);
    //   }
    //   //   newItem.isFavorite = true;
    //   return [...prev, newItem];
    // });
    const updateArray = photos.map((photo) => {
      if (photo.id === newItem.id)
        return { ...photo, isFavorite: !photo.isFavorite };
      return photo;
    });
    setValue(updateArray);
    setPhotos(updateArray);
  };
  const value = {
    photos,
    cart,
    favorites,
    setCart,
    setFavorites,
    handleDelete,
    handleAddCart,
    handleToggleFavorite,
  };
  return (
    <GalleryContext.Provider {...props} value={value}></GalleryContext.Provider>
  );
};
const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useGallery must be within a GalleryProvider");
  return context;
};

export { GalleryProvider, useGallery };
