import { useContext } from "react";
import { ProfileContext } from "./ProfileContext";

const Profile = () => {
    const { setProfileName } = useContext(ProfileContext)
    return (
        <div className="max-w-md mx-auto mt-10 rounded-lg border p-6 shadow-sm">
            <h1 className="text-2xl font-bold mb-4">Profile</h1>

            <p className="mb-6 text-gray-600">
                Welcome to the Profile component.
            </p>

            <div className="flex items-center justify-center gap-8">
                <p className="text-blue-600">Click to change the profileName</p>
                <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" onClick={() => setProfileName("Sandeep")}>
                    ChangeName
                </button>
            </div>
        </div >
    );
};

export default Profile;