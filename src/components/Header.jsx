import React from 'react';
import styles from '../assets/css/header.module.css'
import exit from '../assets/css/exitIcon.svg'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__menu}>
      <div className={styles.header__container}>
        <div className={styles.header__search}>
    <input className={styles.header__input} type="text" placeholder="Поиск"/>
    <button className={styles.header__btn}>
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3952 12.9761C16.852 9.8209 16.63 5.25612 13.7295 2.3556C10.5887 -0.785201 5.49642 -0.785201 2.35561 2.3556C-0.785204 5.49642 -0.785204 10.5887 2.35561 13.7295C5.25614 16.63 9.82096 16.8519 12.9762 14.3952C12.9897 14.4106 13.0039 14.4257 13.0186 14.4403L17.2838 18.7055C17.6764 19.0982 18.313 19.0982 18.7056 18.7055C19.0981 18.3129 19.0981 17.6764 18.7056 17.2838L14.4404 13.0186C14.4256 13.0039 14.4105 12.9898 14.3952 12.9761ZM12.2426 3.75737C14.5858 6.10051 14.5858 9.89947 12.2426 12.2427C9.8995 14.5858 6.1005 14.5858 3.75736 12.2427C1.41421 9.89947 1.41421 6.10051 3.75736 3.75737C6.1005 1.41421 9.8995 1.41421 12.2426 3.75737Z" fill="#8F92A1"/>
        </svg>
    </button>
      </div>
      </div>
      <div className={styles.header__exit}>
          <Link to="/LoginPage" className={styles.header__exitCont}>
              <p className={styles.header__exitTitle}>Выйти</p> 
              <img className={styles.header__exitIcon} src={exit} alt="" />
          </Link>
      </div>
      </div>
    </header>
  )
}

export default Header