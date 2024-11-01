"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import Image from "next/image";

interface MenuItem {
  id: number;
  name: string;
  image: string;
  calories: number;
  rating: number;
  price: number;
  type: string;
  category: string;
  pieces: number;
}

interface CreateContextProps {
  menuItems: MenuItem[];

  wishlistIds: number[];
  setWishlistIds: React.Dispatch<React.SetStateAction<number[]>>;

  cartIds: number[];
  setCartIds: React.Dispatch<React.SetStateAction<number[]>>;

  toggleWishlist: (id: number) => void;
  toggleCart: (id: number) => void;

  isMenuActive: boolean;
  // تم تعريفها كداله تاخذ قيمه سابقه وتعيد قيمه جديده
  setIsMenuActive: React.Dispatch<React.SetStateAction<boolean>>;
  isVideoActive: boolean;
  setIsVideoActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogicProvider = createContext<CreateContextProps | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);

  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const [isVideoActive, setIsVideoActive] = useState<boolean>(false);

  const [wishlistIds, setWishlistIds] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const storedWishlist = localStorage.getItem("savedWishlistIds");
      return storedWishlist ? JSON.parse(storedWishlist) : [];
    }
    return [];
  });

  const [cartIds, setCartIds] = useState<number[]>(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("savedCartIds");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  const toggleWishlist = (id: number) => {
    setWishlistIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  const toggleCart = (id: number) => {
    setCartIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("savedWishlistIds", JSON.stringify(wishlistIds));
    }
  }, [wishlistIds]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("savedCartIds", JSON.stringify(cartIds));
    }
  }, [cartIds]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Something went wrong while fetching data");
      }
      const data = await response.json();
      console.log("Fetched data:", data);
      const products = data;
      setMenuItems(products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading)
    return (
      <main className="bg-[#ffffff] w-full h-screen flex-center">
        <Image
          src="/assets/images/loader.gif"
          alt="loader"
          width={300}
          height={300}
          className="bg-transparent"
        />
      </main>
    );

  const values = {
    menuItems,
    wishlistIds,
    setWishlistIds,
    cartIds,
    setCartIds,
    toggleWishlist,
    toggleCart,
    isMenuActive,
    setIsMenuActive,
    isVideoActive,
    setIsVideoActive,
  };

  return (
    <LogicProvider.Provider value={values}>{children}</LogicProvider.Provider>
  );
};

export const useLogicProvider = () => {
  const context = useContext(LogicProvider);
  if (context === undefined) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};
