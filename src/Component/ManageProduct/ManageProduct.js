import React from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = (props) => {
    const { name, price, wight, _id } = props.product;

    const deleteHandler = (event, id) => {
        const element = event.target.parentNode.parentNode
        console.log('delete', event.target.parentNode.parentNode)
        fetch(`https://limitless-taiga-08861.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                result && element.removeChild()
            })
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{wight}</td>
            <td>{price}</td>
            <td>
             <Link to="/"> <i onClick={(event) => deleteHandler(event, _id)} style={{ cursor: 'pointer' }} class="fas fa-trash"></i></Link>  
            </td>
        </tr>

    );
};

export default ManageProduct;