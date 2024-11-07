import Button from "../components/button/Button";
import Typography from "../components/typography/Typography";

const Homepage = () => {
  return (
    <div className="mx-4">
      Homepage
      <div>
        <Button text="get ticket now" variant="primary" size="large" />
        {/* <Button text="get ticket now" variant="outline" size="large" /> */}
        <Typography variant="h1">The Grand Gala</Typography>
        <Typography variant="h2">What to expect at the event</Typography>
      </div>
    </div>
  );
};

export default Homepage;
