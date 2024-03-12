import { useState,useRef } from "react";
import { validateEmail } from "../Rules/Utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError text-purple-600 font-bold text-xs -bottom-3 my-1 underline">Password should have at least 8 characters</p>
  );
};

const PasswordStatusMessage = (prop) => {
  return (
    <p className="FieldError text-purple-600 font-bold text-xs -bottom-3 my-1 underline">You should enter {8 - prop.length} more characters.</p>
  );
};


export default function Forms() {
    const [value, setValue] = useState(""); 

    const fileInput = useRef(null);

    const handleChange = (e) => { 
      setValue(e.target.value) 
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        const files = fileInput.current.files;
    }

    const [name,setName] = useState("");

    const handleSubmitSecondForm = (e) =>{
      e.preventDefault();
      setName("")
      console.log("form has been submitted");
    }

    const [score,setScore] = useState("10");
    const [comment,setComment] = useState("");

    const handleSubmitThirdForm = (e) => {
      e.preventDefault();
      if(Number(score) <= 5 && comment.length <=10){
        alert("Please provide a comment explaining why the experience was poor.");
        return ;
      }

      console.log("Form Submitted");
      setComment("");
      setScore("10");

    }


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState({
      value: "",
      isTouched: false,
    }); 

    const [secondPassword, setSecondPassword] = useState({
      value: "",
      isTouched: false,
    });

    const [role, setRole] = useState("role");
  
    const getIsFormValid = () => {
      return (
        firstName &&
        validateEmail(email) &&
        password.value.length >= 8 &&
        role != "role"
      );
    };
  
    const clearForm = () => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword({
          value : "",
          isTouched : false,
        });
      setRole("role")
    };
  
    const handleSubmitFourthForm = (e) => {
      e.preventDefault()
      alert("Account created!");
      clearForm();
    };
  

    return ( 
      <div className="h-full">
        <div className="border-[0.5rem] border-black mt-4 p-2 space-y-2">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2"> 
            <input 
              value={value} 
              onChange={handleChange} 
              type="text" 
            /> 
            <input 
                ref={fileInput}
                type="file"
            />
            <button className="self-end">
              Submit
            </button>
          </form> 
        </div>

        <div className="border-[0.5rem] border-black mt-4 p-2 space-y-2">
          <form onSubmit={handleSubmitSecondForm}>
            <fieldset>
              <div className="field w-full">
                <label htmlFor="name">
                  Name:
                </label>
                <input 
                id="name"
                type="text" 
                placeholder="name" 
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                />
              </div>
              <div className="flex justify-end">
                <button type="submit" disabled={!name} >Submit</button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="border-[0.5rem] border-black mt-4 p-2 space-y-2">
          <form onSubmit={handleSubmitThirdForm}>
            <fieldset>
              <h2 htmlFor="feedback">Feedback Form</h2>
              <div className="field w-full">
                <label htmlFor="">Score: {score} ⭐</label>
                <input 
                id="feedback"
                type="range"
                min="0"
                max="10" 
                value={score}
                onChange={e => setScore(e.target.value)}
                className="w-full"
                />
              </div>
              <div>
                <label className="block">Comment: </label>
                <textarea className="w-full min-h-20" value={comment} onChange={e =>setComment(e.target.value)}/>
              </div>
              <div className="flex justify-end">
                <button type="submit" >Submit</button>
              </div>
            </fieldset>
          </form>
        </div>

        <div className="border-[0.5rem] border-black mt-4 p-2 space-y-2">
          <form onSubmit={handleSubmitFourthForm}>
            <fieldset>
              <h2 className="my-6 text-3xl">Sign Up</h2>
              <div className="Field">
                <label>
                  First name: <sup>*</sup>
                </label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First name" />
              </div>
              <div className="Field">
                <label>Last name: </label> <sup>*</sup>
                <input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Last name" />
              </div>
              <div className="Field">
                <label>
                  Email address: <sup>*</sup>
                </label>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email address" />
              </div>
              <div className="Field">
                <label>
                  Password: <sup>*</sup>
                </label>
                <input 
                  value={password.value} 
                  onChange={(e) => {
                    setPassword({...password, value : e.target.value});
                  }}
                  onBlur={() => {
                    setPassword({...password, isTouched : true})
                  }}
                  placeholder="Password" type="password" 
                />
                  {
                    password.isTouched && password.value.length < 8 ? (
                      <PasswordErrorMessage/>
                    ) : null
                  }
                <label>
                  Second Password: <sup>*</sup>
                </label>
                <input 
                  value={secondPassword.value} 
                  onChange={(e) => {
                    setSecondPassword({...secondPassword, value : e.target.value});
                  }}
                  onBlur={() => {
                    setSecondPassword({...secondPassword, isTouched : true})
                  }}
                  placeholder="Password" type="password" 
                />
                  {
                    secondPassword.value.length < 8 ? (
                      <PasswordStatusMessage length = {secondPassword.value.length} />
                    ) : null
                  }
              </div>
              <div className="Field">
                <label>
                  Role: <sup>*</sup>
                </label>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="role">Role</option>
                  <option value="individual">Individual</option>
                  <option value="business">Business</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button type="submit" disabled={!getIsFormValid()}>
                  Create account
                </button>
              </div>
            </fieldset>
          </form>
        </div>

      </div>
    ); 
}