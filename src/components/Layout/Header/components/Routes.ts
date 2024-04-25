import { Routes } from "../../../../plugins/ReactiveElement/Interfaces/IRoutes";
import ApplyForGrants from "../../../Views/ApplyForGrant";
import BlogView from "../../../Views/BlogView";
import BrandAssets from "../../../Views/BrandAssets";
import DiscoverInitiatives from "../../../Views/DiscoverInitiatives";
import FAQView from "../../../Views/FAQ";
import FundedGrants from "../../../Views/FundedGrants";
import HomeView from "../../../Views/Home";
import ProgramExpenses from "../../../Views/ProgramExpenses";
import Error404 from "../../../Views/Error404";

const routes: Routes = {
  "/": {
    component: new HomeView(),
    title: "Home",
  },
  "/apply-for-grant": {
    component: new ApplyForGrants(),
    title: "Apply for Grant",
  },
  "/blog": {
    component: new BlogView(),
    title: "Blog",
  },
  "/brand-assets": {
    component: new BrandAssets(),
    title: "Brand Assets",
  },
  "/discover-initiatives": {
    component: new DiscoverInitiatives(),
    title: "Discover Initiatives",
  },
  "/faq": {
    component: new FAQView(),
    title: "FAQ",
  },
  "/funded-grants": {
    component: new FundedGrants(),
    title: "Funded Grants",
  },
  "/program-expenses": {
    component: new ProgramExpenses(),
    title: "Program Expenses",
  },
  "error-404": {
    component: new Error404(),
    title: "Not Found | 404",
  },
}

export default routes;
