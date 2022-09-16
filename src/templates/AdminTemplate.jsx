import React from 'react'
import { NavLink } from 'react-router-dom'

export default function AdminTemplate(props) {
    return (
        <div >
            <div className="d-flex">
                <div className="dashBoard w-25 bg-dark" style={{ minHeight: '100vh' }}>
                    <img src="https://i.pravatar.cc?u=9" alt="..." width={50}
                        height={50} style={{ objectFit: 'cover' }} className="rounded-circle" />
                    <nav className="mt-5">
                        <div>
                            <NavLink to="/product">Product Manager</NavLink>
                            <NavLink to="/job">Job Manager</NavLink>
                        </div>
                    </nav>
                </div>
                <div className="component-content">
                    <props.Component />
                </div>
            </div>
        </div>
    )
}
