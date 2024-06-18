import styles from '../assets/css/menuAdd.module.css'
import mathPlus from '../assets/css/math-plus.svg'
import arrowDownIcon from '../assets/css/arrow-down-3.svg'
import timeIcon from '../assets/css/Combined Shape.svg'
import viewsIcon from '../assets/css/viewsIcon.svg'
import changeIcon from '../assets/css/changeIcon.svg'
import deleteIcon from '../assets/css/deleteIcon.svg'
import imageAidar from '../assets/css/ImageAidar.svg'
import dotIcon from '../assets/css/dotIcon.svg'
import imageCar from '../assets/css/ImageCar.svg'
import imageWeekend from '../assets/css/ImageWeekend.svg'
import imageToys from '../assets/css/imageToys.svg'
import image4 from '../assets/css/Image (4).svg'
import image5 from '../assets/css/Image (5).svg'
import image6 from '../assets/css/Image (6).svg'
import image7 from '../assets/css/Image (7).svg'
import { Link } from 'react-router-dom'

function MenuAdd() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
              <div className={styles.container__item1}>
                <h2 className={styles.container__project}>Проекты</h2>
                <p className={styles.container__num}>113</p>
              </div>
              <Link className={styles.container__link} to="/">
              <div className={styles.container__item2}>
                        <img src={mathPlus} alt="" />
                        <button className={styles.container__addBtn}>Добавить</button>
              </div>
              </Link>
        </div>
        <div className={styles.section__items}>
            <div className={styles.section__itemsItem1}>
                <div className={styles.section__itemsBlock}>
                  <p className={styles.section__itemsType}>Сортировать:</p>
                  <p className={styles.section__itemsTitle}>Популярные</p>
                  <img src={arrowDownIcon} alt="" />
                </div>
                <div className={styles.section__itemsBlock}>
                  <p className={styles.section__itemsType}>Категория:</p>
                  <p className={styles.section__itemsTitle}>Все категории</p>
                  <img src={arrowDownIcon} alt="" />
                </div>
                <div className={styles.section__itemsBlock}>
                  <p className={styles.section__itemsType}>Тип:</p>
                  <p className={styles.section__itemsTitle}>Фильмы и сериалы</p>
                  <img src={arrowDownIcon} alt="" />
                </div>
            </div>
            <div className={styles.section__itemsItem2}>
              <div className={styles.section__itemsBlock}>
                <img src={timeIcon} alt="" />
                <p className={styles.section__itemsTitle}>Выберите год</p>
              </div>
            </div>
        </div>
        <div className={styles.section__menu}>
            <div className={styles.section__box}>
        <Link className={styles.section__link} to="">
              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={imageAidar} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Айдар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультфильм</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>
        </Link>
        <Link className={styles.section__link} to="/Details">
              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={imageCar} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Суперкөлік Самұрық</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультсериал</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>
        </Link>
          
              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={imageWeekend} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Каникулы off-line 2</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 659</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={imageToys} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Ойыншықтар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image4} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Айдар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультфильм</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image5} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Ойыншықтар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image6} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Суперкөлік Самұрық</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультсериал</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image7} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Каникулы off-line 2</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 659</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image4} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Айдар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультфильм</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image5} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Ойыншықтар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image6} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Суперкөлік Самұрық</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультсериал</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image7} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Каникулы off-line 2</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 659</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image4} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Айдар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультфильм</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image5} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Ойыншықтар</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image6} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Суперкөлік Самұрық</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                  <img src={dotIcon} alt="" />
                  <p>Мультсериал</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>15 201</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>

              <div className={styles.section__card}>
                <div className={styles.section__cardImage}>
                <img src={image7} alt="" />
                </div>
                <h3 className={styles.section__cardTitle}>Каникулы off-line 2</h3>
                <div className={styles.section__cardDescription}>
                  <p>Телехикая</p>
                </div>
                <div className={styles.section__settings}>
                  <div className={styles.section__cardViews}>
                  <img src={viewsIcon} alt="" />  
                  <p>9 659</p>
                  </div>
                  <div className={styles.section__cardTune}>
                    <img src={changeIcon} alt="" />
                    <img src={deleteIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
  )
}

export default MenuAdd