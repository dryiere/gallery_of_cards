export default function Navbar(){
        return (
                <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
                        <div className="container">
                                <a href="#" className="navbar-brand fw-bold">Galeria podróży</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuGlowne" aria-constrols="menuGlowne" aria-expanded="false" aria-label="Przełącz menu">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="menuGlowne">
                                        <ul className="navbar-nav ms-auto">
                                                <li className="nav-item">
                                                        <a href="#galeria" className="nav-link active" aria-current="page">Galeria</a>   
                                                </li>
                                                <li className="nav-item">
                                                        <a href="#kategorie" className="nav-link"></a>
                                                </li>
                                                <li className="nav-item">
                                                        <a href="#stopka" className="nav-link"></a>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        )
}