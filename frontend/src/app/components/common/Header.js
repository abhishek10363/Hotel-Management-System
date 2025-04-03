import { Pacifico } from 'next/font/google'
 
const pacifico = Pacifico({ subsets: ['latin'],weight:'400' })


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg " data-bs-theme="dark" style={{'backgroundColor':'#ffd6f3'}}>
            <div className="container">
            <a className={`navbar-brand ${pacifico.className} fs-4`} style={{color:'#a945c9'}} href="#">HMS</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold" href="#">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold " href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white fw-semibold d" href="#" >Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn   mt-1 text-white" style={{'backgroundColor':'#a945c9'}} href="#" >Book Event</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}