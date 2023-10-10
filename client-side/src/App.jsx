import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Home, Logout, Profile } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="relative hidden mr-10 sm:flex">
        <Sidebar />
      </div>
      
      <div className="flex-1 mx-auto max-sm:w-full sm:pr-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-campaign" element={<CreateCampaign />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </div>
    </div>
    

  )
}

export default App