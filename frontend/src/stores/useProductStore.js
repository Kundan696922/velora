import { create } from "zustand";
import toast from "react-hot-toast"
import axios from "../lib/axios"

export const useProductStore = create((set) => ({
    products: [],
    laoding: false,
    
    setProducts: (products) => set({ products }),
    
    createProduct: async (productData) => {
        set({ laoding: true });
        
        try {
            const res = await axios.post("/products", productData);

            set((prevState) => ({
                products: [...prevState.products, res.data],
                loading: false,
            }));

            toast.success("Product created successfully");
        } catch (error) {
            toast.error(error.response.data.error);
            set({loading: false});
        }
    },
    fetchAllProducts: async (productData) => { 
        set({ laoding: true });
        try {
            const response = await axios.get("/products", productData);
            set({products: response.data.products, loading: false});
        } catch (error) {
            set({ error: "Failed to fetch products", loading: false });
            toast.error(error.response.data.error || "failed to fetch products");
        }
    },

    fetchProductsByCategory: async (category) => { 
        set({ laoding: true });
        try {
            const response = await axios.get(`/products/category/${category}`);
            set({products: response.data.products, loading: false});
        } catch (error) {
            set({ error: "Failed to fetch products", loading: false });
            toast.error(error.response.data.error || "failed to fetch products");
        }
    },

    toggleFeaturedProduct: async (productId) => { 
        set({ loading: true });
        try {
            const response = await axios.patch(`/products/${productId}`);

            set((prevProducts) => ({
                products: prevProducts.products.map((product) => product._id === productId ? { ...product, isFeatured: response.data.isFeatured } : product),
                laoding:false,
            }))
        } catch (error) {
            set({ laoding: false });
            toast.error(error.reponse.data.error || "Failed to update product");
        }
    },
    deleteProduct: async (productId) => {
        set({ loading: true });

        if (!window.confirm("Are you sure you want to delete this product?")) return;

        try {
            await axios.delete(`/products/${productId}`);
            set((prevProducts) => ({
                products: prevProducts.products.filter((product) => product._id !== productId),
                loading: false,
            }));
        } catch (error) {
            set({ loading: false });
            toast.error(error.response.data.error || "Failed to delete product");
        }
    },

    fetchFeaturedProducts: async () => { 
         set({ loading: true });
        try {
            const response = await axios.get("/products/featured");
            set({ products: response.data, laoding: false});
        } catch (error) {
            set({ error: "Failed to fetch products", loading: false });
            console.log("Error fetching fetaured products:", error);
        }
    },
    
}))