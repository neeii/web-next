import { FC, useState } from "react";
import Image from "next/legacy/image";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import overlayImage from "public/images/donate-2.jpg";
import { loader, typography } from "styles/theme";

export const DonateOverlay: FC = () => {
  const [open, setOpen] = useState(true);
  const { h3, bodyLarge, body } = typography;
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
          maxWidth: "700px",
          width: "100%",
          bgcolor: "#ddd",
          borderRadius: "10px",
          overflow: "auto",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            sx={{
              height: 300,
              zIndex: 1,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Box sx={{ position: "absolute", top: "-270px" }}>
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
            p: "32px",
            marginTop: "-20px",
            zIndex: 100,
          }}
        >
          <Typography sx={{ ...h3, mt: 4 }}>
            History&apos;s first responders put their lives on the line every
            day to document injustices
          </Typography>
          <Typography sx={bodyLarge}>
            Help us protect them and their crucial documentation in a world
            where truth is continuously under attack.
          </Typography>
          <Typography
            sx={{ ...bodyLarge, marginTop: "20px", fontWeight: "bold" }}
          >
            Support OpenArchive&apos;s efforts to preserve truth to power by
            making a tax-deductible donation.
          </Typography>
          <Typography sx={{ ...bodyLarge, marginTop: "20px" }}>
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
              border: "2px solid white",
              borderRadius: "500px",
              fontSize: "18px",
              fontWeight: "600",
              p: "10px 15px 10px 15px",
              width: "100%",
              textTransform: "uppercase",
              marginTop: "40px",
              textAlign: "center",
            }}
          >
            Make a Tax-Deductible Donation
          </Link>
        </Box>
      </Box>
    </Dialog>
  );
};
