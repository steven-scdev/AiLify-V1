// pages/form.tsx

import { useState, FormEvent } from "react";
import axios from "axios";

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const result = await axios.post("/api/saveToAirtable", formData);
      console.log("result");
      // Clear the form data after successful submission
      setFormData({
        name: "",
        email: "",
      });

      // Show the modal
      setShowModal(true);
      console.log("show", showModal);
    } catch (error) {
      console.error("Error saving data to Airtable:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex-row">
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mb-3 p-2 bg-gray appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mb-3 p-2 bg-gray appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
          />
        </div>
        <button
          className="cursor-pointer p-3 [border:none] pr-[31.031455993652344px] pl-[31.858543395996094px] bg-darkorange self-stretch rounded-lg flex flex-row items-start justify-start"
          type="submit"
        >
          Submit
        </button>
      </form>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p className="mb-4 text-lg">We received your information!</p>

            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
