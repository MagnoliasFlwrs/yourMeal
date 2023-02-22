import React from 'react'
import CatalogProduct from '../catalogProduct/CatalogProduct';
import Container from '../container/Сontainer'
import Order from '../Order/Order'
import style from './catalog.module.css'


const goodsList = [
  { title: 'Мясная бомба' },
  { title: 'Супер сырный' },
  { title: 'Сытный' },
  { title: 'Итальянский' },
  { title: 'Вечная классика' },
  { title: 'Тяжелый удар' },
];

export default function Catalog() {
  return (
    <section className={style.catalog}>
      <Container className={style.catalog__container}>
        <Order/>

        <div className={style.catalog__wrapper}>
          <h2 className={style.catalog__title}>Бургеры</h2>
          <div className={style.catalog__wrap_list}>
            <ul className={style.catalog__list}>
            {goodsList.map((item ,i) => (
              <li key={i} className={style.catalog__item}>
              <CatalogProduct title={item.title}/>
              </li>
            )
             )}

            </ul>
          </div>
        </div>

      </Container>
    </section>
  )
}
