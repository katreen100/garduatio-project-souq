import React, { useState } from 'react';
import { useFireStoreProducts } from '../../network/apis/productAPI'
import './brand.css'
import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const initialValue = {
  allVariations: {},
  color: '',
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
          <label> All Variations English </label>
          {Products.map((product) => {
            return Object.entries(product.allVariations).map(([keyAllVariation, valueAllVariation]) => {
              return (
                <select key={keyAllVariation.toString()} required={true} name="color" onChange={handleChange} value={product.color}>
                  <option key={keyAllVariation} value='DEFAULT' disabled> {keyAllVariation}</option>
                  {
                    valueAllVariation.map((col) => <option key={col.toString()}>{col}</option>)
                  }
                </select>
              )
            })
          })}


          {localStorage.getItem('userRole') === 'admin' ? <input type="submit" value="ADD" /> : null}
        </form>
      </div>
    </div>
  );
}
