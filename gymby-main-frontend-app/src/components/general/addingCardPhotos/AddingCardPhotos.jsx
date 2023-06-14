import React, {useEffect} from 'react';
import s from './AddingCardPhotos.module.scss'
import PhotoCard from "./PhotoCard";
import AddingCard from "./AddingCard";
const AddingCardPhotos = ({photos, handleAddingCardFileChange, handlePhotoDelete, isUserAccount = false}) => {

    return (
        <div className={s.addingCardPhotos}>
            {isUserAccount &&
                photos?.map((photo, index) => (
                    <PhotoCard allPhotoData={photo} photoToDisplaying={photo.photoPath ? photo.photoPath : photo} key={index}
                               handlePhotoDelete={handlePhotoDelete}/>
                ))
            ||
                photos?.map((photo, index) => (
                    <PhotoCard allPhotoData={photo} photoToDisplaying={photo.photoPath} key={index}
                               handlePhotoDelete={handlePhotoDelete}/>
                ))
            }
            <AddingCard handleFileChange={handleAddingCardFileChange}/>
        </div>
    );
};

export default AddingCardPhotos;