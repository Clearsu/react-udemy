import "./ChartBar.css";

const ChartBar = (props) => {
  let barFillHeight = "0%"; // for css style

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }} // 안쪽 중괄호는 객체 생성
        ></div>
      </div>
      <div className="chart-bar__lable">{props.lable}</div>
    </div>
  );
};

export default ChartBar;
