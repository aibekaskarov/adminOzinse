import { Link } from 'react-router-dom'
import styles from '../assets/css/menuAdd.module.css'
import usersStyles from '../assets/css/users.module.css'
import arrowDownIcon from '../assets/css/arrow-down-3.svg'


function Users() {
  return (
    <section className={usersStyles.section}>
       <div className={styles.container}>
              <div className={styles.container__item1}>
                <h2 className={styles.container__project}>Пользователи</h2>
                <p className={styles.container__num}>142</p>
              </div>
        </div>
        <div className={usersStyles.section__container}>
              <div className={usersStyles.section__itemsBlock}>
                  <p className={usersStyles.section__itemsType}>Сортировать:</p>
                  <p className={usersStyles.section__itemsTitle}>По дате регистрации</p>
                  <img src={arrowDownIcon} alt="" />
              </div>
          <div className={usersStyles.section__userBlocks}>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
              <div className={usersStyles.section__block}>
                  <div className={usersStyles.section__firstLetter}>
                    <p>G</p>
                    </div>
                <Link className={usersStyles.link} to="/userData">
                  <h3>Guy Hawkins</h3>
                </Link>
                  <p className={usersStyles.section__mail}>mail@gmail.com</p>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Users