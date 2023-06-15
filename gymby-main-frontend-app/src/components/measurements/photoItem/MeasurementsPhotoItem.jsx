import React from 'react';
import s from './MeasurementsPhotoItem.module.scss'
import AddingCardPhotos from "../../general/addingCardPhotos/AddingCardPhotos";

const MeasurementsPhotoItem = ({groupedPhotosByCreationDate, handlePhotoDelete, handleAddButton}) => {
    return (
        <div className={s.photoItem}>
            <div className={s.photoItem__date}>{groupedPhotosByCreationDate.measurementDate}</div>
            <div className={s.photosList}>
                <AddingCardPhotos photos={groupedPhotosByCreationDate.photos} handleAddingCardFileChange={handleAddButton}
                                  handlePhotoDelete={handlePhotoDelete}/>
            </div>  
        </div>
    );
};

export default MeasurementsPhotoItem;