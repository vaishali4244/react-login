import { useEffect, useState, useRef } from "react";
import { useDispatch} from "react-redux";
import {useNavigate } from "react-router-dom";
import { setToken, setUserData } from "../redux/reducer/userReducer";
import "./signup.css";

const Signup = () => {

  const emailRef = useRef("");
  const userNameRef = useRef("");
  const companyRef = useRef("");
  const passwordRef = useRef("");
  const phoneRef = useRef("");
  const agencyYesRef = useRef("");
  const agencyNoRef = useRef("");

  const [submit, setSubmit] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

 
  useEffect(() => {
    if (submit) {
        const form ={
          "name": userNameRef?.current?.value,
         "phone": phoneRef?.current?.value,
         "email": emailRef?.current?.value,
          "password": passwordRef?.current?.value,
          "agency":
            agencyYesRef?.current?.checked === true
              ? agencyYesRef?.current?.value
              : agencyNoRef?.current?.value,
          "companyName": companyRef?.current?.value,
        }
        if (
          emailRef?.current?.value?.length !== 0 &&
          userNameRef?.current?.value?.length !== 0 &&
          passwordRef?.current?.value?.length !== 0 &&
          phoneRef?.current?.value?.length !== 0 &&
          (agencyYesRef?.current?.checked === true ||
            agencyNoRef?.current?.checked === true)
        ) {
          dispatch(
            setUserData(form)
          );
          dispatch(setToken("poiu!852@lkj#951%mn"));
          navigate("/dashboard");
          setSubmit(false)
        }else{
          setSubmit(false)
        }
    }
  }, [submit, navigate, dispatch]);

  useEffect(() => {
    setSubmit(false);
  }, [emailRef.current?.value]);

  useEffect(() => {
    setSubmit(false);
  }, [passwordRef.current?.value]);

  return (
    <div className="signup-container">
      <h3>Create your PopX account</h3>
      <label className="lb-1">
        Full Name<span>*</span>{" "}
      </label>
      <input
        className="ip-1"
        type="text"
        placeholder="Enter name"
        ref={userNameRef}
      />
     
      <br />
      <label className="lb-2" for="phone">
        Phone number<span>*</span>{" "}
      </label>
      <input
        className="ip-2"
        type="tel"
        placeholder="Enter phone number"
        ref={phoneRef}
        name="phone"
      />
      

      <br />
      <label className="lb-3">
        Email address<span>*</span>{" "}
      </label>
      <input
        className="ip-3"
        type="email"
        placeholder="Enter email address"
        ref={emailRef}
      />
     

      <br />
      <label className="lb-4">
        Password <span>*</span>{" "}
      </label>
      <input
        className="ip-4"
        type="password"
        placeholder="Enter password"
        ref={passwordRef}
      />
    
      <br />

      <label className="lb-5">Company name </label>
      <input
        className="ip-5"
        type="text"
        placeholder="Enter company name"
        ref={companyRef}
      />
      <br />
      <label className="lb-6" htmlFor="agency">
        {" "}
        Are you an Agency?<span>*</span>{" "}
      </label>
      <input
        className="ip-6"
        type="radio"
        placeholder="Yes"
        name="agency"
        value="yes"
        ref={agencyYesRef}
      />
      <p className="ip-yes">Yes</p>

      <input
        className="ip-7"
        type="radio"
        placeholder="No"
        name="agency"
        value="no"
        ref={agencyNoRef}
      />
      <p className="ip-no">No</p>
        <button
          className="signup-click"
          onClick={() => {
            setSubmit(true);
          }}
        >
          Create Account
        </button>
    </div>
  );
};

export default Signup;
