import React from 'react'
import TabHeader from './TabHeader'
import TabBody from './TabBody'
import './Tab.css'

const Tab = ({id, tabNames, admin }) => {
    const [selectedTab, setSelectedTab] = React.useState(tabNames.length === 3 ? 'Description' : 'Profile')

    return (
        <div className='tab grid'>
            <TabHeader
                tabNames={tabNames}
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            />  
            {
                admin != undefined ?
                <TabBody
                    id={id}
                    admin={admin}
                    selectedTab={selectedTab}
                    setSelectedTab={setSelectedTab}
                /> :
                <TabBody 
                    id={id}
                    isProduct
                    selectedTab={selectedTab}
                />
            }
        </div>
    )
}

export default Tab