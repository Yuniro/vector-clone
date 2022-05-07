import React, { FunctionComponent } from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import PageTitle from "../title";

interface Props {
  children: React.ReactNode;
  title: string;
}

const PageWrapper: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <PageTitle>{title}</PageTitle>
        {children}
      </StyledEngineProvider>
    </div>
  );
};

export default PageWrapper;
