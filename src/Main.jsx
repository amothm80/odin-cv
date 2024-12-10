import { cv } from './data.jsx';
import { useState } from 'react';
import Summary from './Summary.jsx';
import WorkExperience from './WorkExperience.jsx';
import Education from './Education.jsx';
import ProfessionalCertificates from './ProfessionalCertificates.jsx';
import './Main.css';

export default function Main() {
  const [main, setMain] = useState(cv);
  return (
    <>
      <div className="flex flex-col gap-4 main px-7 py-7">
        <Summary />
        <WorkExperience />
        <Education />
        <ProfessionalCertificates />
      </div>
    </>
  );
}
