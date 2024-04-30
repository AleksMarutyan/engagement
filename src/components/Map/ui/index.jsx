import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from './styles.module.css';

const libraries = ['places'];



export const Map = ({center}) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBYeqUFRMMjHcsv1B9tBe5VVy-Lkw2Bh6M",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className={styles.container}>
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName={styles.mapContainer}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};