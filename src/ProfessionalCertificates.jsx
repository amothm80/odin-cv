import { cv } from './data.jsx';
import { useState } from 'react';

function ProfessionalCertificatesItem({ name, date }) {
  return (
    <>
      <div className="profCert-item">
        <p>{name}</p>
        <p>{date}</p>
      </div>
    </>
  );
}

export default function ProfessionalCertificates() {
  const [profCert, setProfCert] = useState(cv.ProfessionalCertificates);
  return (
    <div className="ProfessionalCertificatesSection section card">
      <p className='card-title'>Professional Certificates</p>
      {profCert.map((el) => {
        return (
          <ProfessionalCertificatesItem
            key={el.index}
            name={el.Name}
            date={el.Date}
          />
        );
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
