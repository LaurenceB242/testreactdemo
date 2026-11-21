
import logo from './logo.svg';
import './App.css';

// Importation de Component (pour créer une classe de composant) et de Fragment (pour regrouper des éléments sans ajouter de balise inutile)
import {Component, Fragment} from 'react';

// Déclaration de la classe du composant nommé "App" qui hérite de Component
class App extends Component{

  // Méthode obligatoire dans un composant classe pour afficher le contenu
  render() {
    return (
      // Le Fragment évite d'ajouter une balise <div> inutile autour de nos titres
      <Fragment>
        <h1>Hello World</h1>
        <h3>Début de ReactJS</h3>
      </Fragment>
    )
    
    // Exemple alternatif (en commentaire) : comment React écrit le HTML sous le capot sans JSX
    // return React.createElement('h1',null,'Hello World');
    }
  }

// Exportation du composant pour qu'il puisse être utilisé dans le reste de l'application
export default App;