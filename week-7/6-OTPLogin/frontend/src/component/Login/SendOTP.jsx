import { useSetRecoilState } from 'recoil'
import { useRef } from 'react'
import { loginAtom } from '../../store/atom/atom';

export const SendOTP = () => {

    const inputRef = useRef();
    const setLoginAtom = useSetRecoilState(loginAtom);

    function handleChange() {

        if (!inputRef.current.value || inputRef.current.value.toString().length !== 10) {
            return alert("Please Enter Valid Mobile Number")
        }

        const OTP = Math.floor(1000 + Math.random() * 9000);

        setLoginAtom((prev) => ({
            ...prev,
            phone: inputRef.current.value,
            step: 'verify',
            otp: OTP,
            loading: true
        }))

    }

    return (
        <div className="send-otp">
            {/* <input ref={inputRef} type="number" name="mobileNo" id="mobileNo" placeholder='Enter your mobile number'/> */}
            <input ref={inputRef} type="text" inputMode="numeric" pattern="\d*"
                name="mobileNo" id="mobileNo" placeholder='Enter your mobile number' maxLength={10} />
                <br />
            <button onClick={handleChange}>Send OTP</button>
        </div>
    )
}