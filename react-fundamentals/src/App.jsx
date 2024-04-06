import PropTypes from "prop-types";

const Car = ({color, price}) => {
  return <h2>I am {color} car and I cost {price}$</h2>;
};

Car.propTypes = {
  color: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
Car.defaultProps = {
  color: "blue",
}

function App() {
  let details = {color: "yellow", price : 45000}

  return (
    <>
      <h1>Hello</h1>
      <Car { ...details }/>
    </>
  );
}

export default App;
