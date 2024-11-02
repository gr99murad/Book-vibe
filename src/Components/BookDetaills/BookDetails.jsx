import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const {bookId} = useParams();

    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            <h2>Book Details</h2>
        </div>
    );
};

export default BookDetails;