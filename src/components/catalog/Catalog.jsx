import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CatalogProduct from '../catalogProduct/CatalogProduct';
import Container from '../container/Сontainer'
import Order from '../Order/Order'
import style from './catalog.module.css'
import {productReqAsync} from '../../store/product/productSlice'




export default function Catalog() {
  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch();
  const {category,activeCategory} = useSelector(state => state.category)
  useEffect(() => {
    if (category.length) {
      dispatch(productReqAsync(category[activeCategory].title))
    }
  }, [category,activeCategory])

  return (
    <section className={style.catalog}>
      <Container className={style.catalog__container}>
        <Order/>

        <div className={style.catalog__wrapper}>
          <h2 className={style.catalog__title}>{category[activeCategory]?.rus}</h2>
          <div className={style.catalog__wrap_list}>
            <ul className={style.catalog__list}>
            {products.length ? products.map((item) => (
              <li key={item.id} className={style.catalog__item}>
              <CatalogProduct item={item}/>
              </li>
            )
             ) : <h1>К сожалению товаров данной категории нет</h1>}

            </ul>
          </div>
        </div>

      </Container>
    </section>
  )
}
