// Axis "a" is rotation
// Axis "b" is inclination

const defaultconfig = {
  steps: { a: 2055, b: 8220 },
  pictures: { a: 20, b: 7 },
  ranges: { max: 80, min: 70 },
  timing: {
    general: { initial: 1000, lag: 200 },
    inclination: { before: 100, after: 200 },
    rotation: { before: 100, after: 300 },
    shutter: { before: 100, after: 2000 }
  },
  endpoint: {
    url: "http://localhost",
    port: 80
  }
};

export { defaultconfig };
