import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import addHomeStyles from "../assets/css/addHome.module.css"
import closeIcon from "../assets/css/close.svg"
import downloadIcon from '../assets/css/downloadIcon.svg'

function AddGenres() {

    useEffect(() => {
        document.body.style.backgroundColor = '#17171799';
    
        return () => {
          document.body.style.backgroundColor = ''; 
        };
      }, []);
    
  return (
    <div className={addHomeStyles.container}>
    <div className={addHomeStyles.container__background}>
      <div className={addHomeStyles.container__head}>
          <h3 className={addHomeStyles.container__headTitle}>Добавить жанр</h3>
          <Link to="/Genres">
          <img src={closeIcon} alt="" />
          </Link>
      </div>
        <div className={addHomeStyles.addHome}>
            <div className={addHomeStyles.addHome__block}>
                  <p className={addHomeStyles.addHome__blockTitle}>Название жанра</p>
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
      <div className={addHomeStyles.container__btns}>
        <button className={addHomeStyles.container__deleteBtn}>Добавить</button>
        <Link to="/Genres">
        <button className={addHomeStyles.container__cancelBtn}>Отмена</button>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default AddGenres