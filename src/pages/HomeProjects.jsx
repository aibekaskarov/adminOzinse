import { Link } from 'react-router-dom'
import homeStyles from "../assets/css/home.module.css"
import styles from '../assets/css/menuAdd.module.css'
import mathPlus from '../assets/css/math-plus.svg'
import changeIcon from '../assets/css/changeIcon.svg'
import deleteIcon from '../assets/css/deleteIcon.svg'
import image1 from '../assets/css/Image.png'
import image2 from '../assets/css/Image (1).png'


function HomeProjects() {
  return (
    <section className={homeStyles.home}>
         <div className={styles.container}>
              <div className={styles.container__item1}>
                <h2 className={styles.container__project}>Проекты на главной</h2>
                <p className={styles.container__num}>2</p>
              </div>
              <Link className={styles.container__link} to="/AddHome">
              <div className={styles.container__item2}>
                        <img src={mathPlus} alt="" />
                        <button className={styles.container__addBtn}>Добавить</button>
              </div>
              </Link>
        </div>
        <div className={homeStyles.home__blocks}>
            <div className={homeStyles.home__block}>
                <img className={homeStyles.home__blockImage} src={image1} alt="" />
                <h3 >Қызғалдақтар мекені</h3>
                <div className={homeStyles.home__cardDescription}>
                  <p className={homeStyles.home__text}>Телехикая</p>
                  <div className={homeStyles.home__dot}></div>
                  <p className={homeStyles.home__text}>Мультфильм</p>
                </div>
                <div className={homeStyles.home__settings}>
                    <p className={homeStyles.home__settingsTitle}>Проект на главной #1</p>
                    <div className={homeStyles.home__settingsEdits}>
                      <img src={changeIcon} alt="" />
                      <Link to="/HomeProjectsDelete">
                      <img src={deleteIcon} alt="" />
                      </Link>
                    </div>
                </div>
            </div>
            <div className={homeStyles.home__block}>
                <img className={homeStyles.home__blockImage} src={image2} alt="" />
                <h3 >Ойыншықтар</h3>
                <div className={homeStyles.home__cardDescription}>
                  <p className={homeStyles.home__text}>Телехикая</p>
                  <div className={homeStyles.home__dot}></div>
                  <p className={homeStyles.home__text}>Мультфильм</p>
                </div>
                <div className={homeStyles.home__settings}>
                    <p className={homeStyles.home__settingsTitle}>Проект на главной #2</p>
                    <div className={homeStyles.home__settingsEdits}>
                      <img src={changeIcon} alt="" />
                      <img src={deleteIcon} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeProjects