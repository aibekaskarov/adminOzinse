import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import deleteStyles from "../assets/css/delete.module.css"
import closeIcon from "../assets/css/close.svg"

function DeleteRoles() {

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
          <h3 className={deleteStyles.container__headTitle}>Удалить роль?</h3>
          <Link to="/Roles">
          <img src={closeIcon} alt="" />
          </Link>
      </div>
      <h3 className={deleteStyles.container__centerText}>Вы действительно хотите удалить роль?</h3>
      <div className={deleteStyles.container__btns}>
        <button className={deleteStyles.container__deleteBtn}>Да, удалить</button>
        <Link to="/Roles">
        <button className={deleteStyles.container__cancelBtn}>Отмена</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default DeleteRoles