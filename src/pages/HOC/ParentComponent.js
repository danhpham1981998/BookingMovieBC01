import React from 'react'
import Home from '../Home/Home'
import Register from '../Register/Register'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            <ChildComponent>
                <div className="text-center display-4">Form</div>
                <Register/>
                <div className="text-center display-4">Trang chủ nè</div>
                <Home/>
            </ChildComponent>
        </div>
    )
}
