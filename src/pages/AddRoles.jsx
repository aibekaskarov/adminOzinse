import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import closeIcon from "../assets/css/close.svg"
import addRolesStyles from "../assets/css/addRoles.module.css"
import arrowDownBlackIcon from "../assets/css/arrow-downBlack.svg"

function AddRoles() {
  
    useEffect(() => {
        document.body.style.backgroundColor = '#17171799';
    
        return () => {
          document.body.style.backgroundColor = ''; 
        };
      }, []);
  
    return (
        <div className={addRolesStyles.container}>
        <div className={addRolesStyles.container__background}>
          <div className={addRolesStyles.container__head}>
              <h3 className={addRolesStyles.container__headTitle}>Добавить роль</h3>
              <Link to="/Roles">
              <img src={closeIcon} alt="" />
              </Link>
          </div>
            <div className={addRolesStyles.inputs}>
              <div className={addRolesStyles.inputs__inputContainer}>
                <input type="text" id="category" placeholder=" " required />
                <label for="category">Наименование</label>
              </div>
              <div className={addRolesStyles.inputs__inputContainer}>
                <input type="text" id="category" placeholder="Редактирование" readOnly />
                <img className={addRolesStyles.inputs__icon} src={arrowDownBlackIcon} alt="" />
                <label for="category">Проекты</label>
              </div>
              <div className={addRolesStyles.inputs__inputContainer}>
                <input type="text" id="category" placeholder="Редактирование" readOnly />
                <img className={addRolesStyles.inputs__icon} src={arrowDownBlackIcon} alt="" />
                <label for="category">Категории</label>
              </div>
              <div className={addRolesStyles.inputs__inputContainer}>
                <input type="text" id="category" placeholder="Редактирование" readOnly />
                <img className={addRolesStyles.inputs__icon} src={arrowDownBlackIcon} alt="" />
                <label for="category">Пользователи</label>
              </div>
              <div className={addRolesStyles.inputs__inputContainer}>
                <input type="text" id="category" placeholder="Редактирование" readOnly />
                <img className={addRolesStyles.inputs__icon} src={arrowDownBlackIcon} alt="" />
                <label for="category">Роли</label>
              </div>
            </div>
          <div className={addRolesStyles.container__btns}>
            <button className={addRolesStyles.container__deleteBtn}>Добавить</button>
            <Link to="/Roles">
            <button className={addRolesStyles.container__cancelBtn}>Отмена</button>
            </Link>
          </div>
        </div>
      </div>
  )
}

export default AddRoles