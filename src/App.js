import './App.css';
import { Component, Fragment } from 'react';
import Artiste from './components/Artiste';
import Button from './components/Button';

const artistes = {
  chanteur1:  { nom: "Poncelet",    prenom: "Brieuc",        age: 18 },
  chanteur2:  { nom: "Chaalane",    prenom: "Cameron",       age: 26 },
  chanteur3:  { nom: "Morin",       prenom: "Félix-Antoine", age: 18 },
  chanteur4:  { nom: "Moutou",      prenom: "Isabella",      age: 20 },
  chanteur5:  { nom: "Inconnu",     prenom: "Kylian",        age: 21 },
  chanteur6:  { nom: "Van Cauberg", prenom: "Leeloo",        age: 24 },
  chanteur7:  { nom: "Viana",       prenom: "Maud",          age: 20 },
  chanteur8:  { nom: "Plantin",     prenom: "Mélina",        age: 22 },
  chanteur9:  { nom: "Dupeyron",    prenom: "Noémie",        age: 23 },
  chanteur10: { nom: "Inconnu",     prenom: "Ydriss",        age: 19 },
  chanteur11: { nom: "Smittarello", prenom: "Zoé",           age: 19 },
  chanteur12: { nom: "Brun",        prenom: "Amel",          age: 22 },
  chanteur13: { nom: "Sehl",        prenom: "Tracy",         age: 23 },
  chanteur14: { nom: "Guille",      prenom: "Morgan",        age: 19 },
  chanteur15: { nom: "Degout",      prenom: "Antoine",       age: 18 },
  chanteur16: { nom: "Dirand",      prenom: "Elija",         age: 23 },
  chanteur17: { nom: "Inconnu",     prenom: "Khalil",        age: 24 }
};

class App extends Component {

  // Le state s'appelle "artiste" : on utilisera ce nom PARTOUT
  state = {
    artiste: artistes,
    plus: 2,
    isShow: false
  }

  handleShow = () => {
    this.setState(prev => ({ isShow: !prev.isShow }))
  }

  // Change le nom d'UN chanteur à chaque frappe
  handleChange = (event, id, champ) => {
    const valeur = event.target.value   // on lit la valeur avant le setState
    this.setState(prev => ({
      artiste: {
        ...prev.artiste,
        [id]: { ...prev.artiste[id], [champ]: valeur }   // [champ] = clé calculée
      }
    }))
  }

  // "Supprime" un chanteur : nom = X et âge = 0 (comme ta version UFC)
  hideName = (id) => {
    this.setState(prev => ({
      artiste: {
        ...prev.artiste,
        [id]: { ...prev.artiste[id], nom: "X", age: 0 }
      }
    }))
  }

  // Fait vieillir UN chanteur de nb ans
  handleClick = (id, nb) => {
    this.setState(prev => ({
      artiste: {
        ...prev.artiste,
        [id]: { ...prev.artiste[id], age: prev.artiste[id].age + nb }
      }
    }))
  }
  vieillirTous = (nb) => {
    this.setState(prev => {
      const artiste = {}
      Object.keys(prev.artiste).forEach(id => {
        artiste[id] = { ...prev.artiste[id], age: prev.artiste[id].age + nb }
      })
      return { artiste }
    })
  }
  render() {
    const list = Object.keys(this.state.artiste).map(id => (
    <Artiste
      key={id}
      age={this.state.artiste[id].age}
      prenom={this.state.artiste[id].prenom}
      nom={this.state.artiste[id].nom}
      handleChange={(event) => this.handleChange(event, id, "nom")}
      handleChangePrenom={(event) => this.handleChange(event, id, "prenom")}
      hideName={() => this.hideName(id)}
      plus={this.state.plus}
      handleClick={() => this.handleClick(id, this.state.plus)}
    />
  ))

    return (
      <Fragment>
        <h1>Les chanteurs de la promo 2026 StarAcademy</h1>
        <h3>Qui restera à la fin ?</h3>
        {list}

        {/* Cet Artiste n'a pas de handlers : il utilise les children */}
        <Artiste prenom="Conor" nom="McGregor" age={50}>
          {this.state.isShow ? <strong>Je suis le GOAT</strong> : null}
          <button onClick={this.handleShow}>
            {this.state.isShow ? 'Cacher' : 'Montrer'}
          </button>

          <h4>Toute la promo</h4>
<Button plus={this.state.plus} veillir={() => this.vieillirTous(this.state.plus)} />
        </Artiste>
      </Fragment>
    )
  }
}

export default App;