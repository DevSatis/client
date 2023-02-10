import React from 'react';
import Card from '../Card/Card';
import "./List.scss";

const List = () => {


    const data = [
        {
            id:1,
            img:"https://images.unsplash.com/photo-1463674349210-38e4fa154dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            img2:"https://images.unsplash.com/photo-1586343492988-abca12a01e26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"Sweet shirts",
            isNew:true,
            oldPrice:"23",
            price:"15",
        },
        {
            id:2,
            img:"https://images.unsplash.com/photo-1562572159-4efc207f5aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
            img2:"https://images.unsplash.com/photo-1545911825-6bfa5b0c34a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"Skrit",
            isNew:true,
            oldPrice:"23",
            price:"15",
        },
        {
            id:3,
            img:"https://images.unsplash.com/photo-1572009283538-2fce2d2a1909?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"Frock",
            isNew:false,
            oldPrice:"23",
            price:"15",
        },
        {
            id:4,
            img:"https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
            title:"Coat",
            isNew:false,
            oldPrice:"23",
            price:"15",
        },
    ]

  return (
    <div className='list'>
        {
            data?.map((item)=>(
                <Card item = {item} key={item.id} />
            ))
        }
    </div>
  )
}

export default List