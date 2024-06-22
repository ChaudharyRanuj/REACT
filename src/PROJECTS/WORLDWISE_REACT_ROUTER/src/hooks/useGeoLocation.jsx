import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function useGeoLocation(defaultLocation = null) {
  const navigate = useNavigate();
  const [position, setPosition] = useState(defaultLocation);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function geoLocation() {
      setIsLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (pos) {
          setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
          navigate(
            `form?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`
          );
          setIsLoading(false);
        },
        (error) => {
          setErrorMessage(error);
          setIsLoading(false);
        }
      );
    }
  }
  return { position, errorMessage, isLoading, geoLocation };
}
