import { Link } from "react-router-dom";

import "@/App.css";

const HomePage = () => {
  return (
    <div className="bg-teal-600 flex flex-col">
      <Link to="/registration" className="text-white py-2 px-4 rounded-lg">
        Formulaire d'inscription
      </Link>
      <Link to="/login" className="text-white py-2 px-4 rounded-lg">
        Connexion
      </Link>
    </div>
  );
};

export default HomePage;
