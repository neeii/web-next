import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import aboutHeader from "images/about-header.png";

interface UseCasesSectionProps {
  pages: any[];
}

export const UseCasesSection: FC<UseCasesSectionProps> = ({ pages }) => {
  const t = useTranslate();
  const { white, turquoise } = colors;
  const { h1 } = typography;

  return (
    <PageSection backgroundColor={turquoise} backgroundImage={aboutHeader}>
      <Grid
        container
        justifyContent="space-around"
        sx={{
          flexDirection: "column",
          minHeight: "35vh",
        }}
      >
        {pages.map(({ title, path }) => {
          return (
            <Grid item key={path}>
              {title}
            </Grid>
          );
        })}
      </Grid>
    </PageSection>
  );
};