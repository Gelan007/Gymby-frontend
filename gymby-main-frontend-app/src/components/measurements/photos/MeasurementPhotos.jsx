import React from 'react';
import s from './MeasurementPhotos.module.scss'
import MeasurementsLeftPanel from "../leftPanel/MeasurementsLeftPanel";
import ButtonGreen from "../../UI/buttons/ButtonGreen";
import {useTranslation} from "react-i18next";
import MeasurementsPhotoItem from "../photoItem/MeasurementsPhotoItem";

const MeasurementPhotos = ({photos, handleAddButton, addMeasurementPhotoCreationDate, handleDeleteButton}) => {
    const {t} = useTranslation()

   return (
       <div className={s.measurementsPhotoItem}>
           <MeasurementsLeftPanel/>
           <div className={s.measurementsPhotoItem__body}>
               <div className={s.navBlock}>
                   <div className={s.navBlock__title}>{t("measurements.leftPanel.photos")}</div>
                   <div className={s.navBlock__button}>
                       <ButtonGreen onClick={(() => addMeasurementPhotoCreationDate())}>{t("measurements.add")}</ButtonGreen>
                   </div>
               </div>
               <div className={s.photosList}>
                   {photos?.map((photo, index) => {
                       return (
                       <MeasurementsPhotoItem key={index} groupedPhotosByCreationDate={photo} handleAddButton={handleAddButton}
                                              handlePhotoDelete={handleDeleteButton}/>
                       )
                   })}
               </div>
           </div>
       </div>
    );
};

export default MeasurementPhotos;