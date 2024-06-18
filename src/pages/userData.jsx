import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import deleteStyles from "../assets/css/delete.module.css"
import closeIcon from "../assets/css/close.svg"
import userDataStyles from '../assets/css/userData.module.css'
import smileImage from '../assets/css/smileImage.svg'

function UserData() {

    useEffect(() => {
        document.body.style.backgroundColor = '#17171799';
    
        return () => {
          document.body.style.backgroundColor = ''; 
        };
      }, []);

  return (
          <div className={deleteStyles.container}>
      <div className={deleteStyles.container__background}>
        <div className={deleteStyles.container__head}>
            <h3 className={deleteStyles.container__headTitle}>Данные пользователя</h3>
            <Link to="/Users">
            <img src={closeIcon} alt="" />
            </Link>
        </div>
        <div className={userDataStyles.userInfo}>
            <img src={smileImage} alt="" />
        <h2 className={userDataStyles.userInfo__userName}>Cameron Williamson</h2>
        <p className={userDataStyles.userInfo__dateUser}>+7 (702) 213-12-31</p>
        <p className={userDataStyles.userInfo__dateUser}>mail@gmail.com</p>
        <p className={userDataStyles.userInfo__dateUser}>Дата рождения: 31.10.2001</p>
        </div>
        <div className={deleteStyles.container__btns}>
          <button className={deleteStyles.container__deleteBtn}>Да, удалить</button>
          <Link to="/Users">
          <button className={deleteStyles.container__cancelBtn}>Отмена</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserData