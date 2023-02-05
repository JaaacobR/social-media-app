import { SignIn } from "../pages";

interface RouteI {
  name: string;
  path: string;
  component: any;
}

export const routes = [{ name: "SignIn", path: "/", component: SignIn }];
