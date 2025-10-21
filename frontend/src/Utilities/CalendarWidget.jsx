import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarWidget() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="w-full h-full bg-[var(--surface-light)] dark:bg-[var(--surface-dark)">
      <Calendar
        onChange={setDate}
        value={date}
        className="!border-0 !w-full !h-full 
        !bg-[var(--surface-light)] dark:!bg-[var(--surface-dark)] 
        !text-[var(--text-primary-light)] dark:!text-[var(--text-primary-dark)] 
        rounded-lg p-2"
      />
    </div>
  );
}
