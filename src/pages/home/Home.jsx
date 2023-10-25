import React from 'react';
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import ImageBanner from '../../assets/home_cover.png';
import '../../styles/home.css';

//la fonction home est la page d'accueil du site , elle contient le banner et la gallery
function Home() {
    return (
        <div className='home'>                 
                <Banner texte="Chez vous, partout et ailleurs" image={ImageBanner}/>
                <Gallery />
        </div>
    );
}
export default Home;