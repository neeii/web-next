import { FC } from "react";
import { MDXProvider } from "@mdx-js/react";
import { colors } from "styles/theme";
import { PageSection } from "components/common/PageSection";

export const HeaderSection: FC = ({ children }) => {
  const { white } = colors;

  return <PageSection backgroundColor={white}>{children}</PageSection>;
};
