import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './product.css';
import PizzaComponentMain from './PizzaComponentMain';
import * as additionalFunction from '../additionalFunction.js'


export default function Product(props) {


    const defaultArraysProdusts = additionalFunction.getProducts();


    useEffect(() => {
        if (props.scrollBlockId !== null) {
            document.getElementById(props.scrollBlockId).scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [props.scrollBlockId]);

    function getNumbersElement(arrayN, elemN) {
        let obj = {
            nameProduct: defaultArraysProdusts[arrayN][elemN].nameProduct,
            price: defaultArraysProdusts[arrayN][elemN].price,
            imageURL: defaultArraysProdusts[arrayN][elemN].urlPicture,
            id: defaultArraysProdusts[arrayN][elemN].id,
            kol: defaultArraysProdusts[arrayN][elemN].kol,
            defaultPrice: defaultArraysProdusts[arrayN][elemN].price
        };
        props.setState(obj);
    }


    return (
        <div className='marginWrapper'>
            {defaultArraysProdusts.map((item, index) => {
                return (
                    <PizzaComponentMain info={item} number={index} key={index} getKeysElem={getNumbersElement} />
                )
            })}
        </div>

    );

}

Product.defaultProps = {
    scrollBlockId: null,
}