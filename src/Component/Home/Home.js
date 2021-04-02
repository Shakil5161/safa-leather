import React from 'react';
import { Spinner } from 'react-bootstrap';
import AllProduct from '../AllProduct/AllProduct';
import Header from '../Header/Header';

const Home = (props) => {
    const product = props.product
    console.log(product.length)
    return (
        <div className='container '>
            <Header></Header>
            {
                product.length > 0 ?
                    < div className='row d-flex justify-content-center align-items-center'>
                        {
                            product?.map(pd => <AllProduct product={pd}></AllProduct>)
                        }
                    </div> : <div className="text-center">
                        <Spinner animation="border" role="status">
                            <span style={{ TextAlign: 'center' }} className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
            }

        </div >
    );
};



export default Home;