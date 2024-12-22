import logo from "../assets/images/logo.png";
import bill from "../assets/images/notification.png";
import message from "../assets/images/message.png";
import search from "../assets/images/search.png";
import user from "../assets/images/Avatar.png";
import star from "../assets/images/Vector.png";
import chart from "../assets/images/chart.png";

// cards images
import img1 from "../assets/images/1.png";
import img2 from "../assets/images/2.png";
import img3 from "../assets/images/3.png";
import img4 from "../assets/images/4.png";
import img5 from "../assets/images/5.png";
import img6 from "../assets/images/6.png";
import img7 from "../assets/images/7.png";
import img8 from "../assets/images/8.png";
import img9 from "../assets/images/9.png";
import img10 from "../assets/images/10.png";
import img11 from "../assets/images/11.png";
import img12 from "../assets/images/12.png";
import img13 from "../assets/images/13.png";
import img14 from "../assets/images/14.png";

// face images
import face1 from "../assets/images/face-1.png";
import face2 from "../assets/images/face-2.png";
import face3 from "../assets/images/face-3.png";
import face4 from "../assets/images/face-4.png";

import { useState } from "react";

function Bootcamp() {
  // collapse btn stat
  const [collapse, setCollapse] = useState(false);
  // tabs show hide state
  const [tabs, setTabs] = useState(true);
  //   active tab data show state
  const [activeTab, setActiveTab] = useState("Photoshop");
  //   cards Data
  const cards = {
    "UI,UX": [
      {
        img: img1,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img2,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img3,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img4,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img5,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Photogrophy: [
      {
        img: img6,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img7,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img8,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img10,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Photoshop: [
      {
        img: img11,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img12,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img13,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img1,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Marketing: [
      {
        img: img6,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img1,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img8,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    "Islamic Studies": [
      {
        img: img7,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img13,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img5,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img3,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img12,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Business: [
      {
        img: img3,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img6,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img10,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
  };
  const cards2 = {
    "UI,UX": [
      {
        img: img6,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img7,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img8,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img10,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Photogrophy: [
      {
        img: img1,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img2,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img3,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img4,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img5,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Marketing: [
      {
        img: img11,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img12,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img13,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img1,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Photoshop: [
      {
        img: img4,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img1,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img8,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Business: [
      {
        img: img7,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img13,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img5,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img3,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img12,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    "Islamic Studies": [
      {
        img: img3,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img6,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img10,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
  };
  const cards3 = {
    Photogrophy: [
      {
        img: img6,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img7,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img8,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img10,
        title: "Photogrophy complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    "UI,UX": [
      {
        img: img1,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img2,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img3,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img4,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img5,
        title: "UI/UX Design complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    "Islamic Studies": [
      {
        img: img11,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img12,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img13,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img1,
        title: "Photoshop complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Business: [
      {
        img: img4,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img1,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img8,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Marketing complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Photoshop: [
      {
        img: img7,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img13,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img5,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img3,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img12,
        title: "Islamic Studies complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
    Marketing: [
      {
        img: img3,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
        offer: "Papuler",
      },
      {
        img: img6,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img9,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img10,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
      {
        img: img14,
        title: "Business complate guide from zero to hero",
        rating: 4.5,
        by: "Upskill",
        type: "Introduction",
      },
    ],
  };

  //   Follow Cards Data
  const followCardsData = [
    {
      img: face1,
      name: "AZ Coder",
      action: "Instructor",
      btn: "Connect",
    },
    {
      img: face2,
      name: "Mr Sahel",
      action: "Instructor",
      btn: "Connect",
      active: "active",
    },
    {
      img: face3,
      name: "Mr Zia",
      action: "Instructor",
      btn: "Connect",
    },
    {
      img: face4,
      name: "Mr Naved",
      action: "Instructor",
      btn: "Connect",
    },
    {
      img: face2,
      name: "AZ Coder",
      action: "Instructor",
      btn: "Connect",
    },
    {
      img: face1,
      name: "Mr Sahel",
      action: "Instructor",
      btn: "Connect",
    },
    {
      img: face4,
      name: "Mr Zia",
      action: "Instructor",
      btn: "Connect",
    },
    {
      img: face3,
      name: "Mr Naved",
      action: "Instructor",
      btn: "Connect",
      active: "active",
    },
  ];

  return (
    <>
      {/* navbr  start */}
      <nav className="py-4 px-2 sm:px-8 lg:px-14  w-full flex items-center justify-between shadow-sm fixed top-0 left-0 bg-white z-50 ">
        {/* logo and menus div start */}
        <div className="flex items-center justify-between gap-16">
          <img src={logo} alt="logo" className="w-16" />
          <ul className="hidden md:flex items-center md:gap-3 lg:gap-6 text-gray-800  font-sans font-semibold">
            <li className="flex  items-center justify-center gap-2 ">
              Explore Courses
              <svg
                className="w-4 h-4 text-gray-800 mt-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </li>
            <li>
              UPSKILL <span className="text-[#167cff]">Plus</span>
            </li>
            <li>Teach</li>
          </ul>
        </div>
        {/* logo and menus div end */}

        {/* search and btns div start */}
        <div className="flex items-center justify-between gap-5  ">
          <form action="" className="sm:block hidden">
            <div className="relative">
              <input
                type="text"
                className=" h-auto ps-4 pr-12 py-[6px]  border-[1.5px] rounded-md outline-none text-gray-600"
                placeholder="what do you want  learn ?"
                onClick={() => setTabs(true)}
              />
              <button className="absolute  right-0 top-0 h-full bg-[#448ad0] rounded-r-md p-2">
                <svg
                  className="w-5 h-5 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>

          {/* small screen search btn */}
          <button
            className="w-8 h-8 sm:hidden bg-[#448ad0] flex items-center justify-center rounded-full"
            onClick={() => setTabs(true)}
          >
            <svg
              className="w-5 h-5 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>

          <div className="lg:flex items-center justify-between gap-5 hidden">
            <div className="w-[2px] h-10 bg-gray-200 rounded-lg"></div>

            <button className="p-[10px] rounded-lg bg-[#e4f6fe]">
              <img src={bill} alt="bill" className="w-5" />
            </button>
            <button className="p-[10px] rounded-lg bg-[#e4f6fe] relative">
              <img src={message} alt="bill" className="w-5" />
              <div className="w-2 h-2 bg-green-500 rounded-full absolute top-2 right-2"></div>
            </button>

            <img src={user} alt="" />
          </div>

          {/* collapse btn */}
          <div onClick={() => setCollapse(!collapse)}>
            {collapse ? (
              <svg
                className="w-8 h-8 text-gray-800 md:hidden cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            ) : (
              <svg
                className="w-8 h-8 text-gray-800 md:hidden cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h10"
                />
              </svg>
            )}
          </div>

          {/* collapse div start */}
          {collapse && (
            <div className="w-full sm:w-80 h-auto py-4 rounded-lg bg-slate-100 shadow-lg  absolute top-16 right-0 z-50 md:hidden flex items-center justify-center">
              <ul className="flex flex-col gap-3 font-sans font-medium">
                <li>Explore Coursess</li>
                <li>UPSKILLPlus</li>
                <li>Teach</li>
              </ul>
            </div>
          )}
          {/* collapse div end */}
        </div>
        {/* search and btns div end */}
      </nav>
      {/* navbr  end */}

      {/* tabs div start */}
      {tabs && (
        <div
          className={` py-4 px-2 sm:px-8 lg:px-14 rounded-lg shadow-sm z-10 w-full bg-white  duration-500 mt-20 ${
            tabs ? "max-h-96" : "max-h-0"
          } `}
        >
          <div className="w-full flex items-center justify-between">
            <h1 className="text-xl font-sans font-medium">
              Most Searched Topics
            </h1>
            <svg
              className="w-6 h-6 text-gray-800 cursor-pointer"
              onClick={() => setTabs(false)}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </div>

          <div className="mt-4">
            <ul className="flex gap-2 md:gap-6 font-sans flex-wrap items-center justify-center lg:justify-start">
              {Object.keys(cards).map((tab, index) => (
                <li
                  key={index}
                  className={`px-4 py-[7px] cursor-pointer border rounded-full duration-300  ${
                    activeTab === tab
                      ? "bg-[#232d53] text-white"
                      : "hover:bg-[#f5f5f5] text-gray-400"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {/* tabs div end */}

      {/* main section start  */}
      <main className="px-2 sm:px-8 lg:px-14 py-10 w-full h-auto ">
        {/* best celling div start */}
        <div>
          <div className="flex gap-5 items-center mt-10 mb-8">
            <h1 className="md:text-xl font-sans font-medium">
              Best Celling Courses
            </h1>
            <div className="w-[2px] h-6 bg-gray-200 rounded-full"></div>
            <p className="text-[12px] font-sans font-semibold text-[#167cff]">
              SEE ALL
            </p>
          </div>

          {/* cards div start  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-5">
            {cards[activeTab].length > 0 ? (
              cards[activeTab].map((card, index) => (
                <div className="h-auto" key={index}>
                  <div className="relative">
                    {card.offer ? (
                      <button className="py-1 px-2 bg-[#fa4682] text-white absolute top-1 left-1 rounded-lg text-sm">
                        {card.offer}
                      </button>
                    ) : null}
                    <img src={card.img} alt="" className="w-full h-full" />
                    <div className="flex items-center justify-between p-2 absolute bottom-0 w-full bg-gray-800/30">
                      <div className="flex items-center gap-2">
                        <img src={star} alt="" />
                        <p className="text-sm font-sans font-medium text-white">
                          {card.rating}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={chart} alt="" />
                        <p className="text-sm font-sans font-medium text-white">
                          {card.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-3">
                    <h1 className="text-sm font-sans font-medium">
                      {card.title}{" "}
                    </h1>
                    <p className="text-xs font-sans font-light text-gray-400 mt-3">
                      by :{" "}
                      <span className="text-[#167cff] font-sans font-medium">
                        {card.by}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-gray-400 font-sans font-medium">
                No Courses Found
              </h1>
            )}
          </div>
          {/* cards div end */}
        </div>
        {/* best celling div end */}

        {/* New Courses div start */}
        <div className="mt-10">
          <div className="flex gap-5 items-center mt-10 mb-8">
            <h1 className="md:text-xl font-sans font-medium">
              New Courses in <span className="text-[#167cff]">Upskill</span>
            </h1>
            <div className="w-[2px] h-6 bg-gray-200 rounded-full"></div>
            <p className="text-[12px] font-sans font-semibold text-[#167cff]">
              SEE ALL
            </p>
          </div>

          {/* cards div start  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-5">
            {cards2[activeTab].length > 0 ? (
              cards2[activeTab].map((card, index) => (
                <div className="h-auto" key={index}>
                  <div className="relative">
                    {card.offer ? (
                      <button className="py-1 px-2 bg-[#fa4682] text-white absolute top-1 left-1 rounded-lg text-sm">
                        {card.offer}
                      </button>
                    ) : null}
                    <img src={card.img} alt="" className="w-full h-full" />
                    <div className="flex items-center justify-between p-2 absolute bottom-0 w-full bg-gray-800/30">
                      <div className="flex items-center gap-2">
                        <img src={star} alt="" />
                        <p className="text-sm font-sans font-medium text-white">
                          {card.rating}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={chart} alt="" />
                        <p className="text-sm font-sans font-medium text-white">
                          {card.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-3">
                    <h1 className="text-sm font-sans font-medium">
                      {card.title}{" "}
                    </h1>
                    <p className="text-xs font-sans font-light text-gray-400 mt-3">
                      by :{" "}
                      <span className="text-[#167cff] font-sans font-medium">
                        {card.by}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-gray-400 font-sans font-medium">
                No Courses Found
              </h1>
            )}
          </div>
          {/* cards div end */}
        </div>
        {/* New Courses div end */}

        {/*  Most Readable  div start */}
        <div className="mt-10">
          <div className="flex gap-2 md:gap-5 items-center mt-10 mb-8">
            <h1 className="text-sm md:text-xl font-sans font-medium">
              Most Readable articles in{" "}
              <span className="text-[#167cff]">
                Upskill <span className="text-yellow-500 ">Read</span>
              </span>
            </h1>
            <div className="w-[2px] h-6 bg-gray-200 rounded-full"></div>
            <p className="text-[8px] md:text-[12px] font-sans font-semibold text-[#167cff]">
              SEE ALL
            </p>
          </div>

          {/* cards div start  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-5">
            {cards3[activeTab].length > 0 ? (
              cards3[activeTab].map((card, index) => (
                <div className="h-auto" key={index}>
                  <div className="relative">
                    {card.offer ? (
                      <button className="py-1 px-2 bg-[#fa4682] text-white absolute top-1 left-1 rounded-lg text-sm">
                        {card.offer}
                      </button>
                    ) : null}
                    <img src={card.img} alt="" className="w-full h-full" />
                    <div className="flex items-center justify-between p-2 absolute bottom-0 w-full bg-gray-800/30">
                      <div className="flex items-center gap-2">
                        <img src={star} alt="" />
                        <p className="text-sm font-sans font-medium text-white">
                          {card.rating}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <img src={chart} alt="" />
                        <p className="text-sm font-sans font-medium text-white">
                          {card.type}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-3">
                    <h1 className="text-sm font-sans font-medium">
                      {card.title}{" "}
                    </h1>
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-sans font-light text-gray-400 mt-3">
                        by :{" "}
                        <span className="text-[#167cff] font-sans font-medium">
                          {card.by}
                        </span>
                      </p>

                      <button className="px-4 py-[3px] rounded-full bg-slate-100 text-sm font-medium mt-4">
                        1 Oct 24
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-center text-gray-400 font-sans font-medium">
                No Courses Found
              </h1>
            )}
          </div>
          {/* cards div end */}
        </div>
        {/*  Most Readable  div end */}

        {/*  Follow People  div start */}
        <div className="mt-10">
          <div className="flex gap-5 items-center mt-10 mb-8">
            <h1 className="md:text-xl font-sans font-medium">
              Follow People in <span className="text-[#167cff]">Upskill</span>
            </h1>
            <div className="w-[2px] h-6 bg-gray-200 rounded-full"></div>
            <p className="text-[8px] md:text-[12px] font-sans font-semibold text-[#167cff]">
              SEE ALL PEOPLE
            </p>
          </div>

          {/* cards div start  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
            {followCardsData.map((card, index) => (
              <div
                key={index}
                className="py-2 flex items-center justify-around"
              >
                <img src={card.img} alt="" />
                <div className="flex items-center justify-between gap-5  ">
                  <div>
                    <h1 className="font-sans font-medium">{card.name}</h1>
                    <h1 className="text-sm text-gray-400">{card.action}</h1>
                  </div>
                  <button
                    className={`px-2 p-[3px] rounded-full border-[1.5px] border-[#167cff] text-[#167cff] hover:bg-[#167cff] hover:text-white duration-300 ${
                      card.active && "bg-[#167cff] text-white"
                    }`}
                  >
                    {card.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* cards div end */}
        </div>
        {/*  Follow People  div end */}
      </main>
      {/* main section end */}
    </>
  );
}

export default Bootcamp;
