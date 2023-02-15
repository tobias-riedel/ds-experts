import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { useEffect, useState } from "react";
import styles from "./Map.module.css";

const CompanyMap = () => {
  const address = [52.87365, 13.3835];
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isMarkerVisible, setIsMarkerVisible] = useState(false);

  useEffect(() => {
    setIsMarkerVisible(true);
  }, []);

  return (
    <Map height={318} defaultCenter={address} defaultZoom={10}>
      <ZoomControl />

      {isPopupVisible && (
        <Overlay anchor={address} offset={[138, 128]}>
          <div className={styles.markerPopup}>
            <div className={styles.markerPopupContentWrapper}>
              <div className={styles.markerPopupContent}>
                <div className={styles.markerTooltip}>
                  <div>Rudolf-Breitscheid-Straße 68,</div>
                  <div>16559 Liebenwalde</div>
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
          color={isPopupVisible ? "coral" : "cadetblue"}
          onClick={() => setIsPopupVisible(!isPopupVisible)}
        />
      )}
    </Map>
  );
};

export default CompanyMap;
