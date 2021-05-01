import './ChartBar.css';
const ChartBar = (props) => {
    const expenseCap = 600;
    let height = Math.round((props.value / expenseCap) * 100) + '%';
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: height}}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
