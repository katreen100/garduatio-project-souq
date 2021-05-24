import React, { useState } from 'react';
import { useFireStoreProducts } from '../../network/apis/productAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const initialValue = {
  allVariations: {},
  allVariations_ar: {},
  sellerNotes: {},
  sellerNotes_ar: {},
  variants: {},
  features: {},
  features_ar: {},

  brandName: '',
  brandName_ar: '',
  categoryName: '',
  categoryName_ar: '',
  description: '',
  description_ar: '',
  averageRating: '',
  discount: '',
  eligibleForCoupons: false,
  freeShipping: true,
  mainImage: '',
  shipping_ar: '',
  tax: '',
  name: '',
  name_ar: '',
  price: '',
  condition: '',
  condition_ar: '',
  mainVariant: 'mainVariant',

  createdAt: new Date(),
  updatedAt: new Date(),
}
export default function SimpleModal() {

  const { Products, addProduct, editProduct, deleteProduct } = useFireStoreProducts()
  const [product, setProduct] = useState(initialValue)
  const handleChange = ({ target }) => {
    setProduct({
      ...product,
      [target.name]: target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await addProduct(product)
    setProduct(initialValue)
  }

  return (
    <div>
      <h1> Create Product Parent </h1>
      <div className="input">

        <form onSubmit={handleSubmit}>
        <input required={true} type="text" name="allVariations" placeholder="Enter All Variations" onChange={handleChange} autoComplete="off" value={product.allVariations} />
        <input required={true} type="text" name="allVariations_ar" placeholder="Enter All allVariations_ar" onChange={handleChange} autoComplete="off" value={product.allVariations_ar} />
        <input required={true} type="text" name="sellerNotes" placeholder="Enter All sellerNotes" onChange={handleChange} autoComplete="off" value={product.sellerNotes} />
        <input required={true} type="text" name="sellerNotes_ar" placeholder="Enter All sellerNotes_ar" onChange={handleChange} autoComplete="off" value={product.sellerNotes_ar} />
        <input required={true} type="text" name="variants" placeholder="Enter All variants" onChange={handleChange} autoComplete="off" value={product.variants} />
        <input required={true} type="text" name="features" placeholder="Enter All features" onChange={handleChange} autoComplete="off" value={product.features} />
        <input required={true} type="text" name="features_ar" placeholder="Enter All features_ar" onChange={handleChange} autoComplete="off" value={product.features_ar} />    
        <input required={true} type="text" name="brandName" placeholder="Enter All brandName" onChange={handleChange} autoComplete="off" value={product.brandName} />
        <input required={true} type="text" name="brandName_ar" placeholder="Enter All brandName_ar" onChange={handleChange} autoComplete="off" value={product.brandName_ar} />
        <input required={true} type="text" name="categoryName" placeholder="Enter All categoryName" onChange={handleChange} autoComplete="off" value={product.categoryName} />
        <input required={true} type="text" name="categoryName_ar" placeholder="Enter All categoryName_ar" onChange={handleChange} autoComplete="off" value={product.categoryName_ar} />
        <input required={true} type="text" name="description" placeholder="Enter All description" onChange={handleChange} autoComplete="off" value={product.description} />
        <input required={true} type="text" name="description_ar" placeholder="Enter All description_ar" onChange={handleChange} autoComplete="off" value={product.description_ar} />
        <input required={true} type="text" name="averageRating" placeholder="Enter All averageRating" onChange={handleChange} autoComplete="off" value={product.averageRating} />
        <input required={true} type="text" name="discount" placeholder="Enter All discount" onChange={handleChange} autoComplete="off" value={product.discount} />
        <input required={true} type="text" name="eligibleForCoupons" placeholder="Enter All eligibleForCoupons" onChange={handleChange} autoComplete="off" value={product.eligibleForCoupons} />
        <input required={true} type="text" name="freeShipping" placeholder="Enter All freeShipping" onChange={handleChange} autoComplete="off" value={product.freeShipping} />
        <input required={true} type="text" name="mainImage" placeholder="Enter All mainImage" onChange={handleChange} autoComplete="off" value={product.mainImage} />
        <input required={true} type="text" name="shipping_ar" placeholder="Enter All shipping_ar" onChange={handleChange} autoComplete="off" value={product.shipping_ar} />
        <input required={true} type="text" name="tax" placeholder="Enter All tax" onChange={handleChange} autoComplete="off" value={product.tax} />
        <input required={true} type="text" name="name" placeholder="Enter All name" onChange={handleChange} autoComplete="off" value={product.name} />
        <input required={true} type="text" name="name_ar" placeholder="Enter All name_ar" onChange={handleChange} autoComplete="off" value={product.name_ar} />
        <input required={true} type="text" name="price" placeholder="Enter All price" onChange={handleChange} autoComplete="off" value={product.price} />
        <input required={true} type="text" name="condition" placeholder="Enter All condition" onChange={handleChange} autoComplete="off" value={product.condition} />
        <input required={true} type="text" name="condition_ar" placeholder="Enter All condition_ar" onChange={handleChange} autoComplete="off" value={product.condition_ar} />
        <input required={true} type="text" name="mainVariant" placeholder="Enter All mainVariant" onChange={handleChange} autoComplete="off" value={product.mainVariant} />

          {localStorage.getItem('userRole') === 'admin' ? <input type="submit" value="ADD" /> : null}
        </form>
      </div>
    </div>
  );
}
