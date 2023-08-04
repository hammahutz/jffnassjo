import { ReactElement, useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import FormInput from './FormInput';
import 'react-calendar/dist/Calendar.css';
import styles from './BookingCalendar.module.css'



const BookingCalendar = ({ maxDaysPerBooking, pricePerDay}) => {


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
        maxBookingDate.setDate(startDate.getDate() +  parseInt(maxDaysPerBooking) - 1);
        setMaxDate(maxBookingDate);
        setMinDate(startDate);
    }
    const resetBookingRange = () => {
        setMaxDate(undefined);
        setMinDate(new Date());
    }

    return (
        <form
            name="Bokning"
            action="/submit-success"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
        >
            <p class="hidden">
                <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                </label>
            </p>

            <h4>Hyresinformation</h4>
            <div class="row">
                <FormInput type="text" name="Förnamn" />
                <FormInput type="text" name="Efternamn" />
            </div>
            <div class="row">
                <FormInput type="email" name="Epost" />
                <FormInput type="tel" name="Telefon" />
            </div>
            <div class="row justify-content-center">
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
            <div class="row m-3">
                <FormInput type="text" name="Kostnad" value={`${cost} kr`} disable />
                <FormInput type="date" name="Från" value={date[0]?.toLocaleDateString()} disable />
                <FormInput type="date" name="Till" value={date[1]?.toLocaleDateString()} disable />
            </div>
            <div class="row">
                <FormInput type="text" name="Syfte med bokning" />
            </div>

            <div data-netlify-recaptcha="true"></div>
            <button type="submit" class="btn btn-primary">Skicka</button>
        </form>
    );
}

export default BookingCalendar;