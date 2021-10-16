//Condition pour que la partie soit gagnée//
const winningConditions = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
];

//Vérifie le résultat
const ResultValidation=(array,gameOver) =>{ 
   
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a=array.includes(winCondition[0])
        let b=array.includes(winCondition[1])
        let c=array.includes(winCondition[2])           

        if (a===true && b===true && c===true){
            document.getElementById(`Square${winCondition[0]}`).className='bg-success'
            document.getElementById(`Square${winCondition[1]}`).className='bg-success'
            document.getElementById(`Square${winCondition[2]}`).className='bg-success'
            gameOver(true)
            return true
        }                
    }
}

export default ResultValidation