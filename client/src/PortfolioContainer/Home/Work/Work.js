import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import brews from "../../../assets/brews.gif";
import journal from "../../../assets/journal.gif";
import giving from "../../../assets/giving.gif";

function Work() {
  return (
    <div>
      <CardGroup id="Work">
        <Card className="bg-dark text-danger font-weight-bold">
          <Card.Img src={giving} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="font-weight-bolder ">
              Project: Giving Tree
            </Card.Title>

            <Card.Link href="https://awesome-giving-tree.herokuapp.com/">
              <Button variant="primary">Deployed</Button>
            </Card.Link>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-danger font-weight-bold ">
          <Card.Img src={journal} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="font-weight-bold ">
              Project: My Health Journal
            </Card.Title>

            <Card.Link href="https://my-health-journal.herokuapp.com/form">
              <Button variant="primary">Deployed</Button>
            </Card.Link>
          </Card.ImgOverlay>
        </Card>
        <Card className="bg-dark text-white font-weight-bold ">
          <Card.Img src={brews} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title className="font-weight-bold ">
              Brews of Interest
            </Card.Title>

            <Card.Link href="https://elliscj.github.io/project-1/">
              <Button variant="primary">Deployed</Button>
            </Card.Link>
          </Card.ImgOverlay>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Work;
