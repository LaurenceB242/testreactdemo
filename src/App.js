
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

  state = {
    artiste: artistes,
    plus: 2
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
    return (
      // Le Fragment évite d'ajouter une balise <div> inutile autour de nos titres
      <Fragment>
        <h1>Les chanteurs de la promo 2026 StarAcademy</h1>
        <h3>Qui resteras à la fin ?</h3>

        {/* Dans une classe React, dès que tu veux attraper quelque chose qui appartient à ton composant (comme son state -> état), tu es obligé de coller le mot this. devant. */}
      <Membre 
        nom={this.state.artiste.chanteur1.nom} 
        prenom={this.state.artiste.chanteur1.prenom} 
        age={this.state.artiste.chanteur1.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur2.nom} 
        prenom={this.state.artiste.chanteur2.prenom} 
        age={this.state.artiste.chanteur2.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur3.nom} 
        prenom={this.state.artiste.chanteur3.prenom} 
        age={this.state.artiste.chanteur3.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur4.nom} 
        prenom={this.state.artiste.chanteur4.prenom} 
        age={this.state.artiste.chanteur4.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur5.nom} 
        prenom={this.state.artiste.chanteur5.prenom} 
        age={this.state.artiste.chanteur5.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur6.nom} 
        prenom={this.state.artiste.chanteur6.prenom} 
        age={this.state.artiste.chanteur6.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur7.nom} 
        prenom={this.state.artiste.chanteur7.prenom} 
        age={this.state.artiste.chanteur7.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur8.nom} 
        prenom={this.state.artiste.chanteur8.prenom} 
        age={this.state.artiste.chanteur8.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur9.nom} 
        prenom={this.state.artiste.chanteur9.prenom} 
        age={this.state.artiste.chanteur9.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur10.nom} 
        prenom={this.state.artiste.chanteur10.prenom} 
        age={this.state.artiste.chanteur10.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur11.nom} 
        prenom={this.state.artiste.chanteur11.prenom} 
        age={this.state.artiste.chanteur11.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur12.nom} 
        prenom={this.state.artiste.chanteur12.prenom} 
        age={this.state.artiste.chanteur12.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur13.nom} 
        prenom={this.state.artiste.chanteur13.prenom} 
        age={this.state.artiste.chanteur13.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur14.nom} 
        prenom={this.state.artiste.chanteur14.prenom} 
        age={this.state.artiste.chanteur14.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur15.nom} 
        prenom={this.state.artiste.chanteur15.prenom} 
        age={this.state.artiste.chanteur15.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur16.nom} 
        prenom={this.state.artiste.chanteur16.prenom} 
        age={this.state.artiste.chanteur16.age} 
      />
      <Membre 
        nom={this.state.artiste.chanteur17.nom} 
        prenom={this.state.artiste.chanteur17.prenom} 
        age={this.state.artiste.chanteur17.age} 
      />
     
        {/* this.handleClick(this.state.plus) dans une fonction anonyme () => {} fonction flechée */}
        <Button plus={this.state.plus} veillir={()=>{this.handleClick(this.state.plus)}}/>
          {/* pour comprendre <Button plus={2} veillir={this.handleClick} aux clic  /> */}
         
      </Fragment>
    )
    }
  }

// Exportation du composant pour qu'il puisse être utilisé dans le reste de l'application
export default App;