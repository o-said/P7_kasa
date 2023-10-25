import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// ReactDOM pour s'attacher à notre HTML.
const root = ReactDOM.createRoot(document.getElementById("root"));
//dans la variable root on affiche tout mon application on importe
// le composant parent App.js 
//root.render sert a afficher le composant App.js dans le HTML
//root.render prend en paramètre le composant App.js et l'affiche dans le HTML
//StrictMode est un outil pour détecter les problèmes potentiels dans une application React. Comme Fragment, StrictMode ne rend pas d'élément DOM supplémentaire.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);















































