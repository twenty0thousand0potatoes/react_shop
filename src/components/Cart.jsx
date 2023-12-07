import React, { useState, useEffect } from 'react';
import './cart.css'
import classNames from 'classnames';
import OrderPopsitions from './OrderPopsitions';

export default function Cart(props) {

  const [kol, setKol] = useState(0);
  const [visible, setVisible] = useState(false);
  const [cartArray, setCartArray] = useState([]);
 
  function Clear(value) {
    props.setStateCart(value)
    setKol(0);
  }

  function funOpenCart() {
    setVisible(!visible)
  }

  function funDelProduct(e) {
    let copyData = [];
    let i = 0;
    cartArray.map((item, index) => {
      if (index !== Number(e.target.id.substring(1, 2))) {
        copyData[i] = item;
        i++;
      }
    });
    setCartArray(copyData);
    setKol(copyData.length)
    props.setStateCart(copyData);
  }



  useEffect(() => {
    setKol(props.cartObj.length);
    props.cartObj.map(item => {
      item.description = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. distinctio ut earum officiis?'
    });
    setCartArray(props.cartObj);
  
  }, [props.cartObj])

  function funYetPropduct(e) {
    let copyData = cartArray.concat();
    copyData[Number(e.target.id.substring(1, 2))].kol = copyData[Number(e.target.id.substring(1, 2))].kol + 1;
    copyData[Number(e.target.id.substring(1, 2))].price = (copyData[Number(e.target.id.substring(1, 2))].defaultPrice * Number(copyData[Number(e.target.id.substring(1, 2))].kol)).toFixed(2);
    setCartArray(copyData);
  }

  function textParagraf() {
    if (kol === 0) {
      return (
        <h2 style={{ margin: '10px' }}>Ваш список заказавов пуст!</h2>
      )
    }
  }

  return (
    <div>
      <div className='cartWrapper' onClick={funOpenCart} >
        <div className='number'>
          <p className='kol'>{kol}</p>
        </div>
      </div>
      <div className={classNames('cartBlock', { 'visible': visible })}>
        {textParagraf()}
        <div className='slantBlock'>

          <div className='wrapperProductCardsCart'>
            {
              cartArray.map((item, index) => {
                return (
                  <div className='cardCart' key={index + item.nameProduct}>
                    <div className='headerCardCart'>
                      <div className='imgCart'>
                        <img src={item.imageURL} className='imageCart' />
                      </div>
                      <div className='textCart'>
                        <h3>{item.nameProduct}</h3>
                        <p><span>Description:</span>{item.description}</p>
                      </div>
                    </div>
                    <div className='bodyCart'>
                      <div className='priceCart'>
                        <p> Total price : {item.price}</p>
                        <p>How many pos.:{item.kol} </p>
                      </div>
                      <div className='buttonsCart'>
                        <button type='button' className='deletCartProduct' onClick={funDelProduct} id={'D' + index}>DELETE</button>
                        <button type='buttin' className='moreCartProduct' onClick={funYetPropduct} id={'Y' + index}>YET</button>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>


          <OrderPopsitions kol={kol} info={cartArray} funClear={Clear} />

          <div className='decorBurger decor '>
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/6866/6866518.png' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/1375/1375210.png' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/189/189143.png' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/2674/2674065.png' className='decorImg' />
          </div>

          <div className='decorPizza decor '>
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/189/189143.png' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/2674/2674065.png' className='decorImg' />
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/2674/2674065.png' className='decorImg' />
          </div>

          <div className='decorCake decor'>
            <img src='https://cdn-icons-png.flaticon.com/512/1375/1375210.png' className='decorImg' />
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/189/189143.png' className='decorImg' />
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
          </div>

          <div className='decorDonut decor '>
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/189/189143.png' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/2674/2674065.png ' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/6866/6866518.png' className='decorImg' />
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
          </div>

          <div className='decorPizza decor '>
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/1375/1375210.png' className='decorImg' />
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/2674/2674065.png' className='decorImg' />
          </div>

          <div className='decorPizza decor '>
            <img src='https://cdn-icons-png.flaticon.com/512/189/189143.png' className='decorImg' />
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/1375/1375210.png' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/6866/6866518.png' className='decorImg' />
            <img src='https://cdn-icons-png.flaticon.com/512/2674/2674065.png' className='decorImg' />
          </div>


          <div className='decorPizza decor '>
            <img src='https://cdn-icons.flaticon.com/png/512/782/premium/782963.png?token=exp=1656414558~hmac=2d107a78678237d19edea80527b88290' className='decorImg' />
          </div>

        </div>

      </div>

    </div>
  );
}
