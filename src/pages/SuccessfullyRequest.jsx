import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import logo from "../assets/css/logo1.svg";
import styles from "../assets/css/login.module.css";

function SuccessfulRequest() {

  useEffect(() => {
    document.body.style.backgroundColor = '#0052CC0D';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div className={styles.loginCont}>
    <img className={styles.loginCont__logo} src={logo} alt="logo" />
    <form className={`${styles.loginCont__form} ${styles.successfulForm}`} onSubmit="">
      <h2 className={styles.loginCont__title}>Запрос успешно принят</h2>
      <p className={`${styles.loginCont__description} ${styles.requestDescription}`}>На почту ol****.sm@gmail.com, указанную при</p>
      <p className={`${styles.loginCont__description} ${styles.requestDescription}`}>регистрации, сейчас придёт письмо.</p>
      <Link to="/LoginPage">
      <button className={`${styles.loginCont__btn} ${styles.mailBtn}`} type="submit">Перейти на почту</button>
      </Link>
      <p className={styles.loginCont__forgot}>У вас есть аккаунт? <a className={styles.loginCont__restore} href="#">Войти</a></p>
    </form>
  </div>
  )
}

export default SuccessfulRequest