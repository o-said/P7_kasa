import React from 'react';
import { Link } from 'react-router-dom';
import Datalogements from '../datas/logement.json';
import '../styles/gallery.css';
// composant qui permet de récupérer la liste des logements et de les afficher sous forme de card

const Gallery = () => {
    return (
        <div className="appartment">
            {/* liste la base de données */}
            {Datalogements.map((appartment) => {
                const { cover, title } = appartment;
                // affiche la fiche logement sur la page d'accueil
                return (
                    <div className="appartment__details" key={appartment.id}>
                        <Link to={ `/appartmentDetail/${appartment.id}`}>
                            <img src={cover} alt={title} />
                            <h3>{title}</h3>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Gallery;