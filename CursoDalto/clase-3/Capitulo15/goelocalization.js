"use strict";

const geolocation = navigator.geolocation;

const posicion = (pos) => {
  console.log(pos);
};

const err = () => console.log(e);
const options = {
  maximumAge: 0,
  timeout: 3000,
  enableHeightAccuarcy: true,
};
console.log(geolocation.getCurrentPosition(posicion, err, options));
