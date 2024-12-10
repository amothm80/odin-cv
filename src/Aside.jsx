import { cv } from './data.jsx';
import { useState } from 'react';
import './Aside.css';
import personalPhoto from './assets/personalPhoto.png';

export default function Aside() {
  const [aside, setAside] = useState(cv);
  return (
    <>
      <aside className='flex-shrink-0 bg-blue-400 px-3 py-4 flex gap-3 flex-row content-center lg:w-64 lg:flex-col lg:items-center  '>
        <div className="photo rounded-full w-32 h-32 bg-white">
          <img src="" alt="" />
        </div>
        <div className="personalInfo flex flex-col gap-3 text-xl text-neutral-50">
          <div className="fullName flex flex-row gap-2">
            <div className="firstName ">
              <p>{aside.FirstName}</p>
            </div>
            <div className="lastName">
              <p>{aside.LastName}</p>
            </div>
          </div>
          <div className="DOB">
            <p>{aside.DateOfBirth}</p>
          </div>
          <div className="contact flex flex-col gap-2">
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
