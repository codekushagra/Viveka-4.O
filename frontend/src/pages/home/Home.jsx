import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1 className="title">Viveka 4.0:</h1>
          <h1 className="subtitle">Where Innovation Meets Excellence</h1>
          <p>Leading the Way in Innovation and Growth</p>
          <button onClick={() => navigate("/courses")} className='common-btn'>Get Started</button>
        </div>
      </div>
      <Testimonials />
    </div>
  );
}

export default Home;
