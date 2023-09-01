import "./../App.css";

export default function MoreClients() {
  return (
    <div className="logocont">
      <h2 className="clientstitle">More our clients</h2>
      <div className="logos">
        <img src={require("./../images/company1.png")} alt="teknosolutions" />
        <img src={require("./../images/company2.png")} alt="teknosolutions" />
        <img src={require("./../images/company3.png")} alt="teknosolutions" />
        <img src={require("./../images/company4.png")} alt="teknosolutions" />
      </div>
    </div>
  );
}
