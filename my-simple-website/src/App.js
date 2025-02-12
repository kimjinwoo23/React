
import "./App.css";
import Game from "./component/Game";
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Layout/Navbar";
import Header from "./component/Layout/Header";
import GameTwoStep from "./component/GameTwoStep";
import TicTapToe from "./component/TicTapToe/TicTapToe";
import TicTapToeToStep from "./component/TicTapToe/TicTapToeToStep";
import TypingTest from "./component/TypingTest";
import MovieRate from "./Movie/MovieGrade";
import Footer from "./component/Layout/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes> {/*링크 모음  예전에는 Switch 라고 작성했지만 v6부터 Routes 이름 사용 */}
        <Route path="/"             element =  {   <Home />   } />
        <Route path="/game"         element =  {   <Game />   } />
        <Route path="/game-twoStep" element =  {   <GameTwoStep />   } />
        <Route path="/todoList"     element =  {   <toduList />} />
        <Route path="/tictaptoe"    element =  {   <TicTapToe/>} />
        <Route path="/ttt-twoStep"  element =  {   <TicTapToeToStep/>} />
        <Route path="/TypingTest"  element =  {   <TypingTest/>} />
        <Route path="/MovieRate"  element =  {   <MovieRate/>} />

       
      </Routes>
      <Footer />

    </div>
  );
  
}

export default App;