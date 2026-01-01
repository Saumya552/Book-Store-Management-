import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../../redux/features/wishlist/wishlistSlice';
import { FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { getImgUrl } from '../../utils/getImgUrl';

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.wishlistItems);
    const dispatch = useDispatch();

    const handleRemoveFromWishlist = (book) => {
        dispatch(removeFromWishlist(book));
    };

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6 text-center">My Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p className="text-center text-gray-500">Your wishlist is empty. Start adding books you love!</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((book) => (
                        <div key={book._id} className="bg-white rounded-lg shadow-md p-4">
                            <div className="flex flex-col">
                                <Link to={`/books/${book._id}`}>
                                    <img
                                        src={`${getImgUrl(book?.coverImage)}`}
                                        alt={book.title}
                                        className="w-full h-48 object-cover rounded-md mb-4 hover:scale-105 transition-all duration-200"
                                    />
                                </Link>
                                <div className="flex-1">
                                    <Link to={`/books/${book._id}`}>
                                        <h3 className="text-lg font-semibold hover:text-blue-600 mb-2">
                                            {book?.title}
                                        </h3>
                                    </Link>
                                    <p className="text-gray-600 text-sm mb-2">
                                        {book?.description.length > 100 ? `${book.description.slice(0, 100)}...` : book?.description}
                                    </p>
                                    <p className="font-medium mb-4">
                                        ${book?.newPrice} <span className="line-through font-normal ml-2 text-gray-500">$ {book?.oldPrice}</span>
                                    </p>
                                </div>
                                <button
                                    onClick={() => handleRemoveFromWishlist(book)}
                                    className="btn-danger w-full flex items-center justify-center gap-2"
                                >
                                    <FiTrash2 />
                                    <span>Remove from Wishlist</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
