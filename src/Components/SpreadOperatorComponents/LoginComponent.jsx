import "../../index.css"

const Button = ({type,children,...buttonProps}) => {
    var className;
    if(type === "primary"){
        className = "PrimaryButton"
    }
    else if(type === "secondary"){
        className = "SecondaryButton"
    }
    else if(type === "tertiary"){
        className = "tertiaryButton"
    }
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
                onClick={() =>{
                alert("Loggin in!");
            }}
            {...buttonProps}
        >
            {children}
        </Button>
    );
};

export default function LoginComponent(){
    return (
        <div className="text-center">
            <header className="text-3xl mb-4">Little Lemon Restaurant</header>
            <div className=" flex items-center h-[25rem] ">
                <Button type="primary" onClick={() => alert("You are ours now PEASANT!!!")}>
                    Become ours
                </Button>
                <Button type="tertiary" onClick={() => alert("Signing up!")}>
                    Sign in
                </Button>
                <LoginButton type="secondary" onClick={() => alert("Loggin in!")}>
                    Login
                </LoginButton>
            </div>
        </div>
    )
}