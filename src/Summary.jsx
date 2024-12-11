import { cv } from './data.jsx';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal.jsx';
import InputModal from './InputModal.jsx';

function addSummary(newEntry, summary, setSummary) {
  const sumC = [...summary];
  sumC.push({
    index: summary[summary.length - 1].index + 1,
    ...newEntry,
  });
  // console.log(sumC);
  setSummary(sumC);
}

function deleteSummary(index, summary, setSummary) {
  const sumC = [...summary];
  const delIndex = sumC.findIndex((e) => {
    return e.index == index;
  });
  sumC.splice(delIndex, 1);
  setSummary(sumC);
}

function SummaryItem({ index, desc, summary, setSummary }) {
  return (
    <>
      <div className="SummaryItem card-item">
        <p>{desc}</p>
        <ConfirmModal
          style={'button delete'}
          buttonLabel={'Delete'}
          index={index}
          states={[summary, setSummary]}
          func={deleteSummary}
          title={'Confirm Deletion'}
          desc={'Are you sure you want to delete the below?'}
          body={desc}
        />
      </div>
    </>
  );
}

export default function Summary() {
  const [summary, setSummary] = useState(cv.Summary);
  return (
    <div className="SummarySection section card">
      <div className="card-header">
        <p className="card-title">Experience Summary</p>
        <InputModal
          style={'button add'}
          buttonLabel={'Add'}
          states={[summary, setSummary]}
          func={addSummary}
          title={'Add Summary Experience'}
          fields={['Description']}
          labels={{ Description: 'Description' }}
          types={{ Description: 'text' }}
        />
      </div>
      {summary.map((el) => {
        return (
          <SummaryItem
            key={el.index}
            index={el.index}
            desc={el.Description}
            summary={summary}
            setSummary={setSummary}
          />
        );
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
