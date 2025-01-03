"use client";

import React from "react";

const DownloadButton = ({ fileLink }: { fileLink: string }) => {
  const handleDownload = () => {
    window.open(fileLink, "_blank");
  };
  return (
    <button
      onClick={handleDownload}
      className="mt-5 h-10 rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-primary-600 active:border-primary-700 capitalize"
    >
      Download the book
    </button>
  );
};

export default DownloadButton;
