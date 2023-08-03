import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

import { money } from '../assets'
import { CustomButton, FormField } from '../components'
import { checkIfImage } from '../utils'

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [form, setform] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: '',
  });

  const handleSubmit = () => {

  }

  return (
    <div className='bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4'>
      {isLoading && 'Loader...'}
      <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
        <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
          Start a Campaign
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="w-full mt-[60px] flex flex-col gap-[30px]">
        <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName='Your Name *'
            placeholder='Alan Alvarez'
            inputType='text'
            value={form.name}
            handleChange={() => {}}
          />
          <FormField 
            labelName='Campaign Title *'
            placeholder='Write a title'
            inputType='text'
            value={form.title}
            handleChange={() => {}}
          />
        </div>
        <FormField 
            labelName='Story *'
            placeholder='Write your story'
            isTextArea
            value={form.description}
            handleChange={() => {}}
          />

          <div className='flex items-center justify-start w-full p-4 bg-[#8c6dfd] rounded-[10px]'>
            <img src={money} alt="money" className='w-[40px] h-[40px] object-contain'  />
              <h4 className='font-epilogue font-bold text-[25px] text-white ml-[20px]' >You will get 100% of the raised amount</h4>
          </div>
          <div className="flex flex-wrap gap-[40px]">
          <FormField 
            labelName='Goal *'
            placeholder='ETH 0.50'
            inputType='text'
            value={form.target}
            handleChange={() => {}}
          />
          <FormField 
            labelName='End Date *'
            placeholder='End Date'
            inputType='date'
            value={form.deadline}
            handleChange={() => {}}
          />
          <div className='flex justify-center flex-wrap items-center mt-[30px]'>
            <CustomButton 
              btnType="submit"
              title="Submit new campaign"
              styles="bg-[#1dc071]"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateCampaign