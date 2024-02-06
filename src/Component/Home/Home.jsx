import ava from '../../Asstes/imges/avataaars.svg'

export default function Home() {
    
    return<>
    <section className="home py-5">
        <div className='d-flex justify-content-center align-items-center py-5'>
            <div className="cotent text-white py-5 text-center">
            <img src={ava} className=' mb-5 rounded-circle' width={250} height={250} alt="" />
            <h1 className='fw-bolder'>START FRAMEWORK</h1>
            <div className='d-flex justify-content-center align-items-center mb-3'>
            <div className="line"></div>
                <i className="fa-solid fa-star mx-3"></i>
            <div className="line"></div>
            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    </section>
    </>
}