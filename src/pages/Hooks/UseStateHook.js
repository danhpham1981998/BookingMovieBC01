
//Chỉ sử dụng Hooks cho rfc
import React,{useState} from 'react'

export default function UseStateHook() {

    //tuple: Mảng hỗn hợp [1,'nguyễn văn a',function() {}]
    let [state,setState] = useState({
        number: 1
    }); //useState là hàm trả về một mảng gồm 2 giá trị là state và phương thức setState
    let [number,setNumber] = useState(0);

    return (
        <div className="container">
            <h1>{state.number} - {number}</h1>
            <button className="btn btn-primary" onClick={() => {
                setState({
                    number : state.number + 1
                })
                setNumber(number + 1);
            }}>
            Click
            </button>
        </div>
    )
}
