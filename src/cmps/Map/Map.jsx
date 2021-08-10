import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { LocationPin } from "../LocationPin/LocationPin.jsx";

export const Map = ({ stores, selectedStore }) => {
  const center = selectedStore
    ? { lat: selectedStore.lat, lng: selectedStore.lng }
    : { lat: 40.712776, lng: -74.005974 };
  return (
    <div className="map">
      {stores && (
        <div className="google-map">
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDWWoJIPQyq8fVMWgh7G_8e79wxAlNKqNw",
            }}
            center={center}
            defaultZoom={10}
          >
            {!selectedStore &&
              stores.map((store) => {
                return (
                  <LocationPin key={store.id} lat={store.lat} lng={store.lng} />
                );
              })}
            {selectedStore &&
              stores.map((store) => {
                if (selectedStore.id !== store.id) {
                  return (
                    <LocationPin
                      key={store.id}
                      lat={store.lat}
                      lng={store.lng}
                    />
                  );
                } else {
                  return (
                    <LocationPin
                      key={store.id}
                      lat={store.lat}
                      lng={store.lng}
                      text={store.storeName}
                    />
                  );
                }
              })}
          </GoogleMapReact>
        </div>
      )}
    </div>
  );
};
