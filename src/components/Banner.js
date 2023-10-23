import React from 'react';
import '../styles/banner.css';

function Banner({image, texte}) {
    return(
        <section className="banner">            
                <div className="banner_text_container">{texte}</div>                      
        </section>
    )
}
export default Banner;