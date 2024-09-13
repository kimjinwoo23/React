import React from "react";
import './TypingTest.css';

const 결과 =({텍스트입력,결과확인})=> {
    const isCorrect = 텍스트입력 === 결과확인

    return(
        <div className="result">

        <h2>결과</h2>
        {isCorrect ? (
        <p>완벽히작성함 ㅇㅇ</p>
        ) : (
            <p>틀렸으니 다시입력</p>
        )
    }
        </div>

    );


};

export default 결과;