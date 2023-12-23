/*router dom */
import { NavLink } from 'react-router-dom';
/*Images */
import LOGO from '../img/LOGO.png';
import Bell from '../img/icons/bell.png';
import Avatars from '../img/icons/avatars.jpg';
/*Bootstrap */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
/*Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/main.scss'
export default function Header(){
    return <>
        <header className='header'>
            <div className="header__container">
                <Container>
                    <Row>
                        <Col>
                            <img src={LOGO} alt="" />
                        </Col>
                        <Col>
                            <Container>
                                <Row>
                                    <Col>
                                        <Button variant="primary">Go to website</Button>{''}
                                    </Col>
                                    <Col>
                                        <img src={Bell} alt="" />
                                    </Col>
                                    <Col>
                                        <img src={Avatars} alt="" />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <nav className='navigation'>
                        <Row>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/dashboard' className='navigation__link'>Dashboard</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/catalogue' className='navigation__link'>Catalogue</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/customers' className='navigation__link'>Customers</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/sellers' className='navigation__link'>Sellers</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/orders' className='navigation__link'>Orders</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/support' className='navigation__link'>Support</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/reports' className='navigation__link'>Reports</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/settings' className='navigation__link'>Settings</NavLink></div></Col>
                                <Col><div className="navigation__item"><img src="" alt="" /><NavLink to='/activity' className='navigation__link'>Activity Log</NavLink></div></Col>
                        </Row>
                    </nav>
                </Container>
            </div>
        </header>
    </>
}