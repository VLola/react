import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="vh-100 bg-dark">
        <div class="bg-gradient">
          <nav className="navbar navbar-expand-lg navbar-light justify-content-between w-75 m-auto">
            <a class="navbar-brand text-color" href="/">Resume</a>
            <div>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link text-color" href="/skills">Skills</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-color" href="/blogs">Blogs</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-color" href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <Outlet />
      </div>
    </>
  )
};

export default Layout;