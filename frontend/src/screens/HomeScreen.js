import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { useParams } from 'react-router-dom'

const HomeScreen = () => {
    const  {keyword } = useParams();
  
   const dispatch = useDispatch()
   const productList =useSelector(state => state.productList)
   const { loading, error, products } = productList
  
    useEffect(() => {
      dispatch(listProducts(keyword))
    }, [dispatch, keyword])
  
    return (
        <>
      <Meta />  
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}

         <h1> Latest Products </h1>   
         {loading ? (
        <Loader/>
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
      )}
         
        </>
    )
}
export default HomeScreen