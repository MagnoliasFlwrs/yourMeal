import React from 'react'
import { API_URI } from '../../const'
import style from './catalogProduct.module.css'
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/order/orderSlice';

export default function CatalogProduct({item}) {
  const dispatch = useDispatch();

  const productOrder = () => {
    dispatch(addProduct({id : item.id}))
  }
  return (
    <article className={style.product}>
        <img src={`${API_URI}/${item.image}`} alt={item.title} className={style.product__image}/>

        <p className={style.product__price}>{item.price}<span className={style.currency}>&nbsp;₽</span></p>

        <h3 className={style.product__title}>
        <button className={style.product__detail}>{item.title}</button>
        </h3>

        <p className={style.product__weight}>{item.weight}</p>

        <button className={style.product__add} type="button" onClick={productOrder}>Добавить</button>
    </article>
  )
}
