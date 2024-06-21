"use client";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import LocationFrame from "./map-location-frame";

export default function MapLocation() {
  return (
    <LocationFrame>
      <MapContainer
        center={[-27.639088628995072, -48.67238247361751]}
        zoom={15}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[-27.639088628995072, -48.67238247361751]}
          icon={
            new Icon({
              iconUrl:
                "https://cdn-icons-png.flaticon.com/512/6794/6794639.png",
              iconSize: [65, 71],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              shadowSize: [41, 41],
            })
          }
        >
          <Popup keepInView>
            <Link
              target="_blank"
              href="https://www.google.com/maps/place/Centro+Eventos+Palhoca/@-27.6391779,-48.6742327,17z/data=!3m1!4b1!4m16!1m9!4m8!1m0!1m6!1m2!1s0x9527358165421895:0x87be80f15bdf90b5!2sAv.+Cl%C3%A1udio+Zacchi,+415+-+Passa+Vinte,+Palho%C3%A7a+-+SC,+88132-080!2m2!1d-48.6723969!2d-27.6391831!3m5!1s0x9527358165421895:0x87be80f15bdf90b5!8m2!3d-27.6391813!4d-48.6724082!16s%2Fg%2F11s4_hl_72?entry=ttu"
            >
              <Image
                alt=""
                src="/centro-de-eventos.png"
                height={500}
                width={500}
              />
              <div>
                <h3>Centro Eventos Palhoça</h3>
                <p>
                  Av. Cláudio Zacchi, 415 - Passa Vinte, Palhoça - SC, 88132-080
                </p>
              </div>
            </Link>
          </Popup>
        </Marker>
      </MapContainer>
    </LocationFrame>
  );
}
