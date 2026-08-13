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
import LearningCenterPage from '../pages/LearningCenterPage';
import LearningCenterCategoryPage from '../pages/LearningCenterCategoryPage';
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
      { path: '/practice-policies', element: <PracticePoliciesPage /> },
      { path: '/learning-center', element: <LearningCenterPage /> },
      // FAQs is a Learning Center category, but reuses the existing FAQs
      // page/content rather than a placeholder — see data/learningCenter.js.
      { path: '/learning-center/faqs', element: <Navigate to="/faqs" replace /> },
      { path: '/learning-center/:slug', element: <LearningCenterCategoryPage /> },
      { path: '/faqs', element: <FaqsPage /> },
      { path: '/patient-resources', element: <PatientResourcesPage /> },
      { path: '/patient-resources/new-patients', element: <NewPatientsPage /> },
      { path: '/patient-resources/prepare-for-your-visit', element: <PrepareForVisitPage /> },
      { path: '/patient-resources/what-to-expect', element: <WhatToExpectPage /> },
      { path: '/patient-resources/telepsychiatry', element: <TelepsychiatryPage /> },
      { path: '/appointment', element: <AppointmentPage /> },
      { path: '/contact', element: <ContactPage /> },
      // Client-feedback update: Practice Policies is now a primary nav item
      // at /practice-policies. Redirects keep pre-existing links working.
      { path: '/patient-resources/practice-policies', element: <Navigate to="/practice-policies" replace /> },
      { path: '/patient-information', element: <Navigate to="/patient-resources" replace /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default router;
