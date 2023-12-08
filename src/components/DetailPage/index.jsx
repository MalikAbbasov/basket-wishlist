import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./detail.scss"
import Navbar from '../Navbar'
function DetailPage() {
    const { id } = useParams()
    const [detail, setDetail] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setDetail(data)
            })
    }, [])


    return (
        <div className="container">
            <Navbar></Navbar>
            <div className='card'>
                <div className="prhoto"><img src={detail.image} alt="" /></div>
                <h1>Category: <div>{detail.category}</div></h1>
                <p>Price: <div>{detail.price}$</div></p>
                <h3>Description<div className='desc'>{detail.description}</div></h3>
            </div>
        </div>
    )
}

export default DetailPage