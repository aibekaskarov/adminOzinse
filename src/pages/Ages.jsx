import styles from '../assets/css/menuAdd.module.css'
import mathPlus from '../assets/css/math-plus.svg'
import { Link } from 'react-router-dom'
import genresStyles from '../assets/css/genres.module.css'
import changeIcon from '../assets/css/changeIcon.svg'
import deleteIcon from '../assets/css/deleteIcon.svg'
import cameraIcon from '../assets/css/cameraIcon.svg'
import agesImage from '../assets/css/agesImage.svg'

function Ages() {
  return (
        <section className={genresStyles.genres}>
           <div className={styles.container}>
                  <div className={styles.container__item1}>
                    <h2 className={styles.container__project}>Возрасты</h2>
                    <p className={styles.container__num}>5</p>
                  </div>
                  <Link className={styles.container__link} to="/AddAges">
                  <div className={styles.container__item2}>
                            <img src={mathPlus} alt="" />
                            <button className={styles.container__addBtn}>Добавить</button>
                  </div>
                  </Link>
            </div>
            <menu className={genresStyles.menu}>
              <div className={genresStyles.menu__cards}> 
                  <div className={genresStyles.menu__card}>
                      <img className={genresStyles.menu__cardImage} src={agesImage} alt="" />
                      <h3>8-10 жас</h3>
                      <div className={genresStyles.menu__settings}>
                          <div className={genresStyles.menu__videos}>
                            <img src={cameraIcon} alt="" />
                            <p>21</p>
                          </div>
                          <div className={genresStyles.menu__edits}>
                            <img src={changeIcon} alt="" />
                            <Link to="/DeleteAges">
                            <img src={deleteIcon} alt="" />
                            </Link>
                          </div>
                      </div>
                  </div>
                  <div className={genresStyles.menu__card}>
                      <img className={genresStyles.menu__cardImage} src={agesImage} alt="" />
                      <h3>10-12 жас</h3>
                      <div className={genresStyles.menu__settings}>
                          <div className={genresStyles.menu__videos}>
                            <img src={cameraIcon} alt="" />
                            <p>21</p>
                          </div>
                          <div className={genresStyles.menu__edits}>
                            <img src={changeIcon} alt="" />
                            <Link to="/DeleteAges">
                            <img src={deleteIcon} alt="" />
                            </Link>
                          </div>
                      </div>
                  </div>
                  <div className={genresStyles.menu__card}>
                      <img className={genresStyles.menu__cardImage} src={agesImage} alt="" />
                      <h3>12-14 жас</h3>
                      <div className={genresStyles.menu__settings}>
                          <div className={genresStyles.menu__videos}>
                            <img src={cameraIcon} alt="" />
                            <p>21</p>
                          </div>
                          <div className={genresStyles.menu__edits}>
                            <img src={changeIcon} alt="" />
                            <Link to="/DeleteAges">
                            <img src={deleteIcon} alt="" />
                            </Link>
                          </div>
                      </div>
                  </div>
                  <div className={genresStyles.menu__card}>
                      <img className={genresStyles.menu__cardImage} src={agesImage} alt="" />
                      <h3>14-16 жас</h3>
                      <div className={genresStyles.menu__settings}>
                          <div className={genresStyles.menu__videos}>
                            <img src={cameraIcon} alt="" />
                            <p>21</p>
                          </div>
                          <div className={genresStyles.menu__edits}>
                            <img src={changeIcon} alt="" />
                            <Link to="/DeleteAges">
                            <img src={deleteIcon} alt="" />
                            </Link>
                          </div>
                      </div>
                  </div>
                  <div className={genresStyles.menu__card}>
                      <img className={genresStyles.menu__cardImage} src={agesImage} alt="" />
                      <h3>16-18 жас</h3>
                      <div className={genresStyles.menu__settings}>
                          <div className={genresStyles.menu__videos}>
                            <img src={cameraIcon} alt="" />
                            <p>21</p>
                          </div>
                          <div className={genresStyles.menu__edits}>
                            <img src={changeIcon} alt="" />
                            <Link to="/DeleteAges">
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
    

export default Ages