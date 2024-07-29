import React from 'react';
import { useRoutes } from 'react-router-dom';
import appStyles from "./assets/css/App.module.css";
import LoginPage from "./pages/LoginPage";
import SuccessfulRequest from "./pages/SuccessfullyRequest";
import RecoverLogin from "./pages/RecoverLogin";
import Projects from "./pages/projects";
import HomeProjects from "./pages/HomeProjects";
import Categories from "./pages/Categories";
import Users from "./pages/Users";
import Roles from "./pages/Roles";
import Genres from "./pages/Genres";
import Ages from "./pages/Ages";
import Layout from './components/Layout';
import Details from './pages/Details';
import Delete from "./pages/Delete"
import AddHome from './pages/AddHome';
import HomeProjectsDelete from './pages/HomeProjectsDelete';
import AddCategories from './pages/AddCategories';
import DeleteCategories from './pages/DeleteCategories';
import UserData from './pages/userData';
import AddRoles from './pages/AddRoles';
import DeleteRoles from './pages/DeleteRoles';
import AddGenres from './pages/AddGenres';
import DeleteGenres from './pages/DeleteGenres';
import AddAges from './pages/AddAges';
import DeleteAges from './pages/DeleteAges';
import MainInfo from './pages/MainInfo';
import AddVideo from './pages/AddVideo';
import AddCover from './pages/AddCover';
import AddSuccess from './pages/AddSuccess';

const routes = [
  {
    path: 'LoginPage',
    element: <LoginPage />,
  },
  {
    path: 'RecoverLogin',
    element: <RecoverLogin />,
  },
  {
    path: 'SuccessfulRequest',
    element: <SuccessfulRequest />,
  },
  {
    path: 'Delete',
    element: <Delete />,
  },
  {
    path: 'AddHome',
    element: <AddHome />,
  },
  {
    path: 'HomeProjectsDelete',
    element: <HomeProjectsDelete />,
  },
  {
    path: 'AddCategories',
    element: <AddCategories />
  },
  {
    path: 'DeleteCategories',
    element: <DeleteCategories />,
  },
  {
    path: 'UserData',
    element: <UserData />,
  },
  {
    path: 'AddRoles',
    element: <AddRoles />,
  },
  {
    path: 'DeleteRoles',
    element: <DeleteRoles />,
  },
  {
    path: 'AddGenres',
    element: <AddGenres />,
  },
  {
    path: 'DeleteGenres',
    element: <DeleteGenres />,
  },
  {
    path: 'AddAges',
    element: <AddAges />,
  },
  {
    path: 'DeleteAges',
    element: <DeleteAges />,
  },
  {
    path: 'AddSuccess',
    element: <AddSuccess />,
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Projects />,
      },
      {
        path: 'HomeProjects',
        element: <HomeProjects />,
      },
      {
        path: 'Categories',
        element: <Categories />,
      },
      {
        path: 'Users',
        element: <Users />,
      },
      {
        path: 'Roles',
        element: <Roles />,
      },
      {
        path: 'Genres',
        element: <Genres />,
      },
      {
        path: 'Ages',
        element: <Ages />,
      },
      {
        path: 'Details',
        element: <Details />,
      },
      {
        path: 'MainInfo',
        element: <MainInfo />,
      },
      {
        path: 'AddVideo',
        element: <AddVideo />,
      },
      {
        path: 'AddCover',
        element: <AddCover />,
      }
    ]
  }
];

function App() {
  const elements = useRoutes(routes);
  return (
    <div className={appStyles.app}>
      {elements}
    </div>
  );
}

export default App;
