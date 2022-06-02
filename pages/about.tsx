import type { NextPage } from "next";
import Head from "next/head";
import { Grid } from "@mui/material";
import { Layout } from "components/common/Layout";
import { HeaderSection } from "components/about/HeaderSection";
import { BeliefsSection } from "components/about/BeliefsSection";
import { BetterSection } from "components/about/BetterSection";
import { RefuseSection } from "components/about/RefuseSection";
import { ActivitiesSection } from "components/about/ActivitiesSection";
import { PartnersSection } from "components/about/PartnersSection";
import { RoleSection } from "components/common/RoleSection";

const About: NextPage = () => (
  <Layout>
    <Head>
      <title>OpenArchive: About</title>
    </Head>
    <Grid container direction="column">
      <HeaderSection />
      <BeliefsSection />
      <BetterSection />
      <RefuseSection />
      <ActivitiesSection />
      <PartnersSection />
      <RoleSection />
    </Grid>
  </Layout>
);

export default About;
