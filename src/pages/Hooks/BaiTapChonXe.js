import React,{useState} from 'react'

export default function BaiTapChonXe(props) {

    let [stateImg,setImg] = useState('../../assets/img/car/products/black-car.jpg')

    const changeColor = (color) => {
        setImg('../../assets/img/car/products/${color}-car.jpg')
    }

    return (
        <div className="container">
          <div className="row">
              
            <div className="col-4">
                <button className="btn btn-danger" style={{color:'black'}} onClick={() => {
                    changeColor('black')
                }}></button>
            </div>
            <div className="col-4">
                <button className="btn btn-dark" style={{color:'red'}} onClick={() => {
                    changeColor('red')
                }}></button>
            </div>
            <div className="col-4">
                <button className="btn btn-white" style={{color:'silver'}} onClick={() => {
                    changeColor('silver')
                }}></button>
            </div>
          </div>
        </div>
    )
}
