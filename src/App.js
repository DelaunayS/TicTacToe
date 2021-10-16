import React,{useState} from 'react'
import StartComponent from './components/startComponent';
import ChoiceXorO from './components/ChoiceX_O';
import Board from './components/Board';

function App() {

  const [numberOfPlayer,setNumberOfPlayer]=useState('')
  const [choiceXorO,setChoiceXorO]=useState(['X','O'])  
    
  //récupère le nombre de joueur(s)
  const onClickPlayer= (value1)=>{
    setNumberOfPlayer(value1) 
  }

  //récupère le choix du symbole pour le joueur 1
  const onClickChoiceXorO=(choice)=>{
    setChoiceXorO(choice)
  }
 
  return (
    <div className="App bg-secondary">  
      <div className="AppContainer bg-light">
          {numberOfPlayer==='' && <StartComponent onClickPlayer={onClickPlayer} onClickChoiceXorO={onClickChoiceXorO}/>}
          {choiceXorO==='' && <ChoiceXorO onClickChoiceXorO={onClickChoiceXorO}/>}
          {(choiceXorO!=='' && numberOfPlayer!=='') && <Board choiceXorO={choiceXorO} onClickPlayer={onClickPlayer} numberOfPlayer={numberOfPlayer}/>}
      </div>   
    </div> 
  );
}

export default App;