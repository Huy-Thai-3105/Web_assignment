import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './About.css'

const About = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    return (
        <div>   
            <div className="content">
                <div className="about-contact position-relative grid">
                    <div className="about-us">
                        <div className="about-us__col1">
                            <div className="team-member">
                                <div>
                                    <a href='https://www.facebook.com/leng.huyenthoai/'>
                                        <img src='/imgs/svg/face.svg' alt='face icon' style={{width: '40px'}}/>
                                    </a>
                                    <a href='https://github.com/thoaikun'>
                                        <img src='/imgs/svg/github.svg' alt='face icon' style={{width: '35px'}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="contact">
                                <h4 className="">Lê Nguyễn Huyền Thoại</h4><br/>
                                <h4>2012122</h4>
                            </div>
                        </div>
                        <div className="about-us__col2">
                            <div className="contact">
                                <h4 className=""> Trần Tuấn Anh</h4><br/>
                                <h4>2010878</h4>
                            </div>
                            <div className="team-member">
                                <div>
                                    <a href='https://www.facebook.com/profile.php?id=100007066599385&sk=about'>
                                        <img src='/imgs/svg/face.svg' alt='face icon' style={{width: '40px'}}/>
                                    </a>
                                    <a href='https://github.com/trtuananh'>
                                        <img src='/imgs/svg/github.svg' alt='face icon' style={{width: '35px'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="about-us__col3">
                            <div className="team-member">
                                <div>
                                    <a href='https://www.facebook.com/minhtri.vo.56884761'>
                                        <img src='/imgs/svg/face.svg' alt='face icon' style={{width: '40px'}}/>
                                    </a>
                                    <a href='https://github.com/trivm2472'>
                                        <img src='/imgs/svg/github.svg' alt='face icon' style={{width: '35px'}}/>
                                    </a>
                                </div>
                            </div>
                            <div className="contact">
                                <h4 className=""> Võ Minh Trí</h4><br/>
                                <h4>K19</h4>
                            </div>
                        </div>
                        <div className="about-us__col4">
                            <div className="contact">
                                <h4 className="">Trương Huy Thái</h4><br/>
                                <h4>2012036</h4>
                                <div className="fs-4 d-flex flex-row justify-content-end gap-3">
                                    <a href=""><i className="fa-brands fa-facebook"></i></a>
                                    <a href=""><i className="fa-brands fa-twitter"></i></a>
                                    <a href=""><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                            </div>                              
                            
                            <div className="team-member">
                                <div>
                                    <a href='https://www.facebook.com/profile.php?id=100004450669111'>
                                        <img src='/imgs/svg/face.svg' alt='face icon' style={{width: '40px'}}/>
                                    </a>
                                    <a href='https://github.com/Huy-Thai-3105'>
                                        <img src='/imgs/svg/github.svg' alt='face icon' style={{width: '35px'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/><br/><br/>

                    <div className="our-team">
                        <h1>Our Team</h1>
                        <p className="lead">
                            Đây là một dự án cho phần BTL của môn Lập Trình Web 
                            <br/>
                            viết về một trang bán điện thoại đến từ  
                            <br/>
                            nhóm của tụi em.
                        </p>
                    </div><br/>
                </div>
            </div>
        </div>
    )
}

export default About ; 