import React from 'react';

const ManageProduct = (props) => {
    const { name, price, wight, _id } = props.product;

    const deleteHandler = (event, id) => {
        const element = event.target.parentNode.parentNode
        console.log('delete', event.target.parentNode.parentNode)
        fetch(`http://localhost:5055/delete/${id}`, {
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
                <i className="fas fa-edit"></i>
                <i onClick={(event) => deleteHandler(event, _id)} style={{ cursor: 'pointer' }} class="fas fa-trash"></i>
            </td>
        </tr>

    );
};

export default ManageProduct;