import Button from "./Button";   // ✅ le bon fichier

const Artiste = ({ prenom, nom, age, children, handleChange, hideName, plus, handleClick }) => {
    return (
        <>
            <h2 style={{ backgroundColor: age < 46 ? 'dodgerblue' : 'crimson', color: 'white' }}>
                Chanteur : {prenom} {nom.toUpperCase()} - {age} ans
            </h2>

            {/* On n'affiche ces éléments que si le parent a envoyé la fonction */}
            {handleChange && <input type="text" value={nom} onChange={handleChange} />}
            {hideName && <button onClick={hideName}>X</button>}

            {children ? <div>{children}</div> : null}

            {handleClick && <Button plus={plus} veillir={handleClick} />}
        </>
    );
}

export default Artiste;

// On crée un composant fonctionnel nommé "Artiste".
// Il reçoit en paramètre "props" (qui est le colis contenant le prénom, le nom et l'âge envoyés par App.js).
// const Artiste = (props) => {
//     // console.log(props);
//     return ( 
        // Les balises vides <> et </> s'appellent un "Fragment". 
        // Elles servent juste à regrouper le contenu sans ajouter de balise <div> inutile
        // <>
            {/* <h2>Chanteur : {props.prenom} {props.nom.toUpperCase()} - {props.age} ans</h2> */}
            {/* On affiche les informations du chanteur en ouvrant le colis "props" */}
            {/* props.prenom : Affiche le prénom */}
            {/* props.nom.toUpperCase() : Attrape le nom et le met tout en MAJUSCULES */}
            {/* props.age : Affiche l'âge */}
        {/* </>
     );
}
  */}
// On exporte le composant pour qu'il puisse être utilisé (importé) dans le fichier App.js
// export default Artiste;
// il ne peut y avoir qu'un seul export default par fichier (puisqu'il n'y a qu'un seul élément "par défaut").