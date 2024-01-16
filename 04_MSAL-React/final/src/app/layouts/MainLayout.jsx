import {
  Outlet,
  NavLink,
  // Link
} from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <h1>Navigation Bar</h1>
      {/* <Link to="/">home</Link> <Link to="/contact-us">contact us</Link> */}
      <NavLink
        to="/"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        home
      </NavLink>{" "}
      <NavLink
        to="/contact-us"
        style={({ isActive, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          };
        }}
      >
        contact us
      </NavLink>
      <Outlet />
    </>
  );
};

export default MainLayout;
