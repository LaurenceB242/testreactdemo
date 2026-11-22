
import logo from './logo.svg';
import './App.css';

// Importation de Component (pour créer une classe de composant) et de Fragment (pour regrouper des éléments sans ajouter de balise inutile)
import {Component, Fragment} from 'react';
import Membre from './components/Artiste';
import Button from './components/Button';

const artistes = {
    chanteur1: {
        nom: "Poncelet",
        prenom: "Brieuc",
        age: "18",
    },
    chanteur2: {
        nom: "Chaalane",
        prenom: "Cameron",
        age: "26",
    },
    chanteur3: {
        nom: "Morin",
        prenom: "Félix-Antoine",
        age: "18",
    },
    chanteur4: {
        nom: "Moutou",
        prenom: "Isabella",
        age: "20",
    },
    chanteur5: {
        nom: "Inconnu",
        prenom: "Kylian",
        age: "21",
    },
    chanteur6: {
        nom: "Van Cauberg",
        prenom: "Leeloo",
        age: "24",
    },
    chanteur7: {
        nom: "Viana",
        prenom: "Maud",
        age: "20",
    },
    chanteur8: {
        nom: "Plantin",
        prenom: "Mélina",
        age: "22",
    },
    chanteur9: {
        nom: "Dupeyron",
        prenom: "Noémie",
        age: "23",
    },
    chanteur10: {
        nom: "Inconnu",
        prenom: "Ydriss",
        age: "19",
    },
    chanteur11: {
        nom: "Smittarello",
        prenom: "Zoé",
        age: "19",
    },
    chanteur12: {
        nom: "Brun",
        prenom: "Amel",
        age: "22",
    },
    chanteur13: {
        nom: "Sehl",
        prenom: "Tracy",
        age: "23",
    },
    chanteur14: {
        nom: "Guille",
        prenom: "Morgan",
        age: "19",
    },
    chanteur15: {
        nom: "Degout",
        prenom: "Antoine",
        age: "18",
    },
    chanteur16: {
        nom: "Dirand",
        prenom: "Elija",
        age: "23",
    },
    chanteur17: {
        nom: "Inconnu",
        prenom: "Khalil",
        age: "24",
    }
};



// Déclaration de la classe du composant nommé "App" qui hérite de Component
class App extends Component{

// Le "state" (l'état) est la mémoire centrale de ton composant.
// C'est ici que tu stockes toutes les données qui peuvent évoluer ou s'afficher.
state = {
  // Stocke toute la liste de tes chanteurs pour pouvoir les utiliser et les afficher
  artiste: artistes,
  
  // Un nombre de référence (par exemple, pour faire vieillir les artistes de 2 ans)
  plus: 2,
  
  // Un interrupteur (vrai/faux). Il sert souvent à savoir si un élément doit être visible ou caché
  isShow: false
}

componentDidMount(){
    // Au moment où le composant s'affiche pour la première fois, 
    // on injecte la liste de tes chanteurs dans le state
    this.setState({ artiste: artistes })
  }

  handleShow = () => {
    // Inverse la valeur de isShow (si c'était true, ça devient false, et inversement)
    const isShow = !this.state.isShow
    this.setState({ isShow:isShow })
  }

 handleClick = (nb) => {
    // copie de la donnée dans state artiste
    const artiste = {...this.state.artiste}

    //On modifie l'âge d'un chanteur précis (par exemple chanteur1)
    artiste.chanteur1.age += nb

    //On met à jour le state avec notre objet "artiste" modifié pareil que faire this.setState({league:league})
    this.setState({ artiste })
  }

  // Méthode obligatoire dans un composant classe pour afficher le contenu
  render() {
      const list = Object.keys(this.state.artiste).map(iteration => {
      return (
        <Membre
          key={iteration} 
          age={this.state.artiste[iteration].age}
          prenom={this.state.artiste[iteration].prenom}
          nom={this.state.artiste[iteration].nom}
        />
      )
    })

    return (
      // Le Fragment évite d'ajouter une balise <div> inutile autour de nos titres
      <Fragment>
        <h1>Les chanteurs de la promo 2026 StarAcademy</h1>
        <h3>Qui resteras à la fin ?</h3>
        {list}

        {/* Dans une classe React, dès que tu veux attraper quelque chose qui appartient à ton composant (comme son state -> état), tu es obligé de coller le mot this. devant. */}
      {/* <Membre 
        nom={this.state.artiste.chanteur1.nom} 
        prenom={this.state.artiste.chanteur1.prenom} 
        age={this.state.artiste.chanteur1.age} 
        
      /> */}
       <Membre
          age="50"
          nom="McGregor"
        >
          {
            this.state.isShow ? <strong>Je suis le GOAT</strong> : null
          }

          <button onClick={this.handleShow}>
            {this.state.isShow ? 'Cacher' : 'Montrer'}
          </button>
       </Membre>
     
        {/* this.handleClick(this.state.plus) dans une fonction anonyme () => {} fonction flechée */}
        <Button plus={this.state.plus} veillir={()=>{this.handleClick(this.state.plus)}}/>
          {/* pour comprendre <Button plus={2} veillir={this.handleClick} aux clic  /> */}
         
      </Fragment>
    )
    }
  }

// Exportation du composant pour qu'il puisse être utilisé dans le reste de l'application
export default App;