import React, { Component } from 'react';
import './ProductHeader.css';
class ProductHeader extends Component {
    render() {
        return (
            <h3 className='header'>
                <span className='header__title'>Danh sách sản phẩm</span>
            </h3>
        );
    }
}

export default ProductHeader;