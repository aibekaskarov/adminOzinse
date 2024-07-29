import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import addSuccessStyles from "../assets/css/addSuccess.module.css"
import closeIcon from "../assets/css/close.svg"
import tickIcon from "../assets/css/tickIcon.svg"

function AddSuccess() {

    useEffect(() => {
        document.body.style.backgroundColor = '#17171799'; 
        return () => {
          document.body.style.backgroundColor = ''; 
        };
      }, []);

  return (
    <div className={addSuccessStyles.container}>
    <div className={addSuccessStyles.container__background}>
      <div className={addSuccessStyles.container__close}>
        <Link to="/Categories">
          <img src={closeIcon} alt="" className={addSuccessStyles.container__closeIcon} />
        </Link>
      </div>
      <div className={addSuccessStyles.container__description}>
        <div className={addSuccessStyles.container__img}>
          <img src={tickIcon} alt="" className={addSuccessStyles.container__tickIcon} />
        </div>
        <h2>Проект добавлен успешно!</h2>
        <Link to="/">
          <button className={addSuccessStyles.container__btn}>Закрыть</button>     
        </Link>
      </div>
    </div>
  </div>
  
  )
}

export default AddSuccess;