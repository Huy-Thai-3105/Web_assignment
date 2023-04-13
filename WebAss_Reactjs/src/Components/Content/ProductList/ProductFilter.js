import React from 'react'
import clsx from 'clsx'
import 'animate.css'
import axios from 'axios'


const ProductFilter = ({ showFilter, setShowFilter, setAllProducts }) => {
    const [brand, setBrand] = React.useState('all')
    const [price, setPrice] = React.useState('all')
    const [screen, setScreen] = React.useState('all')
    const [ram, setRam] = React.useState('all')
    const [rom, setRom] = React.useState('all')
    const [battery, setBattery] = React.useState('all')

    const handleSubmitFilter = async () => {
        let prices = price !== 'all' ? price.split(' - ') : undefined
        let data = {}
        
        if (brand !== 'all')
            data.brand = brand
        if (price !== 'all') {
            let prices = price.split(' - ')
            data.price_low_threshold = prices[0]
            data.price_high_threshold = prices[1]
        }
        if (screen !== 'all') 
            data.screen_size_low_threshold = screen
        if (ram !== 'all')
            data.RAM_dung_luong_low_threshold = ram
        if (rom !== 'all')
            data.RAM_bo_nho_trong_low_threshold = rom
        if (battery !== 'all')
            data.pin_dung_luong_low_threshold = battery

        data = JSON.stringify(data)
        const config = {
            method: 'post',
            url: 'http://localhost/php/ass_backend/Product/filter',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
        }
        const respone = await axios(config)
        setAllProducts(respone.data)
        setShowFilter(!showFilter)
    }

    return (
        <div 
            className='filter-background'
        >
            <form 
                className="list-fifter grid"
                onSubmit={(e) => e.preventDefault()}
            >
                <div>
                    <div className="list-fifter__brand dropdown mb-2">
                        <button className="btn button__submit dropdown-toggle list-fifter__button" type="button" id="brand" data-bs-toggle="dropdown" aria-expanded="false">
                            Brand
                        </button>
                        <ul 
                            className="list-fifter__menu dropdown-item-text"
                            aria-labelledby="brand"
                        >
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="all"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label className="form-check-label">
                                    All
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="samsung"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label className="form-check-label">
                                    Samsung
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio"
                                    value="apple"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label className="form-check-label">
                                    Apple
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="xiaomi"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label className="form-check-label">
                                    Xiaomi
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="oppo"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label className="form-check-label">
                                    Oppo
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="vivo"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label className="form-check-label">
                                    Vivo
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="realmi"
                                    name="brand"
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <label className="form-check-label">
                                    Realmi
                                </label>
                            </li>
                        </ul>   
                    </div>
        
                    <div className="list-fifter__price dropdown">
                        <button className="btn button__submit dropdown-toggle list-fifter__button" type="button" id="price" data-bs-toggle="dropdown" aria-expanded="false">
                            Price
                        </button>
                        <ul 
                            className="list-fifter__menu dropdown-item-text" 
                            aria-labelledby="price"
                        >
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="all"
                                    name="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label className="form-check-label">
                                    All
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="4000 - 600"
                                    name="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label className="form-check-label">
                                    400 - 600
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="600 - 1000"
                                    name="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label className="form-check-label">
                                    600 - 1000
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="1000 - 1500"
                                    name="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                <label className="form-check-label">
                                    1000 - 1500
                                </label>
                            </li>
                        </ul>  
                    </div>
        
                    <div className="list-fifter__screen dropdown">
                        <button className="btn button__submit dropdown-toggle list-fifter__button" type="button" id="screen" data-bs-toggle="dropdown" aria-expanded="false">
                            Screen
                        </button>
                        <ul 
                            className="list-fifter__menu dropdown-item-text"
                            aria-labelledby="screen"
                        >
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="all"
                                    name="screen"
                                    onChange={(e) => setScreen(e.target.value)}
                                />
                                <label className="form-check-label">
                                    All
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="6 inch"
                                    name="screen"
                                    onChange={(e) => setScreen(e.target.value)}
                                />
                                <label className="form-check-label">
                                    6 inch
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="6.3 inch"
                                    name="screen"
                                    onChange={(e) => setScreen(e.target.value)}
                                />
                                <label className="form-check-label">
                                    6.3 inch
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="6.4 inch"
                                    name="screen"
                                    onChange={(e) => setScreen(e.target.value)}
                                />
                                <label className="form-check-label">
                                    6.4 inch
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="6.5 inch"
                                    name="screen"
                                    onChange={(e) => setScreen(e.target.value)}
                                />
                                <label className="form-check-label">
                                    6.5 inch
                                </label>
                            </li>
                        </ul> 
                    </div>
        
                    <div className="list-fifter__ram dropdown">
                        <button className="btn button__submit dropdown-toggle list-fifter__button" type="button" id="battery" data-bs-toggle="dropdown" aria-expanded="false">
                            Ram
                        </button>
                        <ul 
                            className="list-fifter__menu dropdown-item-text" 
                            aria-labelledby="battery"
                        >
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="all"
                                    name="ram"
                                    onChange={(e) => setRam(e.target.value)}
                                />
                                <label className="form-check-label">
                                    All
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="2"
                                    name="ram"
                                    onChange={(e) => setRam(e.target.value)}
                                />
                                <label className="form-check-label">
                                 {'\u2265'} 2G
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="4G"
                                    name="ram"
                                    onChange={(e) => setRam(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 4G
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="8G"
                                    name="ram"
                                    onChange={(e) => setRam(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 8G
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div className="list-fifter__rom dropdown">
                        <button className="btn button__submit dropdown-toggle list-fifter__button" type="button" id="battery" data-bs-toggle="dropdown" aria-expanded="false">
                            Rom
                        </button>
                        <ul 
                            className="list-fifter__menu dropdown-item-text" 
                            aria-labelledby="battery"
                        >
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="all"
                                    name="rom"
                                    onChange={(e) => setRom(e.target.value)}
                                />
                                <label className="form-check-label">
                                    All
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="32"
                                    name="rom"
                                    onChange={(e) => setRom(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 32G
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="64"
                                    name="rom"
                                    onChange={(e) => setRom(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 64G
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="128"
                                    name="rom"
                                    onChange={(e) => setRom(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 128G
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="256"
                                    name="rom"
                                    onChange={(e) => setRom(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 256G
                                </label>
                            </li>
                        </ul>
                    </div>

                    <div className="list-fifter__battery dropdown">
                        <button className="btn button__submit dropdown-toggle list-fifter__button" type="button" id="battery" data-bs-toggle="dropdown" aria-expanded="false">
                            battery
                        </button>
                        <ul 
                            className="list-fifter__menu dropdown-item-text" 
                            aria-labelledby="battery"
                        >
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="all"
                                    name="battery"
                                    onChange={(e) => setBattery(e.target.value)}
                                />
                                <label className="form-check-label">
                                    All
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="4000mAh"
                                    name="battery"
                                    onChange={(e) => setBattery(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 4000 mAh
                                </label>
                            </li>
                            <li>
                                <input 
                                    className="form-check-input" 
                                    type="radio" 
                                    value="5000mAh"
                                    name="battery"
                                    onChange={(e) => setBattery(e.target.value)}
                                />
                                <label className="form-check-label">
                                    {'\u2265'} 5000 mAh
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div 
                        className='btn button__submit'
                        onClick={handleSubmitFilter}
                    >
                        Submit
                    </div>
                    <div 
                        className='btn btn-danger ms-1'
                        onClick={() => setShowFilter(!showFilter)}
                    >Cancel</div>
                </div>
            </form>
        </div>
    )
}

export default ProductFilter