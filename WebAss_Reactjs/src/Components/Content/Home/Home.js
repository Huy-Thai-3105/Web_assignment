import React from 'react'
import AdSlider from './AdSlider'
import NewArrvial from './NewArrvial'
import TopProduct from './TopProduct'
import NewestNews from './NewestNews'
import Banner from './Banner'
import './Home.css'

const Home = () => {
    React.useEffect(() => {
        window.scrollTo(0,0)
        document.title = "Bardshop"
    }, [])
    
    return (
        <div className='content'>
            <AdSlider />
            <NewArrvial />
            <Banner /> 
            <TopProduct /> 
            <NewestNews />
        </div>
    )
}

export default Home