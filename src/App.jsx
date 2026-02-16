import React, { lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./features/Home/Home.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const TechAgency = lazy(() => import("./pages/TechAgency/TechAgency.jsx"));
const StartupHome = lazy(() => import("./pages/StartupHome/StartupHome.jsx"));
const ItConsulting = lazy(
  () => import("./pages/ITConsulting/ITConsulting.jsx"),
);
const About = lazy(() => import("./pages/About/About.jsx"));
const Services = lazy(() => import("./pages/Services/Services.jsx"));
const Team = lazy(() => import("./pages/Team/Team.jsx"));
const TeamDetails = lazy(() => import("./pages/Team/TeamDetails.jsx"));
const Testimonial = lazy(() => import("./pages/Testimonials/Testimonials.jsx"));
const Faq = lazy(() => import("./pages/Faq/Faq.jsx"));
const NotFound = lazy(() => import("./components/NotFoundPage/NotFound.jsx"));

const PortfolioGrid = lazy(
  () => import("./features/Portfolio/PortfolioGrid/PortfolioGrid.jsx"),
);
const PortfolioMasonry = lazy(
  () => import("./features/Portfolio/PortfolioM/PortfolioMasonry.jsx"),
);
const PortfolioDetails = lazy(
  () => import("./features/Portfolio/PortfolioDetails/PortfolioDetails.jsx"),
);

const MainBlog = lazy(() => import("./features/Blog/Blog.jsx"));
const BlogGrid = lazy(() => import("./features/Blog/BlogGrid/BlogGrid.jsx"));
const BlogDetails = lazy(
  () => import("./features/Blog/BlogDetails/BlogDetails.jsx"),
);

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demos/main-demo" element={<Home />} />

      <Route path="/demos/tech-agency" element={<TechAgency />} />
      <Route path="/demos/startup-home" element={<StartupHome />} />
      <Route path="/demos/it-consulting" element={<ItConsulting />} />

      <Route path="/pages/about" element={<About />} />
      <Route path="/pages/services" element={<Services />} />
      <Route path="/pages/team" element={<Team />} />
      <Route path="/pages/team-details" element={<TeamDetails />} />
      <Route path="/pages/testimonial" element={<Testimonial />} />
      <Route path="/pages/faqs" element={<Faq />} />

      <Route path="/portfolio">
        <Route index element={<PortfolioGrid />} />
        <Route path="masonry" element={<PortfolioMasonry />} />
        <Route path=":id" element={<PortfolioDetails />} />
      </Route>

      <Route path="/blog" element={<MainBlog />} />
      <Route path="/blog/blogGrid" element={<BlogGrid />} />
      <Route path="/blog/blogDetails" element={<BlogDetails />} />

      <Route path="/contact-us" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
