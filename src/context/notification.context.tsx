import { AlertColor, duration } from "@mui/material";
import React from "react";
import { Notification } from "../components";
import { time } from "console";

type ContextProps = {
    getError :(message:string) => void;
    getSuccess: (message:string) => void;
}

const NotificationContext = React.createContext<ContextProps>({
    getError: () => {},
    getSuccess: () => {},
});

export const NotificationProvider: React.FC<{children: JSX.Element}> = ({children}) => {
    const [message, setMessage] = React.useState("")
    const [open, setOpen] = React.useState<boolean>(false)
    const [severity, setSeverity] = React.useState< AlertColor | undefined>(undefined)

    const handleClose = () => {
        setOpen(false)
    }

    const getError = (message:string) => {
        setSeverity("error")
        setOpen(true)
        setMessage(message)
    }
    const getSuccess = (message:string) => {
        setSeverity("success")
        setOpen(true)
        setMessage(message)
    }

    const value = {
        getError,
        getSuccess,
    }
    return (
        <NotificationContext.Provider value={value}>
        <Notification
        onClose={handleClose}
        open={open}
        severity={severity}
        message={message}
        />
                {children}
        </NotificationContext.Provider>
    )
}

export const UseNotification = () => {
    const context = React.useContext(NotificationContext)
    if(!context){
        throw new Error("dont exist context")
    }
    return context
}