import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Dashboard() {
  return (
    <Row type="horizontal">
      <Heading as="h1">Dashboard</Heading>
      <p>TEST</p>
      <input type="file" capture="user" accept="image/*" />
    </Row>
  );
}

export default Dashboard;
