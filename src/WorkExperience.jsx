import { cv } from './data.jsx';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal.jsx';
import InputModal from './InputModal.jsx';

function addWorkExperience(newEntry,exp, setExp) {
  const expC = [...exp];
  expC.push({
    index: exp[exp.length - 1].index + 1,
    ...newEntry
  });
  console.log(expC)
  setExp(expC);
}

function deleteWorkExperience(index, exp, setExp) {
  const expC = [...exp];
  const delIndex = expC.findIndex((e) => {
    return e.index == index;
  });
  expC.splice(delIndex, 1);
  setExp(expC);
}

function WorkExperienceItem({
  index,
  period,
  location,
  position,
  title,
  description,
  exp,
  setExp,
}) {
  return (
    <>
      <div className="WorkExperienceItem card-item">
        <div className="flex flex-col gap-3 w-full">
          <div className="exp-header flex flex-row justify-between pt-4">
            <p>{period}</p>
            <p>{position}</p>
            <p>{location}</p>
          </div>
          <div>
            <span className="font-bold">{title}</span>: {description}
          </div>
        </div>
        <ConfirmModal
          style={'button delete'}
          buttonLabel={'Delete'}
          index={index}
          states={[exp, setExp]}
          func={deleteWorkExperience}
          title={'Confirm Deletion'}
          desc={'Are you sure you want to delete the below?'}
          body={''}
          // body={`${title}:${description}`}
        />
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
        <InputModal
          style={'button add'}
          buttonLabel={'Add'}
          states={[exp, setExp]}
          func={addWorkExperience}
          title={'Add Work Experience'}
          fields={['Location', 'Period', 'Position', 'Title', 'Description']}
          labels={{
            Location: 'Location',
            Period: 'Period',
            Position: 'Position',
            Title: 'Title',
            Description: 'Description',
          }}
          types={{
            Location: 'text',
            Period: 'text',
            Position: 'text',
            Title: 'text',
            Description: 'text',
          }}
        />
      </div>
      {exp.map((el) => {
        return (
          <WorkExperienceItem
            key={el.index}
            index={el.index}
            period={el.Period}
            location={el.Location}
            position={el.Position}
            title={el.Title}
            description={el.Description}
            exp={exp}
            setExp={setExp}
          />
        );
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
