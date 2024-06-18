import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/css/logo1.svg";
import styles from "../assets/css/login.module.css";

function RecoverLogin() {

  useEffect(() => {
    document.body.style.backgroundColor = '#0052CC0D';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div className={styles.loginCont}>
      <img className={styles.loginCont__logo} src={logo} alt="logo" />
      <form className={`${styles.loginCont__form} ${styles.recoverForm}`} onSubmit="">
        <h2 className={styles.loginCont__title}>Восстановление</h2>
        <p className={styles.loginCont__description}>Мы отправим на почту новый пароль</p>
        <input className={`${styles.loginCont__emailInput} ${styles.recoverEmail} ${styles.input}`} type="email" name="email" placeholder="Email" />
        <Link to="/SuccessfulRequest">
        <button className={`${styles.loginCont__btn} ${styles.recoverBtn}`} type="submit">Отправить</button>
        </Link>
        <p className={styles.loginCont__forgot}>У вас есть аккаунт? <a className={styles.loginCont__restore} href="#">Войти</a></p>
      </form>
    </div>
  );
}

export default RecoverLogin