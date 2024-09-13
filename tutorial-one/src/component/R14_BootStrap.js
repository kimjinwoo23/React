/*
boot strap을 이용한 npm install 사용하기

npm = nodejs설치나 실행 환경설정하는 약자 

npm을 이용해서 실행하거나 설치 설정 변경가능 



npm i bootstrap 으로 무언갈 설치할때는 

npm i 설치할 파일명 

npm install 설치할 파일명 

부트스트랩을 설치할때는 
npm i bootstrap 사용 

npm i bootstrap 뒤에 추가로 @버전을 작성하지않으면 가장 최신버전 설치

특정 버전을 설치하고싶다면 npm i bootstrap@5.2.1

삭제할때는 npm uninstall bootstrap 

부트스트랩 이외 특정파일을 삭제하고싶다면 
npm un install 특정파일명

npm 으로 설치는 npm start로 시작하고있는 패키지 실행여부의 관계없이 설치가능 

import 'bootstrap/dist/css/bootstrap.css';
부트스트랩 가져와서 사용할때는 index.js 에 import해줌



*/
import React from "react";

const 부트스트랩예제1 = () => {
    return(
        <div className="container">{/*반응형 레이아웃 컨테이너 만들기  */}
            <div className="row"> {/*row =가로 행 생성  */}
                <div className="col-md-auto"> {/* 중간화면 크기에서 세로의 너비를 자동으로설정  */}
                    <h1>react 와 bootstrap 사용 시작</h1>
                    <button className="btn btn-primary">부트스트랩버튼</button>
                    {/*btn-primary = 파란색버튼 css */}

                </div>

            </div>
        </div>


    )

}
export default 부트스트랩예제1;











