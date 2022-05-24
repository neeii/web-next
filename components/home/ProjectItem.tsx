import { FC, PropsWithChildren } from "react";
import { Box, Grid } from "@mui/material";

type ProjectItemProps = PropsWithChildren<{
  title: string;
  description?: string;
  image: string;
  url: string;
}>;

export const ProjectItem: FC<ProjectItemProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <Grid container direction="column" sx={{ width: "33%" }}>
      <Grid item>{title}</Grid>
      <Grid item>{description}</Grid>
      <Grid item>{image}</Grid>
    </Grid>
  );
};
