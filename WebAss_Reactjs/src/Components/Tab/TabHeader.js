import clsx from 'clsx'
import React from 'react'

const ProductHeader = ({ tabNames, selectedTab, setSelectedTab }) => {
    const tabLineRef = React.useRef(null)
    const desTabRef = React.useRef()
    const techTabRef = React.useRef()
    const reviewsTabRef = React.useRef()

    const handleClickTab = (index) => {
        setSelectedTab(tabNames[index])
        if (tabLineRef && tabLineRef?.current?.style) {
            if (index === 0) {
                tabLineRef.current.style.width = desTabRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = desTabRef.current.offsetLeft + 'px'
            }
            else if (index === 1) {
                tabLineRef.current.style.width = techTabRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = techTabRef.current.offsetLeft + 'px'
            }
            else {
                tabLineRef.current.style.width = reviewsTabRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = reviewsTabRef.current.offsetLeft + 'px'
            }
        }
    }

    React.useEffect(() => {
        const wid = window.addEventListener('resize', () => {
            if (tabLineRef && tabLineRef?.current?.style) {
                if (selectedTab === 'Description') {
                    tabLineRef.current.style.width = desTabRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = desTabRef.current.offsetLeft + 'px'
                }
                else if (selectedTab === 'Tech') {
                    tabLineRef.current.style.width = techTabRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = techTabRef.current.offsetLeft + 'px'
                }
                else {
                    tabLineRef.current.style.width = reviewsTabRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = reviewsTabRef.current.offsetLeft + 'px'
                }
            }
        })

        return () => {
            window.removeEventListener('resize', wid)
        }
    }, [window.innerWidth])

    return (
        <div className="tab-option">
            <div>
                {tabNames.map((tab, i) => (
                    <div 
                        key={i} 
                        className={clsx({
                            'select': selectedTab === tab
                        })}
                        onClick={() => handleClickTab(i)}
                        ref={
                            tab === 'Description' ? desTabRef :
                            tab === 'Tech' ? techTabRef : reviewsTabRef
                        }
                    >
                        <img 
                            src={`/imgs/svg/${tab}.svg`} 
                            alt={`${tab}-svg`} 
                            style={{
                                width: '18px',
                                height: '18px'
                            }}
                        />
                        <h5>{tab}</h5>
                    </div>
                ))}
            </div>
            <hr 
                ref={tabLineRef} 
                className="tab-line"/>
        </div>
    )    
}

const AdminHeader = ({ tabNames, selectedTab, setSelectedTab }) => {
    const tabLineRef = React.useRef(null)
    const profileRef = React.useRef()
    const productRef = React.useRef()
    const postRef = React.useRef()
    const userRef = React.useRef()


    const handleClickTab = (index) => {
        setSelectedTab(tabNames[index])
        if (tabLineRef && tabLineRef?.current?.style) {
            if (index === 0) {
                tabLineRef.current.style.width = profileRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = profileRef.current.offsetLeft + 'px'
            }
            else if (index === 1) {
                tabLineRef.current.style.width = productRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = productRef.current.offsetLeft + 'px'
            }
            else if (index === 2) {
                tabLineRef.current.style.width = postRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = postRef.current.offsetLeft + 'px'
            }
            else {
                tabLineRef.current.style.width = userRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = userRef.current.offsetLeft + 'px'
            }
        }
    }

    React.useEffect(() => {
        const wid =  window.addEventListener('resize', () => {
            if (tabLineRef && tabLineRef?.current?.style) { 
                if (selectedTab === 'Profile') {
                    tabLineRef.current.style.width = profileRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = profileRef.current.offsetLeft + 'px'
                }
                else if (selectedTab === 'Products') {
                    tabLineRef.current.style.width = productRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = productRef.current.offsetLeft + 'px'
                }
                else if (selectedTab === 'Post') {
                    tabLineRef.current.style.width = postRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = postRef.current.offsetLeft + 'px'
                }
                else {
                    tabLineRef.current.style.width = userRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = userRef.current.offsetLeft + 'px'
                }
            }
        })

        return () => {
            window.removeEventListener('resize', wid)
        }
    }, [window.innerWidth])

    return (
        <div className="tab-option">
            <div>
                {tabNames.map((tab, i) => (
                    <div 
                        key={i} 
                        className={clsx({
                            'select': selectedTab === tab
                        })}
                        onClick={() => handleClickTab(i)}
                        ref={
                            tab === 'Profile' ? profileRef :
                            tab === 'Products' ? productRef :
                            tab === 'Post' ? postRef : userRef
                        }
                    >
                        <img 
                            src={`/imgs/svg/${tab}.svg`} 
                            alt={`${tab}-svg`} 
                            style={{
                                width: '18px',
                                height: '18px'
                            }}
                        />
                        <h5>{tab}</h5>
                    </div>
                ))}
            </div>
            <hr 
                ref={tabLineRef} 
                className="tab-line"
            />
        </div>
    )
}

const CustomerHeader = ({ tabNames, selectedTab, setSelectedTab }) => {
    const tabLineRef = React.useRef(null)
    const profileRef = React.useRef()
    const orderRef = React.useRef()

    const handleClickTab = (index) => {
        setSelectedTab(tabNames[index])
        if (tabLineRef && tabLineRef?.current?.style) {
            if (index === 0) {
                tabLineRef.current.style.width = profileRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = profileRef.current.offsetLeft + 'px'
            }
            else {
                tabLineRef.current.style.width = orderRef.current.offsetWidth + 'px'
                tabLineRef.current.style.left = orderRef.current.offsetLeft + 'px'
            }
        }
    }

    React.useEffect(() => {
        const wid = window.addEventListener('resize', () => {
            if (tabLineRef && tabLineRef?.current?.style) {
                if (selectedTab === 'Profile') {
                    tabLineRef.current.style.width = profileRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = profileRef.current.offsetLeft + 'px'
                }
                else {
                    tabLineRef.current.style.width = orderRef.current.offsetWidth + 'px'
                    tabLineRef.current.style.left = orderRef.current.offsetLeft + 'px'
                }
            }
        })

        return () => {
            window.removeEventListener('resize', wid)
        }
    }, [window.innerWidth])

    return (
        <div className="tab-option">
            <div>
                {tabNames.map((tab, i) => (
                    <div 
                        key={i} 
                        className={clsx({
                            'select': selectedTab === tab
                        })}
                        onClick={() => handleClickTab(i)}
                        ref={
                            tab === 'Profile' ? profileRef : orderRef
                        }
                    >
                        <img 
                            src={`/imgs/svg/${tab}.svg`} 
                            alt={`${tab}-svg`} 
                            style={{
                                width: '18px',
                                height: '18px'
                            }}
                        />
                        <h5>{tab}</h5>
                    </div>
                ))}
            </div>
            <hr 
                ref={tabLineRef} 
                className="tab-line"/>
        </div>
    )
}

const TabHeader = ({tabNames, selectedTab, setSelectedTab}) => {    
    return (
        <>
            {tabNames.length === 3 && 
                <ProductHeader 
                    tabNames={tabNames}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            }
            {tabNames.length === 4 && 
                <AdminHeader 
                    tabNames={tabNames}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            }
            {tabNames.length === 2 && 
                <CustomerHeader 
                    tabNames={tabNames}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                />
            }
        </>
    )
}

export default TabHeader