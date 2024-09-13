import React, {useEffect,useState} from 'react';




const 사진리스트 = () => {

    const [사진,set사진] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res =>{
            return res.json();
        })
    })


    return(
        <h1>사진리스트</h1>
        <ul>
            map과 key이용해서 사진 title과 사진 tumbnailUrl img보여주기

        </ul>

       


    )
}