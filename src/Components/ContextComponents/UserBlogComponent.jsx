import { UserProvider, useUser } from "./UserContext";
import "./contextcss.css"

const LoggedInUser = () =>{
    const {user} = useUser();
    return(
        <p className="greetings">
            Hello {user.name}<span></span>
        </p>
    );
};

const Header = () => {
    return(
        <header className="context-header">
            <h2>Blog Page</h2>
            <LoggedInUser/>
        </header>
    );
};

function ContextPageContent(){
    const {user} = useUser();
    return(
        <div >
            <h2 className="blog-header">
                Lorem ipsum dolor.
            </h2>
            <br />
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. A quisquam voluptates nisi possimus. 
                Nostrum perspiciatis eius a voluptatum, consequatur earum dolor aspernatur harum laboriosam 
                exercitationem adipisci vel velit eligendi placeat. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Consectetur mollitia voluptate, aperiam, fuga, necessitatibus excepturi
                alias nemo vero dolores sint tempore provident. Voluptatem laudantium eum iure, adipisci tempora neque sequi.
            </p>
            <br />
            <p>
                Written By {user.name}
            </p>
        </div>
    )
}

function UserBlogComponent () {
    return (
        <div className="context-main-container">
            <div className="context-sub-container">
                <Header/>
                <ContextPageContent/>
            </div>
        </div>
    )
}


export default UserBlogComponent;