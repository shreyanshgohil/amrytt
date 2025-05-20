import React, { FC } from "react";
import Header from "./Header";
import { LayoutProps } from "./types";

const Layout: FC<LayoutProps> = (props) => {
  const { children, breadcrumb = [] } = props;

  return (
    <div>
      <Header breadcrumb={breadcrumb} />
      {children}
    </div>
  );
};

export default Layout;
