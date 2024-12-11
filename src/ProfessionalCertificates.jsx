import { cv } from './data.jsx';
import { useState } from 'react';
import ConfirmModal from './ConfirmModal.jsx';
import InputModal from './InputModal.jsx';

function addProfCert(newEntry, profCert, setProfCert) {
  const profCertC = [...profCert];
  profCertC.push({
    index: profCert[profCert.length - 1].index + 1,
    ...newEntry,
  });
  setProfCert(profCertC);
}

function deleteProfCert(index, profCert, setProfCert) {
  const profCertC = [...profCert];
  const delIndex = profCertC.findIndex((e) => {
    return e.index == index;
  });
  profCertC.splice(delIndex, 1);
  setProfCert(profCertC);
}

function ProfessionalCertificatesItem({
  index,
  name,
  date,
  profCert,
  setProfCert,
}) {
  return (
    <>
      <div className="profCert-item card-item">
        <div className="grid grid-flow-col auto-cols-max gap-10">
          <p>{name}</p>
          <p>{date}</p>
        </div>
        <ConfirmModal
          style={'button delete'}
          buttonLabel={'Delete'}
          index={index}
          states={[profCert, setProfCert]}
          func={deleteProfCert}
          title={'Confirm Deletion'}
          desc={'Are you sure you want to delete the below?'}
          body={name}
        />
      </div>
    </>
  );
}

export default function ProfessionalCertificates() {
  const [profCert, setProfCert] = useState(cv.ProfessionalCertificates);
  return (
    <div className="ProfessionalCertificatesSection section card">
      <div className="card-header">
        <p className="card-title">Professional Certificates</p>
        <InputModal
          style={'button add'}
          buttonLabel={'Add'}
          states={[profCert, setProfCert]}
          func={addProfCert}
          title={'Add Professional Certificates'}
          fields={['Name', 'Date']}
          labels={{ Name: 'Name', Date: 'Date' }}
          types={{ Name: 'text', Date: 'text' }}
        />
      </div>
      {profCert.map((el) => {
        return (
          <ProfessionalCertificatesItem
            key={el.index}
            index={el.index}
            name={el.Name}
            date={el.Date}
            profCert={profCert}
            setProfCert={setProfCert}
          />
        );
        // return <h1>hi</h1>;
      })}
    </div>
  );
}
