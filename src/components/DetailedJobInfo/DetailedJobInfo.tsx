import { FC } from 'react';

import { DetailedJobInfoProps } from './types';

const DetailedJobInfo: FC<DetailedJobInfoProps> = ({ ...props }) => {
  const dateOfPost = props.createdAt.slice(0, 10);

  return (
    <div className="detailed-job__column">
      <div className="detailed-job__information">
        <header className="detailed-job__header">
          <h1 className="detailed-job__title">Job Details</h1>
          <nav className="detailed-job__menu">
            <ul className="detailed-job__links">
              <li className="detailed-job__link">
                <svg
                  width="19"
                  height="23"
                  viewBox="0 0 19 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.5 4.00016C1.5 2.5274 2.69391 1.3335 4.16667 1.3335H14.8333C16.3061 1.3335 17.5 2.5274 17.5 4.00016V19.9936C17.5 21.1595 16.109 21.7639 15.2567 20.9682L10.4099 16.4428C9.89761 15.9645 9.10239 15.9645 8.59007 16.4428L3.74327 20.9682C2.89104 21.7639 1.5 21.1595 1.5 19.9936V4.00016Z"
                    stroke="#70778B"
                    strokeWidth="2"
                  />
                </svg>
                Save to my list
              </li>
              <li className="detailed-job__link">
                <svg
                  width="19"
                  height="20"
                  viewBox="0 0 19 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.54 14.9096L6.41 10.743C6.46 10.512 6.5 10.2811 6.5 10.0402C6.5 9.7992 6.46 9.56827 6.41 9.33735L13.46 5.21084C14 5.71285 14.71 6.0241 15.5 6.0241C17.16 6.0241 18.5 4.67871 18.5 3.01205C18.5 1.34538 17.16 0 15.5 0C13.84 0 12.5 1.34538 12.5 3.01205C12.5 3.25301 12.54 3.48394 12.59 3.71486L5.54 7.84137C5 7.33936 4.29 7.02811 3.5 7.02811C1.84 7.02811 0.5 8.37349 0.5 10.0402C0.5 11.7068 1.84 13.0522 3.5 13.0522C4.29 13.0522 5 12.741 5.54 12.239L12.66 16.4157C12.61 16.6265 12.58 16.8474 12.58 17.0683C12.58 18.6847 13.89 20 15.5 20C17.11 20 18.42 18.6847 18.42 17.0683C18.42 15.4518 17.11 14.1365 15.5 14.1365C14.74 14.1365 14.06 14.4378 13.54 14.9096Z"
                    fill="#70778B"
                  />
                </svg>
                Share
              </li>
            </ul>
          </nav>
        </header>
        <div className="hr"></div>
        <button className="detailed-job__button">
          <span>Apply now</span>
        </button>
        <div className="detailed-job__info info">
          <div className="info__column">
            <h2 className="info__title">{props.title}</h2>
          </div>
          <div className="info__column">
            <div className="info__salary">{props.salary}</div>
            <div className="info__brutto">Brutto, per year</div>
          </div>
        </div>
        <div className="detailed-job__post">Posted {dateOfPost}</div>
        <div className="detailed-job__description">{props.description}</div>
        <button className="detailed-job__button">
          <span>Apply now</span>
        </button>
        <div className="detailed-job__additional">
          <h2 className="detailed-job__title">Additional info</h2>
          <div className="hr"></div>
          <h3 className="detailed-job__add-label">Employment type</h3>
          <ul className="detailed-job__types">
            {props.employment_type.map((item, index) => (
              <li key={index} className="detailed-job__type">
                {item}
              </li>
            ))}
          </ul>
          <h3 className="detailed-job__add-label">Benefits</h3>
          <ul className="detailed-job__benefits">
            {props.benefits.map((item, index) => (
              <li key={index} className="detailed-job__benefit">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="detailed-job__pictures">
          <h2 className="detailed-job__title">Attached images</h2>
          <div className="hr"></div>
          <div className="detailed-job__images">
            {props.pictures.map((images, index) => (
              <img key={index} src={images} alt="jobImages" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedJobInfo;
