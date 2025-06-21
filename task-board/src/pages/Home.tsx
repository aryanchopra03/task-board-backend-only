import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate("/dashboard");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white flex flex-col items-center justify-center p-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-indigo-700 mb-4">
                Welcome to TaskBoard
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
                Organize your tasks, track your progress, manage your workflow with an intuitive task board.
            </p>
            <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
            >
                Get Started
            </button>
        </div>
    );
};
export default Home;