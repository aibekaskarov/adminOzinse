import styles from '../assets/css/menuAdd.module.css'
import mathPlus from '../assets/css/math-plus.svg'
import rolesStyles from '../assets/css/roles.module.css'
import checkIcon from '../assets/css/checkIcon.svg'
import changeIcon from '../assets/css/changeIcon.svg'
import deleteIcon from '../assets/css/deleteIcon.svg'
import { Link } from 'react-router-dom'

function Roles() {
  return (
    <section className={rolesStyles.rolesSection}>
      <div className={styles.container}>
              <div className={styles.container__item1}>
                <h2 className={styles.container__project}>Роли</h2>
                <p className={styles.container__num}>3</p>
              </div>
              <Link className={styles.container__link} to="/AddRoles">
              <div className={styles.container__item2}>
                        <img src={mathPlus} alt="" />
                        <button className={styles.container__addBtn}>Добавить</button>
              </div>
              </Link>
        </div>
        <div className={rolesStyles.rolesSection__cards}>
          <div className={rolesStyles.rolesSection__card}>
              <h3>Менеджер 1</h3>
              <div className={rolesStyles.rolesSection__post}>
                  <img src={checkIcon} alt="" />
                  <div className={rolesStyles.rolesSection__span}>
                    <span className={rolesStyles.rolesSection__title}>Проекты </span>
                    <span className={rolesStyles.rolesSection__actions}>(Редактирование)</span>
                  </div>
              </div>
              <div className={rolesStyles.rolesSection__post}>
                  <img src={checkIcon} alt="" />
                  <div className={rolesStyles.rolesSection__span}>
                    <span className={rolesStyles.rolesSection__title}>Категории </span>
                    <span className={rolesStyles.rolesSection__actions}>(Только чтение)</span>
                  </div>
              </div>
              <div className={rolesStyles.rolesSection__post}>
                  <div className={rolesStyles.rolesSection__span}>
                    <img className={rolesStyles.rolesSection__checkIcon} src={checkIcon} alt="" />
                    <span className={rolesStyles.rolesSection__title}>Пользователи </span>
                    <span className={rolesStyles.rolesSection__actions}>(Только чтение)</span>
                  </div>
                  <div className={rolesStyles.rolesSection__edits}>
                    <img src={changeIcon} alt="" />
                    <Link to="/DeleteRoles">
                    <img src={deleteIcon} alt="" />
                    </Link>
                  </div>
              </div>
          </div>
          <div className={rolesStyles.rolesSection__card}>
              <h3>Менеджер 1</h3>
              <div className={rolesStyles.rolesSection__post}>
                  <img src={checkIcon} alt="" />
                  <div className={rolesStyles.rolesSection__span}>
                    <span className={rolesStyles.rolesSection__title}>Проекты </span>
                    <span className={rolesStyles.rolesSection__actions}>(Редактирование)</span>
                  </div>
              </div>
              <div className={rolesStyles.rolesSection__post}>
                  <img src={checkIcon} alt="" />
                  <div className={rolesStyles.rolesSection__span}>
                    <span className={rolesStyles.rolesSection__title}>Категории </span>
                    <span className={rolesStyles.rolesSection__actions}>(Только чтение)</span>
                  </div>
              </div>
              <div className={rolesStyles.rolesSection__post}>
                  <div className={rolesStyles.rolesSection__span}>
                    <img className={rolesStyles.rolesSection__checkIcon} src={checkIcon} alt="" />
                    <span className={rolesStyles.rolesSection__title}>Пользователи </span>
                    <span className={rolesStyles.rolesSection__actions}>(Только чтение)</span>
                  </div>
                  <div className={rolesStyles.rolesSection__edits}>
                    <img src={changeIcon} alt="" />
                    <Link to="/DeleteRoles">
                    <img src={deleteIcon} alt="" />
                    </Link>
                  </div>
              </div>
          </div>
          <div className={rolesStyles.rolesSection__card}>
              <h3>Менеджер 1</h3>
              <div className={rolesStyles.rolesSection__post}>
                  <img src={checkIcon} alt="" />
                  <div className={rolesStyles.rolesSection__span}>
                    <span className={rolesStyles.rolesSection__title}>Проекты </span>
                    <span className={rolesStyles.rolesSection__actions}>(Редактирование)</span>
                  </div>
              </div>
              <div className={rolesStyles.rolesSection__post}>
                  <img src={checkIcon} alt="" />
                  <div className={rolesStyles.rolesSection__span}>
                    <span className={rolesStyles.rolesSection__title}>Категории </span>
                    <span className={rolesStyles.rolesSection__actions}>(Только чтение)</span>
                  </div>
              </div>
              <div className={rolesStyles.rolesSection__post}>
                  <div className={rolesStyles.rolesSection__span}>
                    <img className={rolesStyles.rolesSection__checkIcon} src={checkIcon} alt="" />
                    <span className={rolesStyles.rolesSection__title}>Пользователи </span>
                    <span className={rolesStyles.rolesSection__actions}>(Только чтение)</span>
                  </div>
                  <div className={rolesStyles.rolesSection__edits}>
                    <img src={changeIcon} alt="" />
                    <Link to="/DeleteRoles">
                    <img src={deleteIcon} alt="" />
                    </Link>
                  </div>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Roles