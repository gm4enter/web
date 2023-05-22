import { ThemeType } from "./theme.type";
export interface DataWebType {
  webInfo: {
    domainUser?: string;
    domainName?: string;
    domainPassword?: string;
    favicon?: string;
    thumbnail?: string;
    notificationIcon?: string;
  };
}
export interface DataAndroidInfoType {
  androidInfo: {
    user?: string;
    password?: string;
    appName?: string;
    icon?: string;
    homeScreen?: string;
    notificationIcon?: string;
  };
}

export interface DataIosInfoType {
  iosInfo: {
    user?: string;
    password?: string;
    appName?: string;
    icon?: string;
    homeScreen?: string;
    contactInfo?: string;
    description?: string;
    keyword?: string;
    textColor?: string;
    backgroundColor?: string;
  };
}

export interface SiteType {
  _id: string;
  name: string;
  adminEmail: string;
  androidInfo: {
    user: string;
    password: string;
    appName: string;
    icon: string;
    homeScreen: string;
    notificationIcon: string;
  };
  iosInfo: {
    user: string;
    password: string;
    appName: string;
    icon: string;
    homeScreen: string;
    contactInfo: string;
    description: string;
    keyword: string;
    textColor: string;
    backgroundColor: string;
  };
  webInfo: {
    domainUser: string;
    domainName: string;
    domainPassword: string;
    awsUser: string;
    awsPassword: string;
    awsUrl: string;
    favicon: string;
    thumbnail: string;
    notificationIcon: string;
  };
  theme: ThemeType;
  creator: string;
  typeApp: string;
  expirationDate: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  remainingDays: number;
}
