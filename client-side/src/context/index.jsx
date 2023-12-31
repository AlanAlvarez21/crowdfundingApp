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

    const getCampaigns = async () => {
        const campaigns = await contract.call('getCampaigns')
        const parsedCampaings = campaigns.map((campaing, i) => ({
            owner: campaing.owner,
            title: campaing.title,
            description: campaing.description,
            target: ethers.utils.formatEther(campaing.target.toString()),
            deadline: campaing.deadline.toNumber(),
            amountCollected: ethers.utils.formatEther(campaing.amountCollected.toString()),
            image: campaing.image,
            pId: i
        }));
        return parsedCampaings;
    }

    const getUserCampaings = async () => {
        const allCampaigns = await getCampaigns();
        const filteredCampaings = allCampaigns.filter((campaign) => campaign.owner === address );

        return filteredCampaings
    }

    const donate = async (pId, amount) => {
        const data = await contract.call(
            'donateToCampaign', 
            [pId], 
            {value: ethers.utils.parseEther(amount)});

        return data;
    }

    const getDonations = async (pId) => {
        const donations = await contract.call('getDonators', [pId]);
        const numberOfDonations = donations[0].length;
    
        const parsedDonations = [];

        for( let i = 0; i < numberOfDonations; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.utils.formatEther(donations[1][i].toString())
            })
        }

        return parsedDonations;
    }   

    return (
        <StateContext.Provider
            value={{ 
                address,
                contract,
                connect,
                createCampaign: publishCampaign,
                getCampaigns,
                getUserCampaings,
                donate,
                getDonations,
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);
