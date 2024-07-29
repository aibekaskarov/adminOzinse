import mainInfoStyles from '../assets/css/mainInfo.module.css'
import editStyles from '../assets/css/editing.module.css'
import chevronRight from "../assets/css/chevron-right.svg"
import arrowLeft from "../assets/css/arrow-left.svg"
import arrowTop from "../assets/css/arrow-top.svg"
import arrowDown from "../assets/css/arrow-down-3.svg"
import addVideoStyles from "../assets/css/addVideo.module.css"
import arrowDownBlackIcon from "../assets/css/arrow-downBlack.svg"
import deleteIcon from "../assets/css/deleteIcon.svg"
import { useState } from'react';

function AddVideo() {
  return (
    <div className={editStyles.editing}>
    <section className={editStyles.container}>
    <div className={editStyles.container__blocks}>
        <div className={editStyles.container__head}>
           <h4 className={editStyles.container__headTitle}>Проекты</h4>
           <img src={chevronRight} alt="" />
           <h4 className={editStyles.container__headTitle}>Добавить проект</h4>
        </div>
        <article className={mainInfoStyles.article}>
          <div className={mainInfoStyles.article__title}>
            <div className={mainInfoStyles.article__titleImg}>
                <img src={arrowLeft} alt="" />
            </div>
            <h2>Видео</h2>
          </div>
          <div className={mainInfoStyles.article__info}>
            <div className={addVideoStyles.inputContainer}>
                <input type="text" placeholder="1" readOnly />
                <img className={addVideoStyles.inputContainer__icon} src={arrowDownBlackIcon} alt="" />
                <label for="category">Количество сезонов</label>
            </div>
            <h2 className={addVideoStyles.season}>1 сезон</h2>
            <div className={addVideoStyles.inputVideo}>
                <input type="text" placeholder='1 серия / Youtube Video ID' />
                <img src={deleteIcon} alt="" />
            </div>
            <p className={addVideoStyles.addSeries}>Добавить серию</p>
          <div className={mainInfoStyles.article__btns}>
                <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnCancel}`}>Назад</button> 
                 <div className={mainInfoStyles.article__btnBox}>                  
                  <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnFurther}`}>Далее</button>
                  <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnCancel}`}>Отмена</button>
                </div>           
          </div>
          </div>
        </article>
      </div>
    </section>
  </div>
  )
}

export default AddVideo