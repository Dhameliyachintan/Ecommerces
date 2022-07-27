import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import Cardpage from '../../container/Cardpage/Cardpage';

function ProductList({ shoppingData }) {

    return (

        shoppingData.map(i => (
            <ShoppingCard i={i} />
        )
        )
    )

}
const ShoppingCard = ({ i }) => {
    const [count, setCount] = useState(0)

    const incerementCounter = () => {
        if (count < 30) {
            setCount((count) => count + 1)
        }
    }


    const decrementCounter = () => {
        if (count > 0) {
            setCount((count) => count - 1)
        }
    }



    return (
        <div className='col-lg-3 col-md-6'>
            <Card>
                <Link exact to="/shope" style={{ textDecoration: 'none' }}>
                    <CardImg top width="100%" src={i.image} alt="Card image cap" style={{backgroundColor: "#f1f3f4"}}/>
                </Link>
                <CardBody>
                    <Link exact to="/shope" style={{ textDecoration: 'none' }}>
                        <CardTitle exact to="/shope"><p style={{ color: "#000", marginbottom: "30px" }}>{i.ProductName}</p></CardTitle>
                    </Link>
                    <CardSubtitle style={{ color: "#000" }}>{i.Price}</CardSubtitle>
                    <CardText style={{ color: "#000",marginTop:"10px" }}>{i.Total}</CardText>
                    <Button className="control__btn" onClick={incerementCounter}>+</Button>
                    {count}
                    <Button className="control__btn" onClick={decrementCounter}>-</Button>
                </CardBody>
            </Card>

            
         
        </div>
    )
}

export default ProductList;