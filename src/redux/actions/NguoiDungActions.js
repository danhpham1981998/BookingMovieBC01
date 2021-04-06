import axios from 'axios';
import { accessToken, domain, taiKhoan } from '../../configs/setting';
import {history} from '../../App';

export const dangNhapAction = (nguoiDung) => { //nguoiDung = {taiKhoan: '',matKhau: ''}
    return async (dispatch) => {

        try {
            const result = await axios ({
                url: `${domain}/api/QuanLyNguoiDung/DangNhap`,
                method: 'POST',
                data: nguoiDung
            });

            //Lấy giá trị api gửi về lưu vào localstorage
            console.log('result',result);
            localStorage.setItem(accessToken,result.data.accessToken);
            localStorage.setItem(taiKhoan,JSON.stringify(result.data));

            //Đăng nhập thành công chuyển hướng về home
            history.push('/');
            //history.push nhận vào pathName => di chuyển đến trang component tương ứng
            dispatch({
                type: 'DANG_NHAP',
                taiKhoan: result.data.taiKhoan
            })
        }catch(errors) {
            console.log('errors',errors);
        }
    }
}
