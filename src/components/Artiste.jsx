// On crée un composant fonctionnel nommé "Artiste".
// Il reçoit en paramètre "props" (qui est le colis contenant le prénom, le nom et l'âge envoyés par App.js).
const Artiste = (props) => {
    // console.log(props);
    return ( 
        // Les balises vides <> et </> s'appellent un "Fragment". 
        // Elles servent juste à regrouper le contenu sans ajouter de balise <div> inutile
        <>
            <h2>Chanteur : {props.prenom} {props.nom.toUpperCase()} - {props.age} ans</h2>
            {/* On affiche les informations du chanteur en ouvrant le colis "props" */}
            {/* props.prenom : Affiche le prénom */}
            {/* props.nom.toUpperCase() : Attrape le nom et le met tout en MAJUSCULES */}
            {/* props.age : Affiche l'âge */}
        </>
     );
}
 
// On exporte le composant pour qu'il puisse être utilisé (importé) dans le fichier App.js
export default Artiste;
// il ne peut y avoir qu'un seul export default par fichier (puisqu'il n'y a qu'un seul élément "par défaut").