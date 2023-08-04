import { ReactElement, useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import FormInput from './FormInput';
import 'react-calendar/dist/Calendar.css';
import styles from './BookingCalendar.module.css'



const BookingCalendar = ({ maxDaysPerBooking, pricePerDay }) => {


    const [date, setDate] = useState([new Date(), new Date()]);
    const [cost, setCost] = useState(pricePerDay);
    const [maxDate, setMaxDate] = useState();
    const [minDate, setMinDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
        setCost(
            (Math.abs(date[1].getDate() - date[0].getDate()) + 1) * pricePerDay
        );
    }
    const onClickDay = (value, event) => {
        if (maxDate == undefined) {
            setBookingRange(value);
        }
        else {
            resetBookingRange();
        }

    }

    const setBookingRange = (startDate) => {
        const maxBookingDate = new Date(startDate);
        maxBookingDate.setDate(startDate.getDate() + parseInt(maxDaysPerBooking) - 1);
        setMaxDate(maxBookingDate);
        setMinDate(startDate);
    }
    const resetBookingRange = () => {
        setMaxDate(undefined);
        setMinDate(new Date());
    }

    return (
        <>
            <div class="row justify-content-center align-items-center mb-3">
                <div className="col center">
                    <Calendar
                        className={[styles.calendar, "form-control"]}
                        onChange={onChange}
                        value={date}
                        selectRange
                        showWeekNumbers
                        onClickDay={onClickDay}
                        maxDate={maxDate}
                        minDate={minDate}
                    />
                </div>
                <div className="col">
                    <FormInput type="text" name="Kostnad" value={`${cost} kr`} disable />
                    <FormInput type="date" name="Från" value={date[0]?.toLocaleDateString()} disable />
                    <FormInput type="date" name="Till" value={date[1]?.toLocaleDateString()} disable />
                </div>
            </div>
        </>
    );
}

export default BookingCalendar;