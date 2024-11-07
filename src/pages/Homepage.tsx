import Button from "../components/button/Button";

const Homepage = () => {
  return (
    <div className="mx-4">
      Homepage
      <div>
        <Button text="get ticket now" variant="primary" size="large" />
        <Button text="get ticket now" variant="outline" size="large" />
      </div>
    </div>
  );
};

export default Homepage;
