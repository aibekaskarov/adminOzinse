import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import mainInfoStyles from '../assets/css/mainInfo.module.css'
import editStyles from '../assets/css/editing.module.css'
import chevronRight from "../assets/css/chevron-right.svg"
import arrowLeft from "../assets/css/arrow-left.svg"
import addCoverStyles from "../assets/css/addCover.module.css"
import downloadIcon from "../assets/css/downloadIcon.svg"
import deleteIcon from "../assets/css/deleteIcon.svg"


function AddCover() {
    const [cover, setCover] = useState(null);
    const [screenshots, setScreenshots] = useState([]);
    const navigate = useNavigate();

    const handleCoverChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setCover(URL.createObjectURL(file));
        }
    };

    const handleScreenshotsChange = (event) => {
        const files = Array.from(event.target.files);
        const newScreenshots = files.map(file => URL.createObjectURL(file));
        setScreenshots(prevScreenshots => [...prevScreenshots, ...newScreenshots]);
    };

    const removeCover = () => {
        setCover(null);
    };

    const removeScreenshot = (index) => {
        setScreenshots(screenshots.filter((_, i) => i !== index));
    };

    const handleSubmit = () => {
        navigate('/AddSuccess');
    };

    const isReady = cover && screenshots.length > 0;

    return (
        <div className={editStyles.editing}>
    <section className={editStyles.container}>
    <div className={editStyles.container__blocks}>
        <div className={editStyles.container__head}>
           <h4 className={editStyles.container__headTitle}>Проекты</h4>
           <img src={chevronRight} alt="" />
           <h4 className={editStyles.container__headTitle}>Добавить проект</h4>
        </div>
        <article className={mainInfoStyles.article}>
          <div className={mainInfoStyles.article__title}>
            <div className={mainInfoStyles.article__titleImg}>
                <img src={arrowLeft} alt="" />
            </div>
            <h2>Обложка и скриншоты</h2>
          </div>
          <div className={mainInfoStyles.article__info}>
          <div className={addCoverStyles.container}>
                <h2 className={addCoverStyles.container__title}>Обложка</h2>
                <p className={addCoverStyles.container__description}>Рекомендуется использовать картинки размером не менее 375x550px</p>
            <div className={addCoverStyles.container__uploadBox}>
                {!cover && (
                    <>
                        <div className={addCoverStyles.container__backgroundImage}>
                            <img src={downloadIcon} alt="download icon" />
                        </div>
                        <input type="file" id="coverUpload" className={addCoverStyles.container__fileInput} onChange={handleCoverChange} />
                        <label htmlFor="coverUpload" className={addCoverStyles.container__label}>Перетащите картинку или <span>загрузите</span></label>
                    </>
                )}
                {cover && (
                    <div className={addCoverStyles.container__thumbnail} style={{ backgroundImage: `url(${cover})` }}>
                        <div className={addCoverStyles.container__removeBtn} onClick={removeCover}>
                            <img src={deleteIcon} alt="" />
                        </div>
                    </div>
                )}
            </div>

                <h2 className={addCoverStyles.container__title}>Скриншоты</h2>
                <p className={addCoverStyles.container__description}>Рекомендуется использовать картинки размером не менее 400x226px</p>
            <div className={addCoverStyles.container__uploadBox}>
            <div className={addCoverStyles.container__backgroundImage}>
                    <img src={downloadIcon} alt="" />
                </div>
                {!cover && (
                    <>
                        <input type="file" id="screenshotsUpload" className={addCoverStyles.fileInput} multiple onChange={handleScreenshotsChange} />
                        <label htmlFor="screenshotsUpload" className={addCoverStyles.container__label}>Перетащите картинку или <span>загрузите</span></label>
                    </>
                )}
            </div>

            {screenshots.length > 0 && (
                <div className={addCoverStyles.screenshotContainer}>
                    {screenshots.map((screenshot, index) => (
                        <div key={index} className={addCoverStyles.container__thumbnail} style={{ backgroundImage: `url(${screenshot})`, width: "140px", height: "79px"}}>
                            <div className={addCoverStyles.container__removeBtn} onClick={() => removeScreenshot(index)}>
                                <img src={deleteIcon} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
        <div className={mainInfoStyles.article__btns}>
                <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnCancel}`}>Назад</button> 
                 <div className={mainInfoStyles.article__btnBox}>                
                 {isReady && (
                  <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnFurther}`} onClick={handleSubmit}>Далее</button>
                 )}
                  <button className={`${mainInfoStyles.article__btn} ${mainInfoStyles.btnCancel}`}>Отмена</button>
                </div>           
          </div>
            </div>
        </article>
        </div>
          </section>
            </div>
      
        
    );
}

export default AddCover;
