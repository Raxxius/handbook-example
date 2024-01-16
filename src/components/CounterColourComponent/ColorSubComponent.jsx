const ColourSubComponent = ({ changeColour }) => (
  <div className="colour-box">
    <button onClick={() => changeColour(1)}>Cycle Up</button>
    <button onClick={() => changeColour(-1)}>Cycle Down</button>
  </div>
);

export default ColourSubComponent;
