import { FC } from 'react';

import { DetailedJobMapProps } from './types';
import map from '../../assets/img/map.png';

const DetailedJobMap: FC<DetailedJobMapProps> = ({ ...props }) => {
  return (
    <div className="detailed-job__column">
      <h2 className="detailed-job__title detailed-job__title_m">Contacts</h2>
      <div className="hr hr_m"></div>
      <div className="detailed-job__map map">
        <svg
          className="map__circle"
          width="196"
          height="261"
          viewBox="0 0 196 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <circle cx="59.5" cy="124.5" r="136.5" fill="#202336" />
        </svg>
        <div className="map__title">
          Department name. <br /> {props.name}
        </div>
        <div className="map__location">
          <svg
            width="13"
            height="19"
            viewBox="0 0 13 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 6.35C13 3.11913 10.0899 0.5 6.5 0.5C2.91015 0.5 0 3.11913 0 6.35C0 8.40818 1.97835 12.1977 5.93506 17.7184L6.5 18.5L7.33778 17.3361L7.61735 16.9406C11.2058 11.8403 13 8.31006 13 6.35ZM3.25 6.76087C3.25 5.03198 4.70507 3.63043 6.5 3.63043C8.29493 3.63043 9.75 5.03198 9.75 6.76087C9.75 8.48976 8.29493 9.8913 6.5 9.8913C4.70507 9.8913 3.25 8.48976 3.25 6.76087Z"
              fill="white"
              fillOpacity="0.669635"
            />
          </svg>
          {props.address}
        </div>
        <div className="map__number">{props.phone}</div>
        <div className="map__email">{props.email}</div>
        <div className="map__img">
          <img src={map} alt="mapImg" />
        </div>
        <svg
          width="26"
          className="map__svg"
          height="36"
          viewBox="0 0 26 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26 11.7C26 5.23827 20.1797 0 13 0C5.8203 0 0 5.23827 0 11.7C0 15.8164 3.95671 23.3953 11.8701 34.4368L13 36L14.6756 33.6721L15.2347 32.8813C22.4116 22.6805 26 15.6201 26 11.7ZM6.5 12.5217C6.5 9.06396 9.41015 6.26087 13 6.26087C16.5899 6.26087 19.5 9.06396 19.5 12.5217C19.5 15.9795 16.5899 18.7826 13 18.7826C9.41015 18.7826 6.5 15.9795 6.5 12.5217Z"
            fill="#D8D8D8"
          />
        </svg>
      </div>
    </div>
  );
};

export default DetailedJobMap;
