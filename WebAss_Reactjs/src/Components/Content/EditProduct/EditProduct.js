import React from 'react'
import { useNavigate, useParams } from 'react-router'
import UserContext from '../../../Contexts/UserContext'
import useFetchData from '../../../Hooks/useFetchData'
import axios from 'axios'
import ToastMessage from '../../ToastMessage/ToastMessage'
import './EditProduct.css'

const EditProduct = () => {
    const { login } = React.useContext(UserContext)
    let navigate = useNavigate()

    React.useEffect(() => {
        if (!login)
            navigate('/')
    }, [login])

    const {id} = useParams()
    const {data, fetchErr} = useFetchData(`http://localhost/php/ass_backend/Product/read/${id}`)
    const [product, setProduct] = React.useState(null)
    const [updateMessage, setUpdateMessage] = React.useState('')

    const [name, setName] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [type, setType] = React.useState('')
    const [brand, setBrand] = React.useState('')
    const [review, setReview] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [hf1, setHf1] = React.useState('')
    const [hf2, setHf2] = React.useState('')
    const [hf3, setHf3] = React.useState('')
    const [hf4, setHf4] = React.useState('')
    const [screenSize, setScreenSize] = React.useState('')
    const [resolution, setResolution] = React.useState('')
    const [refreshRate, setRefreshRate] = React.useState('')
    const [screenTech, setScreenTech] = React.useState('')
    const [backcameraTech, setBackcameraTech] = React.useState('')
    const [backcameraVideo, setBackcameraVideo] = React.useState('')
    const [backcameraFeature, setBackcameraFeature] = React.useState('')
    const [frontcameraTech, setFrontcameraTech] = React.useState('')
    const [frontcameraVideo, setFrontcameraVideo] = React.useState('')
    const [chipset, setChipset] = React.useState('')
    const [cpuTech, setCPUTech] = React.useState('')
    const [gpu, setGpu] = React.useState('')
    const [ram, setRam] = React.useState('')
    const [rom, setRom] = React.useState('')
    const [batteryCapacity, setBatteryCapacity] = React.useState('')
    const [batteryTech, setBatteryTech] = React.useState('')
    const [batteryPort, setBatteryPort] = React.useState('')
    const [sim, setSim] = React.useState('')
    const [os, setOS] = React.useState('')
    const [nfc, setNfc] = React.useState('')
    const [support, setSupport] = React.useState('')
    const [wifi, setWifi] = React.useState('')
    const [bluetooth, setBluetooth] = React.useState('')
    const [gps, setGPS] = React.useState('')
    const [deviceSize, setDeviceSize] = React.useState('')
    const [weight, setWeight] = React.useState('')
    const [material, setMaterial] = React.useState('')
    const [sideMaterial, setSideMaterial] = React.useState('')

    React.useEffect(() => {
        if (data) {
            setProduct(data)
        }
    }, [data])


    React.useEffect(() => {
        if (product) {
            if (product?.product_name)
                setName(product.product_name)
            if (product?.price)
                setPrice(product.price)
            if (product?.type)
                setType(product.type)
            if (product?.brand)
                setBrand(product.brand)
            if (product?.star_review)
                setReview(product.star_review)
            if (product?.description)
                setDescription(product.description)
            if (product?.hf_1)
                setHf1(product.hf_1)
            if (product?.hf_2)
                setHf2(product.hf_2)
            if (product?.hf_3)
                setHf3(product.hf_3)
            if (product?.hf_4)
                setHf4(product.hf_4)
            if (product?.screen_size)
                setScreenSize(product.screen_size)
            if (product?.screen_phan_giai)
                setResolution(product.screen_phan_giai)
            if (product?.screen_lam_tuoi)
                setRefreshRate(product.screen_lam_tuoi)
            if (product?.screen_tech)
                setScreenTech(product.screen_tech)
            if (product?.backcam_thong_so)
                setBackcameraTech(product.backcam_thong_so)
            if (product?.backcam_quay)
                setBackcameraVideo(product.backcam_quay)
            if (product?.backcam_feature)
                setBackcameraFeature(product.backcam_feature)
            if (product?.frontcam_thong_so)
                setFrontcameraTech(product.frontcam_thong_so)
            if (product?.frontcam_video)
                setFrontcameraVideo(product.frontcam_video)
            if (product?.CPU_chipset)
                setChipset(product.CPU_chipset)
            if (product?.CPU_thong_so)
                setCPUTech(product.CPU_thong_so)
            if (product?.CPU_GPU)
                setGpu(product.CPU_GPU)
            if (product?.RAM_dung_luong)
                setRam(product.RAM_dung_luong)
            if (product?.RAM_bo_nho_trong)
                setRom(product.RAM_bo_nho_trong)
            if (product?.pin_dung_luong)
                setBatteryCapacity(product.pin_dung_luong)
            if (product?.pin_sac)
                setBatteryTech(product.pin_sac)
            if (product?.pin_cong_sac)
                setBatteryPort(product.pin_cong_sac)
            if (product?.communicate_sim)
                setSim(product.communicate_sim)
            if (product?.communicate_OS)
                setOS(product.communicate_OS)
            if (product?.communicate_NFC)
                setNfc(product.communicate_NFC)
            if (product?.communicate_mang)
                setSupport(product.communicate_mang)
            if (product?.communicate_wifi)
                setWifi(product.communicate_wifi)
            if (product?.communicate_bluetooth)
                setBluetooth(product.communicate_bluetooth)
            if (product?.communicate_GPS)
                setGPS(product.communicate_GPS)
            if (product?.design_size)
                setDeviceSize(product.design_size)
            if (product?.design_weight)
                setWeight(product.design_weight)
            if (product?.design_chatluong)
                setMaterial(product.design_chatluong)
            if (product?.design_khung_vien)
                setSideMaterial(product.design_khung_vien)
        }
    }, [product])

    const handleEditProduct = async () => {
        const data = JSON.stringify({
            id,
            product_name: name,
            price,
            type,
            brand,
            star_review: review,
            description,
            hf_1: hf1,
            hf_2: hf2,
            hf_3: hf3,
            hf_4: hf4,
            screen_size: screenSize,
            screen_tech: screenTech,
            screen_phan_giai: resolution,
            screen_lam_tuoi: refreshRate,
            backcam_thong_so: backcameraTech,
            backcam_feature: backcameraFeature,
            backcam_quay: backcameraVideo,
            frontcam_thong_so: frontcameraTech,
            frontcam_video: frontcameraVideo,
            CPU_chipset: chipset,
            CPU_GPU: gpu,
            CPU_thong_so: cpuTech,
            RAM_dung_luong: ram,
            RAM_bo_nho_trong: rom,
            pin_dung_luong: batteryCapacity,
            pin_cong_sac: batteryPort,
            pin_sac: batteryTech,
            communicate_sim: sim,
            communicate_OS: os,
            communicate_NFC: nfc,
            communicate_mang: support,
            communicate_wifi: wifi,
            communicate_bluetooth: bluetooth,
            communicate_GPS: gps,
            design_size: deviceSize,
            design_chatluong: material,
            design_weight: weight,
            design_khung_vien: sideMaterial
        })
        const config = {
            method: 'post',
            url: 'http://localhost/php/ass_backend/Product/update',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        }
        const respone = await axios(config)
        setUpdateMessage(respone.data.message)
    }

    React.useEffect(() => {
        let tid = setTimeout(() => setUpdateMessage(null), 2500)

        return () => {
            clearTimeout(tid)
        }
    }, [updateMessage])

    return (
        <div className='content'>
            {updateMessage && updateMessage !== '' && 
                <ToastMessage 
                    header={updateMessage === "success" ? "Success" : "Fail"}
                    body={`Update product ${updateMessage}`}
                />
            }
            <form 
                className="grid product-form"
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="product-form__info">
                    <fieldset className="product-form__general mb-4">
                        <legend className='text-muted'>GENERAL</legend>
                        <div className="mb-3">
                            <label className="form-label">Product Name</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Review Point</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={review}
                                onChange={(e) => setReview(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea 
                                className="form-control"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </div>
                        <div className='general-info__type-brand'>
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Brand</label>
                                <input 
                                    className="form-control" 
                                    list="brandListOption" 
                                    placeholder="Type to search"
                                    value={brand}
                                    onChange={(e) => setBrand(e.target.value)}
                                />
                                <datalist id="brandListOption">
                                    <option value="Samsung"/>
                                    <option value="Apple"/>
                                    <option value="Oppo"/>
                                    <option value="Xiaomi"/>
                                    <option value="Sony"/>
                                    <option value="Vivo"/>
                                    <option value="Realmi"/>
                                </datalist>
                            </div>
                        </div>
                    </fieldset>

                    <fieldset className='product-form__highligth mb-4'>
                        <legend className='text-muted'>HIGHLIGTH FEATURE</legend>
                        <div className="mb-3">
                            <label className="form-label">Highlight feature 1</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={hf1}
                                onChange={(e) => setHf1(e.target.value)}    
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Highlight feature 2</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={hf2}
                                onChange={(e) => setHf2(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Highlight feature 3</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={hf3}
                                onChange={(e) => setHf3(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Highlight feature 4</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={hf4}
                                onChange={(e) => setHf4(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <fieldset className='product-form__screen mb-4'>
                        <legend className='text-muted'>SCREEN</legend>
                        <div>
                            <div className="mb-3">
                                <label className="form-label">Size</label>
                                <input 
                                    type="text" 
                                    className="form-control"
                                    value={screenSize}
                                    onChange={(e) => setScreenSize(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Resolution</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    value={resolution}
                                    onChange={(e) => setResolution(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Refresh rate</label>
                                <input 
                                    className="form-control" 
                                    list="refreshRateListOption" 
                                    placeholder='Type to search'
                                    value={refreshRate}
                                    onChange={(e) => setRefreshRate(e.target.value)}
                                />
                                <datalist id="refreshRateListOption">
                                    <option value="60Hz"/>
                                    <option value="90Hz"/>
                                    <option value="120Hz"/>
                                </datalist>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tech</label>
                            <textarea 
                                className="form-control"
                                value={screenTech}
                                onChange={(e) => setScreenTech(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <fieldset className='product-form__backcamera mb-4'>
                        <legend className='text-muted'>BACK CAMERA</legend>
                        <div className="mb-3">
                            <label className="form-label">Tech</label>
                            <textarea 
                                className="form-control"
                                value={backcameraTech}
                                onChange={(e) => setBackcameraTech(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Video</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={backcameraVideo}
                                onChange={(e) => setBackcameraVideo(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Feature</label>
                            <textarea 
                                className="form-control"
                                value={backcameraFeature}
                                onChange={(e) => setBackcameraFeature(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <fieldset className='product-form__frontcamera mb-4'>
                        <legend className='text-muted'>FRONT CAMERA</legend>
                        <div className="mb-3">
                            <label className="form-label">Tech</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={frontcameraTech}
                                onChange={(e) => setFrontcameraTech(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Video</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={frontcameraVideo}
                                onChange={(e) => setFrontcameraVideo(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <fieldset className='product-form__cpu mb-4'>
                        <legend className='text-muted'>CPU</legend>
                        <div className="mb-3">
                            <label className="form-label">Chipset</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={chipset}
                                onChange={(e) => setChipset(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tech</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={cpuTech}
                                onChange={(e) => setCPUTech(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">GPU</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={gpu}
                                onChange={(e) => setGpu(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <fieldset className='product-form__storage mb-4'>
                        <legend className='text-muted'>RAM & ROM</legend>
                        <div className="mb-3">
                            <label className="form-label">Ram capacity</label>
                            <input 
                                className="form-control" 
                                list="ramListOption" 
                                placeholder="Type to search"
                                value={ram}
                                onChange={(e) => setRam(e.target.value)}
                            />
                            <datalist id="ramListOption">
                                <option value="16"/>
                                <option value="32"/>
                                <option value="64"/>
                                <option value="128"/>
                                <option value="256"/>
                            </datalist>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Rom capacity</label>
                            <input 
                                className="form-control" 
                                list="romListOption" 
                                placeholder='Type to search'
                                value={rom}
                                onChange={(e) => setRom(e.target.value)}
                            />
                            <datalist id="romListOption">
                                <option value="16"/>
                                <option value="32"/>
                                <option value="64"/>
                                <option value="128"/>
                                <option value="256"/>
                            </datalist>
                        </div>
                    </fieldset>

                    <fieldset className='product-form__battery mb-4'>
                        <legend className='text-muted'>BATTERY</legend>
                        <div className="mb-3">
                            <label className="form-label">Battery capacity</label>
                            <input 
                                className="form-control" 
                                list="batteryListOption" 
                                placeholder='Type to search'
                                value={batteryCapacity}
                                onChange={(e) => setBatteryCapacity(e.target.value)}
                            />
                            <datalist id='batteryListOption'>
                                <option value="4000"/>
                                <option value="4200"/>
                                <option value="4500"/>
                                <option value="5000"/>
                            </datalist>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Tech</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={batteryTech}
                                onChange={(e) => setBatteryTech(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Port</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={batteryPort}
                                onChange={(e) => setBatteryPort(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <fieldset className='product-form__connection mb-4'>
                        <legend className='text-muted'>CONNECTION</legend>
                        <div className="mb-3">
                            <label className="form-label">Sim card</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={sim}
                                onChange={(e) => setSim(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">OS</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={os}
                                onChange={(e) => setOS(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">NFC</label>
                            <input 
                                className="form-control" 
                                list="nfcListOption" 
                                placeholder='Type to search'
                                value={nfc}
                                onChange={(e) => setNfc(e.target.value)}
                            />
                            <datalist id='nfcListOption'>
                                <option value="Co"/>
                                <option value="Khong"/>
                            </datalist>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Support</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={support}
                                onChange={(e) => setSupport(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Wifi</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={wifi}
                                onChange={(e) => setWifi(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Bluetooth</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={bluetooth}
                                onChange={(e) => setBluetooth(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">GPS</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={gps}
                                onChange={(e) => setGPS(e.target.value)}
                            />
                        </div>
                    </fieldset>

                    <fieldset className='product-form__design mb-4'>
                        <legend className='text-muted'>DESIGN</legend>
                        <div className="mb-3">
                            <label className="form-label">Size</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={deviceSize}
                                onChange={(e) => setDeviceSize(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Weight</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Material</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={material}
                                onChange={(e) => setMaterial(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Side Material</label>
                            <input 
                                type="text" 
                                className="form-control"
                                value={sideMaterial}
                                onChange={(e) => setSideMaterial(e.target.value)}
                            />
                        </div>
                    </fieldset>
                </div>
                    
                <button 
                    type="submit" 
                    className="btn button__submit"
                    onClick={() => handleEditProduct()}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default EditProduct