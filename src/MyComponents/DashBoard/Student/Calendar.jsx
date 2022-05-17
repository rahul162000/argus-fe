import React, { useEffect, useState } from 'react';
import {
  Calendar as StudentCalendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import axiosInstance from '../../../helpers/axiosInstance';
import { useSelector } from 'react-redux';
import EventDetail from './EventDetail';

const Calendar = () => {
  const token = JSON.parse(localStorage.getItem('jwt'));
  const user = useSelector((state) => state.user.user);
  const [show, setShow] = useState(false);
  const [currentData, setCurrentData] = useState(null);

  const [event, setEvent] = useState([]);

  useEffect(() => {
    setEvent([]);
    axiosInstance
      .get(`/class/get-student`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let eventData = [];
        res?.data?.data?.forEach((element, index) => {
          eventData.push({
            id: index,
            title: element?.classname,
            start: new Date(element?.date),
            end: new Date(element?.date).setHours(
              new Date(element?.date).getHours() + 2,
            ),
            location: element?.location,
            instructor: element?.instructor,
          });
        });
        setEvent(eventData);
      });
  }, []);

  const localizer = momentLocalizer(moment);
  return (
    <div className="rounded-2xl max-w-1200 mx-2 sm:mx-8 2xl:mx-auto my-4 bg-white shadow-button-shadow-3 px-2 md:px-8 py-8">
      <EventDetail show={show} setShow={setShow} data={currentData} />
      <StudentCalendar
        localizer={localizer}
        events={event}
        resizable
        defaultView="month"
        className="student-calender rounded-2xl"
        onSelectEvent={(event) => {
          setCurrentData(event);
          setShow(true);
        }}
      />
    </div>
  );
};

export default Calendar;
