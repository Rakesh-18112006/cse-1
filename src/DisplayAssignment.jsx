import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footnote from "./Footnote";

const arrays = [
  ['MOHITHA', 'MAALASA', 'MITHILESH', 'VENKAT', 'PARINEETHA', 'JAHNAVI'],
  ['JAHNAVI', 'MOHITHA', 'MAALASA', 'MITHILESH', 'VENKAT', 'PARINEETHA'],
  ['PARINEETHA', 'JAHNAVI', 'MOHITHA', 'MAALASA', 'MITHILESH', 'VENKAT'],
  ['MAALASA', 'PARINEETHA', 'MITHILESH', 'VENKAT', 'JAHNAVI', 'MOHITHA'],
  ['MOHITHA', 'MAALASA', 'PARINEETHA', 'MITHILESH', 'VENKAT', 'JAHNAVI'],
  ['JAHNAVI', 'MOHITHA', 'MAALASA', 'PARINEETHA', 'MITHILESH', 'VENKAT'],
  ['PARINEETHA', 'JAHNAVI', 'MITHILESH', 'VENKAT', 'MOHITHA', 'MAALASA'],
  ['MAALASA', 'PARINEETHA', 'JAHNAVI', 'MITHILESH', 'VENKAT', 'MOHITHA'],
  ['MOHITHA', 'MAALASA', 'PARINEETHA', 'JAHNAVI', 'MITHILESH', 'VENKAT'],
  ['JAHNAVI', 'MOHITHA', 'MITHILESH', 'VENKAT', 'MAALASA', 'PARINEETHA'],
  ['PARINEETHA','JAHNAVI', 'MOHITHA', 'MITHILESH', 'VENKAT', 'MAALASA'],
  [ 'MAALASA','PARINEETHA','JAHNAVI', 'MOHITHA', 'MITHILESH', 'VENKAT'],
];

const publicHolidays = [
  "2024-08-15", // Example Public Holiday
  "2024-12-25",
   "2024-08-26",
   "2024-09-07",
   "2024-10-02" ,
   // Christmas
  // Add more public holidays here
];

const isPublicHoliday = (date) => {
  return publicHolidays.includes(date.toISOString().split("T")[0]);
};

const generateAssignments = (startDate, arrays) => {
  const assignments = {};
  let arrayIndex = 0;
  let currentDate = new Date(startDate);

  while (true) {
    const dayOfWeek = currentDate.getDay();

    if (dayOfWeek !== 0 && dayOfWeek !== 6 && !isPublicHoliday(currentDate)) {
      const dateString = currentDate.toISOString().split("T")[0];
      assignments[dateString] = arrays[arrayIndex];

      arrayIndex++;
      // Reset arrayIndex to 0 if it exceeds the length of the arrays
      if (arrayIndex >= arrays.length) {
        arrayIndex = 0;
      }
    }

    currentDate.setDate(currentDate.getDate() + 1);
    
    // Exit condition (optional): Set a limit on how far you want to generate assignments
    if (currentDate > new Date('2024-12-31')) {
      break;
    }
  }

  return assignments;
};

const startDate = "2024-08-19";
const assignments = generateAssignments(startDate, arrays);

const DisplayAssignment = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    setCurrentDate(formattedDate);
    console.log("current date is:",formattedDate);
    console.log("Assignments:", assignments);
  }, []);

  return (
    <div className="bg-rgb(15 23 42 / var(--tw-bg-opacity));">
      <Navbar />

      <h1 className="text-sm text-center text-[20px] text-[#333] mt-7">Today's Row Rotation</h1>
      {currentDate && assignments[currentDate] ? (
        <div className="bg-[#ffffff] shadow-xl m-3">
          <p className="text-[18px] text-[#555] text-center mt-4">Today's date: {currentDate}</p>
          <p className="text-[#007bff] text-center mb-48 " >
            Assigned Rows: {assignments[currentDate].join(", ")}
          </p>
        </div>
      ) : (
        <p className="text-[#d9534f] text-center"  >No Row Rotation for today.</p>
      )}

      <Footnote/>
    </div>
  );
};

export default DisplayAssignment;