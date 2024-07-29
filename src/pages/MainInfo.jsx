import mainInfoStyles from '../assets/css/mainInfo.module.css'
import editStyles from '../assets/css/editing.module.css'
import chevronRight from "../assets/css/chevron-right.svg"
import arrowLeft from "../assets/css/arrow-left.svg"
import arrowTop from "../assets/css/arrow-top.svg"
import arrowDown from "../assets/css/arrow-down-3.svg"
import { useState } from'react';
import { Link } from 'react-router-dom'

function MainInfo() {

  const [description, setDescription] = useState('');

  const handleInputChange = (event) => {
    setDescription(event.target.value);
  };

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
              <h2>Основная информация</h2>
            </div>
            <div className={mainInfoStyles.article__info}>
            <div className={mainInfoStyles.article__inputContainer}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Название проекта</label>
            </div>
            <div className={`${mainInfoStyles.article__inputContainer} ${mainInfoStyles.inpMargin}`}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Категория</label>
                  <img className={mainInfoStyles.article__iconArrowDown} src={arrowDown} alt="" />
            </div>
            <div className={mainInfoStyles.article__block}>
            <div className={mainInfoStyles.article__inputContainer}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Тип проекта</label>
                  <img className={mainInfoStyles.article__iconArrow} src={arrowDown} alt="" />
            </div>
            <div className={mainInfoStyles.article__inputContainer}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Возрастная категория</label>
                  <img className={mainInfoStyles.article__iconArrow} src={arrowDown} alt="" />
            </div>
            <div className={mainInfoStyles.article__inputContainer}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Год</label>
                  <div className={mainInfoStyles.article__icons}>
                  <img className={mainInfoStyles.article__iconArrow} src={arrowTop} alt="" />
                  <img className={mainInfoStyles.article__iconArrow} src={arrowDown} alt="" />
                  </div>
            </div>
            <div className={mainInfoStyles.article__inputContainer}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Хронометраж (мин)</label>
                  <div className={mainInfoStyles.article__icons}>
                  <img className={mainInfoStyles.article__iconArrow} src={arrowTop} alt="" />
                  <img className={mainInfoStyles.article__iconArrow} src={arrowDown} alt="" />
                  </div>
            </div>
            </div>
            <div className={`${mainInfoStyles.article__inputContainer} ${mainInfoStyles.inpMargin}`}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Ключевые слова</label>
            </div>
            <p className={mainInfoStyles.article__example}>Например: мультфильм, мультсериал</p>
              <div className={mainInfoStyles.article__description}>
               <textarea
                placeholder='Добавьте описание'
                  value={description}
                  onChange={handleInputChange}
                  rows={1}
                  style={{
                    width: '100%',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    resize: 'none'
                  }}
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                required
              />
              </div>  
              <div className={`${mainInfoStyles.article__inputContainer} ${mainInfoStyles.inpMargin}`}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Режиссер</label>
            </div>
            <div className={`${mainInfoStyles.article__inputContainer} ${mainInfoStyles.inpMargin}`}>
                  <input className={mainInfoStyles.article__input} type="text" placeholder="" required/>
                  <label for="category">Продюссер</label>
            </div>
            <div className={mainInfoStyles.article__mainBtn}>
                <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnFurther}`}>Далее</button>
                <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnCancel}`}>Отмена</button>
            </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  )
}

export default MainInfo