import React from "react";
import { useState } from "react";
import arrowPurple from "./assets/images/down-arrow-purple.svg";
import { AgeResults } from "./AgeResults";

export const AgeInput = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    AgeResults.calculateAge(formData);
  };

  return (
    <>
      <div className="relative w-full h-[32%]">
        <div className="border-b-2 border-b-zinc-300 sm:pb-12 sm:ml-10 sm:mt-10 sm:mr-40 mr-8 ml-8 mt-12 pb-16">
          <form onSubmit={handleSubmit} className="flex w-fit h-full">
            <div className="grid sm:pr-6 pr-5">
              <label
                htmlFor="day"
                style={{ fontSize: "0.8rem" }}
                className="text-guide-smokey-grey sm:tracking-[0.075em] tracking-[0.18em] mb-2 font-semibold"
              >
                DAY
              </label>
              <input
                type="number"
                min="1"
                max="31"
                id="day"
                value={formData.day}
                onChange={(e) =>
                  setFormData({ ...formData, day: e.target.value })
                }
                placeholder="DD"
                required
                className="p-4 h-14 text-[1.75rem] font-bold border border-guide-light-grey focus:border-guide-purple outline-none sm:w-32 w-24 rounded-lg bg-guide-white appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="grid sm:pr-6 pr-5">
              <label
                htmlFor="month"
                style={{ fontSize: "0.8rem" }}
                className="text-guide-smokey-grey sm:tracking-[0.075em] tracking-[0.18em] mb-2 font-semibold"
              >
                MONTH
              </label>
              <input
                type="number"
                min="1"
                max="12"
                id="month"
                value={formData.month}
                onChange={(e) =>
                  setFormData({ ...formData, month: e.target.value })
                }
                placeholder="MM"
                required
                className="p-4 h-14 text-[1.75rem] font-bold border border-guide-light-grey focus:border-guide-purple outline-none sm:w-32 w-24 rounded-lg bg-guide-white appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="grid sm:pr-6 pr-5">
              <label
                htmlFor="year"
                style={{ fontSize: "0.8rem" }}
                className="text-guide-smokey-grey sm:tracking-[0.075em] tracking-[0.18em] mb-2 font-semibold"
              >
                YEAR
              </label>
              <input
                type="number"
                min="1900"
                max="2023"
                id="year"
                value={formData.year}
                onChange={(e) => {
                  setFormData({ ...formData, year: e.target.value });
                }}
                placeholder="YYYY"
                required
                className="p-4 h-14 text-[1.75rem] font-bold border border-guide-light-grey focus:border-guide-purple outline-none sm:w-32 w-[6.8rem] rounded-lg bg-guide-white appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
            <div className="absolute sm:right-8 sm:bottom-0 sm:mr-[3.5rem] right-[170px] bottom-[-28px]">
              <input type="image" src={arrowPurple} className="w-[4.5rem] " />
            </div>
          </form>
        </div>
      </div>
      <div>
        <AgeResults formData={formData} />
      </div>
    </>
  );
};
