import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";

/* eslint-disable react/prop-types */
const JobList = ({ j }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  let desc = j.description;

  if (!showFullDesc) {
    desc = desc.substring(0, 90) + "...";
  }

  const onhandleClick = () => {
    setShowFullDesc(!showFullDesc);
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{j.type}</div>
          <h3 className="text-xl font-bold">{j.title}</h3>
        </div>
        <div className="mb-5">{desc}</div>
        <button
          onClick={onhandleClick}
          className="text-indigo-500 mb-5 hover:text-indigo-600"
        >
          {showFullDesc ? "More" : "Less"}
        </button>
        <h3 className="text-indigo-500 mb-2">{j.salary}</h3>
        <div className="border border-gray-100 mb-5"></div>
        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline mb-1 mr-1 text-lg" />
            {j.location}
          </div>
          <a
            href={`/job/${j.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default JobList;
