import React, {useEffect} from 'react';
import MeasurementPhotos from "./MeasurementPhotos";
import {
    addMeasurementPhoto,
    getMeasurements,
    addMeasurementPhotoCreationDate,
    deleteMeasurementPhoto
} from "../../../redux/slices/measurements-slice";
import {connect} from "react-redux";

const MeasurementPhotosContainer = (props) => {
    const handleAddButton = (e) => {
        const file = e.target.files[0];
        props.addMeasurementPhoto({photo: file})
    }
    const handleDeleteButton = (photoData) => {
        const {id} = photoData
        props.deleteMeasurementPhoto({photoId: id})
    }

    useEffect(() => {
        props.getMeasurements()
    }, [])


    return (
        <MeasurementPhotos handleAddButton={handleAddButton} handleDeleteButton={handleDeleteButton} photos={props.photos} {...props}/>
    );
};


const mapStateToProps = (state) => {
    return {
        photos: state.measurements.photos
    }
}

export default connect(mapStateToProps, {getMeasurements, addMeasurementPhoto, addMeasurementPhotoCreationDate, deleteMeasurementPhoto})(MeasurementPhotosContainer);