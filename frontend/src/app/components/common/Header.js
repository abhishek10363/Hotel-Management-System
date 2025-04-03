import { Pacifico } from 'next/font/google'
import Link from 'next/link';

 
const pacifico = Pacifico({ subsets: ['latin'],weight:'400' })


export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg hms-bg-normal" data-bs-theme="dark" >
            <div className="container">
            <Link className={`navbar-brand ${pacifico.className} fs-4 hms-bg-light`}  href="/">HMS</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-semibold" aria-current="page" href="/">Home</Link>
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
                            <a className="btn   mt-1 text-white hms-bg-dark"  href="#" >Book Event</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}