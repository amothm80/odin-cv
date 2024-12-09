import { cv } from './data.jsx';
import { useState } from 'react';

function SummaryItem({ desc }) {
  return (
    <>
      <div className="SummaryItem">
        <p>{desc}</p>
      </div>
    </>
  );
}

export default function Summary() {
  const [summary, setSummary] = useState(cv.Summary);
  return (
    <div className="summarySection">
      <h2>Experience Summary</h2>
      {summary.map((el) => {
        return <SummaryItem key={el.index} desc={el.Description} />;
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
