import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
      <div className="d-flex flex-column vh-100">
        <div className="h-auto clearfix">
          <div className=" bg-gradient">
            <nav className="navbar navbar-expand-lg justify-content-between w-75 m-auto navbar-dark">
              <a className="navbar-brand" href="/">Resume</a>
              <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="/#/projects">Projects</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#/skills">Skills</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#/certificates">Certificates</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/#/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="h-100 mt-5 text-white">
          <Outlet/>
        </div>
      </div>
  )
};

export default Layout;