import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h4>This Assignment belongs to Madhu Nyoupane</h4>
      <h4>Version 1.0.0</h4>
      <p>
        Code Along from:{" "}
        <Link to="https://www.youtube.com/watch?v=w7ejDZ8SWv8">Click Here</Link>
        <br></br>
        <Link to="/">Go Back</Link>
      </p>
    </div>
  );
};

export default About;
