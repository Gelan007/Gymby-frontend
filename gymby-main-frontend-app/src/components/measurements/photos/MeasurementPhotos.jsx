import React from 'react';
import MeasurementsMainItemContainer from "../measurementsMainItem/MeasurementsMainItemContainer";
import biceps from "../../../assets/images/measurements/biceps.svg";
import s from './MeasurementPhotos.module.scss'

const MeasurementPhotos = () => {
   return (
       <div className={s.measurementsMainItem}>
           <MeasurementsLeftPanel/>
           <div className={s.measurementsMainItem__body}>
               <div className={s.navBlock}>
                   <div className={s.navBlock__title}>{titleName}</div>
                   {/*<div className={s.navBlock__options}>
                        <span className={selectedOption === LIST ?
                            `${s.navBlock__option} ${s.navBlock__option_red}` : s.navBlock__option}
                              onClick={listOptionHandle}>{t("measurements.list")}</span>

                        <span className={selectedOption === CHART ?
                            `${s.navBlock__option} ${s.navBlock__option_line} ${s.navBlock__option_red}` :
                            `${s.navBlock__option} ${s.navBlock__option_line}`}
                              onClick={chartOptionHandle}>{t("measurements.chart")}</span>
                    </div>*/}
                   <div className={s.navBlock__button}>
                       <ButtonGreen onClick={(() => handleAddButton())}>{t("measurements.add")}</ButtonGreen>
                   </div>
               </div>
               <div className={s.itemsList}>
                   {measurementsData?.map((measurement, index) => {
                       let previousMeasurementValue = index === 0 ? 0 : measurement.value - measurementsData[index - 1].value
                       let currentDate = new Date();
                       const today = new Date();
                       const initialDate = new Date(measurement.date);
                       let differenceInDays = Math.floor((currentDate.getTime() - initialDate.getTime()) / (1000 * 60 * 60 * 24));

                       return (
                           <MeasurementsItem key={measurement.id} icon={icon} measurements={measurement.value}
                                             changesValue={previousMeasurementValue.toFixed(1)} date={measurement.date}
                                             days={initialDate.getDate() === today.getDate() ? 0 : differenceInDays}
                                             measurementUnit={measurement.unit} measurementType={type}
                                             addMeasurement={addMeasurement} deleteMeasurement={deleteMeasurement}
                                             measurementId={measurement.id} editMeasurement={editMeasurement}

                           />
                       )

                   })}
               </div>
           </div>
       </div>
    );
};

export default MeasurementPhotos;