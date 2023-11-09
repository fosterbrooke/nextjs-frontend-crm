"use client";

import ContractPage from "@/components/ui/dashboard/pages/admin/contract";
import EventsPage from "@/components/ui/dashboard/pages/admin/events/Events";
import MessagesPage from "@/components/ui/dashboard/pages/admin/messages";
import PaymentPage from "@/components/ui/dashboard/pages/admin/payment";
import ReportPage from "@/components/ui/dashboard/pages/admin/report";
import ServicesPage from "@/components/ui/dashboard/pages/admin/services";
import SettingPage from "@/components/ui/dashboard/pages/admin/settings";
import TimesheetPage from "@/components/ui/dashboard/pages/admin/timesheet";
import ApplicationPage from "@/components/ui/dashboard/pages/admin/application";
import ClientProfilePage from "@/components/ui/dashboard/pages/admin/client_profile";
import AppUsagePage from "@/components/ui/dashboard/pages/admin/appusage";
import PrivacyConcernPage from "@/components/ui/dashboard/pages/admin/privacy_concern";
import DashboardPage from "@/components/ui/dashboard/pages/admin/home";
import ClientsPage from "@/components/ui/dashboard/pages/admin/clients";
import EmployeesPage from "@/components/ui/dashboard/pages/admin/employees";
import BackgroundChecksPage from "@/components/ui/dashboard/pages/admin/background_checks";
import SupportPage from "@/components/ui/dashboard/pages/admin/support";

interface sidebarItem {
  pathname: string;
  component: any;
}

const sidebarLinks: sidebarItem[] = [
  {
    pathname: "",
    component: <DashboardPage />,
  },
  {
    pathname: "clients",
    component: <ClientsPage />,
  },
  {
    pathname: "employees",
    component: <EmployeesPage />,
  },
  {
    pathname: "background_checks",
    component: <BackgroundChecksPage />,
  },
  {
    pathname: "payment",
    component: <PaymentPage />,
  },
  {
    pathname: "events",
    component: <EventsPage />,
  },
  {
    pathname: "messages",
    component: <MessagesPage />,
  },
  {
    pathname: "timesheet",
    component: <TimesheetPage />,
  },
  {
    pathname: "reports",
    component: <ReportPage />,
  },
  {
    pathname: "services",
    component: <ServicesPage />,
  },
  {
    pathname: "contract",
    component: <ContractPage />,
  },
  {
    pathname: "application",
    component: <ApplicationPage />,
  },
  {
    pathname: "support",
    component: <SupportPage />,
  },
  {
    pathname: "settings",
    component: <SettingPage />,
  },
  {
    pathname: "client_profile",
    component: <ClientProfilePage />,
  },
  {
    pathname: "appusage",
    component: <AppUsagePage />,
  },
  {
    pathname: "privacy_concern",
    component: <PrivacyConcernPage />,
  },
  // {
  //   pathname: "service-overview",
  //   component: <ServiceOverviewPage />,
  // },
];

export default function Page({ params }: { params: { selected: string } }) {
  const SelectedPage = () => {
    const target = sidebarLinks.find(
      (item) => item.pathname === params.selected
    );
    return target?.component;
  };

  return <SelectedPage />;
}
