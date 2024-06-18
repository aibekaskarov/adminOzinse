import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import styles from '../assets/css/Layout.module.css'

const Layout = () => (
  <div className={styles.app}>
        <Sidebar />
    <div className={styles.app__mainContent}>
      <div className={styles.app__sidebar}>
      <Header />
      </div>
      <main className={styles.app__content}>
        <Outlet />
      </main>
    </div>
  </div>
);

export default Layout;





