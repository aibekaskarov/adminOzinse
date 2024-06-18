import { Link } from 'react-router-dom' 
import editStyles from "../assets/css/editing.module.css"
import chevronRight from "../assets/css/chevron-right.svg"
import deleteIcon from "../assets/css/Combined Shape (1).svg"
import starIcon from "../assets/css/starIcon.svg"
import instalIcon from "../assets/css/instalIcon.svg"
import viewsIcon from '../assets/css/viewsIcon.svg'
import playBtnIcon from "../assets/css/playBtn.svg"
import clockIcon from "../assets/css/clockIconBlack.svg"
import carImage from "../assets/css/ImageCar.svg"
import movieIcon from "../assets/css/movieIcon.svg"
import serialIcon from "../assets/css/Icon (1).svg"

function Editing() {
  return (
    <div className={editStyles.editing}>
    <section className={editStyles.container}>
        <div className={editStyles.container__blocks}>
          <div className={editStyles.container__head}>
             <h4 className={editStyles.container__headTitle}>Проекты</h4>
             <img src={chevronRight} alt="" />
             <h4 className={editStyles.container__headTitle}>Суперкөлік Самұрық</h4>
          </div>
          <div className={editStyles.container__body}>
          <div className={editStyles.container__bodyPadding}>
          <div className={editStyles.container__box1}>
            <h2>Суперкөлік Самұрық</h2>
            <div className={editStyles.container__btns}>
              <button className={editStyles.container__editBtn}>Редактировать</button>
              <Link to="/Delete">
              <button className={editStyles.container__deleteBtn}>
                <img src={deleteIcon} alt="" />
              </button>
              </Link>
            </div>
          </div>
   
          <div className={editStyles.container__actions}>
              <div className={editStyles.container__actionsBox}>
                  <img src={viewsIcon} alt="" />
                  <p>10 329</p>
              </div>
              <div className={editStyles.container__actionsBox}>
                <img src={starIcon} alt="" />
                <p>4</p>
              </div>
              <div className={editStyles.container__actionsBox}>
                <img src={instalIcon} alt="" />
                <p>43</p>
              </div>
          </div>
          <main className={editStyles.container__main}>
              <div className={editStyles.container__mainVideo}>
                <button className={editStyles.container__playBtn}>
                <img src={playBtnIcon} alt="" />
                </button>
              </div>
              <div className={editStyles.container__videoSeasons}>
                <button className={editStyles.container__videoSeasonBtn}>
                  1 сезон
                </button>
                <button className={editStyles.container__videoSeasonBtn}>
                  2 сезон
                </button>
                <button className={editStyles.container__videoSeasonBtn}>
                  3 сезон
                </button>
              </div>
          </main>
          </div>
          <div className={editStyles.container__blockSeries}>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>1 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>2 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>3 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>4 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>5 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>6 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>7 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>8 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>9 серия</p>
            </div>
            <div className={editStyles.container__series}>
              <p className={editStyles.container__seriesText}>10 серия</p>
            </div>
          </div>
          <div className={editStyles.container__bodyPadding}>
          <div className={editStyles.container__description}>
              <h2 className={editStyles.container__descriptionTitle}>Описание</h2>
              <p className={editStyles.container__explanation}>
              Шытырман оқиғалы мультсериал Елбасының «Ұлы даланың жеті қыры» бағдарламасы аясында жүзеге асырылған. Мақалада қызғалдақтардың отаны Қазақстан екені айтылады. Ал, жоба қызғалдақтардың отаны – Алатау баурайы екенін анимация тілінде дәлелдей түседі. If you want to increase your knowledge of 3D design with Aarón, you can also take some of his other courses: Characters in Cinema 4D: from the Sketch to 3D Printing, Prototypes and Product Viewing in Cinema 4D, Compositions with Cinema 4D and OctaneRender, 3D Illustration with 4D Cinema 4D.
              </p>
                <div className={editStyles.container__post}>
                  <p className={editStyles.container__postTitle}>Режиссер:</p>
                  <p className={editStyles.container__personName}>Бақдәулет Әлімбеков </p>
                </div>
                <div className={editStyles.container__post}>
                  <p className={editStyles.container__postTitle}>Продюсер:</p>
                  <p className={editStyles.container__personName}>Сандуғаш Кенжебаева</p>
                </div>
          </div>
          </div>
          <div className={editStyles.container__borderBottom}></div>
          <div className={editStyles.container__bodyPadding}>
            <div className={editStyles.container__screenshots}>
                <h2 className={editStyles.container__screenshotsTitle}>Скриншоты</h2>
                <div className={editStyles.container__screenshotsImages}>
                    <div className={editStyles.container__screenshotsBlock}></div>
                    <div className={editStyles.container__screenshotsBlock}></div>
                    <div className={editStyles.container__screenshotsBlock}></div>
                    <div className={editStyles.container__screenshotsBlock}></div>
                    <div className={editStyles.container__screenshotsBlock}></div>
                    <div className={editStyles.container__screenshotsBlock}></div>
                    <div className={editStyles.container__screenshotsBlock}></div>
                    <div className={editStyles.container__screenshotsBlock}></div>
                </div>
            </div>
          </div>
          </div>
        </div>
    </section>
    <div className={editStyles.info}>
        <div className={editStyles.info__block}>
          <img src={clockIcon} alt="" />
          <p className={editStyles.info__text}>2020 год</p>
        </div>
        <div className={editStyles.info__block}>
          <img src={movieIcon} alt="" />
          <p className={editStyles.info__text}>Телехикая, Мультсериал</p>
        </div>
        <div className={editStyles.info__block}>
          <img src={serialIcon} alt="" />
          <p className={editStyles.info__text}>10 серии, 7 мин</p>
        </div>
        <div className={editStyles.info__banner}>
          <img src={carImage} alt="" />
        </div>
        <div className={editStyles.info__borderBottom}></div>
        <div className={editStyles.info__itemDate}>
        <div className={editStyles.info__date}>
          <p className={editStyles.info__dateText}>Дата добавления:</p>
          <p className={editStyles.info__dateNum}>1.04.2021, в 11:59</p>
        </div>
        <div className={editStyles.info__date}>
          <p className={editStyles.info__dateText}>Дата обновления:</p>
          <p className={editStyles.info__dateNum}>4.04.2021, в 21:30</p>
        </div>
        </div>
    </div>
        </div>
  )
}

export default Editing