'use client';

import React, { useState } from 'react';

export default function QuoteGenerator() {
  const [projectDetails, setProjectDetails] = useState({
    clientName: '',
    clientEmail: '',
    agentName: '',
    agentEmail: '',
    propertyAddress: '',
    startDate: ''
  });

  const [rooms, setRooms] = useState([
    { name: '', itemsToSupply: [], itemsToKeep: [], itemsToRemove: [] }
  ]);
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <h1 className="text-2xl font-bold mb-6">Property Styling Quote</h1>
        
        {/* Project Details */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Project Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Client Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={projectDetails.clientName}
                onChange={(e) => setProjectDetails({
                  ...projectDetails,
                  clientName: e.target.value
                })}
              />
            </div>
            <div>
              <label className="block mb-2">Client Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={projectDetails.clientEmail}
                onChange={(e) => setProjectDetails({
                  ...projectDetails,
                  clientEmail: e.target.value
                })}
              />
            </div>
            <div>
              <label className="block mb-2">Property Address</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={projectDetails.propertyAddress}
                onChange={(e) => setProjectDetails({
                  ...projectDetails,
                  propertyAddress: e.target.value
                })}
              />
            </div>
            <div>
              <label className="block mb-2">Start Date</label>
              <input
                type="date"
                className="w-full p-2 border rounded"
                value={projectDetails.startDate}
                onChange={(e) => setProjectDetails({
                  ...projectDetails,
                  startDate: e.target.value
                })}
              />
            </div>
          </div>
        </div>{/* Rooms Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Rooms</h2>
            <button
              onClick={() => setRooms([...rooms, { name: '', itemsToSupply: [], itemsToKeep: [], itemsToRemove: [] }])}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Room
            </button>
          </div>

          {rooms.map((room, roomIndex) => (
            <div key={roomIndex} className="mb-6 p-4 border rounded">
              <div className="mb-4">
                <label className="block mb-2">Room Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={room.name}
                  onChange={(e) => {
                    const newRooms = [...rooms];
                    newRooms[roomIndex].name = e.target.value;
                    setRooms(newRooms);
                  }}
                />
              </div>

              {/* Items to Supply */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="block">Items to Supply</label>
                  <button
                    onClick={() => {
                      const newRooms = [...rooms];
                      newRooms[roomIndex].itemsToSupply.push('');
                      setRooms(newRooms);
                    }}
                    className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                  >
                    + Add Item
                  </button>
                </div>
                {room.itemsToSupply.map((item, itemIndex) => (
                  <input
                    key={itemIndex}
                    type="text"
                    placeholder="Item description"
                    className="w-full p-2 border rounded mb-2"
                    value={item}
                    onChange={(e) => {
                      const newRooms = [...rooms];
                      newRooms[roomIndex].itemsToSupply[itemIndex] = e.target.value;
                      setRooms(newRooms);
                    }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>{/* Quote Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Quote Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Furniture Hire (4 weeks)</span>
              <span>${baseRates.furnitureHire}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery & Transport</span>
              <span>${baseRates.delivery}</span>
            </div>
            <div className="flex justify-between">
              <span>Staging (est. 4 hours)</span>
              <span>${baseRates.stagingHourly * 4}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total (ex GST)</span>
                <span>${calculateTotal()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>GST</span>
                <span>${calculateTotal() * 0.1}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <span>Total (inc GST)</span>
                <span>${calculateTotal() * 1.1}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Generate Quote Button */}
        <button
          className="w-full bg-blue-500 text-white py-3 rounded mt-6 hover:bg-blue-600"
          onClick={() => {
            alert('Quote generated! Total: $' + (calculateTotal() * 1.1));
          }}
        >
          Generate Quote
        </button>
      </div>
    </div>
  );
}

  const baseRates = {
    furnitureHire: 2300,
    stagingHourly: 130,
    delivery: 1480,
    plantHire: 350
  };

  const calculateTotal = () => {
     let total = baseRates.furnitureHire + baseRates.delivery;
    total += baseRates.stagingHourly * 4;
    return total;
  };
