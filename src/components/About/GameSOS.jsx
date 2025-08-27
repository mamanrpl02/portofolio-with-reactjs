import { useState, useEffect } from "react"; 

const BOARD_SIZE = 5;

export default function GameSOS() {
  const [showModal, setShowModal] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  const [board, setBoard] = useState(Array(BOARD_SIZE).fill().map(()=>Array(BOARD_SIZE).fill("")));
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [highlightSOS, setHighlightSOS] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [startTime, setStartTime] = useState(null);

  useEffect(()=>{
    const saved = JSON.parse(localStorage.getItem("sos_leaderboard"))||[];
    setLeaderboard(saved);
  },[]);

  useEffect(()=>{
    if(!startTime && board.flat().some(cell=>cell!=="")) setStartTime(Date.now());
  },[board, startTime]);

  useEffect(()=>{
    if(board.flat().every(cell=>cell!=="")) endGame();
  },[board]);

  const openModal = ()=> setShowModal(true);

  const startGame = ()=>{
    if(!playerName) return;
    setShowModal(false);
    setGameStarted(true);
  };

  const handlePlayerMove = (row,col,letter)=>{
    if(!isPlayerTurn || board[row][col]!=="") return;

    const newBoard = board.map(r=>[...r]);
    newBoard[row][col] = letter; // langsung catat huruf
    setBoard(newBoard);

    const sosResult = checkSOS(newBoard, row, col);
    if(sosResult.points>0){
      setHighlightSOS(sosResult.cells);
      setPlayerScore(playerScore+sosResult.points);
    }

    setIsPlayerTurn(false);
    setTimeout(botMove, 500);
  };

  const botMove = ()=>{
    const emptyCells = [];
    board.forEach((row,r)=>{
      row.forEach((cell,c)=>{
        if(cell==="") emptyCells.push([r,c]);
      });
    });
    if(emptyCells.length===0) return;

    const [r,c] = emptyCells[Math.floor(Math.random()*emptyCells.length)];
    const letter = Math.random()>0.5?"S":"O";

    const newBoard = board.map(r=>[...r]);
    newBoard[r][c] = letter;
    setBoard(newBoard);

    const sosResult = checkSOS(newBoard, r, c);
    if(sosResult.points>0){
      setHighlightSOS(sosResult.cells);
      setBotScore(botScore+sosResult.points);
    }

    setIsPlayerTurn(true);
  };

  const checkSOS = (brd,row,col)=>{
    let points=0;
    let cells=[];
    const dirs=[[0,1],[1,0],[1,1],[1,-1]];
    dirs.forEach(([dr,dc])=>{
      const coords=[[row-dr,col-dc],[row,col],[row+dr,col+dc]];
      if(coords.every(([r,c])=>r>=0 && c>=0 && r<BOARD_SIZE && c<BOARD_SIZE)){
        const str = coords.map(([r,c])=>brd[r][c]).join("");
        if(str==="SOS"){
          points++;
          cells.push(...coords);
        }
      }
    });
    return {points,cells};
  };

  const endGame = ()=>{
    const duration = ((Date.now()-startTime)/1000).toFixed(2);
    let status="Seri";
    if(playerScore>botScore) status="Menang 🎉";
    else if(playerScore<botScore) status="Kalah 😢";

    alert(`${playerName}, kamu ${status}. Waktu: ${duration} detik`);

    const newRecord={name:playerName,score:playerScore,time:duration};
    const updated=[...leaderboard,newRecord].sort((a,b)=>b.score-a.score || a.time-b.time).slice(0,10);
    setLeaderboard(updated);
    localStorage.setItem("sos_leaderboard",JSON.stringify(updated));
  };

  return (
    <div className="sos-container">
      {!gameStarted && (
        <div style={{marginTop:"30px"}}>
          <p>Yuk bermain game SOS dengan saya</p>
          <button onClick={openModal}>Bermain</button>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <h2>Masukkan Nama</h2>
          <input type="text" placeholder="Nama kamu..." value={playerName} onChange={e=>setPlayerName(e.target.value)}/>
          <button onClick={startGame}>Mulai Main</button>
        </div>
      )}

      {gameStarted && (
        <div>
          <h1>Game SOS</h1>
          <div className="scoreboard">
            <p>{playerName}: {playerScore}</p>
            <p>Bot: {botScore}</p>
          </div>

          <div className="board">
            {board.map((row,r)=>row.map((cell,c)=>(
              <div key={`${r}-${c}`} className={`cell ${highlightSOS.some(([hr,hc])=>hr===r && hc===c)?"highlight":""}`}>
                {cell==="" && isPlayerTurn ? (
                  <div className="choice">
                    <button onClick={()=>handlePlayerMove(r,c,"S")}>S</button>
                    <button onClick={()=>handlePlayerMove(r,c,"O")}>O</button>
                  </div>
                ) : cell}
              </div>
            )))}
          </div>

          <h2>🏆 Leaderboard</h2>
          <ul className="leaderboard">
            {leaderboard.map((entry,i)=>(
              <li key={i}>{i+1}. {entry.name} — Skor: {entry.score}, Waktu: {entry.time}s</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
