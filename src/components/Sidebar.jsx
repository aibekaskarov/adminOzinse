import { Link } from 'react-router-dom'; 
import { useState } from 'react';
import styles from '../assets/css/sidebar.module.css'
import {ReactComponent as Projects} from '../assets/css/projects.svg';
import LogoOzinse from '../assets/css/logoOzinse.svg'
import home from '../assets/css/homeIcon.svg';
import category from '../assets/css/categoryIcon.svg';
import users from '../assets/css/usersIcon.svg';
import raleigh from '../assets/css/raleighIcon.svg';
import genres from '../assets/css/genresIcon.svg';
import olds from '../assets/css/oldsIcon.svg';




const Sidebar = () => {

  const [pageTitles ] = useState({
    home: 'Проекты',
    homeProjects: 'Проекты на главной',
    categories: 'Категории',
    users: 'Пользователи',
    roles: 'Роли',
    genres: 'Жанры',
    ages: 'Возрасты'
  });

  return (
    <div className={styles.sidebar}>
       <div className={styles.sidebar__logo}>
        <img src={LogoOzinse} alt="" />
        </div>
      <ul className={styles.sidebar__ul}>
            <li className={styles.sidebar__list}>          
        <Link className={styles.sidebar__link} to="/" >
        <Projects className={styles.sidebar__icon} />
        <span className={styles.sidebar__title}>{pageTitles.home}</span>
        </Link>
            </li>
            <li className={styles.sidebar__list}>
      <Link className={styles.sidebar__link} to="/homeProjects">
        <img className={styles.sidebar__icon} src={home} alt="" />
        <span className={styles.sidebar__title}>{pageTitles.homeProjects}</span>
      </Link>
            </li>
            <li className={styles.sidebar__list}>
      <Link className={styles.sidebar__link}  to="/categories">
        <img className={styles.sidebar__icon} src={category} alt="" />
        <span className={styles.sidebar__title}>{pageTitles.categories}</span>
      </Link>
            </li>
            <li className={styles.sidebar__list}>
      <Link className={styles.sidebar__link} to="/users">
        <img className={styles.sidebar__icon} src={users} alt="" />
        <span className={styles.sidebar__title}>{pageTitles.users}</span>
      </Link>
            </li>
            <li className={styles.sidebar__list}>
      <Link className={styles.sidebar__link} to="/roles">
        <img className={styles.sidebar__icon} src={raleigh} alt="" />
        <span className={styles.sidebar__title}>{pageTitles.roles}</span>
      </Link>
            </li>
            <li className={styles.sidebar__list}>
      <Link className={styles.sidebar__link} to="/genres">
        <img className={styles.sidebar__icon} src={genres} alt="" />
        <span className={styles.sidebar__title}>{pageTitles.genres}</span>  
      </Link>
            </li>
            <li className={styles.sidebar__list}>
      <Link className={styles.sidebar__link} to="/ages">
        <img className={styles.sidebar__icon} src={olds} alt="" />
        <span className={styles.sidebar__title}>{pageTitles.ages}</span>
      </Link>
            </li>
            </ul>
    </div>
  );
}

export default Sidebar;
