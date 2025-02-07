import Logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import CountryDropDown from '../CountryDropDown'
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagOutline } from "react-icons/io5";
import SearchBox from './SearchBox'
import Navigation from './Navigation'
import { useContext } from 'react';
import { MyContext } from '../../App';
const Header = () => {
    const context = useContext(MyContext);
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Currently, the shipping unit is overloaded due to the upcoming Lunar New Year. Hope everyone understands if there is a delay!</p>
                    </div>
                </div>



                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-1">
                                <Link to={'/'}><img src={Logo} alt="logo" /></Link>
                            </div>
                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.provinceList.length !== 0 && <CountryDropDown />

                                }

                                {/* Header Search start here*/}
                                <SearchBox />
                                {/* Header Search end here*/}

                                <div className='part3 d-flex align-items-center ms-auto'>
                                    <Button className='circle me-3'><FiUser /></Button>
                                    <div className='ms-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ms-2'>
                                            <Button className='circle ms-2'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>0</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </header>

                <Navigation />

            </div>
        </>
    )


}

export default Header;