import React from 'react'

// Composant pour choisir le symbole du joueur 1 (et du joueur 2)//
function ChoiceXorO(props) {

    return(
        <div className="container text-center">
            <h3 className="my-5">
                <span className="text-primary mx-1">Joueur 1 :</span> 
                <span className="text-dark mx-2">O</span>
                 ou  
                <span className="text-dark mx-2">X</span> 
                ?
            </h3>
            
            <div className="my-5 col text-center">               
                <button className="mx-auto btn btn-lg btn-outline-dark h5"
                onClick={()=>props.onClickChoiceXorO(['O','X'])}>
                    O
                </button>
            </div>
            <div className="my-5 col">               
                <button className="mx-auto btn btn-lg btn-outline-dark h5"
                onClick={()=>props.onClickChoiceXorO(['X','O'])}>
                    X
                </button>
            </div>
        </div>
    )
    
}

export default ChoiceXorO