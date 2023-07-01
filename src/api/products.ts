import {  collection, getDocs } from "firebase/firestore";
import {db} from "../firebaseConfig";

export const getAllProducts = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() } as Product);
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getProductById = async (id: string | undefined) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products: Product[] = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() } as Product);
    });
    return products.find((product) => product.id === id);
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}



