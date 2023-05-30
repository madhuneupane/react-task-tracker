import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <div>
        <Link to="/about">About</Link>
      </div>
      <Link to="/completed">Completed Tasks</Link>
    </footer>
  );
};

export default Footer;
