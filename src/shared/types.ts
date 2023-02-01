import { ReactElement } from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurServices = "ourservices",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: ReactElement;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}
