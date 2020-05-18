import React from "react";
import { InputInterface } from "../interfaces";
const required = { required: true };
const asRequired = (formConfig: InputInterface[]) =>
  formConfig.reduce((acc, curr) => {
    return [...acc, { ...curr, ...required, label: `${curr.label}*` }];
  }, []);

const addSection = (section: string, formConfig: InputInterface[]) =>
  formConfig.reduce((acc, curr) => {
    return [
      ...acc,
      {
        ...curr,
        name: curr.type === "header" ? curr.name : `${section}.${curr.name}`
      }
    ];
  }, []);

const numberPattern = (minLength, maxLength) => ({
  pattern: `^[0-9]{${minLength},${maxLength || ""}}$`,
  ...(minLength && { minLength }),
  ...(maxLength && { maxLength })
});

const totalPictures = ({ steps }) => {
  return steps.a * steps.b;
};
const totalTime = config => {
  const totalPics = totalPictures(config);
  const totalTiltTime =
    (config.timing.inclination.before + config.timing.inclination.after) *
    config.pictures.b;
  const totalRotationTime =
    (config.timing.rotation.before + config.timing.rotation.after) * totalPics;
  const totalShutterTime =
    (config.timing.shutter.before + config.timing.shitter.after) * totalPics;

  return totalTiltTime + totalRotationTime + totalShutterTime;
};

const s = {
  xs: 2,
  s: 4,
  m: 6,
  l: 8,
  xl: 10
};

export { required, asRequired, addSection, numberPattern, s };
