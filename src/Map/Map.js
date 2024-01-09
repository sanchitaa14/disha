import React, { useEffect, useState } from 'react';
import "./Map.css";
import { Link } from 'react-router-dom';

export default function Map() {
  const [details, setDetails] = useState('');
  const [watchId, setWatchId] = useState(null); // Declare watchId in component scope

  var reqcount = 0;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      const mapElement = document.getElementById('map');
      if (mapElement) {
        mapElement.innerHTML = `<iframe width="700" height="300" src="https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed"></iframe>`;
      }
    });

    const id = navigator.geolocation.watchPosition(successCallback, errorCallback, options);
    setWatchId(id); // Set watchId in the component state

    // Cleanup the watch position when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(id);
    };
  }, []); // Empty dependency array to run the effect only once on mount.

  function successCallback(position) {
    const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;
    reqcount++;
    setDetails(
      // "Accuracy: " + accuracy + "<br>" +
      "Latitude: " + latitude + "| Longitude " + longitude + "<br>" +
      "Altitude: " + altitude + "<br>" +
      "Heading: " + heading + "<br>" +
      "Speed: " + speed + "<br>" 
      // "reqcount: " + reqcount
    );
  }

  function errorCallback(error) {
    // Handle errors if needed
  }

  var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  function buttonClickHandler() {
    // Cancel the updates when the user clicks a button.
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
    }
  }

  return (
    <div className='background-map'>
    <div className='Map'> 
      This guide is currently here
      <div dangerouslySetInnerHTML={{ __html: details }} id='details'></div>
      <div id='map'></div>
      <button className="btn-map" onClick={buttonClickHandler}>
        <Link to = "/guide">
        Stop watching location
        </Link>
      </button>
    </div>
    </div>
  );
}
