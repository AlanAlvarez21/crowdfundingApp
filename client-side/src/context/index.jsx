import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    // Conectamos a la dirección de nuestro contrato
    const { contract } = useContract('0xF3B10b388201A80Bb30DFBE6F2462605E798DeC4')
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');
    const address = useAddress();
    const connect = useMetamask();

    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign({
            args: [
                address, // owner
                form.title, 
                form.description,
                form.target,
                new Date(form.deadline).getTime(),
                form.image,
            ],
        }) 
            console.log('contract call success', data) 
        } catch (error) {
            console.log('contract call error', error) 
        }
    }

    return (
        <StateContext.Provider
            value={{ 
                address,
                contract,
                connect,
                createCampaign: publishCampaign, 
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
