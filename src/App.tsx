import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {PublicLayout} from '@/layouts/public-layout'
import HomePage from '@/routes/home'
import AuthenticationLayout from '@/layouts/auth-layout'
import SignInPage from '@/routes/sign-in'
import SignUpPage from '@/routes/sign-up'
import ProtectRoutes from '@/layouts/protected-routes'
import MainLayout from '@/layouts/main-layout'
import { Generate } from '@/components/generate'
import  Dashboard  from "./routes/dashboard";
import CreateEditPage from '@/routes/create-edit-page'
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/*public routes*/}
          <Route element={<PublicLayout/>}>
            <Route index element={<HomePage/>}/>
          </Route>
          {/*Authentication layout*/}

          <Route element={<AuthenticationLayout/>}>
            <Route path="/signin/*" element={<SignInPage/>}/>
            <Route path="/signup/*" element={<SignUpPage/>}/>
          </Route>
          {/* protected routes */}
          <Route element={<ProtectRoutes><MainLayout/></ProtectRoutes>}>
          {/* Add your protected routes here */}
          <Route element={<Generate/>} path='/generate'>
            <Route index element={<Dashboard/>}/>
            <Route path=":interviewId" element={<CreateEditPage/>}/>
          </Route>
          </Route>
            
        </Routes>
      </Router>
    </div>
  )
}

export default App
