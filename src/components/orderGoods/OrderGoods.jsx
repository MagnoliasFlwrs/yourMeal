import React from 'react'
import Count from '../count/Count'
import style from './orderGoods.module.css'
import classNames from 'classnames'
import { API_URI } from '../../const'

export default function OrderGoods({item , i }) {
  return (
    <li key={i} className={style.order__item}>
        <img className={style.order__image} src={`${API_URI}/${item.image}`} alt={item.title}/>

        <div className={classNames(style.order__goods, style.goods)}>
        <h3 className={style.goods__title}>{item.title}</h3>

        <p className={style.goods__weight}>{item.weight}</p>

        <p className={style.goods__price}>{item.price}
            <span className={style.currency}>&nbsp;₽</span>
        </p>
        </div>
        <Count count={item.count} id={item.id}/>
    </li>
  )
}
