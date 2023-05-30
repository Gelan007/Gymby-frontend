import React from 'react';
import s from './AddingCardPhotos.module.scss'
import PhotoCard from "./PhotoCard";
import AddingCard from "./AddingCard";
const AddingCardPhotos = ({photos, handleAddingCardFileChange}) => {
    return (
        <div className={s.addingCardPhotos}>
            {photos?.map((photo, index) => (
                <PhotoCard photo={photo} key={index}/>
            ))}
            <AddingCard handleFileChange={handleAddingCardFileChange}/>
        </div>
    );
};

export default AddingCardPhotos;