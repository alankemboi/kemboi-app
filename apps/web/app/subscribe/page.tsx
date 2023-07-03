"use client";
import { useEffect } from "react";

const SubscribePage = () => {
  useEffect(() => {
    if (window.location.pathname === "/subscribe") {
      window.location.href = "https://newsletter.kemboi.app";
    }
  }, []);

  return (
    <div className="flex items-center justify-center">
      <span className=" animate-bounce mt-20 text-10xl">📨</span>
    </div>
  );
};

const ClientSubscribePage = () => {
  return <SubscribePage />;
};

export default ClientSubscribePage;
