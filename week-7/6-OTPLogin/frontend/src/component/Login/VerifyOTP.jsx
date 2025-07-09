import { useRecoilValue } from 'recoil'
import { useMemo, useRef } from 'react'
import { loginAtom } from '../../store/atom/atom';

export const VerifyOTP = () => {
    // noob
    // const inputRef1 = useRef();
    // const inputRef2 = useRef();
    // const inputRef3 = useRef();
    // const inputRef4 = useRef();

    // pro
    const otpDigits = useRef([]);
    const loginAtomValue = useRecoilValue(loginAtom);

    function handleChange() {
        // console.log(otpDigits.current)
        // console.log(otpDigits.current[1])
        // console.log(otpDigits.current[1].value)
        // console.log(otpDigits.current.value)

        const OTP = otpDigits.current.map((i) => {
            return i.value
        }).join('');


        if (loginAtomValue.otp == OTP) {
            alert("You are verified")
        } else {
            alert("Enter valid OTP")
        }
    }

    function handleOTPChange(i) {
        if (otpDigits.current[i].value.toString().length === 1 && i < 3) {
            otpDigits.current[i + 1].focus();
        }
    }

    return (
    <>
        <p>OTP : {loginAtomValue.otp}</p>
        <div className="otp-input-container">

            {/* noob */}
            {/* <input ref={inputRef1} type="number" name="otp" />
            <input ref={inputRef2} type="number" name="otp" />
            <input ref={inputRef3} type="number" name="otp" />
            <input ref={inputRef4} type="number" name="otp" /> */}
            {/* pro */}
            {[0, 1, 2, 3].map((i) => (
                <input
                    key={i}
                    ref={el => otpDigits.current[i] = el}
                    type="text"
                    maxLength={1}
                    onChange={() => {
                        handleOTPChange(i)
                    }}
                />
            ))}
            <button onClick={handleChange}>Login</button>
        </div>
    </>
    )
}