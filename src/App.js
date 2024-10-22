"use client";

import React from "react";

const App = () => {
  return (
    <div className="h-screen w-full flex overflow-hidden items-center justify-center bg-[#FFFFFF]">
      <div className="md:w-1/2 rounded-lg flex flex-col justify-center gap-8 h-4/6 p-8  shadow-[0_0_35px_rgba(30,119,204,0.3)]">
        <div className="flex flex-col justify-center items-center grow cursor-pointer p-8 border-dashed border-[5px] border-[#1E77CC] ">
          <img
            src="/ri_upload-cloud-fill.png"
            alt="uploadicon"
            className="w-[190px]"
          />
          <p className="text-black text-3xl">Browse Files to upload</p>
        </div>

        <div className="flex justify-between bg-[#E9F0FE] items-center rounded-xl py-3 px-4 ">
          <img src="/bxs_file-image.png" alt="boxicon" className="w-[64px]" />

          <span className="flex items-center justify-center text-2xl">
            No Selected File -
            <img
              src="/ic_baseline-delete.png"
              alt="deleteicon"
              className="w-[64px]"
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default App;
