import React, { useState } from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';
const Admin = (props) => {
    const product = props.product
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext)
    return (
        <div>
            <div className="d-flex" id="wrapper">

                <div className="bg-light border-right" id="sidebar-wrapper">
                <div className="sidebar-heading text-center"><img src={loggedInUser.photo} style={{borderRadius: '50%'}} alt="" srcset=""/> <h3>{loggedInUser.name}</h3></div>
                    <div className="list-group list-group-flush">
                        <Link to="/home" className="menu admin-menu list-group-item list-group-item-action bg-light">Home</Link>
                        <Link to="/admin/manage" className="menu admin-menu list-group-item list-group-item-action bg-light">Manage Product</Link>
                        <Link to="/admin/add" className="menu admin-menu list-group-item list-group-item-action bg-light">Add Product</Link>
                    </div>
                </div>

                <div id="page-content-wrapper">
                    <div className="container mt-5">
                        <h1>Admin</h1>
                        <Table responsive="sm">
                            <thead>
                                <tr>
                                    <th>Product Name</th>
                                    <th>Wight</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    product.map(pd => <ManageProduct product={pd}></ManageProduct>)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Admin;