// 1.state to store books
// 2.useEffect
// 3.Fetch the load data 
// 4. set the data to the book state

import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {


    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setBooks(data))

    },[])
    return (
        <div>
            <h1 className="text-4xl font-bold text-center">Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;