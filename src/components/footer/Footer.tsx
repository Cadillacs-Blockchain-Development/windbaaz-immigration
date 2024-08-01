import { footerData } from "./footerData"

/*
🌟 Footer Component 🌟

🏢 Logo and Social Links Section 🏢

🏢 Company Links Section 🏢

🛠️ Products Section 🛠️
*/

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="flex-col sm:flex-row flex justify-between w-[100%] px-4 sm:px-[20px] lg:px-[100px]">
    
        <div className="w-[100%] sm:w-[34%] lg:w-[30%]">
        <img src="https://windmillimmigration.ca/wp-content/uploads/2022/09/wis-logo-new.svg" className="custom-logo" alt="" decoding="async"/>
           <ul className="flex gap-3 my-6">
             {footerData.socialLinks.map((link,index) => (
                <li key={index} className=" w-[42px] h-[42px]  border-[#999397] rounded-[50%]
                flex justify-center items-center border">
                 <a href={link.url} className="flex">
                   <link.icon size={18}/>
                 </a>
                </li>
             ))}
           </ul>
        <p className="text-[14px] mt-5  fm-lato font-[400]">{footerData.copyright}</p>
        </div>

        <div className="w-[100%] sm:w-[15%] lg:w-[20%] fontLoto">
            <h3 className="text-[19px] lg:text-[19px] mt-6 sm:mt-0 fm-raleway font-[500]">Company</h3>
            <ul className="my-4">
             {footerData.companyLinks.map((link,index) => (
                <li key={index} className="text-[15px] mb-4 ml-2 fm-lato font-[500] sm:ml-0 hover:underline">
                 <a href={link.url}>{link.name}</a>
                </li>
             ))}
            </ul>
        </div>

        <div className="w-[100%] sm:w-[30%] lg:w-[20%] fontLoto">
          <h3 className="text-[19px] lg:text-[19px] mt-6 sm:mt-0 fm-raleway font-[500]">Products</h3>
          <ul className="my-4">
             {footerData.contactInfo.map((link,index) => (
                <li key={index} className="text-[15px] flex fm-lato font-[400] items-center gap-2 mb-4">
                 <link.icon size={19} className="text-[#555555]" />
                 <span className="tracking-lg" >{link.text}</span>
                </li>
             ))}
            </ul>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer


