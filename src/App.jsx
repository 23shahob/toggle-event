import React, { useState } from "react";
import "./input.css";
import "./index.css";

const App = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className="flex w-[800px] items-center gap-20 rounded-xl bg-white p-12">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[blue] text-xl font-semibold   text-white">
            1
          </span>
          <p
            onClick={() => toggleTab(1)}
            className="first text-xl font-semibold text-black"
          >
            Choose title
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[blue] text-xl font-semibold   text-white">
            2
          </span>
          <p
            onClick={() => {
              toggleTab(2);
            }}
            className="second text-xl font-semibold text-gray-400 hover:text-black"
          >
            Choose description
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex h-8 w-8 items-center justify-center rounded-[50%] bg-[blue] text-xl font-semibold   text-white">
            3
          </span>
          <p
            onClick={() => toggleTab(3)}
            className="third text-xl font-semibold text-gray-400 hover:text-black"
          >
            Confirm data
          </p>
        </div>
      </div>
      <div className="w-[55%]">
        <div className={toggle === 1 ? "show-content" : "content"}>
          <p className="mb-10 text-xl font-semibold">Choose title content</p>
          <button
            onClick={() => toggleTab(2)}
            className="rounded-lg bg-gray-200 px-5 py-4 text-xl font-semibold"
          >
            Submit title
          </button>
        </div>
        <div className={toggle === 2 ? "show-content" : "content"}>
          <p className="mb-10 text-xl font-semibold">
            Choose description content
          </p>
          <div className="flex gap-1">
            <button
              onClick={() => toggleTab(1)}
              className="rounded-lg bg-gray-200 px-5 py-4 text-xl font-semibold"
            >
              Back
            </button>
            <button
              onClick={() => toggleTab(3)}
              className="rounded-lg bg-gray-200 px-5 py-4 text-xl font-semibold"
            >
              Submit description
            </button>
          </div>
        </div>
        <div className={toggle === 3 ? "show-content" : "content"}>
          <p className="mb-10 text-xl font-semibold">Are you happy now?</p>
          <div className="flex gap-1">
            <button
              onClick={() => toggleTab(2)}
              className="rounded-lg bg-gray-200 px-5 py-4 text-xl font-semibold"
            >
              No, go back
            </button>
            <button
              onClick={() => {
                toggleTab(4);
              }}
              className="butto rounded-lg bg-gray-200 px-5 py-4 text-xl font-semibold"
            >
              Yes, go ahead
            </button>
          </div>
        </div>
        <div className={toggle === 4 ? "show-content" : "content"}>
          <p className="mb-10 text-xl font-semibold">
            Ok, we're done. Thanks for sending us your data!
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
