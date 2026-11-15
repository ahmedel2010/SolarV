import React, { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

function FaultDetection() {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-16 px-4">
      <div className="w-full max-w-md bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] p-8 rounded-xl shadow-lg">
        {/* Header */}
        <h2 className="text-white text-xl font-bold mb-1 text-center">
          Solar Panel Fault Detection
        </h2>
        <p className="text-[#94a3b8] text-sm text-center mb-6">
          Upload an image of your solar panel to identify potential faults.
        </p>

        {/* Upload area */}
        <label
          htmlFor="fault-upload"
          className="w-full h-56 flex flex-col items-center justify-center border-2 border-dashed border-[#00c6ff]/60 rounded-xl cursor-pointer transition-all duration-300 hover:border-[#00c6ff] hover:bg-[#00c6ff]/5 bg-white/5"
        >
          <input
            id="fault-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />
          {image ? (
            <img
              src={image}
              alt="Uploaded panel"
              className="max-w-full max-h-48 rounded-lg object-contain"
            />
          ) : (
            <>
              <FaCloudUploadAlt className="text-5xl text-[#00c6ff] mb-3" />
              <p className="text-[#e2e8f0] text-sm font-medium">
                Drag &amp; drop or click to upload
              </p>
              <p className="text-[#94a3b8] text-xs mt-1">
                Supported formats: JPG, PNG, WEBP
              </p>
            </>
          )}
        </label>

        {/* Instruction */}
        <p className="text-[#94a3b8] text-xs text-center mt-3">
          For best results, use a clear, well-lit photo taken close to the panel surface.
        </p>

        {/* Analyze button */}
        {image && (
          <button className="mt-5 w-full py-3 px-6 bg-[#00c6ff] hover:bg-[#0086b3] text-white font-semibold rounded-lg cursor-pointer transition-colors duration-300 text-sm shadow-lg">
            Analyze Image
          </button>
        )}
      </div>
    </div>
  );
}

export default FaultDetection;
