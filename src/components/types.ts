import type { ReactNode } from "react";
import type { FormikProps } from "formik";
export type FormValues = Record<string, any>;

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  pre?: boolean;
  post?: boolean;
  type: "button" | "submit";
  icon?: ReactNode;
  className?: string;
}

export interface BadgeProps {
  text?: string;
  icon?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "danger" | "info" | "warning";
}

export interface LabelProps {
  text?: string;
  htmlFor?: string;
  className?: string;
}

export interface NavbarProps {
  className?: string;
  logStatus?: boolean;
}

export interface FAQProps {
  className?: string;
}

export interface InputProps {
  id?: string;
  icon?: ReactNode;
  name?: string;
  type: "text" | "checkbox" | "radio" | "password";
  value?: string;
  checked?: boolean;
  placeholder?: string;
  className?: string;
  onChange?: (value: string | boolean) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface CheckBoxProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  custom_label_for?: string;
  custom_label_text?: string;
  checkboxParent?: string;
  inputClassName?: string;
  labelClassName?: string;
  onBlur?: (name?: string) => void;
  onChange?: (value: string | boolean) => void;
}

export interface RadioBtnProps {
  id?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  custom_label_for?: string;
  custom_label_text?: string;
  radioBtnParent?: string;
  inputClassName?: string;
  labelClassName?: string;
  onBlur?: (name?: string) => void;
  onChange?: (value: string | boolean) => void;
}

export interface TextAreaProps {
  id?: string;
  value?: string;
  placeholder?: string;
  className?: string;
  enableShortNote?: boolean;
  onChange?: (value: string) => void;
}

export interface Hero_CardProps {
  image?: string;
  heading?: string;
  paragraph?: string;
  list?: React.ReactNode[]
  buttonText?: string;
  smallbuttonText?: string;
  className?: string;
  parentClass?: string;
  children?: React.ReactNode;
}

export interface TabsProps {
  variant?: "route" | "state";
  tabs_list?: {
    id: number;
    label?: string;
    path?: string;
    icon?: ReactNode | string;
    link_text?: string;
    href?: string;
  }[];
  children?: React.ReactNode;
  className?: string;
  tabItemClass?: string;
  activeTabClass?: string;
  inActiveTabClass?: string;
  activeTextClass?: string;
  inactiveTextClass?: string;
  tabItemClassInner?: string;
  tabContainerClass?: string;
  activeTab?: number;
  setActiveTab?: (id: number) => void;
  onClick?: (tabId: number) => void;
}

export interface CustomSelectProps {
  options?: string[];
  name?: string | number;
  value?: string;
  className?: string;
  innerOptionsClass?: string;
  selectParentClass?: string;
  divider?: boolean;
  customArrows?: React.ReactNode;
  onBlur?: (name?: string) => void;
  onChange?: (value: string) => void;
};

export interface Car_CardProps {
  image?: string;
  heading?: string;
  price?: number | string;
  className?: string;
  dealerText?: string;
  dealerTextClass?: string;
  dealerHeadingClass?: string;
  icon?: string;
  imageSizeClass?: string;
  footerbutton?: boolean;
    products_list?: {
    toDate: string;
    image?: string;
    stockAge: string;
    heading?: string;
    fromDate: string;
    mainPrice: string;
    discountedPrice: string;
    list?: { label: string; value: string }[];
  }[];
}

export interface ListingCardProps {
  className?: string;
  products_list?: {
    id?: number | string;
    toDate?: string;
    image?: string;
    stockAge?: string;
    heading?: string;
    fromDate?: string;
    mainPrice?: string;
    discountedPrice?: string;
    list?: { label: string; value: string }[];
  }[];
}

export interface CategoriesCardProps {
  className?: string;
  subcategory?: string; 
  icon?: ReactNode | string;
}

export type LoginFieldsProps = {
  Email: string;
  Password: string;
};

export type RegisterFieldsProps = {
  Username: string;
  Email: string;
  Password: string;
};

export interface DashboardProps {
  cardHeaderText?: string;
  cardFooterText?: string | React.ReactNode;
  cardBodyIcon?: ReactNode;
  cardBodyHeading?: string;
  cardBodySubHeading?: string;
  className?: string;
  headerClass?: string;
  footerClass?: string;
  parentCardClass?: string;
  cardHeadingClass?: string;
  cardSubHeadingClass?: string;
  svgClass?: string;
  imageClass?: string;
  caretColorClass?: string;
  children?: React.ReactNode;
}

export type caretProps = {
  caretColor?: string;
};

export type DatasetType = {
  label: string;
  data: number[];
  color?: string;
  usePattern?: boolean;
};

export type BarChartProps = {
  labels: string[];
  datasets: DatasetType[];
  showPattern?: boolean;
  options?: any;
};

export type ChartOptionsProps = {
  title?: string;
  showTitle?: boolean;
  legendPosition?: "top" | "bottom" | "left" | "right";
  tooltipBg?: string;
  ySuffix?: string; // e.g "k", "%", "$"
};

export type InfoListProps = {
  title?: string;
  data: {
    id: number;
    list?: { id: number; point: string }[];
    package_details_list?: { id: number; point: string }[];
  }[];
};

export type FormFieldsCardProps = {
  title?: string;
  formik: FormikProps<FormValues>;

  data: {
    id: number;
    label: string;
    name: string;

    showInline?: boolean;
    input_select?: boolean;
    input_field?: boolean;
    placeholder?: string;
    select_placeholder?: string;
    options?: string[];

    Note?: string;
  }[];
};

export type FormCheckBoxesProps = {
  title?: string;
  formik: FormikProps<FormValues>;

  data: {
    id: number;
    notice: string;
    list?: { id: number; label: string; name: string; }[];
  }[];
};