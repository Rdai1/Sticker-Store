import React from 'react';
import Link from 'next/link';
import { urlFor } from '../LIB/client';

const Product = ({product:{image, name, slug, price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img src={urlFor(image && image[0])} width={250} height={250} className="product-image"/>
          <p className="Product-name">{name}</p>
          <p className="Product-price">${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default Product