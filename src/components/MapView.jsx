import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "400px",
  width: "100%",  // full width of container
};

const center = {
  lat: 43.7,
  lng: -79.4,
};

export default function MapView() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAmzC89FTA-UR_fOCsqiTrOFJSmziN9iyE">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
        {/* Example house pins */}
        <Marker position={{ lat: 43.7, lng: -79.4 }} />
        <Marker position={{ lat: 43.75, lng: -79.38 }} />
      </GoogleMap>
    </LoadScript>
  );
}
