import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

export default class Lifecycle extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            stateNumber: {
                number: 1
            }
        }
        console.log('constructor nè');
    }

    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps nè');
        return currentState;
    }

    //Chạy sau khi state hoặc props của component thay đổi và trước render
    shouldComponentUpdate(newProps,newState) {
        console.log('shouldComponentUpdate nè');
        //Xử lý => return false giao diện không render lại, return true giao diện render lại (default)
        return true;
    }

    render() {
        console.log('render nè');
        return (
            <div>
                lifecycle
                <h1>{this.state.stateNumber.number}</h1>
                <button onClick={() => {
                    // this.setState({
                    //     number:this.state.number + 1
                    // })
                    let newStateNumber = {...this.state.stateNumber} //PureComponent tkho6ng chuyền được object và mảng... Phải tạo mới dữ liệu {...}
                    newStateNumber.number += 1;
                    this.setState ({
                        stateNumber:newStateNumber
                    })
                }}>
                    Click
                </button>
                {this.state.stateNumber.number < 3 ? 
                <ChildComponent stateNumber={this.state.stateNumber}/>    
                : ''}
            </div>
        )
    }

    //Lifecycle dùng để gọi api
    //Chạy 1 lần sau lần render 'ĐẦU TIÊN'
    componentDidMount() {
        console.log('DidMount nè');
    }

    //componentDidupdate chạy kể lần thay đổi props hoặc state
    //Chạy mỗi lần setState hoặc Props
    componentDidUpdate(prevProps,prevState) {
        //Hạn chế setState trong component này (Muốn setState phải có điều kiện if)
        console.log('componentDidupdate nè')
    }
}
