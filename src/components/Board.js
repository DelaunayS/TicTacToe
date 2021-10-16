import React, { useEffect, useState } from "react";
import InitializeBoard from "./InitializeBoard";
import ResultValidation from "./ResultVerification";
import ResetGame from "./ResetGame";
import EmptySquare from "./EmptySquare";

//Composant affichant le board 3x3//
function Board(props) {

  //stocke le symbole du joueur 1
  const Player1 = props.choiceXorO[0];
  //stocke le symbole du joueur 2
  const Player2 = props.choiceXorO[1];

  //nombre de coups joués
  const [countRound, setCountRound] = useState(0);

  //Dis quel joueur a gagné
  const [playerWin, setPlayerWin] = useState("");

  //nombre de point du joueur 1
  const [pointPlayer1, setPointPlayer1] = useState(0);
  //nombre de point du joueur 2
  const [pointPlayer2, setPointPlayer2] = useState(0);
  
  // stocke les choix du joueur 1
  const [storeChoicePlayerOne, setStoreChoicePlayerOne] = useState([]);
  // stocke les choix du joueur 2const [storeChoicePlayerTwo,setStoreChoicePlayerTwo]=useState([])
  const [storeChoicePlayerTwo, setStoreChoicePlayerTwo] = useState([]);

  //gère la couleur de la div id="playerOne" pour savoir si c'est son tour de jeu
  const [colorPlayerOne, setColorPlayerOne] = useState("bg-primary text-light");
  useEffect(() => {
    if (countRound % 2 !== 0) {
      setColorPlayerOne("bg-light text-primary");
    } else {
      setColorPlayerOne("bg-primary text-light");
    }
  }, [countRound]);

  //gère la couleur de la div id="playertwo" pour savoir si c'est son tour de jeu
  const [colorPlayerTwo, setColorPlayerTwo] = useState("bg-light text-dark");
  useEffect(() => {
    if (countRound % 2 !== 0) {
      setColorPlayerTwo("bg-danger text-light");
    } else if (countRound % 2 === 0 && countRound > 0) {
      setColorPlayerTwo("bg-light text-danger");
    }
  }, [countRound]);

  //Permet de lancer InitializeBoard après un délai de 2 secondes
  function Timer(delay) {
    let timer = setTimeout(() => {
      InitializeBoard(
        setCountRound,
        setPlayerWin,
        setColorPlayerOne,
        setColorPlayerTwo,
        setGameOver,
        setStoreChoicePlayerOne,
        setStoreChoicePlayerTwo
      );
      clearTimeout(timer);
    }, delay);
  }

  //gère l'état de la partie
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    //si la partie est finie
    if (gameOver) {
      //si le joueur 1 gagne
      if (countRound % 2 !== 0 && countRound > 4) {
        setPlayerWin("Joueur 1 gagne");
        setPointPlayer1((p) => p + 1);
        Timer(2000);

        //si le joueur 2 gagne
      } else if (countRound % 2 === 0 && countRound > 4) {
        setPlayerWin("Joueur 2 gagne");
        setPointPlayer2((p) => p + 1);
        Timer(2000);
      }
      //en cas d'égalité
    } else if (!gameOver && countRound > 8) {
      setPlayerWin("Egalité");
      Timer(2000);
    }
  }, [countRound, gameOver]);

  //quand on clique sur une case//
  const onClickSquare = (e) => {
    //conditions pour que l'on puisse cliquer sur le board
    if (e.target.innerHTML !== "O" && e.target.innerHTML !== "X" && !gameOver) {
      setCountRound(countRound + 1);
      var tempChoiceOne = [...storeChoicePlayerOne];
      var tempChoiceTwo = [...storeChoicePlayerTwo];

      // si c'est au tour du joueur 1
      if (countRound % 2 === 0) {
        tempChoiceOne.push(e.target.innerHTML);// stocke la case choisie
        setStoreChoicePlayerOne(tempChoiceOne);
        e.target.innerHTML = Player1; //ajoute le symbole du joueur
        e.target.className = "text-primary"; // modifie la couleur du symbole
        ResultValidation(tempChoiceOne, setGameOver); // on vérifie s'il y a gain

        // si on joue contre l'ordinateur
        if (
          props.numberOfPlayer === "1player" &&
          countRound < 8 &&
          !ResultValidation(tempChoiceOne, setGameOver)
        ) {
          setCountRound((p) => p + 1);
          // choisit l'index dans l'array des cases libres
          const index =Math.ceil(Math.random() * EmptySquare().length-1);                 
          // sélectionne la case avec l'id='Square[index]'
          const squareOrdi = document.getElementById(
            `Square${EmptySquare()[index]}`
          );
          tempChoiceTwo.push(EmptySquare()[index].toString());
          setStoreChoicePlayerTwo(tempChoiceTwo);
          squareOrdi.innerHTML = Player2;
          squareOrdi.className = "text-danger";
          ResultValidation(tempChoiceTwo, setGameOver);
        }
      }

      // si c'est au tour du joueur 2 (humain) (idem que joueur 1)
      else {
        if (props.numberOfPlayer === "2players") {
          tempChoiceTwo.push(e.target.innerHTML);
          setStoreChoicePlayerTwo(tempChoiceTwo);
          e.target.innerHTML = Player2;
          e.target.className = "text-danger";
          ResultValidation(tempChoiceTwo, setGameOver);
        }
      }
    }
  };

  return (
    <div className="text-center ">
      <div className="container text-center">
        <div className="row m-3">
          <div
            id="playerOne"
            className={`col-5 border border-dark ${colorPlayerOne}`}
          >
            joueur 1 : <span className="mx-1">{props.choiceXorO[0]}</span>
          </div>
          <div className="col-2"></div>
          <div
            id="playerTwo"
            className={`col-5 border border-dark ${colorPlayerTwo}`}
          >
            joueur 2 : <span className="mx-1">{props.choiceXorO[1]}</span>
          </div>
        </div>
      </div>
      <div className="container w-75 text-center bg-dark border border-dark rounded-3 p-1">
        <table id="board" className="bg-light">
          <tbody>
            <tr>
              <td id="Square1" className="text-light" onClick={onClickSquare}>
                1
              </td>
              <td id="Square2" className="text-light" onClick={onClickSquare}>
                2
              </td>
              <td id="Square3" className="text-light" onClick={onClickSquare}>
                3
              </td>
            </tr>
            <tr>
              <td id="Square4" className="text-light" onClick={onClickSquare}>
                4
              </td>
              <td id="Square5" className="text-light" onClick={onClickSquare}>
                5
              </td>
              <td id="Square6" className="text-light" onClick={onClickSquare}>
                6
              </td>
            </tr>
            <tr>
              <td id="Square7" className="text-light" onClick={onClickSquare}>
                7
              </td>
              <td id="Square8" className="text-light" onClick={onClickSquare}>
                8
              </td>
              <td id="Square9" className="text-light" onClick={onClickSquare}>
                9
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="container text-center">
        <div className="row">
          <div className="col m-3">
            <span className="p-2 m-2 h3 rounded-pill bg-primary text-light">
              {pointPlayer1}
            </span>
            <span className="p-2 m-2 h3 rounded-pill bg-danger text-light">
              {pointPlayer2}
            </span>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div id="textPlayerWin" className={`col-6 mx-auto h4 text-dark`}>
            {playerWin}
          </div>
          <button
            type="button"
            className="col-4 mx-auto btn btn-outline-secondary h5"
            onClick={() =>
              ResetGame(
                props,
                setCountRound,
                setPlayerWin,
                setColorPlayerOne,
                setColorPlayerTwo,
                setGameOver,
                setStoreChoicePlayerOne,
                setStoreChoicePlayerTwo,
                setPointPlayer1,
                setPointPlayer2
              )
            }
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
