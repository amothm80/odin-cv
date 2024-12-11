import { cv } from './data.jsx';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal.jsx';
import InputModal from './InputModal.jsx';

function addEducation(newEntry, edu, setEdu) {
  const eduC = [...edu];
  eduC.push({
    index: edu[edu.length - 1].index + 1,
    ...newEntry,
  });
  setEdu(eduC);
}

function deleteEducation(index, edu, setEdu) {
  const eduC = [...edu];
  const delIndex = eduC.findIndex((e) => {
    return e.index == index;
  });
  eduC.splice(delIndex, 1);
  setEdu(eduC);
}

function EducationItem({ index, period, location, school, type, edu, setEdu }) {
  return (
    <>
      <div className="edu-item card-item">
        <div className="grid grid-flow-col auto-cols-max gap-10">
          <p>{school}</p>
          <p>{type}</p>
          <p>{period}</p>
          <p>{location}</p>
        </div>
        <ConfirmModal
          style={'button delete'}
          buttonLabel={'Delete'}
          index={index}
          states={[edu, setEdu]}
          func={deleteEducation}
          title={'Confirm Deletion'}
          desc={'Are you sure you want to delete the below?'}
          body={school}
        />
      </div>
    </>
  );
}

export default function Education() {
  const [edu, setEdu] = useState(cv.Education);
  return (
    <div className="EducationSection section card">
      <div className="card-header">
        <p className="card-title">Education</p>
        <InputModal
          style={'button add'}
          buttonLabel={'Add'}
          states={[edu, setEdu]}
          func={addEducation}
          title={'Add Education Experience'}
          fields={['School', 'Location', 'Period', 'Type']}
          labels={{
            School: 'School',
            Location: 'Location',
            Period: 'Period',
            Type: 'Type',
          }}
          types={{
            School: 'text',
            Location: 'text',
            Period: 'text',
            Type: 'text',
          }}
        />
      </div>
      {edu.map((el) => {
        return (
          <EducationItem
            key={el.index}
            index={el.index}
            school={el.School}
            period={el.Period}
            location={el.Location}
            type={el.Type}
            edu={edu}
            setEdu={setEdu}
          />
        );
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
