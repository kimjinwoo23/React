import React, {useState, useEffect} from 'react';
import './TicTacToe.css';
const shuffleArray = (array) => {
    return array.sort(() => Math.random() -0.5);
}
const TicTacToe = () => {
    const [numbers, setNumbers] = useState(shuffleArray([...Array(9).keys()].map(n => n +1)));
    const [nextNumber, setNextNumber] = useState(1);
    const [message, setMessage] = useState('');
    const handleNumberClick = (number) => {
        if(number === nextNumber) {
            if(number === 9) {
                setMessage('승리!');
            } else {
                setNextNumber(nextNumber +1);
            }
        } else {
            setMessage('패배!');
        }
    }
    const handleRestart = () => {
        setNumbers(shuffleArray([...Array(9).keys()].map(n => n +1)));
        setNextNumber(1);
        setMessage('');
    }
    return (
        <div className='tic-tap-container'>
            <h1>Tic Tac Toe</h1>
            <div className='grid'>
                {numbers.map((number) => (<button className='number-button' 
                key={number} onClick={() => handleNumberClick(number)}>{number}</button>))}
            </div>
            <p className='message'>{message}</p>
            <button className='restart-button' onClick={handleRestart}>게임 다시하기</button>
        </div>
    )
}
export default TicTacToe;