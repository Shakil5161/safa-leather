import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import Header from '../Header/Header';

const Orders = () => {
    const pdId = useParams()
    const id = pdId.productId
    console.log(id)
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5055/orders/${id}`)
        .then(res => res.json())
        .then(data => setOrder(data[0]))
    },[])
    return (
        <div className="container">
            <Header></Header>
            <h1>Checkout</h1>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{order.name}</td>
                        <td>1</td>
                        <td>{order.price}</td>
                    </tr>
                    <tr>
                        <td>total</td>
                        <td></td>
                        <td>{order.price}</td>
                        
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Orders;