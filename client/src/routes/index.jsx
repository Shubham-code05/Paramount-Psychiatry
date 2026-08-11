import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import DrTandonPage from '../pages/DrTandonPage';
import ConditionsPage from '../pages/ConditionsPage';
import ConditionDetailPage from '../pages/ConditionDetailPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import InsuranceFeesPage from '../pages/InsuranceFeesPage';
import PatientInformationPage from '../pages/PatientInformationPage';
import PracticePoliciesPage from '../pages/PracticePoliciesPage';
import FaqsPage from '../pages/FaqsPage';
import PatientResourcesPage from '../pages/PatientResourcesPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/about/dr-pooja-tandon', element: <DrTandonPage /> },
      { path: '/conditions', element: <ConditionsPage /> },
      { path: '/conditions/:slug', element: <ConditionDetailPage /> },
      { path: '/services', element: <ServicesPage /> },
      { path: '/services/:slug', element: <ServiceDetailPage /> },
      { path: '/insurance-fees', element: <InsuranceFeesPage /> },
      { path: '/patient-information', element: <PatientInformationPage /> },
      { path: '/practice-policies', element: <PracticePoliciesPage /> },
      { path: '/faqs', element: <FaqsPage /> },
      { path: '/patient-resources', element: <PatientResourcesPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
