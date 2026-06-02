import Profile from "./Profile";

const Dashboard = () => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <p className="mb-6 text-gray-600">
                Welcome to the Dashboard component.
            </p>
            <Profile />
        </div>
    );
};

export default Dashboard;