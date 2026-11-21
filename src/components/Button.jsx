// On crée un composant fonctionnel nommé "Button" 
// Il reçoit un colis (un objet) qu'on appelle "props" et qui contient les informations envoyées par App.js
const Button = (props) => {
    return ( 
        // On écoute le clic sur le bouton. 
        // Quand l'utilisateur clique, on lance la fonction qui était rangée dans le colis : props.veillir
        <button onClick={props.veillir}>
            {/* On ouvre le colis (props) pour récupérer et afficher la valeur de "plus -> 2" */}
            +{props.plus}
        </button>
     );
}
 
// On exporte le composant pour qu'il puisse être utilisé et affiché dans d'autres fichiers
export default Button;