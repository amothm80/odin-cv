import { cv } from './data.jsx';
import { useState } from 'react';
import './Aside.css';
import personalPhoto from './assets/personalPhoto.png';

export default function Aside() {
  const [aside, setAside] = useState(cv);
  return (
    <>
      <aside>
        <div className="photo">
          <img src={personalPhoto} alt="" />
        </div>
        <div className="personalInfo">
          <div className="firstName">
            <p>{aside.FirstName}</p>
          </div>
          <div className="lastName">
            <p>{aside.LastName}</p>
          </div>
          <div className="DOB">
            <p>{aside.DateOfBirth}</p>
          </div>
          <div className="contact">
            <div className="mobileNumber">
              <p>{aside.Contact.Mobile}</p>
            </div>
            <div className="email">
              <p>{aside.Contact.Email}</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
