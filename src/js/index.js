import React from 'react';
import ReactDOM from 'react-dom';

const Helloworld = (props) => {
  return (
    <section className='todoapp'>
      <header className="header">
        <h1>{props.title}</h1>
      </header>
    </section>
  );
}

ReactDOM.render(
  <Helloworld title='React'/>,
  document.getElementById('app')
);
