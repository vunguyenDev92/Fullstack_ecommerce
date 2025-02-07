import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import { IoIosSearch } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import React, { useEffect } from 'react';
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropDown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const context = useContext(MyContext);
    const [selectTab, setSelectTab] = useState(null);
    const [provinceList, setProvinceList] = useState([]);
    const [originalProvinceList, setOriginalProvinceList] = useState([]); // Lưu trữ danh sách tỉnh thành gốc

    const selectProvince = (index, name) => {
        setSelectTab(index);
        setIsOpenModal(false);
        context.setSelectProvince(name);
    }

    useEffect(() => {
        setProvinceList(context.provinceList);
        setOriginalProvinceList(context.provinceList); // Lưu danh sách tỉnh thành gốc
    }, [context.provinceList])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword === "") {
            setProvinceList(originalProvinceList); // Khôi phục danh sách gốc nếu không có từ khóa
        } else {
            const list = originalProvinceList.filter((item) => {
                return item.name.toLowerCase().includes(keyword);
            });
            setProvinceList(list);
        }
    }

    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)} >
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>{context.selectProvince !== "" ? context.selectProvince.length > 15 ? context.selectProvince?.substr(0, 15) + "..." : context.selectProvince : "Select Location"}</span>
                </div>
                <span className='ms-auto'><FaAngleDown /></span>
            </Button>

            <Dialog open={isOpenModal} onClose={() => setIsOpenModal(false)} className='locationModal' TransitionComponent={Transition}>
                <h4 className='mb-0'>Select your Delivery Location</h4>
                <p>Enter your address and we will specify the offer for your area</p>
                <Button className='closeBtn' onClick={() => setIsOpenModal(false)}><IoMdClose /></Button>
                <div className='headerSearch w-100 '>
                    <input type='text' placeholder='Search your area...' onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className='countryList'>
                    {
                        provinceList?.length !== 0 && provinceList?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button onClick={() => selectProvince(index, item.name)} className={`${selectTab === index ? 'active' : ''}`}>
                                        {item.name}
                                    </Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropDown;