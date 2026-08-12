import { createBrowserRouter, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import DrTandonPage from '../pages/DrTandonPage';
import ConditionsPage from '../pages/ConditionsPage';
import ConditionDetailPage from '../pages/ConditionDetailPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import InsuranceFeesPage from '../pages/InsuranceFeesPage';
import PracticePoliciesPage from '../pages/PracticePoliciesPage';
import FaqsPage from '../pages/FaqsPage';
import PatientResourcesPage from '../pages/PatientResourcesPage';
import NewPatientsPage from '../pages/NewPatientsPage';
import PrepareForVisitPage from '../pages/PrepareForVisitPage';
import WhatToExpectPage from '../pages/WhatToExpectPage';
import TelepsychiatryPage from '../pages/TelepsychiatryPage';
import AppointmentPage from '../pages/AppointmentPage';
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
      { path: '/faqs', element: <FaqsPage /> },
      { path: '/patient-resources', element: <PatientResourcesPage /> },
      { path: '/patient-resources/new-patients', element: <NewPatientsPage /> },
      { path: '/patient-resources/prepare-for-your-visit', element: <PrepareForVisitPage /> },
      { path: '/patient-resources/what-to-expect', element: <WhatToExpectPage /> },
      { path: '/patient-resources/telepsychiatry', element: <TelepsychiatryPage /> },
      { path: '/patient-resources/practice-policies', element: <PracticePoliciesPage /> },
      { path: '/appointment', element: <AppointmentPage /> },
      { path: '/contact', element: <ContactPage /> },
      // Phase 6 restructure: Practice Policies and Patient Information now
      // live under Patient Resources. Redirects keep old links working.
      { path: '/practice-policies', element: <Navigate to="/patient-resources/practice-policies" replace /> },
      { path: '/patient-information', element: <Navigate to="/patient-resources" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
