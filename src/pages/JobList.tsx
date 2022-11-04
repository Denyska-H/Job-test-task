import React, { FC } from 'react';
import { JobBar, Pagination } from '../components';

const JobList: FC = () => {
  return (
    <>
      <JobBar />
      <JobBar />
      <JobBar />
      <Pagination />
    </>
  );
};

export default JobList;
