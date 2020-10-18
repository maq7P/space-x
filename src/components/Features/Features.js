import React from 'react';
import './features.css';

import RellaxWrapper from 'react-rellax-wrapper';
import Figures from '../../services/Figures';
import Main from '../Main/Main';

const rocketImg = {
    'Falcon 1': 'img/falcon-1.png',
    'Falcon 9': 'img/falcon-9.png',
    'Falcon Heavy': 'img/falcon-heavy.png',
    'Starship': 'img/starship.png',
}

const Features = ({rocket, rocketFeatures}) => {
    if (rocketFeatures){
        const {description, height, diameter, mass, payload_weights} = rocketFeatures
        const makesFigures = new Figures().makesFigures;

        return (
            <>
                <Main title={rocket} videoExists/>
                <section className="features">
                    <h2 className="features-title">
                        {rocket} <br/>Overview
                    </h2>
                    <div className="overview">
                        <table className="table">
                            <caption className="table-title">
                                Size
                            </caption>
                            <thead>
                                <tr>
                                    <td className="table-column">HEIGHT</td>
                                    <td className="table-column">
                                        {makesFigures(height.meters)} m / {makesFigures(height.feet)} ft
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column">DIAMETER</td>
                                    <td className="table-column">
                                        {makesFigures(diameter.meters)} m / {makesFigures(diameter.feet)} ft
                                    </td>
                                </tr>
                                <tr>
                                    <td className="table-column">MASS</td>
                                    <td className="table-column">
                                        {makesFigures(mass.kg)} kg / {makesFigures(mass.lb)} lb
                                    </td>
                                </tr>
                                {payload_weights.map(item => (
                                    <tr key={item.id}>
                                        <td className="table-column">PAYLOAD TO {item.id.toUpperCase()}</td>
                                        <td className="table-column">
                                            {makesFigures(item.kg)} kg / {makesFigures(item.lb)} lb
                                        </td>
                                    </tr>
                                ))}
                            </thead>
                        </table>
                        <RellaxWrapper speed={14}>
                            <img
                                src={rocketImg[rocket]}
                                alt="rocket"
                                className="rocket"
                            />
                        </RellaxWrapper>
                        <article>
                            <h3 className="features-subtitle">DESCRIPTION</h3>
                            <p className="features-text">
                                {description}
                            </p>
                        </article>
                    </div>
                </section>
            </>
        )
    } else{
        return null
    }
}
export default Features;