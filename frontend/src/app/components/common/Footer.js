import { Pacifico } from "next/font/google";
const pacifico = Pacifico ({subsets:['latin'],weight:'400'})

export default function Footer(){
    return(
       <footer className="container-fluid py-3 hms-bg-normal">
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <a className={`${pacifico.className} fs-4 text-decoration-none`}  style={{color:'#a945c9'}} href="#">HMS</a>
                    <h6 className="text-white fw-semibold">Hotel Management System</h6>
                </div>
                <div className="col-3">
                    <h4 className="text-white fw-bold">About</h4>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">company</a></p>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">History</a></p>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">career</a></p>
                </div>
                <div className="col-3">
                    <h4 className="text-white fw-bold">Contact</h4>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">company</a></p>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">History</a></p>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">career</a></p>
                </div>
                <div className="col-3">
                    <h4 className="text-white fw-bold">Support</h4>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">company</a></p>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">History</a></p>
                    <p><a href="#" className="text-white text-decoration-none fw-semibold">career</a></p>
                </div>
            </div>
        </div>
       </footer>
    );
}