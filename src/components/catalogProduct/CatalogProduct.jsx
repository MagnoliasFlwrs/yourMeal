import React from 'react'
import style from './catalogProduct.module.css'

export default function CatalogProduct({title}) {
  return (
    <article className={style.product}>
        <img src='../../assets/img/photo1.jpg' alt={title} className={style.product__image}/>

        <p className={style.product__price}>689<span className={style.currency}>₽</span></p>

        <h3 className={style.product__title}>
        <button className={style.product__detail}>Мясная бомба</button>
        </h3>

        <p className={style.product__weight}>520г</p>

        <button className={style.product__add} type="button">{title}</button>
    </article>
  )
}
