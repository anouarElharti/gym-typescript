export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    ContactUs = "contactus",
}
export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface OurClassesType{
  name:string;
  description?:string; // THIS FIELD IS OPTIONAL
  image:string;
}