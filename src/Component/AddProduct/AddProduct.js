import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Button, Form } from 'react-bootstrap';
import { useContext } from 'react';
import { UserContext } from '../../App';
const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const[upload, setUpload] = useState(false);
    const [imgUrl, setImgUrl] = useState(null)
    const [loggedInUser, setLoggedInUSer] = useContext(UserContext) 
    console.log(loggedInUser)
    const onSubmit = data => {
        const{name, wight, price} = data;
        const uploadProduct = {
            name: name,
            wight: wight,
            price: price,
            image: imgUrl,
        }
        fetch('https://limitless-taiga-08861.herokuapp.com/addProduct',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(uploadProduct)
        })
        .then(res => res.json())
        .then(data => setUpload(data))
    };
console.log(upload)
    const handleImgUpload = event => {
        console.log(event.target.files[0])
        const imgData = new FormData()
        imgData.set('key', 'f8e17ecc4ca4e6aaafc7343e9c812a5a')
        imgData.append('image', event.target.files[0])

        // fetch('https://api.imgbb.com/1/upload',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(imgData)
        // })
        // .then(res => res.json())
        // .then(data =>console.log(data))

        axios.post('https://api.imgbb.com/1/upload',
            imgData)
            .then(res => {
                // console.log(res)
                setImgUrl(res.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            });

    }
    return (
        <div className="d-flex" id="wrapper">
            {
                upload && alert('Upload product successfully')
            }
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
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>
                        
                        <label htmlFor="Product Name">Product Name</label>
                        <input className="form-control" name="name" placeholder="Enter Product Name" required ref={register} />
                        <label htmlFor="Product Wight">Wight</label>
                        <input className="form-control" name="wight" placeholder="Enter Product Wight" ref={register} />
                        <label htmlFor="Product Price">Price</label>
                        <input className="form-control" name="price" placeholder="Enter Product Price" ref={register} />

                        <input type="file" name="img" onChange={handleImgUpload} />
                        <br />
                        <br />
                        {/* <Link to="/"><input type="submit" /></Link> */}
                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;