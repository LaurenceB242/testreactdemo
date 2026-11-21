const Artiste = (props) => {
    //console.log(props)
    return ( 
        <>
            <h2>Chanteur : {props.prenom} {props.nom.toUpperCase()} - {props.age} ans</h2>
        </>
     );
}
 
export default Artiste;