const Contact = () => {
  return( 
      <div className="text-white d-flex flex-column w-100 h-75 justify-content-center align-items-center">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between m-3">
            <h4 className="m-3">Date of birth:</h4>
            <h4 className="m-3">17.05.1987</h4>
          </div>
          <div className="d-flex justify-content-between m-3">
            <h5 className="m-3">Address:</h5>
            <h5 className="m-3">Kamianske, Ukraine</h5>
          </div>
          <div className="d-flex justify-content-between m-3">
            <h5 className="m-3">Email:</h5>
            <a className="m-3" href="mailto: valentyn.lola@gmail.com" target="_blank" rel="noreferrer"><h5>valentyn.lola@gmail.com</h5></a>
          </div>
          <div className="d-flex justify-content-between m-3">
            <h5 className="m-3">Phone:</h5>
            <h5 className="m-3">+380 98 266-76-43</h5>
          </div>
          <div className="d-flex justify-content-between m-3">
            <h5 className="m-3">Telegram:</h5>
            <a className="m-3" href="https://t.me/+380982667643" target="_blank" rel="noreferrer"><h5>+380 98 266-76-43</h5></a>
          </div>
          <div className="d-flex justify-content-between m-3">
            <h5 className="m-3">Viber:</h5>
            <h5 className="m-3">+380 50 938-72-76</h5>
          </div>
          <div className="d-flex justify-content-between m-3">
            <h5 className="m-3">GitHub:</h5>
            <a className="m-3" href="https://github.com/VLola" target="_blank" rel="noreferrer"><h5>github.com/VLola</h5></a>
          </div>
        </div>
      </div>
    );
};

export default Contact;