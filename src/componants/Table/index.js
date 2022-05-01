import { StyledEngineProvider } from "@mui/material/styles";
import Demo from "./Datatable";
import React from "react";

const IndexData = ({ dataselection }) => {
  return (
    <div>
      <StyledEngineProvider>
        <Demo dataselection={dataselection} />
      </StyledEngineProvider>
    </div>
  );
};

export default IndexData;
