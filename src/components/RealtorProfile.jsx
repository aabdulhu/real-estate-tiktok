import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Mocked house listings (replace with real data in production)
const houses = [
  {
    id: 1,
    address: "123 Main St, Cityville",
    images: ["/house1_1.jpeg"],
  },
  {
    id: 2,
    address: "456 Oak Ave, Townsville",
    images: ["/house1_2.jpeg"],
  },
  {
    id: 3,
    address: "789 Pine Rd, Villageburg",
    images: ["/house1_3.jpg"],
  }
];

export default function RealtorProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const realtor = location.state?.realtor;
  const [showModal, setShowModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  if (!realtor) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <p>Realtor information not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-4 py-2 bg-gray-700 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen text-white relative">
      {/* Back Button */}
      <div className="w-full mb-8">
        <button
          onClick={() => navigate(-1)}
          className="w-full text-white bg-gray-700 hover:bg-gray-600 px-4 py-3 rounded-lg font-medium"
        >
          ← Back to Feed
        </button>
      </div>

      {/* Realtor Photo */}
      <img
        src={realtor.photo}
        alt={realtor.name}
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-white shadow-lg"
      />

      {/* Realtor Info */}
      <h1 className="text-3xl font-extrabold mb-2">{realtor.name}</h1>
      <p className="text-xl text-gray-300 mb-1">📍 {realtor.city}</p>
      <p className="text-lg text-gray-400 mb-1">🏢 {realtor.company}</p>
      <p className="text-lg text-gray-400 mb-4">📞 {realtor.phone}</p>

      {/* Houses Listed by Realtor */}
      <div className="mt-12 w-full">
        <h3 className="text-xl font-bold mb-4">My active listings:</h3>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {houses.map(house => (
            <div key={house.id} className="min-w-[250px] bg-gray-800 rounded-xl p-4 shadow-lg">
              <img
                src={house.images[0]}
                alt={house.address}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <p className="text-lg font-semibold mb-2">{house.address}</p>
              <button
                onClick={() => {
                  setSelectedHouse(house);
                  setShowCalendar(true);
                }}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full"
              >
                Book Showing
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-2xl w-full max-w-lg shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
              Contact {realtor.name}
            </h2>

            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Question"
                rows="4"
                className="p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                onClick={() => setShowModal(false)}
                className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="text-sm text-gray-600 hover:underline text-center"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

            {/* Contact Me Button */}
      <button
        onClick={() => setShowModal(true)}
        className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-full text-lg font-semibold shadow-lg"
      >
        Contact Me
      </button>

      {/* Calendar Mockup Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-2xl w-full max-w-md shadow-2xl">
            <h2 className="text-xl font-bold mb-4 text-center">Book Showing</h2>
            <p className="text-gray-700 mb-4">Request a showing for:</p>
            <p className="text-md font-medium mb-2">{selectedHouse?.address}</p>
            <div className="bg-gray-200 p-4 rounded mb-4 text-center text-gray-500">
              📅 Calendar UI mockup here
            </div>
            <button
              onClick={() => setShowCalendar(false)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-2"
            >
              Request Showing
            </button>
            <button
              onClick={() => setShowCalendar(false)}
              className="w-full text-gray-600 text-sm hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
            {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white text-black p-6 rounded-2xl w-full max-w-md shadow-2xl">
            {/* <h2 className="text-xl font-bold mb-4 text-center">Book Showing</h2> */}
            <p className="text-gray-700 mb-4">Request a showing for: <b>{selectedHouse?.address}</b></p>
            <div className="flex justify-center mb-4">
              <Calendar
                onChange={(date) => setSelectedDate(date)}
                value={selectedDate}
              />
            </div>
            <button
              onClick={() => setShowCalendar(false)}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 mb-2"
            >
              Request Showing
            </button>
            <button
              onClick={() => setShowCalendar(false)}
              className="w-full text-gray-600 text-sm hover:underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
