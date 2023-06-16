import { FC } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Login from '../../views/Auth/Login/index'
import Signup from '../../views/Auth/Signup/index'
import Welcome from '../../views/Welcome/welcome'
import Selection from '../../views/Selection/selection'
import Characters from '../../views/Characters/characters'
import Episodes from '../../views/Episodes/episodes'
import Detailscharacters from '../../views/DetailsCharacter/detailscharacter'
import { getToken } from '../../services/storage/storage'
import { Props } from './types'

const Router: FC<Props> = ({ onLogin, onSignup }) => {
  const ProtectedRoutes = ({ children }: { children: JSX.Element }) => {
    const token = getToken()
    const location = useLocation()

    if (!token || token === null) {
      return <Navigate to="/" replace state={{ from: location }} />
    }
    return children
  }

  const HandleSession = ({ children }: { children: JSX.Element }) => {
    const token = getToken()
    const location = useLocation()

    if (token) {
      if (
        location.pathname === '/signup' ||
        location.pathname === '/login' ||
        location.pathname === '/'
      ) {
        return <Navigate to="/selection" replace state={{ from: location }} />
      }
    }
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HandleSession>
              <Welcome />
            </HandleSession>
          }
        ></Route>
        <Route
          path="welcome"
          element={
            <HandleSession>
              <Welcome />
            </HandleSession>
          }
        ></Route>
        <Route
          path="login"
          element={
            <HandleSession>
              <Login onLogin={onLogin} />
            </HandleSession>
          }
        ></Route>
        <Route
          path="signup"
          element={
            <HandleSession>
              <Signup onSignup={onSignup} />
            </HandleSession>
          }
        ></Route>
        <Route
          path="/characters"
          element={
            <ProtectedRoutes>
              <>
                <Characters />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/episodes"
          element={
            <ProtectedRoutes>
              <>
                <Episodes />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/selection"
          element={
            <ProtectedRoutes>
              <>
                <Selection />
              </>
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/detailscharacters"
          element={
            <ProtectedRoutes>
              <>
                <Detailscharacters />
              </>
            </ProtectedRoutes>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
