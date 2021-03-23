import React from 'react'
import { Route } from 'react-router';



export const AdminTemplate = (props) => {
    let {Component,...restParam} = props;

    return <Route {...restParam} render = {(propsRoute) => {
        return <div className="row">
            <div className="col-4 bg-dark" style={{height:1000}}>

            </div>
            <div className="col-8">
                <Component {...restParam} />
            </div>
        </div>
    }}/>

}