import { useEffect, useState } from "react";

import Calendar from "react-calendar";
import FormDisplay from "./FormDisplay";
import "react-calendar/dist/Calendar.css";
import styles from "./BookingCalendar.module.css";
import data from "../../data.json";
import type { View } from "react-calendar/dist/shared/types.js";

const BookingCalendar = ({ id }: { id: number }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [dateText, setDateText] = useState<string>("");

  const onClickDay = (date: Date) => setDate(date);
  const onClickMonth = (date: Date) => alert(`You clicked on month: ${date.getMonth() + 1}`);

  useEffect(() => setDateText(date.toLocaleDateString()), [date]);

  const onChange = (date: Date) => console.log("Date: ", date);

  const tileDisabled = ({ date, view }: { date: Date; view: View }) => {
    if (view === "month") {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const bookedDates = data.pallarpUthyrning.bokadeDagar.map((bookedDate) => new Date(bookedDate));
      return date < yesterday || bookedDates.some((bookedDate) => bookedDate.toDateString() === date.toDateString());
    }

    return false;
  };

  return (
    <div className="row justify-content-center align-items-center mb-3">
      <div className="col center">
        <Calendar
          key={id}
          className={[styles.calendar, "form-control"]}
          onChange={onChange}
          onClickDay={onClickDay}
          onClickMonth={onClickMonth}
          value={date}
          showWeekNumbers
          tileDisabled={tileDisabled}
        />
      </div>
      <div className="col">
        <FormDisplay type="text" name="Kostnad" value={`${data.pallarpUthyrning.prisPerDag} kr`} />
        <FormDisplay type="date" name="Datum" value={dateText} />
      </div>
    </div>
  );
};

export default BookingCalendar;
