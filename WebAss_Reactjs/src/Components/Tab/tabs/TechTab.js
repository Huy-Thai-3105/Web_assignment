import React from 'react'
import clsx from 'clsx'
import useFetchData from '../../../Hooks/useFetchData'

const TechTab = ({ product,selectedTab }) => {
    return (
        <div
            className={clsx("tech", {
                'disappear': selectedTab !== 'Tech'
            })}
        >
            <div className="tech__col">
                <div className="tech-element">
                    <h4 className="mb-3">Màn hình</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Kích thước màn hình</td>
                                <td>{product ? product.screen_size : ""}</td>
                            </tr>
                            <tr>
                                <td>Công nghệ màn hình</td>
                                <td>{product ? product.screen_tech: ""}</td>
                            </tr>
                            <tr>
                                <td>Độ phân giải</td>
                                <td>{product ? product.screen_phan_giai : ""}</td>
                            </tr>
                            <tr>
                                <td>Tần số quét</td>
                                <td>{product ? product.screen_lam_tuoi : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tech-element">
                    <h4 className="mb-3">Camera sau</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Thông số</td>
                                <td>
                                    {product ? product.backcam_thong_so : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Quay video</td>
                                <td>
                                    {product ? product.ackcam_quay : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Tính năng</td>
                                <td>
                                    {product ? product.backcam_feature : ""}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tech-element">
                    <h4 className="mb-3">Camera trước</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Thông số</td>
                                <td>{product ? product.frontcam_thong_so : ""}</td>
                            </tr>
                            <tr>    
                                <td>Video</td>
                                <td>{product ? product.frontcam_video : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tech-element">
                    <h4 className="mb-3">CPU</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Chipset</td>
                                <td>{product ? product.CPU_chipset : ""}</td>
                            </tr>
                            <tr>
                                <td>Thông số</td>
                                <td>{product ? product.CPU_thong_so : ""}</td>
                            </tr>
                            <tr>
                                <td>GPU</td>
                                <td>{product ? product.CPU_GPU : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="tech__col">
                <div className="tech-element">
                    <h4 className="mb-3">Ram & Bộ nhớ trong</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>RAM</td>
                                <td>{product ? product.RAM_dung_luong + 'GB' : ""}</td>
                            </tr>
                            <tr>
                                <td>Bộ nhớ trong</td>
                                <td>{product ? product.RAM_bo_nho_trong + 'GB' : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
                <div className="tech-element">
                    <h4 className="mb-3">Pin</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Dung lượng</td>
                                <td>{product ? product.pin_dung_luong + 'mAh' : ""}</td>
                            </tr>
                            <tr>
                                <td>Công nghệ sạc</td>
                                <td>{product ? product.pin_sac : ""}</td>
                            </tr>
                            <tr>
                                <td>Cổng sạc</td>
                                <td>{product ? product.pin_cong_sac : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tech-element">
                    <h4 className="mb-3">Giao tiếp và kết nối</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Thẻ sim</td>
                                <td>{product ? product.communicate_sim : ""}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{product ? product.communicate_OS : ""}</td>
                            </tr>
                            <tr>
                                <td>Công nghệ NFC</td>
                                <td>{product ? product.communicate_NFC : ""}</td>
                            </tr>
                            <tr>
                                <td>Hộ trợ mạng</td>
                                <td>{product ? product.communicate_mang : ""}</td>
                            </tr>
                            <tr>
                                <td>Wifi</td>
                                <td>{product ? product.communicate_wifi : ""}</td>
                            </tr>
                            <tr>
                                <td>Bluetooth</td>
                                <td>{product ? product.communicate_bluetooth : ""}</td>
                            </tr>
                            <tr>
                                <td>GPS</td>
                                <td>{product ? product.communicate_GPS : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="tech-element">
                    <h4 className="mb-3">Thiết kế & trọng lượng máy</h4>
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <td>Kích thước</td>
                                <td>{product ? product.design_size : ""}</td>
                            </tr>
                            <tr>
                                <td>Trọng lượng</td>
                                <td>{product ? product.design_weight : ""}</td>
                            </tr>
                            <tr>
                                <td>Chất liệu mặt lưng</td>
                                <td>{product ? product.design_chatluong : ""}</td>
                            </tr>
                            <tr>
                                <td>Khung viền</td>
                                <td>{product ? product.design_khung_vien : ""}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default TechTab