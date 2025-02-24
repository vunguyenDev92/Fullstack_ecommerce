import React from 'react';
import Button from '@mui/material/Button';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";


const Navigation = () => {

    const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(false);
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}>
                                <span className='icon1 me-2'><IoIosMenu /></span>
                                <span className='text'>All Categories</span>
                                <span className='icon2 ms-2'><FaAngleDown /></span>
                            </Button>

                            <div className={`sidebarNav ${isOpenSidebarNav === true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Men <FaAngleRight className='ms-auto' /></Button></Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button>Electronic</Button></Link>
                                            <Link to="/"><Button>Clothing</Button></Link>
                                            <Link to="/"><Button>Footwear</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Women</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Gifts</Button></Link></li>
                                    <li><Link to="/"><Button>Other</Button></Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline me-auto'>
                            <li className='list-inline-item'><Link to="/"><Button>Home</Button></Link></li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Fashion</Button></Link>
                                <div className='submenu shadow'>
                                    <Link to="/"><Button>Electronic</Button></Link>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'><Link to="/"><Button>Electronic</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Bakery</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Grocery</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Mobiles</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Blog</Button></Link></li>
                            <li className='list-inline-item'><Link to="/"><Button>Contact</Button></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;