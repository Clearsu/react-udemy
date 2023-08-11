import Concept from "./Concept";

import "../index.css";

export default function Concepts(props) {
  return (
    <ul id="concepts">
      <Concept
        image={props.concepts[0].image}
        title={props.concepts[0].title}
        description={props.concepts[0].description}
      />
      <Concept
        image={props.concepts[1].image}
        title={props.concepts[1].title}
        description={props.concepts[1].description}
      />
      <Concept
        image={props.concepts[2].image}
        title={props.concepts[2].title}
        description={props.concepts[2].description}
      />
    </ul>
  );
}
