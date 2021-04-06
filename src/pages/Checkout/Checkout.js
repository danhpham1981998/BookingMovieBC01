import React, {Fragment,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import { taiKhoan } from '../../configs/setting';
import {layThongTinPhongVeAction} from '../../redux/actions/PhimActions';
import {datVeAction} from '../../redux/actions/QuanLyDatVeAction';
import './Checkout.css'



export default function Checkout(props) {

    const {thongTinPhongVe} = useSelector(state => state.PhimReducer)

    const {danhSachGheDangDat} = useSelector(state => state.QuanLyDatVeReducer)

    const dispatch = useDispatch()

    let {id} = props.match.params;

    useEffect(() => {
        dispatch(layThongTinPhongVeAction(id))
    },[])
    console.log(thongTinPhongVe);

    //Ghế đang đặt
    const renderGheDangDat = () => {
        return danhSachGheDangDat.map((gheDangDat,index) => {
            return <Fragment key={index}>
                <span className="text-success font-weight-bold mr-2" style={{fontSize:23}}>{gheDangDat.stt}</span>
            </Fragment>
        })
    }

    const renderGhe = () => {
        return thongTinPhongVe.danhSachGhe?.map((ghe,index) => {

            //Xác định ghế đang đặt
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            let classGheDangDat = indexGheDD !== -1 ? 'gheDangDat' : '';

            //Xác định ghế đã đặt và chưa đặt
            let classGheDaDat = ghe.daDat ? 'gheDaDat': '';

            //Ghế Vip và ghế thường
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';

            //Thẻ vô hình do thư viện react cung cấp "<>" hoặc thẻ <Fragment></Fragment>
            return <Fragment key={index}>
                <button className={`ghe ${classGheDaDat} ${classGheVip} ${classGheDangDat}`} disabled={ghe.daDat} onClick={() => {
                    dispatch({
                        type:'DAT_GHE',
                        ghe
                    })
                }}>
                    {ghe.daDat === true ? 'X' : ghe.stt}</button>
                {(index + 1) % 16 === 0 ? <br/> : ''}
            </Fragment>
        })
        // const arrJSX =[];
        // for(let i=1;i<100;i++) {
        //     arrJSX.push(<button className="mr-2 mt-2">{i}</button>)
        // }
        // return arrJSX;
    }

    const tinhTongTien = () => {
        return danhSachGheDangDat.reduce((tongTien,gheDangDat, index) => {
            return tongTien += gheDangDat.giaVe;
        }, 0)
    }

    if(!localStorage.getItem(taiKhoan)){
        return <Redirect to='/login' />
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-8 text-center mt-5">
                    <img class="logo w-100" src="https://tix.vn/app/assets/img/icons/screen.png" />
                    <br/>
                    {renderGhe()}
                </div>
                <div className="col-4 text-left">
                    <div className="display-4 text-center text-success">{tinhTongTien().toLocaleString()} VNĐ</div>
                    <hr/>
                    <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} height={250} />
                    <h3>{thongTinPhongVe.thongTinPhim?.tenPhim}</h3>
                    <div>Địa chỉ: {thongTinPhongVe.thongTinPhim?.diaChi}</div>
                    <div>Ngày giờ chiếu: {thongTinPhongVe.thongTinPhim?.ngayChieu}</div>
                    <hr/>
                    <h3 className="text-primary">
                        Ghế: {renderGheDangDat()}
                        <hr/>
                    </h3>
                    <hr/>
                    <div>
                        <button className="w-100 text-center btn btn-danger" onClick={() => {
                            // Gọi action loading open
                            dispatch ({
                                type:'openLoading'
                            })

                            setTimeout (async () => {
                                //Gồm 3 bước chuyền dữ liệu về BE:
                                //B1: Lấy ra thông tin đăng nhập từ localStorage chuyển về object
                                let userlogin = JSON.parse(localStorage.getItem(taiKhoan));

                                //B2: Tạo ra data như BE yêu cầu từ thông tin người dùng đặt ghế
                                let thongTinDatVe = {
                                    "maLichChieu": props.match.params.id,
                                    "danhSachVe": danhSachGheDangDat,
                                    "taiKhoanNguoiDung": userlogin.taiKhoan
                                }

                                //B3: Chuyền dữ liệu về BE
                                dispatch(datVeAction(thongTinDatVe));
                                //Tắt loadings
                                dispatch ({
                                    type:'closeLoading'
                                })
                            },500)
                        }}>ĐẶT VÉ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
