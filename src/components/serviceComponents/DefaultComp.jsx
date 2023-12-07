import React, { useState, useEffect } from 'react';

export default function DefaultComp({ orderInfo, kol }) {

  const [ordersArray, setOrdersArray] = useState([]);

  useEffect(() => {
      setOrdersArray(orderInfo)
  }, [orderInfo])

  return (
    <div>
      <h2>Количество заказов:{kol}</h2>
    </div>
  );
}
