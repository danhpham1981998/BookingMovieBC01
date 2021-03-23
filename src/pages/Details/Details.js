import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { layThongTinChiTietPhimAction } from "../../redux/actions/PhimActions";

export default function Details(props) {
  console.log("props", props);

  const { chiTietPhim } = useSelector((state) => state.PhimReducer);

  const dispacth = useDispatch();

  //Tự gọi api khi trang vừa load
  useEffect(() => {
    //Lấy tham số từ url
    let { id } = props.match.params;
    //Gọi action truyền vào id phim
    dispacth(layThongTinChiTietPhimAction(id));
  }, []);

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6">
          <img
            src={chiTietPhim.hinhAnh}
            alt={chiTietPhim.tenPhim}
            className="w-100"
          />
        </div>
        <div className="col-6">
          <table className="table">
            <thead>
              <tr>
                <th>Tên Phim</th>
                <th>{chiTietPhim.tenPhim}</th>
              </tr>
              <tr>
                <th>Mô tả</th>
                <th>{chiTietPhim.moTa}</th>
              </tr>
              <tr>
                <th>Ngày công chiếu</th>
                <th>{chiTietPhim.ngayKhoiChieu}</th>
              </tr>
              
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}
