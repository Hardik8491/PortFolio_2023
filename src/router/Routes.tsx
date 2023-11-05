import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "../Components/SmoothScroll/SmoothScroll";
import HomePage from "../pages/HomePage/HomePage";
import BlogPage from "../pages/BlogPage/BlogPage.tsx";
import ContactPage from "../pages/ContactPage/Context";
import ErrorPage from "../pages/ErrorPage/Error";

import PlansPage from "../pages/PlanPage/PlanPage";
import PortfolioDetail from "../pages/PortFolioPage/PortFolio";
import ServicePage from "../pages/ServicePages/ServicePages.tsx";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails.tsx";

const RouterLinks = () => {
  return (
    <>
      <BrowserRouter>
        <SmoothScroll>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>} />
            <Route path="/blog" element={<BlogPage></BlogPage>} />
            {/* <Route path="/blog/:Id" element={<BlogDetail></BlogDetail>} /> */}
            <Route path="/plans" element={<PlansPage></PlansPage>} />
            <Route path="/service" element={<ServicePage></ServicePage>} />
            <Route
              path="/service/:Id"
              element={<ServiceDetails></ServiceDetails>}
            />
            <Route path="/portfolio" element={<PortfolioDetail />} />
            {/* <Route
              path="/portfolio/:Id"
              element={<PortfolioDetail></PortfolioDetail>}
            /> */}
            <Route path="/contact" element={<ContactPage></ContactPage>} />
              <Route path="/404" element={<ErrorPage/>} /> 
          
          </Routes>
        </SmoothScroll>
      </BrowserRouter>
    </>
  );
};

export default RouterLinks;
