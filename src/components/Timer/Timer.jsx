import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Timer = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const navigate = useNavigate()

  let intervalId;

  useEffect(() => {
     intervalId = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
      navigate("/result")
    }
  }, [time]);

  return (
    <div>
      {time}
    </div>
  );
};

export default Timer;
