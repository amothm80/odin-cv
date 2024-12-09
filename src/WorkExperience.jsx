import { cv } from './data.jsx';
import { useState } from 'react';

function WorkExperienceItem({
  period,
  location,
  position,
  title,
  description,
}) {
  return (
    <>
      <div className="WorkExperienceItem">
        <div className="exp-header">
          <p>{period}</p>
          <p>{position}</p>
          <p>{location}</p>
        </div>
        <div className="exp-title">{title}</div>
        <div className="exp-desc">{description}</div>
      </div>
    </>
  );
}

export default function WorkExperience() {
  const [exp, setExp] = useState(cv.WorkExperience);
  return (
    <div className="workExperienceSection">
      <h2>Work Experience</h2>
      {exp.map((el) => {
        return (
          <WorkExperienceItem
            key={el.index}
            period={el.Period}
            location={el.Location}
            position={el.Postion}
            title={el.Title}
            description={el.Description}
          />
        );
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
