import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";

const CountryDropDown = () => {
    return (
        <>
            <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                    <span className='label'>Your Location</span>
                    <span className='name'>United States</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>
        </>
    )
}

export default CountryDropDown;