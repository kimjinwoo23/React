import React , {useState} from 'react';
//Profile.css

const 프로필 = () => {
    const [ 선택한이미지,set선택한이미지] =useState(null);

    const 이미지변경하기 =(event) => {
        const file = event.target.files[0];

        if(file) {
            const reader = new FileReader();
            reader.onloadend=()=>{
                set선택한이미지(reader.result);
            };
            reader.readAsDataURL(file);
            
        }
    }

    return(
        <>
        <h1>프로필 사진 변경</h1>
        <input type='file' accept='image/*' onChange={이미지변경하기} />
        {/*만약에 선택한 이미지가 존재한다면 이미지 미리보기 제공 */}
        {선택한이미지&&(
            <div>
                <h2>미리보기</h2>
            <img src={선택한이미지}/>

            </div>
        )}

        </>
    )


}
export default 프로필;