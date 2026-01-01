import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useFetchAllBooksQuery } from '../../redux/features/books/bookApi';
import BookCard from '../books/BookCard';
import Loading from '../../components/Loading';

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';
    const { data: books = [], isLoading, error } = useFetchAllBooksQuery();
    const [filteredBooks, setFilteredBooks] = useState([]);

    useEffect(() => {
        if (books.length > 0 && query) {
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(query.toLowerCase()) ||
                book.description.toLowerCase().includes(query.toLowerCase()) ||
                book.category.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredBooks(filtered);
        } else {
            setFilteredBooks([]);
        }
    }, [books, query]);

    if (isLoading) return <Loading />;
    if (error) return <div className="text-center py-10">Error loading books</div>;

    return (
        <div className="py-10">
            <h2 className="text-3xl font-semibold mb-6 text-center">
                Search Results for "{query}"
            </h2>
            {filteredBooks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredBooks.map((book) => (
                        <BookCard key={book._id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <p className="text-gray-500">No books found matching your search.</p>
                </div>
            )}
        </div>
    );
};

export default Search;