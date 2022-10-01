import { Outlet } from "react-router-dom";
import Header from "layouts/Header";

export default function index() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
