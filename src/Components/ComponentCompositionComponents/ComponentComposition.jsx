import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import "./componentcss.css"

const Button = ({children, backgroundColor}) => {
    return <button style={{ backgroundColor }}>{children}</button>;
}

const Alert = ({children}) => {
    const [openDialog, handleDisplay] = useState(false);

    const handleClose = () => {
        handleDisplay(false);
     };
  
     const openDialogBox = () => {
        handleDisplay(true);
     };

     const buttonStyle = {
        width: "10rem",
        fontsize: "1.5rem",
        height: "3rem",
        padding: "5px",
        borderRadius: "10px",
        backgroundColor: "#504136",
        color: "White",
        border: "2px solid green",
     };

    return (
        <div>
            <button style = {buttonStyle} onClick = {openDialogBox}>
                Open Dialog
            </button>
            <Dialog onClose ={handleClose} open={openDialog} className="h-[600px]">
                <div >{children}</div>
            </Dialog>
        </div>
    );
};

const DeleteButton = () =>{
    return <Button backgroundColor="red" >Delete</Button>;
}

function ComponentComposition(){
    return (
        <div className="component-composition-main-container">
            <Alert >
                <DialogTitle>Delete Account</DialogTitle>
                <p className="component-pharagraph">
                    Are you sure you want to proceed? You will miss all your delicious recipies!!
                </p>
                <div className="component-button">
                    <DeleteButton />
                </div>
            </Alert>
        </div>
    )
}

export default ComponentComposition;