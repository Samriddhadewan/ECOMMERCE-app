import React from 'react'
import Title from '../components/Title'
import NewsLetter from '../components/NewsLetter'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}></Title>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img src={assets.about_img} className='w-full md:max-w-[450px]' alt="" />
        <div className='flex flex-col justify-center gap-6 ms:w-2/6 text-gray-600'>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, laudantium quae quis iure, nisi veniam fugit at hic non deserunt fugiat necessitatibus dolorum nostrum repudiandae incidunt dolores voluptates, in consectetur animi dignissimos beatae. Eveniet minus in sed ipsum quis dolore nobis libero, nisi assumenda quas, aperiam rem quo? Omnis expedita sit laborum itaque provident dignissimos blanditiis voluptatibus hic quod facere libero iure vitae saepe amet culpa consectetur, eius molestiae magni vel, possimus labore v.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et ex distinctio, repellat vero rerum cum doloribus asperiores perspiciatis nihil. Dolorem, unde libero! Porro molestias harum mollitia hic, illum sunt eligendi inventore voluptate ipsa sequi fugit i</p>
            <b className='text-gray-800'>Our mission</b>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, facere! Consectetur nemo quibusdam blanditiis qui quos sequi, ea a enim possimus itaque, ex modi qu.</p>
        </div>
      </div>
      <div className='text-xl  py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'}></Title>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance</b>
            <p className='text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, ratione!</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Convenience:</b>
            <p  className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptatibus, fugit dignissimos dolor eligendi facilis dolores consequuntur officia aliquid numquam?</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Exceptional Customer Service</b>
            <p  className='text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum ex, quisquam corrupti consectetur blanditiis exercitationem dolor.</p>
          </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About