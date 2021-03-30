import React from 'react';

const Card = ({ job }) => {
  const {
    id,
    type,
    created_at,
    company,
    company_url,
    location,
    title,
    // company_logo
  } = job;

  return (
    <div className="job">
      <p>
        <span>{created_at} - {type} </span>
        <a href={company_url}>{title}</a>
      </p>
      <p onClick={() => console.log(id)}>{title}</p>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  );
}

export default Card;