import React, { useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import { FiSliders } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import MapView from "./MapView";

const houses = [
  {
    id: 1,
    image: "/house1.mp4",
    images: ["/house1_1.jpeg", "/house1_2.jpeg", "/house1_3.jpg"],
    street: "11 Main St",
    city: "Richmond Hill",
    province: "ON",
    postalCode: "L4C 1A1",
    description: "A modern 3-bedroom home with natural light and smart layout.",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,100 sqft",
    type: "Detached",
    price: "$1,250,000",
    listingDate: "2025-05-01",
    realtor: {
      name: "Jane One",
      photo: "/realtors/realtor1.jpg",
      likes: 123,
      comments: 45,
    },
  },
  {
    id: 2,
    image: "/house2.mp4",
    images: ["/house2_1.jpg", "/house2_2.jpg", "/house2_3.jpg"],
    street: "22 Main St",
    city: "Mississauga",
    province: "ON",
    postalCode: "L4C 1A1",
    description: "A modern 3-bedroom home with natural light and smart layout.",
    bedrooms: 2,
    bathrooms: 2,
    area: "2,200 sqft",
    type: "Condo",
    price: "$750,000",
    listingDate: "2025-05-03",
    realtor: {
      name: "Jane Two",
      photo: "/realtors/realtor2.jpg",
      likes: 87,
      comments: 12,
    },
  },
  {
    id: 3,
    image: "/house3.mp4",
    images: ["/house3_1.jpg", "/house3_2.jpg", "/house3_3.jpg"],
    street: "33 Main St",
    city: "Oakville",
    province: "ON",
    postalCode: "L4C 1A1",
    description: "A modern 3-bedroom home with natural light and smart layout.",
    bedrooms: 4,
    bathrooms: 2,
    area: "2,300 sqft",
    type: "Townhome",
    price: "$1,040,000",
    listingDate: "2025-05-03",
    realtor: {
      name: "Jane Three",
      photo: "/realtors/realtor1.jpg",
      likes: 204,
      comments: 34,
    },
  },
  {
    id: 4,
    image: "/house4.mp4",
    images: ["/house4_1.jpg", "/house4_2.jpg", "/house4_3.jpg"],
    street: "44 Main St",
    city: "Toronto",
    province: "ON",
    postalCode: "L4C 1A1",
    description: "A modern 3-bedroom home with natural light and smart layout.",
    bedrooms: 3,
    bathrooms: 3,
    area: "2,900 sqft",
    type: "Detached",
    price: "$1,950,000",
    listingDate: "2025-05-04",
    realtor: {
      name: "Jane Four",
      photo: "/realtors/realtor2.jpg",
      likes: 98,
      comments: 20,
    },
  },
];

export default function HousesSlider() {
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [view, setView] = useState("feed");
  const [showFilter, setShowFilter] = useState(false);

  const selectHouse = (house) => {
    setSelectedHouse(house);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Tab Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-center gap-6 py-4 bg-black bg-opacity-30 text-white text-lg font-semibold">
        <button
          className={view === "feed" ? "underline" : "opacity-60"}
          onClick={() => {
            setView("feed");
            setSelectedHouse(null);
          }}
        >
          For You
        </button>
        <button
          className={view === "map" ? "underline" : "opacity-60"}
          onClick={() => {
            setView("map");
            setSelectedHouse(null);
          }}
        >
          Map
        </button>
      </div>

{/* Filter Overlay */}
{showFilter && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center"
    onClick={() => setShowFilter(false)}
  >
    <div
      className="bg-gray-900 rounded p-6 w-80 text-white"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button onClick={() => setShowFilter(false)} aria-label="Close Filters">
          <IoMdClose size={24} />
        </button>
      </div>

      {/* Bedrooms */}
      <div className="mb-4">
        <label htmlFor="bedrooms" className="block mb-1 font-medium">
          Bedrooms
        </label>
        <select
          id="bedrooms"
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      {/* Bathrooms */}
      <div className="mb-4">
        <label htmlFor="bathrooms" className="block mb-1 font-medium">
          Bathrooms
        </label>
        <select
          id="bathrooms"
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
        >
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      {/* Price Min / Max */}
      <div className="mb-4 flex space-x-2">
        <div className="flex-1">
          <label htmlFor="priceMin" className="block mb-1 font-medium">
            Price Min
          </label>
          <input
            type="number"
            id="priceMin"
            min="0"
            placeholder="0"
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="priceMax" className="block mb-1 font-medium">
            Price Max
          </label>
          <input
            type="number"
            id="priceMax"
            min="0"
            placeholder="1,000,000"
            className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
          />
        </div>
      </div>

      {/* City */}
      <div className="mb-4">
        <label htmlFor="city" className="block mb-1 font-medium">
          City
        </label>
        <input
          type="text"
          id="city"
          placeholder="Enter city"
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
        />
      </div>

      {/* House Type */}
      <div className="mb-4">
        <label htmlFor="houseType" className="block mb-1 font-medium">
          House Type
        </label>
        <select
          id="houseType"
          className="w-full bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white"
        >
          <option value="">Any</option>
          <option value="detached">Detached</option>
          <option value="townhome">Townhome</option>
          <option value="condo">Condo</option>
        </select>
      </div>

      {/* Apply Filters Button */}
      <button
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded py-2 transition"
        onClick={() => setShowFilter(false)}
      >
        Apply Filters
      </button>
    </div>
  </div>
)}


      {/* Detail View */}
      {selectedHouse ? (
        <div className="w-full h-full bg-black text-white p-6 overflow-y-auto flex flex-col">
          <button
            className="self-start mb-4 px-4 py-2 bg-gray-800 rounded hover:bg-gray-700"
            onClick={() => setSelectedHouse(null)}
          >
            Back
          </button>

          <h2 className="text-3xl font-bold mb-2">
            {selectedHouse.street}, {selectedHouse.city}, {selectedHouse.province} {selectedHouse.postalCode}
          </h2>
          <p className="mb-4 italic">{selectedHouse.description}</p>

          <div className="mb-6 overflow-x-auto whitespace-nowrap space-x-4 flex scrollbar-thin scrollbar-thumb-gray-700">
            {selectedHouse.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`House image ${idx + 1}`}
                className="h-[100] w-auto rounded inline-block"
              />
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div><strong>Bedrooms:</strong> {selectedHouse.bedrooms}</div>
            <div><strong>Bathrooms:</strong> {selectedHouse.bathrooms}</div>
            <div><strong>Area:</strong> {selectedHouse.area}</div>
            <div><strong>Type:</strong> {selectedHouse.type}</div>
            <div><strong>Price:</strong> {selectedHouse.price}</div>
            <div><strong>Listed on:</strong> {selectedHouse.listingDate}</div>
          </div>

          <div className="flex items-center gap-4 border-t border-gray-700 pt-4">
            <img
              src={selectedHouse.realtor.photo}
              alt={selectedHouse.realtor.name}
              className="w-16 h-16 rounded-full border-2 border-white"
            />
            <div>
              <h3 className="text-xl font-semibold">{selectedHouse.realtor.name}</h3>
              <div className="flex gap-4 mt-1">
                <div className="flex items-center gap-1">
                  <FaHeart /> <span>{selectedHouse.realtor.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaComment /> <span>{selectedHouse.realtor.comments}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : view === "map" ? (
        <div className="h-full w-full">
          <MapView />
        </div>
      ) : (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory relative">
          {houses.map((house) => (
            <div
              key={house.id}
              className="h-screen w-full snap-start relative cursor-pointer"
              onClick={() => selectHouse(house)}
            >
              {house.image.endsWith(".mp4") ? (
                <video
                  src={house.image}
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${house.image})` }}
                />
              )}

              <div className="absolute right-5 bottom-24 flex flex-col items-center gap-6 text-white">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowFilter(true);
                  }}
                  aria-label="Open Filters"
                  className="mb-2 p-2 rounded bg-black bg-opacity-40 hover:bg-opacity-70 transition"
                >
                  <FiSliders size={28} />
                </button>

                <img
                  src={house.realtor.photo}
                  alt={house.realtor.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div className="text-center">
                  <div className="text-xl font-bold">{house.price}</div>
                  <div className="opacity-80">{house.type}</div>
                </div>
                <div className="flex gap-4 opacity-90">
                  <div className="flex items-center gap-1 text-sm">
                    <FaHeart /> {house.realtor.likes}
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <FaComment /> {house.realtor.comments}
                  </div>
                </div>
              </div>

              <div className="absolute left-5 bottom-24 text-white max-w-xs bg-black bg-opacity-30 rounded p-3">
                <div className="font-bold text-lg">
                  {house.street}, {house.city}
                </div>
                <div className="text-sm opacity-80">{house.description}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
