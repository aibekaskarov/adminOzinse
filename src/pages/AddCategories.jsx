import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import deleteStyles from "../assets/css/delete.module.css"
import closeIcon from "../assets/css/close.svg"
import addCategoriesStyles from "../assets/css/addCategories.module.css"

function AddCategories() {

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
          <h3 className={deleteStyles.container__headTitle}>Добавить категорию</h3>
          <Link to="/Categories">
          <img src={closeIcon} alt="" />
          </Link>
      </div>
      <div className={addCategoriesStyles.container}>
      <div className={addCategoriesStyles.container__inputBack}>
      <input className={addCategoriesStyles.container__categories} type="text" placeholder='Название категории'/>
      </div>
      </div>
      <div className={deleteStyles.container__btns}>
        <button className={deleteStyles.container__deleteBtn}>Добавить</button>
        <Link to="/Categories">
        <button className={deleteStyles.container__cancelBtn}>Отмена</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default AddCategories