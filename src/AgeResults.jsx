import React from "react";
import { useState } from "react";

export const AgeResults = (formData) => {
  const [lapsedYears, setLapsedYears] = useState("- - ");
  const [lapsedMonths, setLapsedMonths] = useState("- - ");
  const [lapsedDays, setLapsedDays] = useState("- - ");

  AgeResults.calculateAge = (formData) => {
    let currentDate = new Date();
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth() + 1;
    let currentDay = new Date().getDate();
    console.log(currentYear, currentMonth, currentDay);

    console.log(formData);
    const formYear = parseInt(formData.year);
    const formMonth = parseInt(formData.month);
    const formDay = parseInt(formData.day);
    console.log(formYear, formMonth, formDay);

    let placeholderYears;
    let placeholderMonths;
    let placeholderDays;

    if (isNaN(formYear) || isNaN(formMonth) || isNaN(formDay)) {
      setLapsedYears(0);
      setLapsedMonths(0);
      setLapsedDays(0);
      return;
    }

    placeholderMonths = currentMonth - formMonth;
    if (currentDay < formDay) {
      placeholderMonths = placeholderMonths - 1;
    }

    placeholderYears = currentYear - formYear;
    if (currentMonth * 100 + currentDay < formMonth * 100 + formDay) {
      placeholderYears = placeholderYears - 1;
      placeholderMonths = placeholderMonths + 12;
    }

    placeholderDays = Math.floor(
      (currentDate.getTime() -
        new Date(
          formYear + placeholderYears,
          formMonth + placeholderMonths - 1,
          formDay
        ).getTime()) /
        (24 * 60 * 60 * 1000)
    );

    setLapsedYears(placeholderYears);
    setLapsedMonths(placeholderMonths);
    setLapsedDays(placeholderDays);
  };

  return (
    <div className="ml-10 grid sm:gap-2 pt-10">
      <p className="text-guide-purple sm:text-7xl italic font-extrabold text-6xl pb-3">
        {lapsedYears}
        <span className="text-guide-off-black">years</span>
      </p>
      <p className="text-guide-purple sm:text-7xl italic font-extrabold text-6xl pb-3">
        {lapsedMonths} <span className="text-guide-off-black">months</span>
      </p>
      <p className="text-guide-purple sm:text-7xl italic font-extrabold text-6xl pb-3">
        {lapsedDays} <span className="text-guide-off-black">days</span>
      </p>
    </div>
  );
};
