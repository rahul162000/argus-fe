import { Button } from '@mui/material';
import React, { useState } from 'react';

const MCQ = ({ data }) => {
  const [options, setOptions] = useState({
    A: false,
    B: false,
    C: false,
    D: false,
  });

  return (
    <div className="flex flex-col">
      <div>{data.question}</div>
      <div className="flex items-center">
        <p>A</p>
        <Button
          onClick={() => {
            setOptions({
              A: !options.A,
              B: false,
              C: false,
              D: false,
            });
          }}
          style={{
            backgroundColor: `${
              options.A
                ? data.correctOpt === 'A'
                  ? '#15c277'
                  : '#BA0913'
                : '#3F3F3F'
            }`,
            color: 'white',
            width: '50%',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px',
            margin: '10px',
          }}
        >
          {data?.optionA}
        </Button>
      </div>
      <div className="flex items-center">
        <p>B</p>
        <Button
          onClick={() => {
            setOptions({
              A: false,
              B: !options.B,
              C: false,
              D: false,
            });
          }}
          style={{
            backgroundColor: `${
              options.B
                ? data.correctOpt === 'B'
                  ? '#15c277'
                  : '#BA0913'
                : '#3F3F3F'
            }`,
            color: 'white',
            width: '50%',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px',
            margin: '10px',
          }}
        >
          {data?.optionB}
        </Button>
      </div>
      <div className="flex items-center">
        <p>C</p>
        <Button
          onClick={() => {
            setOptions({
              A: false,
              B: false,
              C: !options.C,
              D: false,
            });
          }}
          style={{
            backgroundColor: `${
              options.C
                ? data.correctOpt === 'C'
                  ? '#15c277'
                  : '#BA0913'
                : '#3F3F3F'
            }`,
            color: 'white',
            width: '50%',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px',
            margin: '10px',
          }}
        >
          {data?.optionC}
        </Button>
      </div>
      <div className="flex items-center">
        <p>D</p>
        <Button
          onClick={() => {
            setOptions({
              A: false,
              B: false,
              C: false,
              D: !options.D,
            });
          }}
          style={{
            backgroundColor: `${
              options.D
                ? data.correctOpt === 'D'
                  ? '#15c277'
                  : '#BA0913'
                : '#3F3F3F'
            }`,
            color: 'white',
            width: '50%',
            textAlign: 'left',
            display: 'flex',
            justifyContent: 'flex-start',
            padding: '10px',
            margin: '10px',
          }}
        >
          {data?.optionD}
        </Button>
      </div>
    </div>
  );
};

export default MCQ;
