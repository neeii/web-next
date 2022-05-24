import { FC, PropsWithChildren } from "react";
import { Box } from "@mui/material";
import { TopNav } from "./TopNav";

export const Layout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <TopNav />
    <Box sx={{ paddingTop: "60px" }}>{children}</Box>
  </>
);
