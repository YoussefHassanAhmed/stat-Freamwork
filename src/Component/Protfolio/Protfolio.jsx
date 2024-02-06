import port1 from '../../Asstes/imges/poert1.png'
import port2 from '../../Asstes/imges/port2.png'
import port3 from '../../Asstes/imges/port3.png'


export default function Protfolio() {
 return <>
      <div className="container py-5">
        <div className="row py-5 text-center g-5">
          <div className="text pt-4">
          <h1 className='fw-bolder'>PORTFOLIO COMPONENT</h1>
          <div className='d-flex justify-content-center align-items-center'>
            <div className="line1"></div>
                <i className="fa-solid fa-star mx-3"></i>
            <div className="line1"></div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className=' position-relative overflow-hidden rounded-3'>
            <img  src={port1} className="w-100 rounded-3" alt="" />
            <div className="layer position-absolute w-100 start-0 top-0 h-100 d-flex justify-content-center align-items-center ">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className=' position-relative overflow-hidden rounded-3'>
            <img src={port2} className="w-100 rounded-3" alt="" />
            <div className="layer position-absolute w-100 start-0 top-0 h-100 d-flex justify-content-center align-items-center ">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className=' position-relative overflow-hidden rounded-3'>
            <img src={port3} className="w-100 rounded-3" alt="" />
            <div className="layer position-absolute w-100 start-0 top-0 h-100 d-flex justify-content-center align-items-center ">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className=' position-relative overflow-hidden rounded-3'>
            <img src={port1} className="w-100 rounded-3" alt="" />
            <div className="layer position-absolute w-100 start-0 top-0 h-100 d-flex justify-content-center align-items-center ">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className=' position-relative overflow-hidden rounded-3'>
            <img src={port2} className="w-100 rounded-3" alt="" />
            <div className="layer position-absolute w-100 start-0 top-0 h-100 d-flex justify-content-center align-items-center ">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className=' position-relative overflow-hidden rounded-3'>
            <img src={port3} className="w-100 rounded-3" alt="" />
            <div className="layer position-absolute w-100 start-0 top-0 h-100 d-flex justify-content-center align-items-center ">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="model  position-fixed start-0 w-100 top-0 h-100 bg-primary bg-opacity-25 d-flex justify-content-center align-items-center d-none "><img src='' alt='' /></div>
    </>
}
