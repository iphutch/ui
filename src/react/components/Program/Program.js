import React from "react";
import ProgramTitle from "./ProgramTitle";
import ProgramDescription from "./ProgramDescription";
import ProgramCommands from "./ProgramCommands";
import SimilarPrograms from "./SimilarPrograms";
import { Row, Col } from "reactstrap";

const Program = ({ program }) => {
  return (
    <div className="program-details mt-3">
      <ProgramTitle
        name={program.name}
        cliName={program.cliName}
        platformName={program.platformName}
      />
      <ProgramDescription description={program.shortDescription} />
      <Row>
        <Col sm="6" xs="12">
          <ProgramCommands program={program.name} />
        </Col>
        <Col sm="6" xs="12">
          <SimilarPrograms
            program={program.cliName}
            platformName={program.platformName}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Program;
