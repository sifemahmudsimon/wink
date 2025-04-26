import { Button } from "@heroui/button"
import { Input } from "@heroui/input"
import React from "react"
import Style from "../../../styles/inputfield.module.scss"
const NewsLetter = () => {
  return (
    <div className="w-[100%] bg-black text-white  flex flex-col justify-center items-center p-[30px] md:pt-[97px] md:pb-[106px]">
       <h1 className="text-[40px] md-[10px] md:mb-[24px]">Our Newsletter</h1>
       <p className="mb-[36px] h-[38px] text-center md:text-start">Subscribe to our newsletter and get exclusive promotions directly to your inbox.</p>
       <div className="flex flex-col md:flex-row gap-[20px] md:gap-[36px] w-full max-w-[559px]">
       <Input 
     className={Style.customInput}
             color="light"
            variant="bordered" 
            label="Enter Your email" 
            type="email" 
            classNames={{    
                label: "text-white ", 
                inputWrapper: [
                 "border-none",
                 "p-[16px]"
                ],
              }}
      
        />
       <Button
            className="h-[51px] w-[100%] md:max-w-[85px] border-[1px] rounded-full p-[16px] text-[16px] "
            color="light"
            variant="bordered"
          >
            Submit
          </Button>
       </div>
    </div>
  )
}

export default NewsLetter