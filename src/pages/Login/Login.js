import React from 'react'
import { withFormik,useFormik } from 'formik';
import * as yup from 'yup';
import {useDispatch,useSelector} from 'react-redux';
import { dangNhapAction } from '../../redux/actions/NguoiDungActions';

export default function Login(props) {

    const disptach = useDispatch();

    //Các props của formik cung cấp
    const {handleChange,handleSubmit,handleBlur,errors,touched,isValid} = useFormik({
        initialValues: {
            taiKhoan:'',
            matKhau:'',
            // mail:''
        },
        validationSchema: yup.object().shape({
            taiKhoan: yup.string().required('Tài khoản không được bỏ trống !').min(4,'Tài khoản tối thiếu 6 kí tự'),
            matKhau: yup.string().required('Mật khẩu không được bỏ trống !'),
            // mail: yup.string().required('Không được bỏ trống mail !').matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Email không hợp lệ')
        }),
        onSubmit: values => { //values <=> this.state.values (react class component)
            console.log(values);
            // Gọi api hoặc action để đưa dữ liệu về sever
            disptach(dangNhapAction(values));
        }
    })

    return (
        <form className='container' onSubmit={handleSubmit} >
                <h3>Đăng nhập</h3>
                <div className='form-group'>
                    <p>Tài khoản</p>
                    <input className='form-control' name='taiKhoan' onChange={handleChange} onBlur={handleBlur}/>
                    {/* Xử lý sự kiện */}
                    {errors.taiKhoan && touched.taiKhoan ? <p className="text-danger">{errors.taiKhoan}</p>: ''} 
                </div>
                <div className='form-group'>
                    <p>Mật khẩu</p>
                    <input className='form-control' name='matKhau' onChange={handleChange} onBlur={handleBlur}/>
                    {errors.matKhau && touched.matKhau ? <p className="text-danger">{errors.matKhau}</p>: ''}
                </div>
                {/* <div className='form-group'>
                    <p>Email</p>
                    <input className='form-control' name='mail' onChange={handleChange} onBlur={handleBlur}/>
                    {errors.mail && touched.mail ? <p className="text-danger">{errors.mail}</p>: ''}
                </div> */}
                <div className='form-group'>
                    <button type='submit' className='btn btn-primary' disabled={!isValid} >Đăng nhập</button>
                </div>
            </form>
    )
}

