import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps';
import { useEffect, useState } from 'react';
import styles from './Map.module.css';

const CompanyMap = ({
  height: mapHeight,
  zoom = 10,
  lattitude = 0,
  longitude = 0,
  anchorLattitude = lattitude,
  anchorLongitude = longitude,
  offsetX = 0,
  offsetY = 0,
  tooltipText = '',
  tooltipSubtext = '',
  disableMarkerTooltip = false,
  disableMouseEvents = false,
}: {
  height: number;
  zoom?: number;
  lattitude?: number | null;
  longitude?: number | null;
  anchorLattitude?: number | null;
  anchorLongitude?: number | null;
  offsetX?: number;
  offsetY?: number;
  tooltipText?: string;
  tooltipSubtext?: string;
  disableMarkerTooltip?: boolean;
  disableMouseEvents?: boolean;
}) => {
  const address: [number, number] = [lattitude ?? 0, longitude ?? 0];
  const offset: [number, number] = [offsetX, offsetY];

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false);

  useEffect(() => {
    setIsMarkerVisible(true);
  }, []);

  return (
    <div className="shadow pigeon-map" style={{ height: mapHeight }}>
      <Map
        height={mapHeight}
        defaultCenter={[anchorLattitude ?? 0, anchorLongitude ?? 0]}
        defaultZoom={zoom}
        mouseEvents={!disableMouseEvents}
      >
        <ZoomControl />

        {isPopupVisible && !disableMarkerTooltip && (
          <Overlay anchor={address} offset={offset}>
            <div className={styles.markerPopup}>
              <div className={styles.markerPopupContentWrapper}>
                <div className={styles.markerPopupContent}>
                  <div className={styles.markerTooltip}>
                    <div>{tooltipText}</div>
                    <div>{tooltipSubtext}</div>
                  </div>
                </div>
              </div>
              <div className={styles.markerPopupTipContainer}>
                <div className={styles.markerPopupTip}></div>
              </div>
            </div>
          </Overlay>
        )}
        {isMarkerVisible && (
          <Marker
            width={50}
            anchor={address}
            color={isPopupVisible ? 'coral' : 'cadetblue'}
            onClick={() => setIsPopupVisible(!isPopupVisible)}
          />
        )}
      </Map>
    </div>
  );
};

export default CompanyMap;
