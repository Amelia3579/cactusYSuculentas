import React from 'react'
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import ProductButton from '../ProductButton/ProductButton';
import './ProductCard.css';

const ProductCard = () => {
  return (
    <div className = 'product-card'>ProductCard
      <ProductImage/>
      <ProductInfo/>
      <ProductButton/>
    </div>
  )
}

export default ProductCard




