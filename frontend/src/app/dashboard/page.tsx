"use client";

import withAuth from "@/components/hoc/withAuth";
import { HydraAdmin } from "@api-platform/admin";

const AdminDashboard = () => (
  <HydraAdmin entrypoint="https://127.0.0.1:8000/api" />
);

export default withAuth(AdminDashboard, "ROLE_ADMIN");
