import "../../index.css"

const Button = ({type,children,...buttonProps}) => {
    const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
    return (
        <button className={`Button ${className}`} {...buttonProps}>
            {children}
        </button>
    );
};

const LoginButton = ({type,children, ...buttonProps}) => {
    return (
        <Button 
            type="secondary"
            {...buttonProps}
                onClick={() =>{
                alert("Loggin in!");
            }}
        >
            {children}
        </Button>
    );
};

export default function LoginComponent(){
    return (
        <div>
            <header className="">Little Lemon Restaurant</header>
            <Button type="primary" onClick={() => alert("Signing up!")}>
                Sign Up
            </Button>
            <LoginButton type="secondary" onClick={() => alert("Signing up!")}>
                Login
            </LoginButton>
        </div>
    )
}