import React from 'react';

const Jay = () => {

  const row = {
    width: '56%',
    margin: '0 auto'
  };

  const facts = {
    paddingBottom: '15px'
  };

  const column = {
    float: 'left',
    marginTop: '5%'
  };

  return (
    <div style={row}>
      <div style={column}>
        <img src="https://i.imgur.com/s7Nykv4.png" alt="title name" />
        <p className='ml-10'>I lived in Richmond.</p>
        <p style={facts}>I moved to San Franciso.</p>
        <p style={facts}>I now live in Daly Ciy.</p>
        <p style={facts}>I watch a lot of movies and TV shows.</p>
        <p style={facts}>I like playing video games with friends.</p>
        <p style={facts}>I write code when I'm bored and I like smelling books.</p>
        <p style={facts}>I like sticking my hands in towels.</p>
        <p style={facts}>I still have both of my kidneys.</p>
        <p style={facts}>I look Chinese, but I'm actually Filipino.</p>
      </div>
      <div style={column}>
        <img src="https://i.imgur.com/6VeEhwL.png" alt="avatar" />
      </div>
    </div>
  );
};

export default Jay;
