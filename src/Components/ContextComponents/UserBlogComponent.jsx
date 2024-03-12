import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () =>{
    const {user} = useUser();
    return(
        <p className="self-end absolute right-20 items-center sm:right-40">
            Hello {user.name}<span></span>
        </p>
    );
};

const Header = () => {
    return(
        <header className="flex mb-6 items-center justify-center">
            <h2 className="text-2xl font-bold">Blog Page</h2>
            <LoggedInUser/>
        </header>
    );
};

function ContextPageContent(){
    const {user} = useUser();
    return(
        <div >
            <h2 className="text-2xl font-bold">
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
        <>
            <div className="flex flex-col w-4/6">
                <Header/>
                <ContextPageContent/>
            </div>
        </>
    )
}


export default UserBlogComponent;