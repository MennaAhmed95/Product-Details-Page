import "./rate.scss";

const Rate = ({ flag }) => {
  const arr = [...Array(4)];
  return (
    <div
      className="flexRow"
      style={flag ? {} : { justifyContent: "space-around" }}
    >
      <div className="star-container">
        {arr.map((itm, i) => (
          <img key={i} src="./images/star.svg" alt="s" />
        ))}
        <img src="./images/star2.svg" alt="s" />
      </div>
      <div>4.2 of 5</div>
      {flag ? <div style={{ color: "gray" }}>22 Rates</div> : ""}
    </div>
  );
};

export default Rate;
