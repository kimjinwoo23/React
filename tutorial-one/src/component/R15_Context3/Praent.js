import React, {useState} from "react";

//외부에서 만든 Context 객체를 import 가져와 사용
import UserContext from "./UserContext";
import Child from "./Child";

//부모 컴포넌트 정의
const Parent = () => {
    // 상태변수 userList, setUserList 선언
    // userList 초기값 빈 배열 공간으로 만들어줄 것
    const [userList, setUserList] = useState([]);
    //     userList = 유저리스트 = 처음엔 아무 유저도 없기 때문에 빈 목록
    //     setUserList = 추가될 유저 리스트 

    return (
        <UserContext.Provider value={{userList, setUserList}}>
            <Child />
            <div>
                {/* child에서 추가한 user 정보를 보여주는 공간 */}
                {userList.map((유저, index) => {
                    return (
                        /* Key 속성 : 배열 반복 출력 시 태그를 구분하는 key */

                        <ul key={index}>
                            <li>index : {index} 번 째 유저</li>
                            <li>name : {유저.name}</li>
                            <li>age  : {유저.age}</li>
                        
                        </ul>
                    )


                })



                }
            </div>
        </UserContext.Provider>

    )
}
export default Parent;


/*배열.map((요소,index)) => {
    
    return(
        얻어온값확인하기
    
    
    
    )
}) 
배열의 각 값을 순서대로 하나씩 얻어와 return에 전달
return에서는 하나씩 얻어온 값을 모두 모아서 새로운 배열을 최종적으로 반환

index는 자동으로 0부터 번호매김이 시작되는 수이기때문에 
*/












