import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllProduct = (props) => {
    const { name, price, image, _id} = props.product
    
    return (
        <div >
            <div className='p-3'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <div className="d-flex justify-content-between">
                            <h3>${price}</h3>
                            <Link to={`/orders/${_id}`}><Button className="btn" variant="primary">Buy Now</Button></Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default AllProduct;