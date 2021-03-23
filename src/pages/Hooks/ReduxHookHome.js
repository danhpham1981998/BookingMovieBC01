import React,{useEffect,useState} from 'react'
import {connect, useSelector, useDispatch} from'react-redux'
import {layDanhSachPhimAction} from '../../redux/actions/PhimActions'

export default function ReduxHookHome(props) {
    

    //UseSelector là hook để lấy dữ liệu từ reducer về
    const mangPhim = useSelector(state => state.PhimReducer.mangPhim);

    //UseDicpatch tương tự this.prop.disptach
    const dispatch = useDispatch();

    const renderPhim = () => {
        return mangPhim.map((phim,index) => {
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
        dispatch(layDanhSachPhimAction());

        return () => {
            //Hàm này sẽ được kích hoạt khi component mất khỏi giao diện

        }
    }, [])


    return (
        <div className="container mt-3">
            <button onClick={() => {
                
            }} className="btn btn-warning text-dark">Lấy danh sách phim</button>
            <div className="display-4 text-center">Danh sách phim</div>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}

