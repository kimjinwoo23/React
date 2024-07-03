//함수형 컴포넌트 
//1. 함수 생성하기 
//return 구문에 출력할 html 코드 작성
//만든 함수 export default 지정 

const 함수예제 = () => {
    return(
        //리액트컴포넌트에 class를작성할경우 className을 작성

        <>
            <h2 className="red">함수형컴포넌트</h2>
            <p>클래스 컴포넌트와 사용방식은비슷하나 기본 틀이다름
                부가적으로 작성해야하는 코드가 상대적으로 적음 
                const 나 function으로 시작하는 코드에는 
                render() 를 작성하지않음 


            </p>


        </> 


    )
}
export default 함수예제;