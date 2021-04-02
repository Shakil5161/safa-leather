
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Orders = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext)
    const pdId = useParams()
    const id = pdId.productId
    console.log(id)
    const [order, setOrder] = useState({})
    useEffect(() => {
        fetch(`https://limitless-taiga-08861.herokuapp.com/orders/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data[0]))
    }, [])
    const handleCheckout = () => {
        const orderBy = {...loggedInUser, ...order , date:new Date()}
        console.log(orderBy)
        fetch(`https://limitless-taiga-08861.herokuapp.com/orderBy`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(orderBy)
        })
        .then(res => res.json())
        .then(data => { console.log(data)
            if (data){
                alert('Your order has been successfully added')
            }
        })
    }
    return (
        <div className="container">
            <Header></Header>

            <div>
            <h1>Checkout</h1>
            <Table style={{ backgroundColor: '#F1F1F1', borderRadius: "5px" }} responsive="sm">
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
                        <td>{order.price}$</td>
                    </tr>
                    <tr>
                        <td>total</td>
                        <td></td>
                        <td>{order.price}$</td>
                    </tr>
                </tbody>

            </Table>
            <div className="text-right">
                <Link to="/myOrders" className="menu p-3"><Button onClick={handleCheckout} variant="outline-success">Checkout</Button></Link>
            </div>
            </div>
        </div>
    );
};

export default Orders;