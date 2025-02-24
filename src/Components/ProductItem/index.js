import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from '../ProductModal';
import { useState } from 'react';


const ProductItem = () => {

    const [isOpenProductModal, setIsOpenProductModal] = useState(false);

    const viewProductDetails = (id) => {
        setIsOpenProductModal(true);
    }

    const closeProductModal = () => {
        setIsOpenProductModal(false);
    }
    return (
        <>
            <div className="item productItem">
                <div className="imgWrapper">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x540.jpg" className="w-100"></img>

                    <span className="badge badge-primary">28%</span>
                    <div className="actions">
                        <Button onClick={() => viewProductDetails(1)}>
                            <SlSizeFullscreen />
                        </Button>
                        <Button>
                            <IoIosHeartEmpty style={{ fontSize: '20px' }} />
                        </Button>
                    </div>
                </div>
                <div className="info">
                    <h4>All Natural Italian-Style Chicken Meatballs</h4>
                    <span className="text-success d-block">IN STOCK</span>
                    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />

                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger ms-2">$12.00</span>
                    </div>
                </div>
            </div>


            {
                isOpenProductModal === true && <ProductModal closeProductModal={closeProductModal} />
            }
            {/*  */}

        </>
    )
}

export default ProductItem;