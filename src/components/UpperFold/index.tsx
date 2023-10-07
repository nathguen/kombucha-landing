import { NearestLocation, locations } from "@/app/locations";
import { Button, CircularProgress } from "@mui/material";
import { convertDistance, findNearest, getDistance } from "geolib";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Carousel from "../Carousel";
import Container from "../Container";
import FeatureList from "../FeatureList";

export default function UpperFold() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fetchingLocation, setFetchingLocation] = useState(false);
  const [location, setLocation] = useState<GeolocationPosition | null>(null);

  const fetchClosestKombucha = useCallback(
    async (position: GeolocationPosition) => {
      let { latitude, longitude } = position.coords;

      // // @TODO: remove this
      // latitude = 49.525071603022475;
      // longitude = -124.85587601763594;

      try {
        const nearest: NearestLocation = findNearest(
          {
            latitude,
            longitude,
          },
          locations.map((item) => {
            return {
              ...item,
              latitude: item.coordinates[0],
              longitude: item.coordinates[1],
            };
          })
        ) as NearestLocation;

        const distance = getDistance(
          {
            latitude,
            longitude,
          },
          {
            latitude: nearest.latitude,
            longitude: nearest.longitude,
          }
        );

        const distanceInKM = convertDistance(distance, "km");

        if (distanceInKM > 50) {
          // redirect to signup page
          router.push("/signup");
          return;
        }

        // redirect to nearest location page
        window.location.href = `https://www.google.com/maps/dir/${latitude},${longitude}/${nearest.address}`;
      } catch (error) {
        console.error(error);
      }
    },
    [router]
  );

  const getUserLocation = (
    callback: (position: GeolocationPosition) => void,
    errorCallback: (error: GeolocationPositionError) => void
  ) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          callback(position);
        },
        (error: GeolocationPositionError) => {
          errorCallback(error);
        }
      );
    } else {
      alert("Geolocation is not available in this browser.");
    }
  };

  const handleButtonClick = () => {
    setFetchingLocation(true);

    // Example usage
    getUserLocation(
      (position: GeolocationPosition) => {
        setFetchingLocation(false);
        setLocation(position);
      },
      (error: GeolocationPositionError) => {
        setFetchingLocation(false);
      }
    );
  };

  useEffect(() => {
    if (!location) return;

    fetchClosestKombucha(location);
  }, [fetchClosestKombucha, location]);

  return (
    <Container>
      <Carousel />

      <FeatureList />

      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <div className="mt-16 flex items-center justify-center gap-x-6">
            <Button
              variant="contained"
              size="large"
              onClick={handleButtonClick}
              startIcon={
                fetchingLocation && (
                  <CircularProgress
                    aria-label="Loading location info"
                    className="mr-2"
                    size={20}
                    color="inherit"
                  />
                )
              }
            >
              Find Kombucha Near Me
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
