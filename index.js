const test = [1, 2, 3, 4].reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(test);

function reduce(arr, cb, initValue) {
  if (initValue === undefined) {
    initValue = arr[0];
    arr = arr.slice(1);
  }
  for (const item of arr) {
    initValue = cb(initValue, item);
  }
  return initValue;
}

const test2 = reduce(
  [1, 2, 3, 4, 5],
  (sum, num) => {
    return sum + num;
  },
  0
);
console.log(test2);

const actions = [
  { type: "CHANGE_SPEED", payload: 3 }, // speed: 3 , lastSpeed: 1
  { type: "TURN_OFF" }, // speed: 0, lastSpeed: 3
  { type: "TURN_ON" }, // speed: 3, lastSpeed: 3
];

const initState = {
  // la 1 State
  speed: 0,
  lastSpeed: 1,
};

const test3 = reduce(
  actions,
  (state, action) => {
    switch (action.type) {
      case "CHANGE_SPEED":
        return {
          ...state,
          speed: action.payload,
        };
        break;
      case "TURN_OFF":
        return {
          ...state,
          speed: 0,
          lastSpeed: state.speed,
        };
        break;
      case "TURN_ON":
        return {
          ...state,
          speed: state.lastSpeed,
        };
      default:
        return state;
    }
  },
  initState
);
console.log(test3);

const { createStore } = require("redux");

const initState2 = {
  // la 1 State
  speed: 0,
  lastSpeed: 1,
};

const reducer = (state = initState2, action) => {
    console.log(action) // { type: '@@redux/INITe.d.6.9.k.a' }
  switch (action.type) {
    case "CHANGE_SPEED":
      return {
        ...state,
        speed: action.payload,
      };
    case "TURN_OFF":
      return {
        ...state,
        speed: 0,
        lastSpeed: state.speed,
      };
    case "TURN_ON":
      return {
        ...state,
        speed: state.lastSpeed,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

console.log(store.getState()) //{ speed: 0, lastSpeed: 1 }
store.dispatch({type: 'CHANGE_SPEED', payload: 2}) // { type: 'CHANGE_SPEED', payload: 6 }
console.log(store.getState()) // { speed: 6, lastSpeed: 1 }
store.dispatch({type: 'TURN_OFF'}) 
console.log(store.getState())
store.dispatch({type: 'TURN_ON'}) 
console.log(store.getState())