import { FC, useEffect, useState } from 'react';
import axios from 'axios';

import { JobBar, Pagination } from '../components';
import { JobBarProps } from '../components/JobBar/types';

const JobList: FC = () => {
  const [jobs, setJobs] = useState<Array<JobBarProps>>([]);

  useEffect(() => {
    async function fetchJobsData() {
      try {
        const { data } = await axios.get(
          'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu',
        );
        setJobs(data);
      } catch (error) {
        alert('Somethig went wrong!');
      }
    }

    fetchJobsData();
  }, []);

  return (
    <>
      {jobs.map((job) => (
        <JobBar key={job.id} {...job} />
      ))}
      <Pagination />
    </>
  );
};

export default JobList;
