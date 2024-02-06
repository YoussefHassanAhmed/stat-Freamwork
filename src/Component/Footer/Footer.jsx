
 
export default function Footer() {
    return<>
    <footer className="p-5 text-white">
    <div className="container py-5">
        <div className="row gy-5">
            <div className="col-md-4 text-center">
                <h3>LOCATION</h3>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center">
                <h3 className="mb-3">AROUND THE WEB</h3>
             <div className="icons">
                <span className=" p-2 me-1 border border-1 border-white rounded-circle"><i className="fa-brands text-white fa-facebook fa-lg"></i></span>
                <span className=" p-2 me-1 border border-1 border-white rounded-circle"><i className="fa-brands  text-white fa-twitter fa-lg"></i></span>
                <span className=" p-2 me-1 border border-1 border-white rounded-circle"><i className="fa-brands text-white fa-linkedin fa-lg"></i></span>
                <span className=" p-2 me-1 border border-1 border-white rounded-circle"><i className="fa-solid text-white fa-globe fa-lg"></i></span>
             </div>
            </div>
            <div className="col-md-4 text-center">
                <h3>ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    </footer>
    <div className="text-center copy"><p className="pt-3">Copyright © Your Website 2021</p></div>
    </>
}