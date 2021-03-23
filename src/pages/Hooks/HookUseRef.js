import React, {useRef, useState} from 'react'

export default function HookUseRef(props) {

    let [number,setNumber] = useState(1);

    let messRef = useRef('')
    console.log({messRef});

    return (
        <div className="container mt-5">
            {number} <br/>
            <button className="btn btn-danger mt-3" onClick={() => {
                setNumber(number + 1);
                messRef.current = 'Dữ liệu đã được thay đổi';
            }}>
                +
            </button>
        </div>
    )
}
