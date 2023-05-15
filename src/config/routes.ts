import Home from '../pages/Home';
import BusRoutes from '../pages/BusRoutes';
import ContactUs from '../pages/ContactUs';
import FAQs from '../pages/FAQs';
import YourProfile from '../pages/YourProfile';
// TODO: Change pages
interface RouteType {
    path: string,
    component: () => JSX.Element,
    name: string,
    protected: boolean
}

const routes: RouteType[] = [
    {
      path: "",
      component: Home,
      name: "Home Screen",
      protected: false,
    },
    {
      path: "/busroutes",
      component: BusRoutes,
      name: "BusRoutes",
      protected: false,
    },
    {
      path: "/yourprofile",
      component: YourProfile,
      name: "YourProfile",
      protected: true,
    },
    {
      path: "/contactus",
      component: ContactUs,
      name: "ContactUs",
      protected: false,
    },
        {
      path: "/faqs",
      component: FAQs,
      name: "FAQs",
      protected: false,
    }
  ];

export default routes