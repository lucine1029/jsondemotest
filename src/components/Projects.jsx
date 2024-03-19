import MyInfo from "../assets/data.json";
import Card from "react-bootstrap/esm/Card";
import ListGroup from "react-bootstrap/esm/ListGroup";

export default function Projects() {
  return (
    <>
      <section>
        <Card style={{ width: "18rem" }}>
          <h2>Made by: {MyInfo.user}</h2>
          {MyInfo.projects.map((p) => {
            return (
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <article key={p.name}>
                    <Card.Header>
                      <h3>Project name: {p.name}</h3>
                    </Card.Header>
                    <p>{p.description}</p>
                  </article>
                </ListGroup.Item>
              </ListGroup>
            );
          })}
        </Card>
      </section>

      <section>
        <h2>Education</h2>
        {MyInfo.education.map((e) => {
          return (
            <article key={e.school}>
              <h3>{e.school}</h3>
              <h4>{e["time-period"]}</h4>
              <h3>{e.subject}</h3>
              <p>{e.description}</p>
            </article>
          );
        })}
      </section>
    </>
  );
}
