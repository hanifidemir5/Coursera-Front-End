import { useState,useRef } from "react";
import { validateEmail } from "../../Rules/Utils";
import { useFormik } from "formik";
import "../../assets/css/formscss.css"
import * as Yup from 'yup';

const PasswordErrorMessage = ({props}) => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

const ErrorMessage = ({children}) => {
  return (
    <p className="FieldError">{children}</p>
  );
};

const PasswordStatusMessage = (prop) => {
  return (
    <p className="FieldError">You should enter {8 - prop.length} more characters.</p>
  );
};

const FirstFormComponent = () => {
  const [value, setValue] = useState(""); 

  const fileInput = useRef(null);

  const handleChange = (e) => { 
    setValue(e.target.value) 
  } 

  const handleSubmit = (e) => {
      e.preventDefault();
      const files = fileInput.current.files;
  }

  return (
    <div className="form-item">
      <form onSubmit={handleSubmit} className="first-form-element"> 
        <input 
          value={value} 
          onChange={handleChange} 
          type="text" 
          placeholder="Enter document title"
        /> 
        <input 
            ref={fileInput}
            type="file"
        />
        <button>
          Submit
        </button>
      </form> 
    </div>
  )
}

const SecondFormComponent = () => {
  const [name,setName] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    setName("")
    console.log("form has been submitted");
  }

  return(
    <div className="form-item ">
      <form onSubmit={handleSubmit}>
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
          <div className="forms-button-container">
            <button type="submit" disabled={!name} >Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

const ThirdFormComponent = ({onSubmit}) => {
  const [score, setScore] = useState("10");
  const [comment, setComment] = useState("");

  const isDisabled = Number(score) < 5 && comment.length <= 10; 

  const textAreaPlaceHolder = isDisabled 
    ? "Please provide a comment explaining why the experience was poor."
    : "Optional feedback";

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({score,comment})
    setComment("");
    setScore("10");
  }

  return (
    <div className="form-item ">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2 htmlFor="feedback" className="text-2xl my-4">Feedback Form</h2>
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
            <textarea 
              name="comment"
              placeholder={textAreaPlaceHolder} 
              className="form-textarea" 
              value={comment} 
              onChange={e =>setComment(e.target.value)}
            />
          </div>
          <div className="forms-button-container">
            <button type="submit" disabled={isDisabled}>Submit</button>
          </div>
        </fieldset>
      </form>
    </div>
  )

}

const FourthFormComponent = () =>{

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("role");

  const formik = useFormik({
    initialValues:{
      firstName:"",
      lastName:"",
      email:"",
      password:"",
      confirmPassword:"",
      role:"Role",
    },
    onSubmit:() => {
      formik.resetForm();        
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .required("Required"),
      email: Yup.string()
      .email("Invalid email address")
      .required("Required"),
      password: Yup.string()
      .required("Required").matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
        'Must contain at least 12 Characters, 1 Uppercase, 1 Lowercase, 1 Special Character, and 1 Number'
      ),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")],'Passwords must match!!')
    })
    
  })

  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  }); 

  const [confirmPassword, setConfirmPassword] = useState({
    value: "",
    isTouched: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Account created!");
    formik.resetForm();
  };

  const handleFocus = (fieldName) => {
    formik.setFieldTouched(fieldName,true,false);
  }

  return (
      <div className="form-item">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2 className="fourth-form-header">Sign Up</h2>
            <div className="Field">
              <label>
                First name: <sup>*</sup>
              </label>
              <input 
                type="text" 
                value={firstName} 
                onChange={e => setFirstName(e.target.value)} 
                onBlur={formik.handleBlur}
                placeholder="First name" 
                {...formik.getFieldProps('firstName')}
              />
            </div>
            {
              formik.touched.firstName && formik.errors.firstName
              ? 
              ( 
                <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
              )
              : null
            }
            <div className="Field">
              <label>Last name: </label>
              <input 
                type="text" 
                value={lastName} 
                onChange={e => setLastName(e.target.value)} 
                placeholder="Last name" 
                {...formik.getFieldProps("lastName")}
              />
            </div>
            <div className="Field">
              <label>
                Email address: <sup>*</sup>
              </label>
              <input 
                type="text" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Email address" 
                onFocus={() => handleFocus('email')}
                onBlur={formik.handleBlur}
                {...formik.getFieldProps("email")}
              />
              {
                formik.errors.email && formik.touched.email
                ? 
                ( 
                  <ErrorMessage>{formik.errors.email}</ErrorMessage>
                )
                : null
              }
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
                {...formik.getFieldProps("password")}
                placeholder="Password" type="password" 
                onFocus={() => handleFocus('password')}
              />
                {
                  formik.errors.password && formik.touched.password ? (
                    <ErrorMessage>{formik.errors.password}</ErrorMessage>
                  ) : null
                }
              <label>
                Second Password: <sup>*</sup>
              </label>
              <input 
                value={confirmPassword.value} 
                onChange={(e) => {
                  setConfirmPassword({...confirmPassword, value : e.target.value});
                }}
                onBlur={() => {
                  setConfirmPassword({...confirmPassword, isTouched : true})
                }}
                {...formik.getFieldProps("confirmPassword")}
                placeholder="Confirm password" type="password" 
                onFocus={() => handleFocus('confirmPassword')}
              />
                {
                  formik.errors.confirmPassword && formik.touched.confirmPassword ? (
                    <ErrorMessage>{formik.errors.confirmPassword}</ErrorMessage>
                  ) : null
                }
            </div>
            <label>
                Role: <sup>*</sup>
              </label>
            <div className="select-field">
              <select 
                value={role} 
                onChange={(e) => setRole(e.target.value)}
                {...formik.getFieldProps("role")}
              >
                <option value="role">Role</option>
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div className="forms-button-container">
              <button type="submit" disabled={!formik.isValid}>
                Create account
              </button>
            </div>
          </fieldset>
        </form>
      </div>
  )
}

export default function Forms() {
    const handleSubmit = () =>{
      console.log("Form has been submitted!")
    }
    return ( 
      <div className="form-container">
       <div>
        <FourthFormComponent/>
       </div>
        <div>
          <ThirdFormComponent onSubmit={handleSubmit}/>
          <FirstFormComponent/>
        <SecondFormComponent/>
        </div>
      </div>
    ); 
}

export {ThirdFormComponent};