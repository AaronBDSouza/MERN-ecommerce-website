import React from 'react';
import Rating from './Rating';

function Product(props) {
    const { product } = props;
    return (
        <div key={product._id} className="card">
        <a href={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name}/>
        </a>
        <div className="card-body">
            <a href={`/product/${product._id}`}>
                <h1>{product.name}</h1>
            </a>
        </div>

        <Rating rating = {product.rating} numReviews = {product.numReviews}></Rating>

        <div className="price">${product.price}</div>       

      </div> 
    );
}

export default Product;














