import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="bg-light">
        <nav className="navbar navbar-expand-lg navbar-light w-75 m-auto">
          <a class="navbar-brand" href="/">Valentyn Lola</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/blogs">Blogs</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;