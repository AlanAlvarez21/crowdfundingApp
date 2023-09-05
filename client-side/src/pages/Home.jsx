import React, { useState, useEffect } from 'react'

import { useStateContext } from '../context'
import { DisplayCampaigns } from '../components'

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaings = async () => {
    setIsLoading(true);
      const data = await getCampaigns();
      setCampaigns(data);
      console.log('data', data);
      setIsLoading(false);
  }

  useEffect(() => { 
    if(contract) fetchCampaings(); 
  }, [address, contract])

  return (
    <div>
      <DisplayCampaigns 
        title='All campaings'
        isLoading={isLoading}
        campaings={campaigns}
      />
      <p className='font-normal text-left text-white font-epilogue mt-[15px]'> 2023 By @AlanAlvarez</p>
    </div>
  
  )
}

export default Home