import { FC, useState } from "react";
import Image from "next/legacy/image";
import { Dialog, Button, Box, Stack, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import overlayImage from "public/images/donate-2.jpg";
import { loader, typography } from "styles/theme";

export const DonateOverlay: FC = () => {
  const [open, setOpen] = useState(true);
  const { h6, body } = typography;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen
      PaperProps={{
        sx: {
          bgcolor: "rgba(0, 0, 0, 0.85)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "auto",
        },

      }}
    >
      <Box
        sx={{
          maxWidth: "500px",
          width: "100%",
          height: "100%",
          bgcolor: "#ddd",
          borderRadius: "10px",
          overflow: "auto",
          my: 3
        }}
      >
        <Stack>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                height: 250,
                zIndex: 1,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box sx={{ position: "absolute", top: "-180px" }}>
                <Image src={overlayImage} alt="" loader={loader} />
              </Box>
            </Box>
            <Button
              onClick={handleClose}
              sx={{
                ...body,
                position: "absolute",
                top: "12px",
                right: "12px",
                color: "white",
                fontWeight: "bold",
                bgcolor: "#00b4a6",
                borderRadius: "500px",
                fontSize: "10px !important",
                zIndex: 100,
                py: 0.5,
                px: 1,
                m: 1.5,
                "&:hover": {
                  backgroundColor: "#00b4a6aa",
                },
              }}
            >
              Close
            </Button>
          </Box>
          <Box
            sx={{
              width: "100%",
              bgcolor: "#00b4a6",
              px: 4,
              py: 2,
              zIndex: 100,
            }}
          >
            <Typography sx={{ ...h6, mt: 0, mb: 2, lineHeight: 1.2 }}>
              History&apos;s first responders put their lives on the line every
              day to document injustices
            </Typography>
            <Typography sx={{ ...body, lineHeight: 1.3 }}>
              Help us protect them and their crucial documentation in a world
              where truth is continuously under attack.
            </Typography>
            <Typography
              sx={{ ...body, fontWeight: "bold", lineHeight: 1.3 }}
            >
              Support OpenArchive&apos;s efforts to preserve truth to power by
              making a tax-deductible donation.
            </Typography>
            <Typography sx={{ ...body, lineHeight: 1.3 }}>
              Our work is critical, ongoing and solely funded by grants and
              individuals like you.
            </Typography>
            <Link
              href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=MA7ZZG3DJL97E&source=url"
              underline="none"
              sx={{
                display: "block",
                color: "white",
                bgcolor: "#b3000f",
                borderRadius: "500px",
                fontSize: "18px",
                fontWeight: "600",
                p: "10px 15px 10px 15px",
                width: "100%",
                textTransform: "uppercase",
                marginTop: "40px",
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#91000c",
                },
              }}
            >
              Make a Tax-Deductible Donation
            </Link>
          </Box>
        </Stack>
      </Box >
    </Dialog >
  );
};
