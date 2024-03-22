import React, { useReducer } from 'react';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE':
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const Signup = () => {
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
      <input type="text" name="firstName" placeholder="First Name" value={state.firstName} onChange={handleChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={state.lastName} onChange={handleChange} />
      <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
      <input type="text" name="contact" placeholder="Contact" value={state.contact} onChange={handleChange} />
      <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" value={state.confirmPassword} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;
