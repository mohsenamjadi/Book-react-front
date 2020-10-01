import React from 'react';
import BookItem from './BookItem';

import './BooksList.css';

const BooksList = props => {
    if (props.items.length === 0) {
        return (
            <div className="center">
                <h2> No bookS found.</h2>
            </div>
        )
    };

    return (
        <ul className="books-list">
            {props.items.map(book => (
                <BookItem key={book.id}
                id={book.id}
                image={book.image}
                name={book.name}
                author={book.author}
                />
            ))}
        </ul>
    );
};

export default BooksList;