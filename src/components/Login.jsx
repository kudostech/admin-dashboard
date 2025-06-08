import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin(true);           // Simulate login success
    navigate('/');           // Redirect to dashboard/home
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
