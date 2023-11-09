const Home = () => {
  return (
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <div className="d-flex flex-column justify-content-center align-items-center text-animate display-4">
            <div>Hello & Welcome</div>
              <div className="d-flex justify-content-center align-items-center">
                <div className="d-flex">
                  <a href="https://github.com/VLola">
                    <div className="git d-flex align-items-center">to</div>
                  </a>
                </div>
              </div>
            <div>I am Valentyn Lola</div>
          </div>
          <div className="d-flex flex-column flex-wrap text-white text-opacity-75 justify-content-center align-items-center text-center p-5">
              <h4 className=" display-6">Student of the IT course in the specialty Software Development,</h4>
              <h4 className=" display-6">with experience in object-oriented programming languages.</h4>
              <h4 className=" display-6">Responsive, friendly, responsible for the tasks and I complete them on time.</h4>
          </div>
        </div>
      </div>
  );
};

export default Home;