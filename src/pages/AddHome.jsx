import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import deleteStyles from "../assets/css/delete.module.css"
import addHomeStyles from "../assets/css/addHome.module.css"
import closeIcon from "../assets/css/close.svg"
import arrowDownIcon from '../assets/css/arrow-down-3.svg'
import downloadIcon from '../assets/css/downloadIcon.svg'


function AddHome() {

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
          <h3 className={deleteStyles.container__headTitle}>Добавить проект на главную</h3>
          <Link to="/HomeProjects">
          <img src={closeIcon} alt="" />
          </Link>
      </div>
        <div className={addHomeStyles.addHome}>
            <div className={addHomeStyles.addHome__block}>
                  <p className={addHomeStyles.addHome__blockTitle}>Выберите проект</p>
                  <img src={arrowDownIcon} alt="" />
            </div>
            <div className={addHomeStyles.addHome__block}>
                  <p className={addHomeStyles.addHome__blockTitle}>Выберите очередность</p>
                  <img src={arrowDownIcon} alt="" />
            </div>
            <div className={addHomeStyles.addHome__download}> 
                <div className={addHomeStyles.addHome__backgroundImage}>
                    <img src={downloadIcon} alt="" />
                </div>
                <div className={addHomeStyles.addHome__spanText}>
                    <span className={addHomeStyles.addHome__text1}>Перетищите картинку или </span>
                    <span className={addHomeStyles.addHome__text2}>загрузите</span>
                </div>
            </div>
        </div>
      <div className={deleteStyles.container__btns}>
        <button className={deleteStyles.container__deleteBtn}>Добавить</button>
        <Link to="/HomeProjects">
        <button className={deleteStyles.container__cancelBtn}>Отмена</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default AddHome;