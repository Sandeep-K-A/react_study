import { createContext, useState } from "react";

export const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
    const [profileName, setProfileName] = useState("John")

    return (
        <ProfileContext.Provider value={{ profileName, setProfileName }}>
            {children}
        </ProfileContext.Provider>
    )
}