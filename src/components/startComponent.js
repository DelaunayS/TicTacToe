import React from "react";

// Composant de la première page pour choisir le nombre de joueur(s)//
function StartComponent(props) {
     
    const onClickOnePlayer = () =>{        
        props.onClickPlayer('1player') 
        props.onClickChoiceXorO('')         
    }

    const onClickTwoPlayer = () =>{        
        props.onClickPlayer('2players')  
        props.onClickChoiceXorO('')
    }

    return(
        <div className="container text-center">
            <h3 className="text-center my-5">Combien de joueur(s) ?</h3>
            
            <div className="my-5 col ">               
                <button 
                type="button"
                className="mx-auto btn btn-lg btn-outline-dark h5"
                onClick={onClickOnePlayer}>
                    Un joueur
                </button>
            </div>
            <div className="my-5 col">               
                <button 
                 type="button"
                className="mx-auto btn btn-lg btn-outline-dark h5"
                onClick={onClickTwoPlayer}>
                    Deux joueurs
                </button>
            </div>
        </div>
    )
}

export default StartComponent