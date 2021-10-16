//Initialise le composant Board
const InitializeBoard = (countRound,playerWin,colorPlayerOne,colorPlayerTwo,gameOver,storeChoicePlayerOne,storeChoicePlayerTwo) =>{
    countRound(0)
    playerWin('')
    colorPlayerOne('bg-primary text-light')
    colorPlayerTwo('bg-light text-danger')  
    //chaque case récupère sa valeur "nombre" 
    for (let i=1;i<10;i++){
        let square=document.getElementById(`Square${i}`)
        square.innerHTML=i   
        square.className='text-light'
    }
    storeChoicePlayerOne([])
    storeChoicePlayerTwo([])
    gameOver(false)    
}

export default InitializeBoard