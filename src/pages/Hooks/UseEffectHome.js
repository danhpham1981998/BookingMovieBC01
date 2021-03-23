import React, {useState,useEffect} from 'react'
import axios from 'axios';


// Làm trang chủ tương tự class Home tuy nhiên làm = function component
export default function UseEffectHome() {

    const [arrPhim,setArrPhim] = useState([]);//Tạo ra state cho mảng phim => load ra trang chủ

    const renderPhim = () => {
        return arrPhim.map((phim,index) => {
            return <div className="col-4 my-3" key={index}>
            <div className="card text-white bg-dark">
                <img className="card-img-top" src={phim.hinhAnh} alt={phim.tenPhim} width={150} height={200}/>
                <div className="card-body">
                    <h4 className="card-title">{phim.tenPhim}</h4>
                    <p className="card-text">{phim.ngayKhoiChieu}</p>
                </div>
            </div>
            </div>
        })
    }

    //UseEffect phải đặt trước return
    //Nhận vào 2 tham số:
    // + Tham số 1: Là hàm chạy sau khi component render
    // + Tham số 2: Chứa state
    //Ghi chú: 1 component có thẻ gọi nhiều useeffect
    useEffect(() => {
        layDanhSachPhim();
        return () => {
            //Hàm này sẽ được kích hoạt khi component mất khỏi giao diện

        }
    }, [])

    const layDanhSachPhim = async () => {
        try {
            let result = await axios({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method:'GET'
            })
            setArrPhim(result.data);
        }catch (errors){
            console.log('errors',errors);
        }
    }

    return (
        <div className="container mt-3">
            <button onClick={() => {
                layDanhSachPhim();
            }} className="btn btn-danger">Lấy danh sách phim</button>
            <div className="display-4 text-center">Danh sách phim</div>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}
