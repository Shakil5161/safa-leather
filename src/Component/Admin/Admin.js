import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';
const Admin = (props) => {
    const product = props.product
    console.log(product)
    return (
        <div>
            <div className="d-flex" id="wrapper">

                <div className="bg-light border-right" id="sidebar-wrapper">
                    <div className="sidebar-heading">Safa Leather </div>
                    <div className="list-group list-group-flush">
                        <Link to="/home" className="menu admin-menu list-group-item list-group-item-action bg-light">Home</Link>
                        <Link to="/admin/manage" className="menu admin-menu list-group-item list-group-item-action bg-light">Manage Product</Link>
                        <Link to="/admin/add" className="menu admin-menu list-group-item list-group-item-action bg-light">Add Product</Link>
                    </div>
                </div>

                <div id="page-content-wrapper">
                    <div className="container-fluid">
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