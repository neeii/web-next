import { FC } from "react";
import { Box, Grid } from "@mui/material";
import { useTranslate } from "react-polyglot";
import { typography, colors, breakpoints } from "styles/theme";
import { PageSection } from "components/common/PageSection";
import { HorizontalScrollArea } from "components/common/HorizontalScrollArea";
import { WhoItem } from "components/home/WhoItem";
import megan from "images/megan.svg";
import kevin from "images/kevin.svg";

export const WhoSection: FC = () => {
  const t = useTranslate();
  const { h2, bodyLarge } = typography;
  const { white } = colors;
  const { ps, ts } = breakpoints;

  return (
    <PageSection backgroundColor={white}>
      <Grid container flexDirection="column">
        <Grid
          item
          container
          sx={{
            pb: 8,
            flexDirection: "row",
            [ps]: {
              flexDirection: "column",
            },
            [ts]: {
              flexDirection: "row",
            },
          }}
        >
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            <Box
              component="h2"
              sx={h2}
              dangerouslySetInnerHTML={{ __html: t("whoWorkForTitle") }}
            />
          </Grid>
          <Grid
            item
            sx={{
              width: "50%",
              [ps]: {
                width: "100%",
              },
              [ts]: {
                width: "50%",
              },
            }}
          >
            <Box component="p" sx={bodyLarge}>
              {t("whoWorkForDescription")}
            </Box>
          </Grid>
        </Grid>
        <HorizontalScrollArea columnOnMobile>
          <WhoItem
            name={t("whoMeganName")}
            profile={t("whoMeganProfile")}
            description={t("whoMeganDescription")}
            image={megan}
            url=""
          />
          <WhoItem
            name={t("whoKevinName")}
            profile={t("whoKevinProfile")}
            description={t("whoKevinDescription")}
            image={kevin}
            url=""
          />
          <WhoItem
            name={t("whoMeganName")}
            profile={t("whoMeganProfile")}
            description={t("whoMeganDescription")}
            image={megan}
            url=""
          />
        </HorizontalScrollArea>
      </Grid>
    </PageSection>
  );
};
