// Model.js
import React, {useState, useEffect} from 'react';

const useHomeScreenModel = () => {
  const [location, setLocation] = useState('Karachi');
  const [dataObj, setDataObj] = useState({
    temp: 0,
    wind: 0,
    humidity: 0,
    pressure: 0,
    feelsLike: 0,
  });
  var cities = ['Karachi', 'Sydney', 'London', 'New York'];
  useEffect(() => {
    const fetchData = async () => {
      await fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=karachi&appid=e1b07e2dc8c1072514dfebb5f4266608&units=metric',
        {
          method: 'GET',
        },
      )
        .then(res => res.json())
        .then(data => {
          const obj = {
            temp: data.main.temp,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            feelsLike: data.main.feels_like,
          };
          setDataObj(obj);
        })
        .catch(err => alert(err));
    };
    fetchData();
  }, []);
  const changeLocation = async val => {
    setLocation(val);
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=e1b07e2dc8c1072514dfebb5f4266608&units=metric`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(data => {
        const obj = {
          temp: data.main.temp,
          wind: data.wind.speed,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          feelsLike: data.main.feels_like,
        };
        setDataObj(obj);
      })
      .catch(err => alert(err));
  };

  return {
    dataObj,
    location,
    cities,
    changeLocation,
  };
};

export default useHomeScreenModel;
