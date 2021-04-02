import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const MyOrder = () => {
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext)
    const [order, setOrder] = useState([])
    const email = loggedInUser.email
    useEffect(() => {
        fetch(`https://limitless-taiga-08861.herokuapp.com/userOrder/${email}`)
        .then(res=>res.json())
        .then(data => setOrder(data))
    },[])

    return (
        <div className="container">
            <Header></Header>
            <h3 className="text-center m-5">You Order list</h3>
            <Table responsive="sm">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Order Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(pd => <tr>
                            <td><img style={{height: '50px'}} src={pd.image} alt="" srcset=""/></td>
                            <td>{pd.name}</td>
                            <td>{pd.price}$</td>
                            <td>{pd.date}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrder;