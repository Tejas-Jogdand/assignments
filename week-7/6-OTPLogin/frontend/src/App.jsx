import {RecoilRoot} from 'recoil'
import { LoginOTP } from './component/LoginOTP'
import './App.css'
import './store/atom/atom'


function App() {

  return (
    <>
      <RecoilRoot>
        <LoginOTP/>
      </RecoilRoot>
    </>
  )
}

export default App
