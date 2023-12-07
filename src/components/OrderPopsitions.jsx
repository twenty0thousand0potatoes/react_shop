import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import '../components/orderPositions.css'
import { Link } from 'react-router-dom';

export default function OrderPopsitions(props) {

    const [total, setTotal] = useState({
        price: 0,
        position: 0
    })

    function visib(param) {
        if (param !== 0)
            return true
        else
            return false
    }

    useEffect(() => {
        let priceTotal = 0, positionTotal = 0;
        props.info.map(item => {
            priceTotal += Number(item.price);
            positionTotal += Number(item.kol);
        });
        setTotal({
            price: priceTotal.toFixed(2),
            position: positionTotal
        })
    }, [props.info])

    function funBuy() {
        const arr = [];
        props.funClear(arr);
        alert('Your order has been successfully accepted!')
    }


    return (
        <div className={classNames('orientation', { 'visib': visib(props.kol) })}>
            <div style={{ minWidth: '200px' }}>
                <div className='total'>
                    <h3>Total:{total.price}</h3>
                </div>
                <div className='positions'>
                    <h3> Total Positions: {total.position}</h3>
                </div>
            </div>
            <div className='orderButton'>
                <Link to='enterInfo'>
                    <button type='button' onClick={funBuy}>BUY</button>
                </Link>
            </div>
        </div>
    );
}
