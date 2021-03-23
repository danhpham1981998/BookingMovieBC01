import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import {layDanhSachPhimAction} from '../../redux/actions/PhimActions'
import { NavLink } from "react-router-dom";
class Home extends Component {
  //Danh sách film
  // state = {
  //   arrFilms: [],
  // };

  loadFilm = () => {
    this.props.dispatch(layDanhSachPhimAction())
  };

  renderFilms = () => {
    return this.props.mangPhim.map((item, index) => {
        return <div className="col-4 my-3" key={index}>
                <div className="card text-white bg-dark">
                    <img className="card-img-top" src={item.hinhAnh} alt={item.tenPhim} width={150} height={200}/>
                    <div className="card-body">
                        <h4 className="card-title">{item.tenPhim}</h4>
                        <NavLink className="btn btn-success" to={`details/${item.maPhim}`}>Đặt vé</NavLink>
                    </div>
                </div>
                </div>

    })
  }

  render() {
    return (
      <div className="container">
        <button className="btn btn-primary mt-3"
          onClick={() => {
            this.loadFilm();
          }}
        >
          Lấy danh sách phim
        </button>
        <div className="text-center display-4">Danh sách phim</div>
        <div className="row">{this.renderFilms()}</div>
      </div>
    );
  }
  //Hàm giống hàm render của react component kế thừa nên có
  componentDidMount() {
    //Các api muốn gọi sau khi giao diện render thì sẽ gọi trong hàm này
    this.loadFilm();
  }
}

const mapStateToProps = (state) => ({
  mangPhim: state.PhimReducer.mangPhim,
});

export default connect(mapStateToProps)(Home);
