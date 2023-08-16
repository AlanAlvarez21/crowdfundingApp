import React, { useState, useEffect } from 'react'

import { useStateContext } from '../context'
import { DisplayCampaigns } from '../components'

const Profile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);
  const { address, contract, getUserCampaings } = useStateContext();

  const fetchCampaings = async () => {
    setIsLoading(true);
      const data = await getUserCampaings();
      setCampaigns(data);
      console.log('data', data);
      setIsLoading(false);
  }

  useEffect(() => { 
    if(contract) fetchCampaings(); 
  }, [address, contract])

  return (
    <DisplayCampaigns 
      title='My campaings'
      isLoading={isLoading}
      campaings={campaigns}
    />
  )
}

export default Profile