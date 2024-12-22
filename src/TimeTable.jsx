import Navbar from "./Navbar";
import Footnote from "./Footnote";

const TimeTable = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Time Table Content */}
      <main className="flex-grow">
        <div className="bg-black text-white text-center py-4">
          <h1 className="text-2xl md:text-4xl font-semibold">Time Table</h1>
        </div>
        <div className="flex justify-center mt-6 px-4 mb-4">
          <img
            src="./timetable2.jpg"
            alt="Time Table"
            className="w-full max-w-4xl rounded-lg shadow-lg object-contain"
          />
        </div>
      </main>

      {/* Footer */}
      <Footnote />
    </div>
  );
};

export default TimeTable;
