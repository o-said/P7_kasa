import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Datalogements from '../../datas/logement.json';
import Carroussel from "../../components/Carroussel";
import Collapse from "../../components/Collapse";
import Rate from "../../components/Rate";
import '../../styles/appartmentDetail.css';

function AppartmentDetail() {
  const [appartment, setAppartment] = useState(null);
  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Vérifie si l'ID existe dans Datalogements
    const foundAppartment = Datalogements.find(app => app.id === id);

    if (!foundAppartment) {
      // Redirige vers la page NotFound si l'ID n'est pas trouvé
      navigate("/notFound");
    } else {
      setAppartment(foundAppartment);
    }
  }, [id, navigate]);

  // Gestion de la donnée "equipement"
  const equipement = appartment && appartment.equipments && typeof appartment.equipments === "object"
    ? Object.values(appartment.equipments)
    : [];

  console.log(equipement);

  return (
    <div className="appartment__container">
      {appartment && <Carroussel appartment={appartment} />}
      <div className="appartment__content">
        <div className="appartment__content__details">          
          <h1> 
            {appartment && appartment.title}
          </h1>
          <p>
            {appartment && appartment.location} 
          </p>
          <div className="appartment__localisation">       
             {appartment && appartment.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
             )
            )}
          </div>
        </div>
        <div className="appartment__content__comment">
          <div className="appartment__content__comment__person">
            <div className="appartment__content__comment__name">
              <span>{appartment && appartment.host ? appartment.host.name.split(' ')[0] : ''}</span>
              <span>{appartment && appartment.host ? appartment.host.name.split(' ')[1] : ''}</span>
              
            </div>
            <div className="appartment__content__comment__img">
              <img src={appartment && appartment.host ? appartment.host.picture : ''} alt="identité du comment" />
            </div>          
          </div>
          <div className="appartment__content__comment__rate">
            <Rate rate={appartment && appartment.rating} />
          </div>
        </div>
      </div>
      <div className="appartment__description">
        <div className="appartment__content">
          {appartment && (
            <div>
              <h4>{appartment.name}</h4>
            </div>
          )}
        </div>
        <div className="appartment__collapse">
          {appartment && (
            <>
              <Collapse title="description" content={appartment.description} />
              <Collapse title="équipment" content={equipement.map((item, index) => (
                <div key={index} className="equipment-item">
                  {item}
                </div>
              ))} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppartmentDetail;
