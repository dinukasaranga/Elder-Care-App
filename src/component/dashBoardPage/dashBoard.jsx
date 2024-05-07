import React, { useState } from "react";
import CameraView from "../cameraView/cameraView";
import DataTable from "../dataTable/dataTable";
import { inputData } from "../../lib/dummydata";
import "./dashboard.scss";

function Dashboard() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleCameraViewClick = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="dashboard-container">
      <div className="left-side">
        <h2>Camera View</h2>
        <div className="camera-container">
          {inputData.map((item) => (
            <CameraView
              key={item.id}
              camera={item.camera}
              location={item.location}
              view={item.view}
              name={item.name}
              alert={item.alert}
              onClick={() => handleCameraViewClick(item.location)}
            />
          ))}
        </div>
      </div>

      <div className="right-side">
        <h2>Data Table</h2>
        {selectedLocation && (
          <DataTable
            location={selectedLocation}
            data={inputData.filter((item) => item.location === selectedLocation)}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
