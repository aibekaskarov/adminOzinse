import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import axios from 'axios';
import logStyles from "../assets/css/login.module.css";
import logo from "../assets/css/logo1.svg";
import passwordIcon from "../assets/css/eyeIcon.svg";

function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
  
    // Проверяем, что электронная почта и пароль были введены
    if (!email || !password) {
      console.error('Ошибка: Электронная почта и пароль должны быть заполнены');
      return;
    }

    try {
      const response = await axios.post('https://platformapitest.mobydev.kz/auth', formData, {
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjF9.8LwluGed_a8L-39rWUVrVqBMuWVgMjRAn76WvpudPSU'
        }
      });
      console.log(response.data);
      navigate('/');
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = '#0052CC0D';

    return () => {
      document.body.style.backgroundColor = ''; 
    };
  }, []);

  return (
    <div className={logStyles.loginCont}>
      <img className={logStyles.loginCont__logo} src={logo} alt="logo" />
      <form className={logStyles.loginCont__form} onSubmit={handleSubmit}>
        <h2 className={logStyles.loginCont__title}>Добро пожаловать</h2>
        <p className={logStyles.loginCont__description}>Войдите в систему, чтобы продолжить</p>
        <input className={`${logStyles.loginCont__emailInput} ${logStyles.input}`} type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        <div className={logStyles.loginCont__password}>
          <input className={`${logStyles.loginCont__passwordInput} ${logStyles.input}`} id="password" onChange={handleChange} placeholder="Пароль" />
          <button className={logStyles.loginCont__passwordIcon}>
            <img src={passwordIcon} alt="" />
          </button>
        </div>
          <button className={logStyles.loginCont__btn} type="submit">Войти</button>
        <p className={logStyles.loginCont__forgot}>Забыли пароль? <a className={logStyles.loginCont__restore} href="#">Восстановить</a></p>
      </form>
    </div>
  );
}

export default LoginPage;
