import { useState } from "react";

import Calendar from "react-calendar";
import FormDisplay from "./FormDisplay";
import "react-calendar/dist/Calendar.css";
import styles from "./BookingCalendar.module.css";
import { array } from "astro/zod";

const BookingCalendar = ({ maxDaysPerBooking, pricePerDay }) => {
    const [date, setDate] = useState([new Date(), new Date()]);
    const [cost, setCost] = useState(pricePerDay);
    const [maxDate, setMaxDate] = useState();
    const [minDate, setMinDate] = useState(new Date());
    const bookedDates = [{ year: 124, month: 5, date: 8 }];

    const onChange = (date) => {
        setDate(date);
        setCost((Math.abs(date[1].getDate() - date[0].getDate()) + 1) * pricePerDay);
    };
    const onClickDay = (value, event) => {
        if (maxDate == undefined) {
            setBookingRange(value);
        } else {
            resetBookingRange();
        }
    };

    const setBookingRange = (startDate) => {
        const maxBookingDate = new Date(startDate);
        maxBookingDate.setDate(startDate.getDate() + parseInt(maxDaysPerBooking) - 1);
        setMaxDate(maxBookingDate);
        setMinDate(startDate);
    };
    const resetBookingRange = () => {
        setMaxDate(undefined);
        setMinDate(new Date());
    };

    const tileDisabled = ({ date, view }) =>{
        if (view !== "month") {
            return false;
        }

        console.log("month");

        return bookedDates.some(
            (bookedDate) =>
                bookedDate.year === date.getYear() &&
                bookedDate.month === date.getMonth() &&
                bookedDate.date === date.getDate()
        );
    }

    return (
        <>
            <div className="row justify-content-center align-items-center mb-3">
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
                        tileDisabled={tileDisabled}
                    />
                </div>
                <div className="col">
                    <FormDisplay
                        type="text"
                        name="Kostnad"
                        value={`${cost} kr`}
                    />
                    <FormDisplay
                        type="date"
                        name="Från"
                        value={date[0]?.toLocaleDateString()}
                    />
                    <FormDisplay
                        type="date"
                        name="Till"
                        value={date[1]?.toLocaleDateString()}
                    />
                </div>
            </div>
        </>
    );
};

export default BookingCalendar;
