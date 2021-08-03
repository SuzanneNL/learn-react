import React from 'react';

function Product(props) {
    return (
        <div>
            <h3>Name: {props.product.name}</h3>
            <h3>Price: {props.product.price.toLocaleString("en-US", {style: "currency", currency: "USD" })}</h3>
            <p>Description: {props.product.description}</p>
            <hr/>
        </div>
    )
}

export default Product