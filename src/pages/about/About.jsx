import React from 'react';
import '../../styles/about.css';

import AboutData from '../../datas/about.json';
import Collapse from '../../components/Collapse';

function About() {
    return (
        <div className='main__about'>
            <section className="banner__about"></section>
            <section className="collapse__about">
                {AboutData.map((item, index) => (
                    <Collapse key={index} title={item.title} content={item.content} />
                ))}
            </section>
        </div>
    );
}
export default About;
