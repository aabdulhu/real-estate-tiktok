import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function RealtorProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const realtor = location.state?.realtor;

  if (!realtor) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
        <p>Realtor information not found.</p>
        <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-gray-700 rounded">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-8 bg-black min-h-screen text-white">
              {/* Back Button */}
      <div className="w-full mb-6">
        <button
        onClick={() => navigate(-1)}
          className="w-full text-white bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded"
        >
        ← Back to Feed
        </button>
      </div>
      <img
        src={realtor.photo}
        alt={realtor.name}
        className="w-32 h-32 rounded-full object-cover mb-6"
      />
      <h1 className="text-2xl font-bold mb-2">{realtor.name}</h1>
      <p className="text-lg mb-1">📍 {realtor.city}</p>
      <p className="text-lg mb-1">🏢 {realtor.company}</p>
      <p className="text-lg mb-4">📞 {realtor.phone}</p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold">
        Contact Me
      </button>
    </div>
  );
}
