import React from 'react';
import { Link } from 'react-router-dom';

import Avatar from '../../shared/components/UIElements/Avatar';
import Card from '../../shared/components/UIElements/Card'; 
import './BookItem.css';

const BookItem = props => {
    return (
        <li className="book-item">
            <Card className="book-item__content">
                <Link to={`/${props.id}/BookInfo`}>
                    <div className="book-item__image">
                        <Avatar image={props.image} alt={props.name} />
                    </div>
                    <div className="book-item__info">
                        <h2>{props.name}</h2>
                        <h3>{props.author}</h3>
                    </div> 
                </Link>
            </Card>
        </li>
    );

};

export default BookItem;