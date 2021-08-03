import React from 'react';
import productsData from './components/vschoolProducts';
import Product from './components/Product';


function ProductsApp() {
    const productComponents = productsData.map(item => 
    <Product key={item.id} product={item}
    />)

    return (
        <div>
            {productComponents}
        </div>
    )
}

export default ProductsApp