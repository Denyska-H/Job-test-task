import { FC } from 'react';
import ReactPaginate from 'react-paginate';

const Pagination: FC = () => {
  return (
    <ReactPaginate
      className="pagination"
      previousLabel={
        <div className="pagination__previous">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.497652">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4974 1.51303C9.67041 0.686035 8.32959 0.686036 7.5026 1.51303L1.51299 7.50264C0.685994 8.32963 0.685994 9.67045 1.51299 10.4974L7.5026 16.4871C8.32959 17.314 9.67041 17.314 10.4974 16.4871C11.3244 15.6601 11.3244 14.3192 10.4974 13.4922L6.00519 9.00004L10.4974 4.50783C11.3244 3.68084 11.3244 2.34002 10.4974 1.51303Z"
                fill="#3A4562"
              />
              <mask
                id="mask0_4112_535"
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="12"
                height="18">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.4974 1.51303C9.67041 0.686035 8.32959 0.686036 7.5026 1.51303L1.51299 7.50264C0.685994 8.32963 0.685994 9.67045 1.51299 10.4974L7.5026 16.4871C8.32959 17.314 9.67041 17.314 10.4974 16.4871C11.3244 15.6601 11.3244 14.3192 10.4974 13.4922L6.00519 9.00004L10.4974 4.50783C11.3244 3.68084 11.3244 2.34002 10.4974 1.51303Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_4112_535)">
                <rect width="14.2941" height="18" fill="#7D859C" />
              </g>
            </g>
          </svg>
          <svg
            width="2"
            height="32"
            viewBox="0 0 2 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.9 0.400391V31.6004" stroke="#DEE3EF" strokeWidth="1.3" />
          </svg>
        </div>
      }
      nextLabel={
        <div className="pagination__next">
          <svg
            width="2"
            height="32"
            viewBox="0 0 2 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0.900781 0.400391V31.6004" stroke="#DEE3EF" strokeWidth="1.3" />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.498465">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.5026 1.51303C8.32959 0.686035 9.67041 0.686036 10.4974 1.51303L16.487 7.50264C17.314 8.32963 17.314 9.67045 16.487 10.4974L10.4974 16.4871C9.67041 17.314 8.32959 17.314 7.5026 16.4871C6.67561 15.6601 6.67561 14.3192 7.5026 13.4922L11.9948 9.00004L7.5026 4.50783C6.6756 3.68084 6.67561 2.34002 7.5026 1.51303Z"
                fill="#3A4562"
              />
              <mask
                id="mask0_4112_543"
                maskUnits="userSpaceOnUse"
                x="6"
                y="0"
                width="12"
                height="18">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.5026 1.51303C8.32959 0.686035 9.67041 0.686036 10.4974 1.51303L16.487 7.50264C17.314 8.32963 17.314 9.67045 16.487 10.4974L10.4974 16.4871C9.67041 17.314 8.32959 17.314 7.5026 16.4871C6.67561 15.6601 6.67561 14.3192 7.5026 13.4922L11.9948 9.00004L7.5026 4.50783C6.6756 3.68084 6.67561 2.34002 7.5026 1.51303Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_4112_543)">
                <rect
                  width="14.2941"
                  height="18"
                  transform="matrix(-1 0 0 1 18 0)"
                  fill="#7D859C"
                />
              </g>
            </g>
          </svg>
        </div>
      }
      onPageChange={() => window.scrollTo(0, 0)}
      pageRangeDisplayed={5}
      pageCount={10}
      marginPagesDisplayed={1}
      breakClassName={'breakStyle'}
    />
  );
};

export default Pagination;
