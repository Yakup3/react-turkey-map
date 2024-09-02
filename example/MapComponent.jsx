// development
import TurkeyMap from "./../src/TurkeyMap";
// build test
// import TurkeyMap from './../build/TurkeyMap'
// npm test
// import TurkeyMap from 'react-turkey-map'

export default ({ colorData, tooltipData, onClick }) => {
  return (
    <TurkeyMap
      colorData={colorData}
      tooltipData={tooltipData}
      onClick={onClick}
    />
  );
};
