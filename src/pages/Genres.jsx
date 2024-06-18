import styles from '../assets/css/menuAdd.module.css'
import mathPlus from '../assets/css/math-plus.svg'
import { Link } from 'react-router-dom'
import genresStyles from '../assets/css/genres.module.css'
import changeIcon from '../assets/css/changeIcon.svg'
import deleteIcon from '../assets/css/deleteIcon.svg'
import cameraIcon from '../assets/css/cameraIcon.svg'
import genresImage from '../assets/css/genresImage.png'


function Genres() {
  return (
    <section className={genresStyles.genres}>
       <div className={styles.container}>
              <div className={styles.container__item1}>
                <h2 className={styles.container__project}>Жанры</h2>
                <p className={styles.container__num}>9</p>
              </div>
              <Link className={styles.container__link} to="/AddGenres">
              <div className={styles.container__item2}>
                        <img src={mathPlus} alt="" />
                        <button className={styles.container__addBtn}>Добавить</button>
              </div>
              </Link>
        </div>
        <menu className={genresStyles.menu}>
          <div className={genresStyles.menu__cards}> 
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Комедиялар</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Отбасымен көретіндер</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Ғылыми-танымдық</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Ойын-сауық</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Ғылыми фантастика және фэнтези</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Шытырман оқиғалы</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Қысқаметрлі</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Музыкалық</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
              <div className={genresStyles.menu__card}>
                  <img className={genresStyles.menu__cardImage} src={genresImage} alt="" />
                  <h3>Спорттық</h3>
                  <div className={genresStyles.menu__settings}>
                      <div className={genresStyles.menu__videos}>
                        <img src={cameraIcon} alt="" />
                        <p>21</p>
                      </div>
                      <div className={genresStyles.menu__edits}>
                        <img src={changeIcon} alt="" />
                        <Link to="/DeleteGenres">
                        <img src={deleteIcon} alt="" />
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
        </menu>
    </section>
  )
}

export default Genres