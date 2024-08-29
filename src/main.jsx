import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './componets/home.jsx';
import Service from './componets/service.jsx';
import ServicePage from './componets/SinglePage/servicePage.jsx';
import About from './componets/aboutus.jsx';
import Teams from './componets/teams.jsx';
import TeamSingle from './componets/TeamsSinglePage/teamSingle.jsx';
import Blog from './componets/blog.jsx';
import Contact from './componets/contact.jsx';
import BlogSingle from './componets/blogSingle/blogSingle.jsx';
import ErrorPage from './componets/errorPage.jsx';
import ChangeLog from './componets/changeLog.jsx';
import Licence from './componets/licence.jsx';
import ProtectionPage from './componets/protectionPage.jsx';
import CaseStudy from './componets/caseStudyPage.jsx';
import CaseStudySingle from './componets/caseStudySingle/caseStudySingle.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/service' element={<Service />} />
      <Route path='/service/servicePage' element={<ServicePage />} />
      <Route path='about' element={<About />} />
      <Route path='/teams' element={<Teams />} />
      <Route path='/teams/singlePage' element={<TeamSingle />} />
      <Route path='blog' element={<Blog />} />
      <Route path='contact' element={<Contact />} />
      <Route path='/blog/blogsingle' element={<BlogSingle />} />

      <Route path='changelog' element={<ChangeLog />} />
      <Route path='licence' element={<Licence />} />
      <Route path='protection' element={<ProtectionPage />} />
      <Route path='casestudy' element={<CaseStudy />} />
      <Route path='/casestudy/casestudysingle' element={<CaseStudySingle />} />
      <Route path='*' element={<ErrorPage />} />

    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>

  </StrictMode>,
)
