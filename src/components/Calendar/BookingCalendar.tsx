import { useEffect, useState } from "react";

import Calendar, { type TileClassNameFunc } from "react-calendar";
import FormDisplay from "./FormDisplay";
// import "react-calendar/dist/Calendar.css";
import styles from "./BookingCalendar.module.css";
import data from "../../data.json";
import type { View, ClassName } from "react-calendar/src/shared/types.js";
import { addDays, differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears, subDays, subMonths, subYears } from "date-fns";

const BookingCalendar = ({ id }: { id: number }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [dateText, setDateText] = useState<string>("");

  const onClickDay = (date: Date) => setDate(date);
  const onClickMonth = (date: Date) => date.setFullYear(date.getFullYear() + 1);
  const onClickYear = (date: Date) => date.setFullYear(date.getFullYear() + 10);
  const onClickDecade = (date: Date) => date.setFullYear(date.getFullYear() + 100);

  useEffect(() => setDateText(date.toLocaleDateString()), [date]);

  const onChange = (date: Date) => console.log("Date: ", date);

  const tileDisabled = ({ date, view }: { date: Date; view: View }) => {
    const today = new Date();
    const yesterday = subDays(today, 1);
    const lastMounth = subMonths(today, 1);
    const lastYear = subYears(today, 1);
    const lastDecade = subYears(today, 10);

    const bookedDates = data.pallarpUthyrning.bokadeDagar.map((bookedDate) => new Date(bookedDate));

    if (view === "month") {
      return date < yesterday || bookedDates.some((bookedDate) => bookedDate.toDateString() === date.toDateString());
    }

    if (view === "year") {
      return date < lastMounth;
    }

    if (view === "decade") {
      return date < lastYear;
    }

    if (view === "century") {
      return date < lastDecade;
    }

    return false;
  };

  const tileClassName = ({ date: dates, view }: { date: Date; view: View }): ClassName => {
    if (differenceInCalendarDays(dates, date) === 0) {
      return "btn btn-primary h-[1px]";
    }

    if (view === "year") {
      if (differenceInCalendarMonths(dates, date) === 0) {
        return "btn btn-primary";
      }
    }
    if (view === "decade") {
      if (differenceInCalendarYears(dates, date) === 0) {
        return "btn btn-primary";
      }
    }
    if (view === "century") {
      const currentYear = date.getFullYear();
      const startDecade = Math.floor(currentYear / 10) * 10;
      const endDecade = startDecade + 9;
      if (currentYear >= startDecade && currentYear <= endDecade) {
        return "btn btn-primary";
      }
    }
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
          onClickYear={onClickYear}
          onClickDecade={onClickDecade}
          value={date}
          showWeekNumbers
          tileDisabled={tileDisabled}
          tileClassName={tileClassName}
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
