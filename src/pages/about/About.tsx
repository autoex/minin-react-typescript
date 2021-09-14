import React from 'react';
import {useHistory} from 'react-router-dom'

const About: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>About page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi error iusto quam.</p>
            <button className='btn' onClick={()=>history.push('/')}>Back</button>
        </>
    );
};

export default About;