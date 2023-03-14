import React from 'react'
import "./Sidebar.scss"

const Sidebar = () => {
  return (
    <div>
        <div className='sidebar'>
            {/* {sidebarLeft} */}
            <div className='sidebarLeft'>
                <div className='serverIcon'>
                    <img src="/Users/y/src/discode-clone/public/icons8-react-16.png" alt=""/>
                </div>
                <div className='serverIcon'>
                    <img src="./icons8-react-16.png" alt=""/>
                </div>
            </div>
            {/* {sidebarRight} */}
            <div className='sidebarRight'></div>
        </div>
    </div>
  )
}

export default Sidebar
