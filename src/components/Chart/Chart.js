import ChartBar from "./ChartBar";
import './Chart.css';

const Chart = (props) => {
  return (
    <div className="chart">
      {props.datapoints.map((datapoint, index) => {
        return (
          <ChartBar
            label={datapoint.label}
            value={datapoint.value}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Chart;
