import React from "react";
import ProgramTitle from "./ProgramTitle";
import ProgramDescription from "./ProgramDescription";
import ProgramCommands from "./ProgramCommands";
import SimilarPrograms from "./SimilarPrograms";

const Program = ({ program }) => {
  return (
    <div className="program-details mt-3">
      <ProgramTitle name={program.cliName} manPage={program.manPage} />
      <ProgramDescription description={program.shortDescription} />
      <ProgramCommands program={program.name} />
      <SimilarPrograms program={program.name} />
    </div>
  );
};

export default Program;
