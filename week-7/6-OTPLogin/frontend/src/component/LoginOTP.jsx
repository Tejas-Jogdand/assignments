import {useSetRecoilState,useRecoilValue} from 'recoil'
import { loginAtom } from '../store/atom/atom';
import { SendOTP } from './Login/SendOTP';
import { VerifyOTP } from './Login/VerifyOTP';

export const LoginOTP = () =>{

    const login = useRecoilValue(loginAtom);
    // console.log(login)

    return(
        <div className="login-screen">
            <h2>Login via OTP</h2>
            {
                login.step == 'send'? <SendOTP/>:<VerifyOTP/>
            }
        </div>
    )
}