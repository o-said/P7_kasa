import React from 'react';
import emptyStar from '../assets/emptyStar.svg';
import fullStar from '../assets/fullStar.svg';

function Rate(props) {
    const { rate } = props; // Vous devez accéder à la propriété 'rate' à partir des props

    const stars = [1, 2, 3, 4, 5];
    
    return (
        <div className='rate_count'>
            {stars.map((star, index) => {// Vous devez parcourir le tableau 'stars' et afficher les étoiles en fonction de la valeur de la propriété 'rate'
                if (star <= rate) {// Vous devez afficher une étoile pleine si la valeur de 'star' est inférieure ou égale à la valeur de 'rate'
                    return <img className='star' src={fullStar} alt='star' key={index} />
                } else {
                    return <img className='star' src={emptyStar} alt='star' key={index} />
                }
            })}
        </div>
    );
}

export default Rate;
