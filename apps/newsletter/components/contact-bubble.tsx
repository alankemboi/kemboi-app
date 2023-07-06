"use client"

import { useState } from "react"

export function ContactBubble() {
  const [opened, setOpened] = useState(false)
  return (
    <>
      {opened && (
        <ul className="contact-bubble-popup fixed bottom-0 right-0 z-50 mb-24  transition-all duration-500 ease-in-out after:animate-pulse sm:mb-32">
          <li className="flex  border-red-100">
            <a
              href="mailto:alankemboi@gmail.com"
              className="shadow-button mb-1 ml-auto mr-4 inline-flex items-center space-x-2 rounded-full bg-white px-5 py-3 font-bold transition duration-300 hover:-translate-x-4 hover:text-gray-700"
            >
              <span className="pointer-events-none uppercase">
                Write an e-mail
              </span>
              <svg
                width="20"
                height="20"
                className="pointer-events-none inline-block h-6 w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z"
                ></path>
              </svg>{" "}
            </a>
          </li>
          <li className="flex">
            <a
              href="https://wa.me/254798035412"
              className="shadow-button mb-1 ml-auto mr-4 inline-flex items-center space-x-2 rounded-full bg-white px-5 py-3 font-bold transition duration-300 hover:-translate-x-4 hover:text-gray-700"
            >
              <span className="pointer-events-none uppercase">
                WhatsApp chat
              </span>
              <svg
                width="20"
                height="20"
                className="pointer-events-none inline-block h-6 w-6"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      )}
      <div className="shadow-button has-dot relative z-50 inline-block cursor-pointer rounded-full border-2 bg-white p-3 hover:text-gray-700 focus:outline-none lg:border-blue-200">
        <span className="z-9999999999 absolute right-2 top-0 flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>
        </span>
        <button
          className="border-none bg-transparent"
          onClick={() => setOpened((o) => !o)}
        >
          <span className="text-xl">📝</span>
        </button>
      </div>
    </>
  )
}
