import React, { useReducer } from 'react';

const initialState = {
  email: '',
  password: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'CHANGE', field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
