const INITIALSTATE = {
  data: 1,
};

export default function (state = INITIALSTATE, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_DATA':
      return { ...state, socket: payload };
    default:
      return state;
  }
}
