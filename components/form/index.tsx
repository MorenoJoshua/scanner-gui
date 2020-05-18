import React from "react";
import { InputInterface } from "../../interfaces";
import FormHelper from "../../utilities/form";
import {
  required,
  asRequired,
  addSection,
  numberPattern,
  s
} from "../../utilities/helpers";
import { object as ob } from "dot-object";
/*
loop is:
make sure thing is down
click on button - initial wait
incline back until min inclination - inclination before, after
take rotation pictures - before rotation loop, before rotation, after rotation, after rotation loop,
incline forward for next rotation loop
repeat until max degrees
return to center


initial wait
Lag
inclination before
inclination after
rotation before
rotation after
shutter before
shutter after
*/

const formConfig: InputInterface[] = [
  ...asRequired([
    ...addSection("steps", [
      {
        name: "Steps Per Revolutions",
        type: "header"
      },
      {
        name: "a",
        label: "Rotation",
        cols: s.m,
        type: "number",
        ...numberPattern(1, 5)
      },
      {
        name: "b",
        label: "Tilt",
        cols: s.m,
        type: "number"
      }
    ]),
    ...addSection("pictures", [
      { name: "Pictures per axis", type: "header" },
      {
        name: "a",
        label: "Pictures per rotation",
        cols: s.m,
        min: 0,
        type: "number"
      },
      {
        name: "b",
        label: "Amount of tilt steps",
        cols: s.m,
        min: 0,
        type: "number"
      }
    ]),
    ...addSection("ranges", [
      { name: "Movement Range", type: "header" },

      {
        name: "max",
        label: "Tilt Max",
        cols: s.m,
        min: 0,
        type: "number"
      },
      {
        name: "min",
        label: "Tilt Min",
        cols: s.m,
        min: 0,
        type: "number"
      }
    ]),
    ...addSection("timing", [
      {
        name: "Timings",
        type: "header"
      },
      ...addSection("general", [
        {
          name: "initial",
          label: "Initial Wait time",
          cols: s.m,
          min: 0,
          type: "number"
        },
        {
          name: "lag",
          label: "Lag compensation",
          cols: s.m,
          min: 0,
          type: "number"
        }
      ]),
      ...addSection("inclination", [
        {
          label: "Before Inclination",
          name: "before",
          cols: s.m
        },
        {
          label: "After Inclination",
          name: "after",
          cols: s.m
        }
      ]),
      ...addSection("rotation", [
        {
          label: "Before Rotation",
          name: "before",
          cols: s.m
        },
        {
          label: "After Rotation",
          name: "after",
          cols: s.m
        }
      ]),
      ...addSection("shutter", [
        {
          label: "Before Shutter",
          name: "before",
          cols: s.m
        },
        {
          label: "After Shutter",
          name: "after",
          cols: s.m
        }
      ])
    ])
  ]),
  { name: "", type: "hr" },
  {
    type: "submit",
    value: "Save",
    label: "save",
    name: "submit",
    btnClass: "btn-primary"
  }
];

const Form = () => (
  <FormHelper
    fields={formConfig}
    handleSubmit={e => {
      e.preventDefault();
      const values = Object.fromEntries(new FormData(e.target).entries());
      console.log(JSON.stringify(ob(values)));
    }}
  />
);
export default Form;

export { formConfig };
