import React, { useState } from 'react';
import './pizzaComponentMain.css'
import SortProductComp from './SortProductComp';

export default function PizzaComponentMain(props) {

    const funAddCart = (e) => {
        props.getKeysElem(Number(e.target.id.substring(5, 6)), Number(e.target.id.substring(13, 14)));

    }

    const [defaultArray, setDefaultArray] = useState(props.info);

    const funSort = (value) => {
        const CopyDate = defaultArray.concat();
        let sortData;
        if (value === 'cheaper') {
            

            sortData = CopyDate.sort((a, b) => {
                return a['price'] > b['price'] ? 1 : -1;
            });
        }

        if (value === 'expensive') {
            sortData = CopyDate.reverse((a, b) => {
                return a['price'] > b['price'] ? 1 : -1;
            });
        }
        setDefaultArray(sortData)


    }

    return (
        <div className='wrapperPizzaProduct' key={props.number} id={props.info[0].sectionName}>
            <div className='containerProduct'>
                <div className='headerPizza'>
                    <h2>{props.info[0].sectionName}</h2>
                    <SortProductComp index={props.number} sortFunClick={funSort} />
                </div>
                <div className='productsMenu'>
                    {defaultArray.map((item, index) => {
                        return (
                            <div className='cardsMenu' key={index}>
                                <div className='wrapperColum'>
                                    <div className='logoProduct'>
                                        <img src={item.urlPicture} className='imgLogoProduct' />
                                    </div>
                                    <h2 className='nameProduct'>{item.nameProduct}</h2>
                                </div>
                                <div>
                                    <div className='description'>
                                        <h4>Description</h4>
                                        <p>{item.description}</p>
                                        <div className='productRating'>
                                            <div className='starRating'></div>
                                            <h3>{item.rating}</h3>
                                        </div>
                                        <div className='priceBlockAddCart'>
                                            <p>&#36; {item.price}</p>
                                            <div className='addCartBtn'>
                                                <button id={'array' + item.numberArray + 'element' + item.numberElem} type='button' onClick={funAddCart}>ADD</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
            </div>
        </div>
    );
}
