import React from 'react';
import style from './Container.module.css';
import classNames from 'classnames'

export default function Container({className ,children}) {
  return (
    <div className={classNames(style.container , className)}>
      {children}
    </div>
  )
}
