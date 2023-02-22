import React from 'react'
import OrderGoods from '../orderGoods/OrderGoods'
import './order.css'

const orderList = ['картощка','burger']
export default function Order() {
  return (
    <div className="catalog__order order">
          <section className="order__wrapper">
            <div className="order__header" tabindex="0" role="button">
              <h2 className="order__title">Корзина</h2>

              <span className="order__count">4</span>
            </div>

            <div className="order__wrap_list">
              <ul className="order__list">
                {orderList.map((item, i) => (
                  <OrderGoods key={i} item={item}/>
                ))}

              </ul>

              <div className="order__total">
                <p>Итого</p>
                <p>
                  <span className="order__amount">1279</span>
                  <span className="currency">₽</span>
                </p>
              </div>

              <button className="order__submit">Оформить заказ</button>

              <div className="order__apeal">
                <p className="order__text">Бесплатная доставка</p>
                <button className="order__close">Свернуть</button>
              </div>
            </div>
          </section>
        </div>
  )
}
