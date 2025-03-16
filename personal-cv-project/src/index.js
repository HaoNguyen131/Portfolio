import React from 'react';
import ReactDOM from 'react-dom';
import CV from './components/CV';
import Projects from './components/Projects';
import './assets/styles.css';

const App = () => {
    return (
        <div>
            <CV />
            <Projects />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));