import React, {useEffect, useState} from 'react';
import MeasurementPhotos from "./MeasurementPhotos";
import {
    addMeasurementPhoto,
    getMeasurements,
    addMeasurementPhotoCreationDate,
    deleteMeasurementPhoto
} from "../../../redux/slices/measurements-slice";
import {connect} from "react-redux";


const MeasurementPhotosContainer = (props) => {

    const [dateToForbidSelectFutureDates, setDateToForbidSelectFutureDates] = useState('')
    const [userDateData, setUserDateData] = useState({})

    useEffect(() => {
        const dateNow = new Date()
        dateNow.setDate(dateNow.getDate() + 1)
        setDateToForbidSelectFutureDates(dateNow.toISOString().split('T')[0])
    }, [])

    useEffect(() => {
        let dateWithExtraHoursForCorrectDisplaying = new Date();
        dateWithExtraHoursForCorrectDisplaying.setTime(dateWithExtraHoursForCorrectDisplaying.getTime() + 10 * 18 * 60 * 1000)
        const isoDate = dateWithExtraHoursForCorrectDisplaying.toISOString()
        setUserDateData({date: isoDate, formattedDate: isoDate.slice(0, 10)})
    }, [])

    useEffect(() => {
        props.getMeasurements()
    }, [])

    const handleAddButton = (e) => {
        const file = e.target.files[0];
        props.addMeasurementPhoto({photo: file, date: userDateData.date})
    }
    const handleDeleteButton = (photoData) => {
        const {id} = photoData
        props.deleteMeasurementPhoto({photoId: id})
    }
    const handleInputDateChange = (event) => {
        const newDate = new Date(event.target.value)
        newDate.setTime(newDate.getTime() + 10 * 18 * 60 * 1000)
        const isoDate = newDate.toISOString();
        setUserDateData({...userDateData, date: isoDate, formattedDate: event.target.value});
    };

    return (
        <MeasurementPhotos handleAddButton={handleAddButton} handleDeleteButton={handleDeleteButton}
                           photos={props.photos} dateToForbidSelectFutureDates={dateToForbidSelectFutureDates}
                           userDateData={userDateData} handleInputDateChange={handleInputDateChange} {...props}/>
    );
};


const mapStateToProps = (state) => {
    return {
        photos: state.measurements.photos
    }
}

export default connect(mapStateToProps, {getMeasurements, addMeasurementPhoto, addMeasurementPhotoCreationDate, deleteMeasurementPhoto})(MeasurementPhotosContainer);