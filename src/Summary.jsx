import { cv } from './data.jsx';
import { useState } from 'react';

function SummaryItem({ desc }) {
  return (
    <>
      <div className="SummaryItem card-item">
        <p>{desc}</p><button>Delete</button>
      </div>
    </>
  );
}

export default function Summary() {
  const [summary, setSummary] = useState(cv.Summary);
  return (
    <div className="SummarySection section card">
      <div className='card-header'>
      <p className='card-title'>Experience Summary</p><button>Add</button>
      </div>
      {summary.map((el) => {
        return <SummaryItem key={el.index} desc={el.Description} />;
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
