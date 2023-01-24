// import moment from "moment/moment";

import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [date, setDate] = useState(new Date());

  console.log(date);
  // const month = moment.months();

  // console.log(month, "months");

  // const Year = new Date().getFullYear();

  // console.log(Year, "year");

  // let Calender = [];

  // const StartDate = moment([Year, month])
  //   .clone()
  //   .startOf("month")
  //   .startOf("week");
  // console.log(StartDate, "Start Date");
  return (
    <div className="App">
      <Calendar onChange={setDate} value={date} />
    </div>
  );
}

export default App;
