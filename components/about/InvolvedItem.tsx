import { FC } from "react";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import { colors, breakpoints } from "styles/theme";
import { getURL, loadImage } from "lib/frontendHelpers";

export const InvolvedItem: FC = ({ children }) => {
  const { white } = colors;
  const { ps, ts } = breakpoints;
  const [first, title, link] = children as any[];
  const image = loadImage(first);
  const href = getURL(link);

  return (
    <Grid
      item
      sx={{
        width: "50%",
        [ps]: { width: "100%" },
        [ts]: { width: "50%" },
        height: "100%",
      }}
    >
      <Link href={href}>
        <Box
          sx={{
            cursor: "pointer",
            h5: { color: white },
            p: 6,
            height: "100%",
            backgroundImage: `url(${image.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {title}
        </Box>
      </Link>
    </Grid>
  );
};
