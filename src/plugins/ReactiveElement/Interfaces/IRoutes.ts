import { ReactiveElement } from "../ReactiveElementLib";

export interface Route {
  component: ReactiveElement;
  title?: string;
  callback?: () => void;
  routes?: Routes;
}

export type Routes = Record<string, Route>;
