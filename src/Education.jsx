import { cv } from './data.jsx';
import { useState } from 'react';

function EducationItem({ period, location, school, type }) {
  return (
    <>
      <div className="edu-item">
        <p>{school}</p>
        <p>{type}</p>
        <p>{period}</p>
        <p>{location}</p>
      </div>
    </>
  );
}

export default function Education() {
  const [edu, setEdu] = useState(cv.Education);
  return (
    <div className="EducationSection section card">
      <p className='card-title'>Education</p>
      {edu.map((el) => {
        return (
          <EducationItem
            key={el.index}
            school={el.School}
            period={el.Period}
            location={el.Location}
            type={el.Type}
          />
        );
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
