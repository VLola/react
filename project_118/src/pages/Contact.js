const Contact = () => {
  return( 
      <div className="text-white text-opacity-75 d-flex flex-column justify-content-center align-items-center h-75">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between mx-3">
            <h5 className="mx-3">Date of birth:</h5>
            <h5 className="mx-3">17.05.1987</h5>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <h5 className="mx-3">Address:</h5>
            <h5 className="mx-3">Kamianske, Ukraine</h5>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <h5 className="mx-3">Email:</h5>
            <a className="mx-3" href="mailto: valentyn.lola@gmail.com" target="_blank" rel="noreferrer"><h5>valentyn.lola@gmail.com</h5></a>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <h5 className="mx-3">Phone:</h5>
            <h5 className="mx-3">+380 98 266-76-43</h5>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <h5 className="mx-3">Telegram:</h5>
            <a className="mx-3" href="https://t.me/+380982667643" target="_blank" rel="noreferrer"><h5>+380 98 266-76-43</h5></a>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <h5 className="mx-3">Viber:</h5>
            <h5 className="mx-3">+380 50 938-72-76</h5>
          </div>
          <div className="d-flex justify-content-between mx-3">
            <h5 className="mx-3">GitHub:</h5>
            <a className="mx-3" href="https://github.com/VLola" target="_blank" rel="noreferrer"><h5>github.com/VLola</h5></a>
          </div>
        </div>
      </div>
    );
};

export default Contact;