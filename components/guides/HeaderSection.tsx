import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import guidesHeader from "images/guides-header.png";

export const HeaderSection: FC = () => {
  const t = useTranslate();
  const { lightGrey } = colors;
  const { h1 } = typography;

  return (
    <PageSection backgroundColor={lightGrey} backgroundImage={guidesHeader}>
      <Grid
        container
        spacing={8}
        sx={{
          flexDirection: "column",
        }}
      >
        <Grid item>
          <Box
            component="h1"
            sx={{ ...h1, textAlign: "center", minHeight: "300px" }}
            dangerouslySetInnerHTML={{
              __html: t("guidesTitle"),
            }}
          />
        </Grid>
      </Grid>
    </PageSection>
  );
};
