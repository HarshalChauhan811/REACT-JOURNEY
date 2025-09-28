function Card(props) {
  return (
    <div className="card" style={{ border: "2px solid black", padding: "2px", width: "200px" }}>
      <img
        src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTY1y6vPooCmcVGHK1Q1izeTLGs53fr0dp6RDCD9l61JroZiPCZsO_x8snGzlgM5A2AA54TMVhQ7wgNSWDZ3R7-XlZV32gYsIgQb7CbpS8E2AzWa31vzvm-"
        height="200px"
        width="200px"
        alt="Clothing"
      />
      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
        <h2>Price:{props.price}</h2>
      </div>
    </div>
  );
}

export default  Card;  // FN NAME SE EXPORT 