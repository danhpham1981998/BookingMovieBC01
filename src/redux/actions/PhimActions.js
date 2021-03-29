import axios from 'axios'


export const layDanhSachPhimAction = () => {

// Lấy dữ liệu từ api về
    return async (dispatch) => {
        // Gọi action loading open
        dispatch ({
            type:'openLoading'
        })
        setTimeout(async () => {
            const result = await axios ({
                url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
                method: 'GET'    
            });
            // Sau khi lấy dự liệu từ aip về sử dụng hàm dispatch của redux Thunk để đưa dữ liệu lên sever 
            dispatch({
                type:'LAY_DANH_SACH_PHIM',
                mangPhim:result.data
            });
            dispatch ({
                type:'closeLoading'
            })
        },500)
    }
}

//Lấy thông tin chi tiết phim
export const layThongTinChiTietPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method:'GET'
            })

            //sau khi lấy dữ liệu từ aip chúng ta sẽ đưa dữ liệu lên reducer = dispatch
            dispatch({
                type:'LAY_CHI_TIET_PHIM',
                chiTietPhim: result.data
            })
        }catch (erros){

        }
    }
}

//Lấy lịch chiếu phim

export const layThongTinPhongVeAction = (maLichChieu) => {
    return async(dispatch) => {
        
        try {
            let result = await axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })

            dispatch({
                type:'LAY_THONG_TIN_PHONG_VE',
                thongTinPhongVe: result.data
            })

        } catch (error) {
            console.log(error);
        }

    }
}