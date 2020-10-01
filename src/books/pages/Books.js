import React from 'react';

import BooksList from '../components/BooksList'

const Books = () => {
    const BOOKS = [
        {
            id: 'b1',
            name: 'masnavi',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrSFNMrEDgvcI6IRHH0Us3Vu2LYWp3_P5iRQ&usqp=CAU',
            author: 'molana'
        }
    ];
    return <BooksList items={BOOKS} />;
};


export default Books;