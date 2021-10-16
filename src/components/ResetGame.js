//Réinitialise l'app
const ResetGame =(props,countRound,playerWin,
    colorPlayerOne,colorPlayerTwo,
    gameOver,
    storeChoicePlayerOne,storeChoicePlayerTwo,
    pointPlayer1,pointPlayer2) =>{
    
    props.onClickPlayer('')
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
    pointPlayer1(0)
    pointPlayer2(0)
    gameOver(false)  
}

export default ResetGame

