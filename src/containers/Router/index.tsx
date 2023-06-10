import { FC } from "react"
import Dashboard from "../../views/Dashboard/dashboard"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/*" element={<Navigate replace to="/Welcome" />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router