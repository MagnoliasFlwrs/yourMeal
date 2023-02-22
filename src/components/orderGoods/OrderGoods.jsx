import React from 'react'
import Count from '../count/Count'
import style from './orderGoods.module.css'
import classNames from 'classnames'

export default function OrderGoods({item ,i }) {
  return (
    <li key={i} className={style.order__item}>
        <img className={style.order__image} src="../../assets/img/burger_1.jpg" alt={item}/>

        <div className={classNames(style.order__goods, style.goods)}>
        <h3 className={style.goods__title}>{item}</h3>

        <p className={style.goods__weight}>512г</p>

        <p className={style.goods__price}>1279
            <span className={style.currency}>₽</span>
        </p>
        </div>
        <Count count={1}/>
    </li>
  )
}
