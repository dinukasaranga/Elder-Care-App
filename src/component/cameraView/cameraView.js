import React from "react";
import "./cameraView.scss";

function CameraView({ camera, location, view, onClick }) {
  return (
    <div className="camera-view" onClick={onClick}>
      <img src={view} alt={location} className="camera-image" />
      <div className="camera-info">
        <p>{camera}</p>
        <p>{location}</p>
      </div>
    </div>
  );
}

export default CameraView;
