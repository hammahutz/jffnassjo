import { useState, useEffect } from "react";
import Calendar, { type TileDisabledFunc } from "react-calendar";
import FormDisplay from "./FormDisplay";
import "react-calendar/dist/Calendar.css";

import data from "../../data.json";

const BookingCalendar = ({ key }) => {
  // const { maxAntalDagar, prisPerDag } = data.pallarpUthyrning;
  // const [date, setDate] = useState([new Date(), new Date()]);
  // const [cost, setCost] = useState(data.pallarpUthyrning.prisPerDag);
  // const [maxDate, setMaxDate] = useState(null);
  // const [minDate, setMinDate] = useState(new Date());

  // const onChange = (date) => {
  //   if (date[1] === undefined) {
  //     setDate([date, date]);
  //   } else {
  //     setDate(date);
  //   }
  // };

  // const onClickDay = (value, event) => {
  //   if (maxAntalDagar > 1 && maxDate == undefined) {
  //     setBookingRange(value);
  //   } else {
  //     resetBookingRange();
  //   }
  // };

  // useEffect(() => {
  //   setCost((Math.abs(date[1].getDate() - date[0].getDate()) + 1) * prisPerDag);
  // }, [date]);

  // const setBookingRange = (startDate) => {
  //   const maxBookingDate = new Date(startDate);
  //   maxBookingDate.setDate(startDate.getDate() + maxAntalDagar - 1);
  //   setMaxDate(maxBookingDate);
  //   setMinDate(startDate);
  // };
  // const resetBookingRange = () => {
  //   setMaxDate(undefined);
  //   setMinDate(new Date());
  // };

  // const testing: TileDisabledFunc = ({ activeStartDate, date, view }): boolean => {
  //   date.getDate() === 0;
  //   return false;
  // };

  return (
    <>
      <div className="row justify-content-center align-items-center mb-3">
        <div className="col center">
          <Calendar
            key={key}
            className="form-control"
            onChange={onChange}
            value={date}
            showWeekNumbers
            onClickDay={onClickDay}
            maxDate={maxDate}
            minDate={minDate}
            tileDisabled={testing}
          />
        </div>
        <div className="col">
          <FormDisplay type="text" name="Pris" value={`${cost} kr`} />
          <FormDisplay type="date" name="Datum" value={date[1]?.toLocaleDateString()} />
        </div>
      </div>
    </>
  );
};

export default BookingCalendar;
