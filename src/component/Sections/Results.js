import React from 'react';

import Card from '../Card/Card';

const Results = ({ jobs }) =>
  <div className="Results">
    {(jobs || []).map(job =>
      <Card
        key={job.id}
        job={job}
      />
    )}
  </div>
export default Results;