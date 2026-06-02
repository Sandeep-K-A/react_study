import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const Navbar = () => {
    const { profileName } = useContext(ProfileContext)

    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b">
            <a href="/" className="text-xl font-bold">
                ReactStudy
            </a>

            <a
                href="/profile"
                className="text-sm font-medium hover:underline"
            >
                {profileName}
            </a>
        </nav>
    );
};

export default Navbar;