import React from 'react'
import HocModal from '../../HOC/HocModal';
import ModalHoc from '../../HOC/ModalHoc'
import UseStateDemo from '../HooksDemo/UseStateDemo/UseStateDemo';
import Login from '../login/Login'

//tao ra component tu HOC
let WrapFormLoginModal = ModalHoc(Login, 'Login');
let WrapUseStateDemoModal = ModalHoc(UseStateDemo, 'UseState')
export default function DemoHoc() {
    return (
        <div>
            {/* <WrapFormLoginModal />
            <WrapUseStateDemoModal /> */}
            <HocModal Component={Login} id="modal1"/>
            <HocModal Component={UseStateDemo} id="modal2"/>
        </div>
    )
}
