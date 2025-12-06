import Image from "next/image"

const Footer = () => {
  return (
    <footer className='footer border z-10 border-t-[#33353F] border-l-0 border-r-0 border-b-0 text-white'>
      <div className='container p-4 md:p-10 flex justify-between items-center mx-auto md:px-8 lg:px-16'>
        <div className=' border rounded-full p-1 border-secondary-200'>
          <Image src='/images/logo.png' alt='Logo' width={50} height={50} />
        </div>
        <p className='text-slate-600'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
