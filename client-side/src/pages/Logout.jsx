import React from 'react'
import { CustomButton } from '../components'
import { useDisconnect } from "@thirdweb-dev/react";

const Logout = () => {
  // Call useDisconnect inside the functional component
  const disconnect = useDisconnect();

  const disconnectWallet = async () => {
    // Now you can use the disconnect function here
    await disconnect();
  }

  return (
    <div className="">
        <CustomButton 
          btnType="button"
          title={'Disconnect Wallet'}
          styles={'bg-[#1dc071]'}
          handleClick={() => { disconnectWallet(); }}
        />
    </div>
  )
}

export default Logout
