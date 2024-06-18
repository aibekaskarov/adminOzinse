import { Link } from 'react-router-dom'
import styles from '../assets/css/menuAdd.module.css'
import mathPlus from '../assets/css/math-plus.svg'
import changeIcon from '../assets/css/changeIcon.svg'
import deleteIcon from '../assets/css/deleteIcon.svg'
import categoriesStyles from '../assets/css/categories.module.css'
import cameraIcon from '../assets/css/cameraIcon.svg'

function Categories() {
  return (
    <section className={categoriesStyles.categories}>
        <div className={styles.container}>
              <div className={styles.container__item1}>
                <h2 className={styles.container__project}>Категории</h2>
                <p className={styles.container__num}>10</p>
              </div>
              <Link className={styles.container__link} to="/AddCategories">
              <div className={styles.container__item2}>
                        <img src={mathPlus} alt="" />
                        <button className={styles.container__addBtn}>Добавить</button>
              </div>
              </Link>
        </div>
        <div className={categoriesStyles.categories__blocks}>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
          <div className={categoriesStyles.categories__block}>
            <h3>Мультфильм</h3>
            <div className={categoriesStyles.categories__items}>
              <div className={categoriesStyles.categories__videos}>
                <img src={cameraIcon} alt="" />
                <p>21</p>
              </div>
              <div className={categoriesStyles.categories__edits}>
              <img src={changeIcon} alt="" />
              <Link to="/DeleteCategories">
              <img src={deleteIcon} alt="" />
              </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Categories