import React from 'react'
import { useNavigate } from 'react-router-dom'
import { loader } from '../assets'
import { FundCard } from '../components'


const DisplayCampaigns = ({ title, isLoading, campaings}) => {
  const navigate = useNavigate();
  const handleNavigate = (campaing) => {
    navigate(`/campaign-details/${campaign.title}`, { state: campaign })
  }

  return (
    <div>
        <h1 className='font-semibold font-epilogue text-[18px] text-white text-left'>{title} ({campaings?.length})</h1>
        
        <div className='flex flex-wrap mt-[20px] gap-[26px]'>
            {isLoading && (
                <img src={loader} alt="loader" className="w-[100px] h-[100px] object-contain" />
            )}

            {!isLoading && campaings?.length === 0 && (
                <p className='font-epilogue font-semibold text-[14px] leading-[30px] text[#818183'>
                  You have not created any campaigns yet  
                </p>
            )}
            
            {!isLoading && campaings.length > 0 && campaings.map((campaing) => 
                <FundCard 
                    key={campaing.id}
                    {...campaing}  // Use campaing, not campaings
                    handleClick={() => handleNavigate(campaing)}
                />
            )}
        </div>
    </div>
  )
}

export default DisplayCampaigns