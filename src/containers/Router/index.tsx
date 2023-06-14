import { FC } from 'react'
import Dashboard from '../../views/Characters/characters'
import Login from '../../views/Auth/Login/index'
import Signup from '../../views/Auth/Signup/index'
import Welcome from '../../views/Welcome/welcome'
import Selection from '../../views/Selection/selection'
import Characters from '../../views/Characters/characters'
import Episodes from '../../views/Episodes/episodes'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/selection" element={<Selection />} />
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
