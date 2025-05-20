interface Breadcrumb {
  title: string;
  url: string;
}

export interface HeaderProps {
  breadcrumb: Breadcrumb[];
}
