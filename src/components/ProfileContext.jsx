import { createContext, useState } from "react";

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
    const [profileName, setProfileName] = useState("John")
    const [age, setAge] = useState("")

    return (
        <ProfileContext.Provider value={{ profileName, setProfileName, age, setAge }}>
            {children}
        </ProfileContext.Provider>
    )
}