import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const HighlightService = () => {
    return (
        <div className="highlight-service grid">
            <div className="highlight-service__element">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.566 17.842c-.945 2.462-3.678 4.012-6.563 4.161.139-2.772 1.684-5.608 4.209-6.563l.51.521c-1.534 1.523-2.061 2.765-2.144 3.461.704-.085 2.006-.608 3.483-2.096l.505.516zm-1.136-11.342c-1.778-.01-4.062.911-5.766 2.614-.65.649-1.222 1.408-1.664 2.258 1.538-1.163 3.228-1.485 5.147-.408.566-1.494 1.32-3.014 2.283-4.464zm5.204 17.5c.852-.44 1.61-1.013 2.261-1.664 1.708-1.706 2.622-4.001 2.604-5.782-1.575 1.03-3.125 1.772-4.466 2.296 1.077 1.92.764 3.614-.399 5.15zm11.312-23.956c-.428-.03-.848-.044-1.261-.044-9.338 0-14.465 7.426-16.101 13.009l4.428 4.428c5.78-1.855 12.988-6.777 12.988-15.993v-.059c-.002-.437-.019-.884-.054-1.341zm-5.946 7.956c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z"/></svg>
                <div>
                    <h5>Free shipping</h5>
                    <p className="lead fs-6">Orders 150K or more</p>
                </div>
            </div>
            <div className="highlight-service__element">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-3.31 0-6.291 1.353-8.459 3.522l-2.48-2.48-1.061 7.341 7.437-.966-2.489-2.488c1.808-1.808 4.299-2.929 7.052-2.929 5.514 0 10 4.486 10 10s-4.486 10-10 10c-3.872 0-7.229-2.216-8.89-5.443l-1.717 1.046c2.012 3.803 6.005 6.397 10.607 6.397 6.627 0 12-5.373 12-12s-5.373-12-12-12z"/></svg>
                <div>
                    <h5>Free return</h5>
                    <p className="lead fs-6">Within 30 days</p>
                </div>
            </div>
            <div className="highlight-service__element">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M12.628 21.412l5.969-5.97 1.458 3.71-12.34 4.848-4.808-12.238 9.721 9.65zm-1.276-21.412h-9.352v9.453l10.625 10.547 9.375-9.375-10.648-10.625zm4.025 9.476c-.415-.415-.865-.617-1.378-.617-.578 0-1.227.241-2.171.804-.682.41-1.118.584-1.456.584-.361 0-1.083-.408-.961-1.218.052-.345.25-.697.572-1.02.652-.651 1.544-.848 2.276-.106l.744-.744c-.476-.476-1.096-.792-1.761-.792-.566 0-1.125.227-1.663.677l-.626-.627-.698.699.653.652c-.569.826-.842 2.021.076 2.938 1.011 1.011 2.188.541 3.413-.232.6-.379 1.083-.563 1.475-.563.589 0 1.18.498 1.078 1.258-.052.386-.26.763-.621 1.122-.451.451-.904.679-1.347.679-.418 0-.747-.192-1.049-.462l-.739.739c.463.458 1.082.753 1.735.753.544 0 1.087-.201 1.612-.597l.54.538.697-.697-.52-.521c.743-.896 1.157-2.209.119-3.247zm-9.678-7.476c.938 0 1.699.761 1.699 1.699 0 .938-.761 1.699-1.699 1.699-.938 0-1.699-.761-1.699-1.699 0-.938.761-1.699 1.699-1.699z"/></svg>
                <div>
                    <h5>Get 20% off</h5>
                    <p className="lead fs-6">For new member</p>
                </div>
            </div>
            <div className="highlight-service__element">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm8.975 7.617l-2.607 1.485c-.697-1.53-1.928-2.762-3.455-3.462l1.484-2.608c1.988.979 3.601 2.595 4.578 4.585zm-8.975 9.383c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm-4.397-13.968l1.485 2.608c-1.527.701-2.757 1.933-3.455 3.463l-2.608-1.486c.976-1.99 2.59-3.606 4.578-4.585zm-4.578 13.351l2.608-1.485c.697 1.53 1.927 2.762 3.455 3.462l-1.485 2.608c-1.988-.979-3.602-2.595-4.578-4.585zm13.371 4.585l-1.484-2.608c1.527-.701 2.758-1.933 3.455-3.462l2.607 1.485c-.976 1.99-2.589 3.606-4.578 4.585z"/></svg>
                <div>
                    <h5>We support</h5>
                    <p className="lead fs-6">24/7 amazing service</p>
                </div>
            </div>
        </div>
    )
}

const SubcribeBar = () => {
    return (
        <div className="subcribe-bar">
            <h4>Get The Lastest Item</h4>
            <p className="lead fst-italic">And receive 10% coupon when shopping</p>
            <form className="d-flex">
                <input type="text" placeholder="Enter your email here" className="form-control"/>
                <button className="btn button-style">Subcribe</button>
            </form>
        </div>
    )
}

const SubFooter = () => {
    return (
        <div className="footer grid mb-3">
            <div className="footer__element text-center">
                <img src="/imgs/logo.png" alt="logo_img" style={{width: '6rem'}} />
            </div>
            <ul className="nav">
                <li className="nav-item mb-2"><Link to='/' className="nav-link p-0 text-muted">Home</Link></li>
                <li className="nav-item mb-2"><Link to='/products' className="nav-link p-0 text-muted">Products</Link></li>
                <li className="nav-item mb-2"><Link to='/news' className="nav-link p-0 text-muted">News</Link></li>
                <li className="nav-item mb-2"><Link to='/about' className="nav-link p-0 text-muted">About</Link></li>
            </ul>
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            <hr className="grid" />
            <HighlightService />
            <SubcribeBar />
            <SubFooter />
            <hr className="grid"/>
            <div className="text-muted text-center my-3">
                Copyright © BK University.
            </div>
        </footer>
    )
}

export default Footer