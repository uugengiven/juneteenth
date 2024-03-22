// app/admin/events/new/page.tsx
"use client";

import { useState } from "react";
import * as Label from "@radix-ui/react-label";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useRouter } from "next/navigation";
import EventTypes from "@/data/models/EventTypes";

const NewEventPage = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [type, setType] = useState("Parade");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [featured, setFeatured] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      date,
      time,
      type,
      image,
      description,
      location,
      featured,
    };

    try {
      const response = await fetch("/api/admin/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        router.push("/admin/events");
        // Reset form fields or show success message
      } else {
        console.error("Error submitting form:", response.statusText);
        // Show error message to the user
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // Show error message to the user
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
          New Event
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label.Root
              className="block text-lg font-medium text-gray-700"
              htmlFor="name"
            >
              Event Name
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder="Event Name"
            />
          </div>
          <div>
            <Label.Root
              className="block text-lg font-medium text-gray-700"
              htmlFor="date"
            >
              Date
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <input
              id="date"
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder="Event Date"
            />
          </div>
          <div>
            <Label.Root
              className="block text-lg font-medium text-gray-700"
              htmlFor="time"
            >
              Time
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <input
              id="time"
              type="text"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder="Event Time"
            />
          </div>
          <div>
            <Label.Root className="block text-lg font-medium text-gray-700">
              Event Type
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <RadioGroup.Root
              className="mt-2 space-y-2"
              value={type}
              onValueChange={setType}
            >
              {EventTypes.map((eventType) => {
                return (
                  <div key={eventType} className="flex items-center">
                    <RadioGroup.Item
                      className="mr-2 w-4 h-4 rounded-full border border-gray-300 flex-shrink-0 shadow-md"
                      value={eventType}
                      id={`eventType${eventType}`}
                    >
                      <RadioGroup.Indicator className="w-full h-full border-2 border-white shadow-md bg-green-700 rounded-full flex justify-center align-center" />
                    </RadioGroup.Item>
                    <label htmlFor={`eventType${eventType}`}>{eventType}</label>
                  </div>
                );
              })}
            </RadioGroup.Root>
          </div>
          <div>
            <Label.Root
              className="block text-lg font-medium text-gray-700"
              htmlFor="image"
            >
              Image URL
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <input
              id="image"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder="Image URL"
            />
          </div>
          <div>
            <Label.Root
              className="block text-lg font-medium text-gray-700"
              htmlFor="description"
            >
              Description
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder="Event Description"
            />
          </div>
          <div>
            <Label.Root
              className="block text-lg font-medium text-gray-700"
              htmlFor="location"
            >
              Location
              <span className="text-red-700 px-1">*</span>
            </Label.Root>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-1 block w-full border-b border-gray-300 focus:border-green-700 focus:outline-none"
              required
              placeholder="Event Location"
            />
          </div>
          <div>
            <Label.Root
              className="block text-lg font-medium text-gray-700"
              htmlFor="featured"
            >
              Featured
            </Label.Root>
            <input
              id="featured"
              type="checkbox"
              checked={featured}
              onChange={(e) => setFeatured(e.target.checked)}
              className="mt-1"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 shadow-md text-lg font-medium rounded-md text-white bg-gradient-to-r from-red-700 to-yellow-500 hover:from-red-800 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewEventPage;