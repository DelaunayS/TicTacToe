// Vérifie quelle case est libre
const EmptySquare =()=>{
    let result=[]
    for (let i=1;i<10;i++){
        let square=document.getElementById(`Square${i}`)
        if (square.innerHTML!=='X'&& square.innerHTML!=='O'){
            result.push(i)
        }        
    }  
    return result 
}
export default EmptySquare