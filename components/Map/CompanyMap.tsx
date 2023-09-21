import { COMPANY_ADDRESS } from '@consts/company';
import { Map, Marker, Overlay, ZoomControl } from 'pigeon-maps';
import { useEffect, useState } from 'react';
import styles from './Map.module.css';

const CompanyMap = ({
  height: mapHeight,
  lattitude = 0,
  longitude = 0,
  offsetX = 0,
  offsetY = 0,
  tooltipText = '',
  tooltipSubtext = '',
}: {
  height: number;
  lattitude?: number;
  longitude?: number;
  offsetX?: number;
  offsetY?: number;
  tooltipText?: string;
  tooltipSubtext?: string;
}) => {
  const address: [number, number] = [lattitude, longitude];
  const offset: [number, number] = [offsetX, offsetY];

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false);

  useEffect(() => {
    setIsMarkerVisible(true);
  }, []);

  return (
    <div className="shadow pigeon-map" style={{ height: mapHeight }}>
      <Map height={mapHeight} defaultCenter={address} defaultZoom={10}>
        <ZoomControl />

        {isPopupVisible && (
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
