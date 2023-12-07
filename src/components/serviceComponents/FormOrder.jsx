import React, { useState, useEffect } from 'react';
import './formOrder.css'
import { Link } from 'react-router-dom';
export default function FormOrder(props) {

    const [orders, setOrders] = useState([]);

    const funAdd = () => {
        let payWayBtn = Array.from(document.getElementsByClassName('radioPay'));
        let clickBtn;
        payWayBtn.forEach(elem => {
            if (elem.checked) {
                clickBtn = elem.value;
            }
        })
        let obj = {
            id: orders.length,
            name: document.getElementById('nameOrder').value,
            surname: document.getElementById('surnameOrder').value,
            payWay: clickBtn,
            city: document.getElementById('cityOrder').value,
            street: document.getElementById('streetOrder').value,
            house: document.getElementById('houseOrder').value,
            flat: document.getElementById('flatOrder').value
        }
                setOrders([...orders, obj]);
    }


useEffect(()=>{
    if(orders.length>0){
        props.setOrders(orders)
    }
})
    return (
        <div className='wrapperForm'>
            <div className='contentForm'>
                <form className='formBlock'>
                    <h2>Form Making delivery</h2>
                    <section>
                        <label>Enter your name:</label>
                        <input type='text' className='areas' id='nameOrder' />
                    </section>
                    <section>
                        <label>Enter your surname:</label>
                        <input type='text' className='areas' id='surnameOrder' />
                    </section>
                    <section >
                        <h3>Choose a payment method:</h3>
                        <section className='payWay'>
                            <section >
                                <label>Cash</label>
                                <input type="radio" name='pay' className='radioPay' value='cash' />
                            </section>
                            <section>
                                <label>Credit card</label>
                                <input type="radio" name='pay' className='radioPay' value='credit card' />
                            </section>
                        </section>
                    </section>
                    <section>
                        <h3>Enter delivery address</h3>
                        <section className='City'>
                            <label>City</label>
                            <input type='text' className='areas' id='cityOrder' />
                        </section>
                        <section className='street'>
                            <label>Street</label>
                            <input type='text' className='areas' id='streetOrder' />
                        </section>
                        <section className='house'>
                            <label>House</label>
                            <input type='text' className='areas' id='houseOrder' />
                        </section>
                        <section className='flat'>
                            <label>Flat</label>
                            <input type='text' className='areas' id='flatOrder' />
                        </section>
                    </section>
                    <section className='submit'>
                        <Link to='/'>
                            <button type='button' onClick={funAdd}>enter</button>
                        </Link>
                    </section>
                </form>
            </div>
        </div>
    );
}
