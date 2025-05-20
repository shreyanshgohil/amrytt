interface Breadcrumb {
  title: string;
  url: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  breadcrumb: Breadcrumb[];
}
