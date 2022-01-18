import React from 'react'
import { NewsData } from '../assets/data'
import "../Styles/Cards.css"
import ImageCarousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];

function Item({ data }) {
    return (
        <div className='Card' onClick={() => console.log(data.category)}>
            <div className='ImageCon'>
                <img className='Image_Class' src={data.urlToImage} alt='News_Image' />
            </div>
            <div className='Title'>
                <p>{data.title}</p>
            </div>
        </div>
    )
}

function CardView() {
    return (

        <ImageCarousel breakPoints={breakPoints}>
            {
                NewsData.map((data, index) => (
                    <Item data={data} key={index} />
                ))
            }
        </ImageCarousel>

    )
}

export default CardView
