import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';

const Results = () => {

  const { entities } = useSelector((state) => state.jobs);
  const loading = useSelector((state) => state.loading);

  return(
    <div className="Results">
      {loading ? (
          "Loading..."
        ) : (
          entities.length &&
          entities.map(job =>
            <Card
              key={job.id}
              job={job}
            />
          )
      )
    }
    </div>
  )
}
export default Results;