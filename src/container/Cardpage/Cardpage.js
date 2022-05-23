import React from 'react';
import ProductList from '../../component/Card/Card';
import ShortsImg from "../../assets/images/shorts.png"
import ShoesImg from "../../assets/images/adidas.png"
import WatchImg from "../../assets/images/Smartwatch.png"
import SonyImg from "../../assets/images/bluetooth-speaker.png"

const Cardpage = () => {
    const shoppingData = [
        {
            ProductName: "JacketHoodie",
            Price: "$18",
            quantity: 10,
            Total: "$18",
            image: ShortsImg ,
        },
        {
            ProductName: "SportsShoes",
            Price: "$20",
            quantity: 20,
            Total: "$52",
            image: ShoesImg
        },
        {
            ProductName: "SmartWatch",
            Price:"$30",
            quantity: 40,
            Total: "$18",
            image:WatchImg
        },
        {
            ProductName: "BluetoothSpeaker",
            Price: "$50",
            quantity: 30,
            Total: "$18",
            image:SonyImg
        }
    ]
    return (
        <section className='cards pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                <ProductList shoppingData={shoppingData} />
                    </div>
                </div>
        </section>
    );
}

export default Cardpage;