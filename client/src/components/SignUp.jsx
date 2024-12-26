import React from 'react';

const Signup = () => {
  return (
    <div className="form-container sign-up">
      <form>
        <h1>Create Account</h1>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
          <a href="#" className="icon"><i className="fa-brands fa-linkedin"></i></a>
        </div>
        <span> Use your email for registration</span>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
