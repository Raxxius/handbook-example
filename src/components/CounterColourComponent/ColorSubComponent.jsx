const ColourSubComponent = ({ changeColour, styles }) => (
  <div className={`${styles.colourBox} secondary`}>
    <h3>Change Quote Colour</h3>
    <button onClick={() => changeColour(1)}>Cycle Up</button>
    <button onClick={() => changeColour(-1)}>Cycle Down</button>
  </div>
);

export default ColourSubComponent;
