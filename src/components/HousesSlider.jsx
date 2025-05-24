import React, { useState } from "react";
import { FaHeart, FaComment } from "react-icons/fa";
import MapView from "./MapView";  // <-- Added import for your MapView component

const houses = [
  {
    id: 1,
    image: "/house1.jpg",
    images: ["/house1_1.jpeg", "/house1_2.jpeg", "/house1_3.jpg"],
    address: "11 Main St, Richmond Hill",
    description: "A modern 3-bedroom home with natural light and smart layout.",
    realtor: {
      name: "Jane One",
      photo: "/realtors/realtor1.jpg",
      likes: 123,
      comments: 45,
    },
  },
  {
    id: 2,
    image: "/house2.jpg",
    images: ["/house2_1.jpg", "/house2_2.jpg", "/house2_3.jpg"],
    address: "22 Main St, Richmond Hill",
    description: "A modern 3-bedroom home with natural light and smart layout.",
    realtor: {
      name: "Jane Two",
      photo: "/realtors/realtor2.jpg",
      likes: 87,
      comments: 12,
    },
  },
  {
    id: 3,
    image: "/house3.jpg",
    images: ["/house3_1.jpg", "/house3_2.jpg", "/house3_3.jpg"],
    address: "33 Main St, Richmond Hill",
    description: "A modern 3-bedroom home with natural light and smart layout.",
    realtor: {
      name: "Jane Three",
      photo: "/realtors/realtor1.jpg",
      likes: 204,
      comments: 34,
    },
  },
  {
    id: 4,
    image: "/house4.jpg",
    images: ["/house4_1.jpg", "/house4_2.jpg", "/house4_3.jpg"],
    address: "44 Main St, Richmond Hill",
    description: "A modern 3-bedroom home with natural light and smart layout.",
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
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [view, setView] = useState("feed"); // "feed" or "map"

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black text-white">
      {/* Top Transparent Tab Bar */}
      <div className="absolute top-0 left-0 right-0 z-50 flex justify-center gap-6 py-4 bg-black bg-opacity-30 text-white text-lg font-semibold">
        <button
          className={view === "feed" ? "underline" : "opacity-60"}
          onClick={() => setView("feed")}
        >
          For You
        </button>
        <button
          className={view === "map" ? "underline" : "opacity-60"}
          onClick={() => setView("map")}
        >
          Map
        </button>
      </div>

      {/* Detail View */}
      {selectedHouse ? (
        <div className="w-full h-full bg-black text-white p-4 overflow-y-scroll">
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-60"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                &times;
              </button>
              <button
                className="absolute left-4 text-white text-3xl font-bold z-60"
                onClick={(e) => {
                  e.stopPropagation();
                  const prevIndex =
                    (selectedImageIndex - 1 + selectedHouse.images.length) %
                    selectedHouse.images.length;
                  setSelectedImage(selectedHouse.images[prevIndex]);
                  setSelectedImageIndex(prevIndex);
                }}
              >
                &#8592;
              </button>
              <img
                src={selectedImage}
                alt="Large view"
                className="max-w-full max-h-full rounded shadow-lg transition-opacity duration-300"
              />
              <button
                className="absolute right-4 text-white text-3xl font-bold z-60"
                onClick={(e) => {
                  e.stopPropagation();
                  const nextIndex =
                    (selectedImageIndex + 1) % selectedHouse.images.length;
                  setSelectedImage(selectedHouse.images[nextIndex]);
                  setSelectedImageIndex(nextIndex);
                }}
              >
                &#8594;
              </button>
            </div>
          )}

          <div className="flex overflow-x-auto gap-2 mb-4">
            {selectedHouse.images.map((img, i) => (
              <div
                key={i}
                className="w-48 h-32 flex-shrink-0 cursor-pointer rounded overflow-hidden"
                onClick={() => {
                  setSelectedImage(img);
                  setSelectedImageIndex(i);
                }}
              >
                <img
                  src={img}
                  alt={`House view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <h1 className="text-2xl font-bold mb-2">{selectedHouse.title}</h1>
          <p className="mb-2">{selectedHouse.description}</p>
          <p className="mb-4 italic text-sm text-gray-300">
            Address: {selectedHouse.address}
          </p>

          <div className="flex items-center gap-4">
            <img
              src={selectedHouse.realtor.photo}
              alt={selectedHouse.realtor.name}
              className="w-12 h-12 rounded-full border border-white"
            />
            <div>
              <p className="font-semibold">{selectedHouse.realtor.name}</p>
              <p className="text-sm">
                {selectedHouse.realtor.likes} likes ·{" "}
                {selectedHouse.realtor.comments} comments
              </p>
            </div>
          </div>

          <button
            onClick={() => setSelectedHouse(null)}
            className="mt-6 bg-white text-black px-4 py-2 rounded"
          >
            Back to Feed
          </button>
        </div>
      ) : view === "map" ? (
        <div className="h-full w-full">
          <MapView />
        </div>
      ) : (
        // Feed View
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
          {houses.map((house, idx) => (
            <div
              key={idx}
              className="h-screen w-full snap-start relative"
              style={{
                backgroundImage: `url(${house.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => setSelectedHouse(house)}
            >
              <div className="absolute right-5 bottom-24 flex flex-col items-center gap-6 text-white">
                <img
                  src={house.realtor.photo}
                  alt={house.realtor.name}
                  className="w-12 h-12 rounded-full border-2 border-white"
                />
                <div className="text-center">
                  <FaHeart size={28} />
                  <div>{house.realtor.likes}</div>
                </div>
                <div className="text-center">
                  <FaComment size={28} />
                  <div>{house.realtor.comments}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
