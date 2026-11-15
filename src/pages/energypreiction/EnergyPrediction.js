import React, { useState, useEffect } from "react";
import { FaCloudUploadAlt, FaBolt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function EnergyPrediction() {
  const [fileName, setFileName] = useState("");
  const [prediction, setPrediction] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setPrediction(Math.floor(Math.random() * 500) + 100);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
      <div
        className="w-full max-w-lg bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-8 rounded-xl shadow-lg text-center"
        data-aos="fade-up"
      >
        {/* Header */}
        <h2 className="text-white text-xl font-bold mb-1" data-aos="fade-up">
          Energy Output Prediction
        </h2>
        <p className="text-[#94a3b8] text-sm mb-6">
          Upload your data file to get an AI-powered energy production forecast.
        </p>

        {/* Upload area */}
        <label
          htmlFor="energy-upload"
          className="w-full h-44 flex flex-col items-center justify-center border-2 border-dashed border-[#00c6ff]/60 rounded-xl cursor-pointer transition-all duration-300 hover:border-[#00c6ff] hover:bg-[#00c6ff]/5 bg-white/5"
          data-aos="zoom-in"
        >
          <input
            id="energy-upload"
            type="file"
            accept=".csv, .xlsx"
            onChange={handleFileUpload}
            className="hidden"
          />
          {fileName ? (
            <div className="flex flex-col items-center gap-2">
              <FaCloudUploadAlt className="text-4xl text-[#00c6ff]" />
              <p className="text-[#e2e8f0] text-sm font-semibold break-all px-4">
                {fileName}
              </p>
            </div>
          ) : (
            <>
              <FaCloudUploadAlt className="text-5xl text-[#00c6ff] mb-3" />
              <p className="text-[#e2e8f0] text-sm font-medium">
                Drag &amp; drop or click to upload
              </p>
              <p className="text-[#94a3b8] text-xs mt-1">
                Accepts <span className="text-[#00c6ff]">.CSV</span> and{" "}
                <span className="text-[#00c6ff]">.XLSX</span> files
              </p>
            </>
          )}
        </label>

        <p className="text-[#94a3b8] text-xs mt-3">
          Ensure your file contains timestamped irradiance and temperature columns for accurate results.
        </p>

        {/* Analyze button */}
        {fileName && (
          <button
            className="mt-5 w-full py-3 px-6 bg-[#00c6ff] hover:bg-[#0086b3] text-white font-semibold rounded-lg cursor-pointer transition-colors duration-300 text-sm shadow-lg"
            data-aos="fade-up"
          >
            Analyze Data
          </button>
        )}

        {/* Prediction result */}
        {prediction && (
          <div
            className="mt-6 p-5 bg-white/10 rounded-xl border border-[#00c6ff]/30 text-white text-center transition-transform duration-300 hover:scale-105"
            data-aos="flip-left"
          >
            <div className="flex items-center justify-center gap-2 text-[#00c6ff] mb-2">
              <FaBolt className="text-xl" />
              <h3 className="text-base font-semibold uppercase tracking-wide">
                Predicted Energy Output
              </h3>
            </div>
            <p className="text-4xl font-bold text-white">
              {prediction}{" "}
              <span className="text-lg font-normal text-[#94a3b8]">kWh</span>
            </p>
            <p className="text-xs text-[#94a3b8] mt-2">
              Estimated daily production based on uploaded data
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default EnergyPrediction;
