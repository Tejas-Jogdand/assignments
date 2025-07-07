import { RecoilRoot } from 'recoil'
import './App.css'
import { ProfileCard } from './component/ProfileCard'

function App() {

  return (
    <>
      <RecoilRoot>
        <ProfileCard />
      </RecoilRoot>
    </>
  )
}

export default App
