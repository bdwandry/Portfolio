import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Bryan Wandrych </span>
            from <span className="purple"> Manistee, Michigan.</span>
            <br />
            <br />I am a Senior Persuing my Degree in Software Engineering (SSEN) at Michigan Technological University -
            Expected Graduation: Fall of 2021 (December).
            <br />
            <br />
            Outside of Programming, I love....
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hanging out with friends.
            </li>
          </ul>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going on hikes.
            </li>
          </ul>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Drinking Extensively until my liver hates me :).
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
