import React, { useState } from 'react';
import Tasks from './Components/Forms/Tasks';
import JobHistory from './Components/Forms/JobHistory';
import PersonalDetails from './Components/Forms/PersonalDetails';
import ContactDetails from './Components/Forms/ContactDetails';
import JobSearch from './Components/Forms/JobSearch';
import { useSelector } from 'react-redux';
import BackgroundDetails from './Components/Forms/BackgroundDetails';
import AddJobHistory from './Components/Forms/AddJobHistory';

const Home = () => {
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  return (
    <div className="font-for-para">
      <AddJobHistory show={show} setShow={setShow} user={user} />
      <div className="flex flex-wrap items-stretch w-full max-w-1366 mx-auto">
        <PersonalDetails user={user} />
        <Tasks user={user} />
        <BackgroundDetails user={user} />
        <JobHistory user={user} setShow={setShow} />
        <ContactDetails user={user} />
        <JobSearch user={user} />
      </div>
    </div>
  );
};

export default Home;
