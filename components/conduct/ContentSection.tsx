import { FC } from "react";
import { Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const ContentSection: FC = ({ children }) => {
  const { white } = colors;
  const { body } = typography;

  return (
    <PageSection backgroundColor={white}>
      <Box sx={{ maxWidth: "710px", margin: "0 auto", "> li": body }}>
        {children}
      </Box>
    </PageSection>
  );
};
