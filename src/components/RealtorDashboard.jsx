import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FaCommentDots } from "react-icons/fa";

import {
  FaHome,
  FaListUl,
  FaChartPie,
  FaInbox,
  FaUser,
  FaEdit,
  FaArchive
} from "react-icons/fa";

export default function RealtorDashboard() {
  const location = useLocation();
  const realtor = location.state?.realtor || {
    name: "Jane Example",
    phone: "647-123-4567",
    photo: "/realtors/realtor1.jpeg",
    company: "Example Realty",
    city: "Toronto"
  };

  const [activeTab, setActiveTab] = useState("insights");
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);


  return (
    <div className="flex flex-col min-h-screen bg-black text-white pb-20">
      {/* Header */}
      <div className="relative p-6 text-center text-xl font-bold border-b border-gray-700">
        {{
          profile: "My Profile",
          listings: "My Listings",
          insights: "Insights",
          inbox: "Inbox",
          home: "Feed",
        }[activeTab]}

        {/* Inbox Icon Top-Right */}
<div className="absolute top-6 right-6">
  <button
    onClick={() => setActiveTab("inbox")}
    className="text-white hover:text-blue-400"
  >
    <FaCommentDots className="text-xl" />
  </button>
</div>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6">
        {activeTab === "profile" && (
          <div className="flex flex-col items-center">
            <img
              src={realtor.photo}
              alt={realtor.name}
              className="w-36 h-36 rounded-full object-cover mb-4 border-4 border-white shadow-lg"
            />
            <h1 className="text-2xl font-bold mb-2">{realtor.name}</h1>
            <p className="text-lg text-gray-400 mb-1">📍 {realtor.city}</p>
            <p className="text-lg text-gray-400 mb-1">🏢 {realtor.company}</p>
            <p className="text-lg text-gray-400 mb-4">📞 {realtor.phone}</p>
          </div>
        )}

        {activeTab === "listings" && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2">Address</th>
                  <th className="px-4 py-2">Views</th>
                  <th className="px-4 py-2">Clicks</th>
                  <th className="px-4 py-2">Comments</th>
                  <th className="px-4 py-2">Edit</th>
                  <th className="px-4 py-2">Archive</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    address: "123 Maple St, Toronto",
                    views: 120,
                    clicks: 40,
                    comments: 5,
                  },
                  {
                    address: "456 Oak Ave, Richmond Hill",
                    views: 98,
                    clicks: 32,
                    comments: 3,
                  },
                  {
                    address: "789 Pine Rd, Oakville",
                    views: 160,
                    clicks: 58,
                    comments: 8,
                  },
                ].map((listing, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
                  >
                    <td className="px-4 py-2">{listing.address}</td>
                    <td className="px-4 py-2">{listing.views}</td>
                    <td className="px-4 py-2">{listing.clicks}</td>
                    <td className="px-4 py-2">{listing.comments}</td>
                    <td className="px-4 py-2">
                      <button className="text-blue-400 hover:text-blue-600">
                        <FaEdit />
                      </button>
                    </td>
                    <td className="px-4 py-2">
                      <button className="text-red-400 hover:text-red-600">
                        <FaArchive />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
{activeTab === "add" && (
  <div className="space-y-8">
    <h2 className="text-xl font-bold text-center">Choose Method</h2>

    {/* Retrieve MLS Listing */}
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2">🔎 Retrieve MLS Listing</h3>
      <input
        type="text"
        placeholder="Enter MLS Number"
        className="w-full p-3 text-black rounded border border-gray-600"
      />
<button
  onClick={() => setShowTemplateModal(true)}
  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
>
  Retrieve and Edit
</button>

    </div>
{showTemplateModal && (
  <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
    <div className="relative bg-white text-black rounded-2xl p-6 w-full max-w-xl shadow-2xl">
      {/* Close Button */}
      <button
        onClick={() => setShowTemplateModal(false)}
        className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl font-bold"
        aria-label="Close"
      >
        ✕
      </button>

      {/* Title with Icon */}
      <div className="flex items-center justify-center mb-4">
        <span className="text-blue-600 text-2xl mr-2">🖼️</span>
        <h2 className="text-xl font-bold text-center">
          Choose a template for your listing collage
        </h2>
      </div>

      {/* Image slider */}
      <div className="flex overflow-x-auto space-x-4 pb-2">
        {["listing_template_1.jpeg", "listing_template_2.jpeg", "listing_template_3.jpeg"].map(
          (img, idx) => (
            <img
              key={idx}
              src={`/${img}`}
              alt={`Template ${idx + 1}`}
              className="h-32 rounded-lg border border-gray-300 cursor-pointer hover:scale-105 transition-transform duration-200"
            />
          )
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => setShowTemplateModal(false)}
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold shadow"
      >
        Next →
      </button>
    </div>
  </div>
)}



    {/* Create New Listing */}
    <div className="bg-gray-800 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-2">📸 Create New Listing</h3>
      <input
        type="text"
        placeholder="Property Address"
        className="w-full p-3 mb-3 text-black rounded border border-gray-600"
      />
      <input
        type="file"
        multiple
        className="w-full mb-4 text-white"
        accept="image/*"
      />
<button
  onClick={() => setShowCreateModal(true)}
  className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded text-white font-semibold"
>
  Retrieve and Edit
</button>
    </div>
  </div>
)}
{showCreateModal && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-white text-black p-4 rounded-lg w-full max-w-md shadow-xl relative text-sm">
      {/* Close Button */}
      <button
        onClick={() => setShowCreateModal(false)}
        className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
      >
        ✕
      </button>

      {/* AI Suggestion */}
      <h2 className="text-lg font-bold mb-3">💡 AI Listing Preview</h2>
      <p className="italic text-gray-700 mb-4 leading-relaxed">
        🏡 Elegant 3-bed detached home w/ 2,100 sqft of sunlit space, quartz kitchen, finished basement, near top-rated schools & lush parks — ideal for families.
      </p>

      {/* Editable Fields with Icons */}
      <form className="space-y-3">
        <div className="flex gap-2">
          <div className="w-1/2 flex items-center gap-2">
            🛏️
            <input type="number" defaultValue={3} placeholder="Beds" className="flex-1 border rounded px-2 py-1" />
          </div>
          <div className="w-1/2 flex items-center gap-2">
            🛁
            <input type="number" defaultValue={2} placeholder="Baths" className="flex-1 border rounded px-2 py-1" />
          </div>
        </div>

        <div className="flex items-center gap-2">
          📐
          <input type="text" defaultValue="2,100 sqft" placeholder="Area" className="w-full border rounded px-2 py-1" />
        </div>

        <div className="flex items-center gap-2">
          🏗️
          <input type="number" defaultValue={2012} placeholder="Year Built" className="w-full border rounded px-2 py-1" />
        </div>

        <div className="flex items-center gap-2">
          🚶
          <input type="number" defaultValue={82} placeholder="Walk Score" className="w-full border rounded px-2 py-1" />
        </div>

        <div className="flex items-center gap-2">
          💰
          <input type="number" defaultValue={950000} placeholder="Price" className="w-full border rounded px-2 py-1" />
        </div>

        {/* School Info */}
        <div className="mt-3">
          <label className="block font-medium mb-1">🎓 Nearby Schools:</label>
          <div className="space-y-2">
            <input type="text" defaultValue="Maple Leaf PS - Rank: 9.2/10" className="w-full border rounded px-2 py-1" />
            <input type="text" defaultValue="Elm Academy - Rank: 8.5/10" className="w-full border rounded px-2 py-1" />
            <input type="text" defaultValue="Cedar Ridge HS - Rank: 9.0/10" className="w-full border rounded px-2 py-1" />
          </div>
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 font-semibold"
                  onClick={() => setShowCreateModal(false)}

        >
            
          Continue →
        </button>
      </form>
    </div>
  </div>
)}

 {activeTab === "insights" && (
          <div className="space-y-10">
            {[
              {
                address: "123 Maple St, Toronto",
                demographics: [
                  { label: "Gen Z (18-24)", percent: 45 },
                  { label: "Millennials (25-34)", percent: 30 },
                  { label: "Others", percent: 25 },
                ],
                genderSplit: { male: 60, female: 40 },
              },
              {
                address: "456 Oak Ave, Richmond Hill",
                demographics: [
                  { label: "Millennials (25-34)", percent: 55 },
                  { label: "Gen X (35-44)", percent: 35 },
                  { label: "Others", percent: 10 },
                ],
                genderSplit: { male: 40, female: 60 },
              },
            ].map((listing, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-lg p-4 shadow-md border border-gray-700"
              >
                <h4 className="text-lg font-semibold mb-2">{listing.address}</h4>

                <div className="mb-3">
                  <p className="text-sm font-medium text-gray-300 mb-1">
                    👥 Age Demographics:
                  </p>
                  {listing.demographics.map((d, i) => (
                    <div key={i} className="mb-1">
                      <div className="flex justify-between text-sm">
                        <span>{d.label}</span>
                        <span>{d.percent}%</span>
                      </div>
                      <div className="w-full bg-gray-700 h-2 rounded">
                        <div
                          className="h-2 bg-blue-500 rounded"
                          style={{ width: `${d.percent}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-300 mb-1">🚻 Gender:</p>
                  <div className="flex items-center gap-4 text-sm">
                    {["male", "female"].map((gender) => (
                      <div className="flex-1" key={gender}>
                        <div className="flex justify-between">
                          <span>{gender.charAt(0).toUpperCase() + gender.slice(1)}</span>
                          <span>{listing.genderSplit[gender]}%</span>
                        </div>
                        <div className="w-full bg-gray-700 h-2 rounded">
                          <div
                            className={`h-2 rounded ${gender === "male" ? "bg-blue-400" : "bg-pink-400"}`}
                            style={{ width: `${listing.genderSplit[gender]}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Related Listings */}
                <div className="mt-6 overflow-x-auto">
                  <p className="text-sm font-medium text-gray-300 mb-2">
                    🔄 People who also viewed:
                  </p>
                  <table className="text-sm min-w-[500px] text-left text-gray-300 border border-gray-700">
                    <thead className="bg-gray-700 text-xs uppercase">
                      <tr>
                        <th className="px-3 py-2">Address</th>
                        <th className="px-3 py-2">Beds</th>
                        <th className="px-3 py-2">Baths</th>
                        <th className="px-3 py-2">City</th>
                        <th className="px-3 py-2">Price</th>
                        <th className="px-3 py-2">Area</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800 divide-y divide-gray-700">
                      {[
                        {
                          address: "555 Elm St",
                          beds: 3,
                          baths: 2,
                          city: "Toronto",
                          price: "$950,000",
                          area: "1,850 sqft",
                        },
                        {
                          address: "888 Cedar Blvd",
                          beds: 4,
                          baths: 3,
                          city: "Oakville",
                          price: "$1,200,000",
                          area: "2,200 sqft",
                        },
                      ].map((alt, i) => (
                        <tr key={i}>
                          <td className="px-3 py-2">{alt.address}</td>
                          <td className="px-3 py-2">{alt.beds}</td>
                          <td className="px-3 py-2">{alt.baths}</td>
                          <td className="px-3 py-2">{alt.city}</td>
                          <td className="px-3 py-2">{alt.price}</td>
                          <td className="px-3 py-2">{alt.area}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "inbox" && (
          <div className="text-center text-gray-400">No messages yet.</div>
        )}
      </div>

      {/* Sticky Bottom Tabs */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 flex justify-around text-xs z-50">
        <Link to="/" className="flex flex-col items-center w-full py-3 text-gray-400 hover:text-white">
          <FaHome className="text-lg mb-1" />
          Home
        </Link>
        <button
          className={`flex flex-col items-center w-full py-3 ${
            activeTab === "listings" ? "text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("listings")}
        >
          <FaListUl className="text-lg mb-1" />
          My Listings
        </button>
        <button
  className={`flex flex-col items-center w-full py-3 ${
    activeTab === "add" ? "text-white" : "text-gray-400"
  }`}
  onClick={() => setActiveTab("add")}
>
  <FaEdit className="text-lg mb-1" />
  Add Listing
</button>

        <button
          className={`flex flex-col items-center w-full py-3 ${
            activeTab === "insights" ? "text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("insights")}
        >
          <FaChartPie className="text-lg mb-1" />
          Insights
        </button>
        <button
          className={`flex flex-col items-center w-full py-3 ${
            activeTab === "profile" ? "text-white" : "text-gray-400"
          }`}
          onClick={() => setActiveTab("profile")}
        >
          <FaUser className="text-lg mb-1" />
          My Profile
        </button>
      </div>
    </div>
  );
}
