import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Ryan Robinson</h1>
        <Link
          style={{
            color: "white",
          }}
          to="/tickets"
        >
          View tickets for event 151
        </Link>
      </header>
    </div>
  );
};

export default Home;
