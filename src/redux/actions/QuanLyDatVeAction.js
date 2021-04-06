import axios from 'axios';
import {history} from '../../App';
import {accessToken} from '../../configs/setting';
import {layThongTinPhongVeAction} from './PhimActions';

    //Dữ liệu backend cần. Coi trên API
    // {
    //     "maLichChieu": 0,
    //     "danhSachVe": [
    //       {
    //         "maGhe": 0,
    //         "giaVe": 0
    //       }
    //     ],
    //     "taiKhoanNguoiDung": "string

export const datVeAction = (thongTinDatVe) => {
    return async (dispatch) => {
        try{
            const result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: thongTinDatVe,
                headers: {Authorization: 'Bearer ' + localStorage.getItem(accessToken)}
                //Mã toKen do BE đặt tên
            });

            //Các trường hợp lỗi cần lưu ý:
            //200: Call api thành công (FE sai)
            //201: Dữ liệu đã được khởi tạo (FE sai)
            //400: Dữ liệu yêu cầu không hợp lệ (FE sai)
            //404: Tìm không thấy dữ kiệu trên server (FE sai)
            //401: Không có quyền truy cập vào api (FE sai)
            //403: Chưa được cấp quyền truy cập vào api (FE sai)
            if(result.status === 200){
                alert('Bạn đã đặt vé thành công !!!');
                history.push(`/checkout/${thongTinDatVe.maLichChieu}`);
                //Gọi lại action lấy thông tin phòng vé (đã xây dựng sẵn)
                dispatch(layThongTinPhongVeAction(thongTinDatVe.maLichChieu));
            }
        }catch(errors){

        }
    }
}





