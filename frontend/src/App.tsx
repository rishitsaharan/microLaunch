import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { SignUp } from './pages/SignUp'
import { SignIn } from './pages/SignIn'
import { RecoilRoot } from 'recoil'
import { ProductRegister } from './pages/ProductRegister'


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/signup' Component={SignUp} />
          <Route path='/signin' Component={SignIn} />
          <Route path='/registerProd' Component={ProductRegister} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}

export default App
