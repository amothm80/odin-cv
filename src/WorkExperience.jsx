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
      <div className="WorkExperienceItem card-item">
        <div className="flex flex-col gap-3">
          <div className="exp-header flex flex-row justify-between pt-4">
            <p>{period}</p>
            <p>{position}</p>
            <p>{location}</p>
          </div>
          <div>
            <span className="font-bold">{title}</span>: {description}
          </div>
        </div>
        <button>Delete</button>
      </div>
    </>
  );
}

export default function WorkExperience() {
  const [exp, setExp] = useState(cv.WorkExperience);
  return (
    <div className="workExperienceSection section card">
      <div className="card-header">
        <p className="card-title">Work Experience</p>
        <button>Add</button>
      </div>
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
