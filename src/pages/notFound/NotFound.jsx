import React from 'react';
import '../../styles/notFound.css'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='notFound'>            
            <div className='notFound__container'>
                <h1 className='notFound__title'>404</h1>
                <p className='notFound__text'>Oups! La page que vous demandez n'existe pas</p>
                <Link to='/' className='notFound__link'>Retourner sur la page d’accueil</Link>
            </div>
        </div>
    )
}
export default NotFound;