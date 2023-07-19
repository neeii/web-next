import { FC, PropsWithChildren } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { colors, typography } from "styles/theme";
import { FilledButton } from "components/common/FilledButton";
import { getURL } from "lib/frontendHelpers";

export const ContactBox: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();
  const { lightTurquoise, lightGrey, white, black } = colors;
  const { bodyLarge } = typography;

  let first = null;
  let title = null;
  let description = null;
  let url = null;

  try {
    [first, title, ...description] = children as any[];
    url = getURL(first);
  } catch (e) {
    title = children;
  }

  return (
    <Box
      sx={{
        pt: 6,
        mb: 6,
        background: `linear-gradient(to bottom, ${white} 50%, ${lightGrey} 50%)`,
      }}
    >
      <Box
        sx={{
          backgroundColor: lightTurquoise,
          p: 3,
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          z: 1000,
        }}
      >
        <Box>{title}</Box>
        <Box sx={{ "> p": bodyLarge }}>{description}</Box>
        {url && (
          <FilledButton
            backgroundColor={white}
            textColor={black}
            onClick={() => router.push(url)}
          >
            Submit
          </FilledButton>
        )}
      </Box>
    </Box>
  );
};
