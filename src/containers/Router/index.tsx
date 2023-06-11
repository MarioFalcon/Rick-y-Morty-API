import { FC } from "react"
import Dashboard from "../../views/Dashboard/dashboard"
import Login from '../../views/Auth/Login/index'
import Signup from '../../views/Auth/Signup/index'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Welcome from "../../views/Welcome/welcome"


const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<Navigate replace to="/login" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router