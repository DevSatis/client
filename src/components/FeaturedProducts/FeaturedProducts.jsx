import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';
const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img:"https://images.unsplash.com/photo-1578632292335-df3abbb0d586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            img2:"https://images.unsplash.com/photo-1586078130702-d208859b6223?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price:12,
        },
        {
            id: 2,
            img:"https://images.unsplash.com/photo-1578979879663-4ba6a968a50a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"Jacket",
            isNew:true,
            oldPrice: 19,
            price:12,
        },
        {
            id: 3,
            img:"https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"Shoes and Trouser",
            isNew:false,
            oldPrice: 19,
            price:12,
        },
        {
            id: 4,
            img:"https://images.unsplash.com/photo-1490092374320-1ca36d69ff6a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
            title:"skirt",
            isNew:false,
            oldPrice: 19,
            price:12,
        },
    ]




  return (
    <div className='featuredProducts'>
        <div className='top'>
            <h1>{type} Products</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
        </div>
        <div className='bottom'>
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts