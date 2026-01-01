import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const loadWishlistFromStorage = () => {
    try {
        const serializedWishlist = localStorage.getItem('wishlistItems');
        if (serializedWishlist === null) {
            return [];
        }
        return JSON.parse(serializedWishlist);
    } catch (err) {
        return [];
    }
};

const saveWishlistToStorage = (wishlistItems) => {
    try {
        const serializedWishlist = JSON.stringify(wishlistItems);
        localStorage.setItem('wishlistItems', serializedWishlist);
    } catch (_) {
        // Ignore write errors
    }
};

const initialState = {
    wishlistItems: loadWishlistFromStorage()
}

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: initialState,
    reducers: {
        addToWishlist: (state, action) => {
            const existingItem = state.wishlistItems.find(item => item._id === action.payload._id);
            if (!existingItem) {
                state.wishlistItems.push(action.payload)
                saveWishlistToStorage(state.wishlistItems);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Book Added to Wishlist",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    title: "Already in Wishlist",
                    text: "This book is already in your wishlist!",
                    icon: "info",
                    confirmButtonColor: "#3085d6",
                    confirmButtonText: "OK!"
                })
            }
        },
        removeFromWishlist: (state, action) => {
            state.wishlistItems = state.wishlistItems.filter(item => item._id !== action.payload._id)
            saveWishlistToStorage(state.wishlistItems);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Book Removed from Wishlist",
                showConfirmButton: false,
                timer: 1500
            });
        },
        clearWishlist: (state) => {
            state.wishlistItems = []
            saveWishlistToStorage(state.wishlistItems);
        }
    }
})

// export the actions
export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
