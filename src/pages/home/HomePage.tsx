import { Link } from "react-router-dom";

import "@/App.css";

const HomePage = () => {
  return (
    <div className="bg-teal-600">
      <Link to="/registration">
        Formulaire d'inscription
      </Link>
    </div>
  );
};

export default HomePage;
