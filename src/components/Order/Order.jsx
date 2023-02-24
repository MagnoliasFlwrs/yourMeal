import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../../store/modalDelivery/modalDeliverySlice';
import { orderAsyncReq } from '../../store/order/orderSlice';
import OrderGoods from '../orderGoods/OrderGoods'
import './order.css'



export default function Order() {
  const dispatch = useDispatch();
  const { totalCount , totalPrice , orderList , orderGoods} = useSelector(state => state.order)
  useEffect(()=> {
    dispatch(orderAsyncReq())
  },[orderList.length])


  return (
    <div className="catalog__order order">
          <section className="order__wrapper">
            <div className="order__header" tabindex="0" role="button">
              <h2 className="order__title">Корзина</h2>

              <span className="order__count">{totalCount}</span>
            </div>

            <div className="order__wrap_list">
              <ul className="order__list">
                {orderGoods.map((item) => (
                  <OrderGoods key={item.id} item={item}/>
                ))}

              </ul>

              <div className="order__total">
                <p>Итого</p>
                <p>
                  <span className="order__amount">{totalPrice} </span>
                  <span className="currency">&nbsp;₽</span>
                </p>
              </div>

              <button className="order__submit"
              onClick={
                ()=> {
                  dispatch(openModal())
                }
              }
              disabled={orderGoods.length === 0}>Оформить заказ</button>

              <div className="order__apeal">
                <p className="order__text">Бесплатная доставка</p>
                <button className="order__close">Свернуть</button>
              </div>
            </div>
          </section>
        </div>
  )
}
