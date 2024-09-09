import React, { useEffect, useState } from "react";
import arrow from "../src/assets/images/icon-arrow.svg";
import LocationMarker from "./locationMarker";
import axios from "axios";
import { data } from "autoprefixer";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [domain, setDomain] = useState('nuru.solutions');
  const [geoLocations, setGeoLocations] = useState(null);
  const [geoData, setGeoData] = useState(null);

  const fetchIPloc = async () => {
    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&domain=${domain}`
    );
    const data = await response.data;
    const { location: { lat, lng } } = data;
    // console.log(data)
    setGeoData(data)
    setGeoLocations({
      lat,lng
    })
  }
// console.log(geoLocations)
  useEffect(() => {
    fetchIPloc()
  },[geoLocations])
  return (
    <div className="w-screen flex justify-center relative pt-4 h-screen">
      <div className="flex w-[90%] p-4 flex-col">
        <div className="top bg-desktop-bg md:h-[45%] h-[60%] text-center bg-center bg-cover bg-no-repeat">
          <p className="my-4 text-white font-semibold text-2xl">
            IP Address Tracker
          </p>
          <form className="relative w-[50%] m-auto">
            <input
              type="text"
              required
              onChange={(e) => setDomain(e.target.value)}
              placeholder="Search for any IP address or domain"
              className="p-2 px-4 rounded-l-lg w-full border-none outline-none"
            />
            <button
              type="button"
              onClick={fetchIPloc}
              className="absolute bg-black h-full w-8 rounded-r-md"
            >
              <img src={arrow} alt="" className="text-center inline-block" />
            </button>
          </form>
        </div>

        <div className="flex flex-col text-center md:flex-row absolute min-w-[60%] sm:top-[50%] top-[45%] md:top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:gap-8 gap-4  p-6 z-[1000] rounded-lg bg-white">
          <div className="flex-1">
            <p className="text-xs">IP ADDRESS</p>
            <p className="font-bold text-[18px]">{geoData?.ip}</p>
          </div>
          <div className="flex-1 md:border-l border-none md:pl-8 p-0">
            <p className="text-xs">LOCATION</p>
            <p className="font-bold text-[18px]">
              {`${geoData?.location?.city},${geoData?.location?.region} ${geoData?.location?.postalCode}`}
            </p>
          </div>
          <div className="flex-1 md:border-l border-none md:pl-8 p-0 w-full">
            <p className="text-xs">TIMEZONE</p>
            <p className="font-bold text-[18px]">
              UTC {geoData?.location?.timezone}
            </p>
          </div>
          <div className="flex-1 md:border-l border-none md:pl-8 p-0">
            <p className="text-xs">ISP</p>
            <p className="font-bold text-[18px]">{geoData?.isp}</p>
          </div>
        </div>

        <LocationMarker position={geoLocations} setPosition={setGeoLocations} />
      </div>
    </div>
  );
}

export default App;
