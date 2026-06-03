import { useContext } from "react";
import Profile from "./Profile";
import { ProfileContext } from "./ProfileContext";

const Dashboard = () => {
    const { age, setAge } = useContext(ProfileContext)
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="mb-6 text-gray-600">
                Welcome to the Dashboard component.
            </p>

            <p className="mb-6 text-gray-600 font-bold text-xl">
                {age}
            </p>
            <button className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700" onClick={() => setAge("20")}>
                ChangeAge
            </button>
            <Profile />
        </div>
    );
};

export default Dashboard;