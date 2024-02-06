export default function Contact() {
  return <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 py-5 offset-md-3">
            <div className="content mt-4">
           <div className="text-center">
           <h1 className='fw-bolder'>CONATCT SECTION</h1>
           <div className='d-flex justify-content-center align-items-center'>
            <div className="line1"></div>
                <i className="fa-solid fa-star mx-3"></i>
            <div className="line1"></div>
            </div>
           </div>
              <input
                type="text"
                className="form-control border-0 border-bottom "
                placeholder="userName"
              />
              <input
                type="text"
                className="form-control border-0 border-bottom  mt-5"
                placeholder="userAge"
              />
              <input
                type="email"
                className="form-control border-0 border-bottom  mt-5"
                placeholder="userEmail"
              />
              <input
                type="password"
                className="form-control border-0 border-bottom  mt-5"
                placeholder="userPassword"
              />
              <button className="btn text-white mt-4">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
}
