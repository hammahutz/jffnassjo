import { useEffect, useState } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import FormDisplay from "./FormDisplay";
import "react-day-picker/style.css";
import { sv } from "date-fns/locale";
import data from "../../data.json";

import { addDays, differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarYears, subDays, subMonths, subYears } from "date-fns";

const BookingCalendar = ({ id }: { id: number }) => {
  const [selected, setSelected] = useState<Date>();
  const defaultClassNames = getDefaultClassNames();

  return (
    <div className="row justify-content-center align-items-center mb-3">
      <div className="col center">
        <DayPicker
        classNames={{
          button_next: `primary`,
          today: `text-primary underline`,
          selected: `btn btn-primary `,
          chevron: `text-primary fill-current`,
        }}
          locale={sv}
          animate
          mode="single"
          selected={selected}
          showWeekNumber
          onSelect={setSelected}
          startMonth={new Date()}
          captionLayout="dropdown"
          disabled={{ before: new Date() }}
          modifiers={{
            booked: [new Date(2022, 5, 8), new Date(2022, 5, 9), new Date(2022, 5, 10)],
          }}
        />
      </div>
      <div className="col">
        <FormDisplay type="text" name="Kostnad" value={`${data.pallarpUthyrning.prisPerDag} kr`} />
        <FormDisplay type="date" name="Datum" value={selected ? selected.toLocaleDateString() : ""} />
      </div>
    </div>
  );
};

export default BookingCalendar;
