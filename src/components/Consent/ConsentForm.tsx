import { Checkbox } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'
import { useState } from 'react'
import LoremIpsum from 'react-lorem-ipsum'
import { useNavigate } from 'react-router'

const ConsentForm = () => {
  const navigate = useNavigate()
  const [Check, setCheck] = useState<boolean>(false)

  return (
    <>
      <div className="xl:bg-[url(/LoginPage/LoginPageBg.webp)] md:bg-[url(/LoginPage/LoginPageIpadBg.webp)] w-full h-screen bg-no-repeat bg-cover bg-center bg-[url(/LoginPage/LoginPageMobileBg.webp)]">
        <div className="flex flex-col h-full w-auto items-center justify-center">
          <div className=" bg-[#9ddef9]/10 sm:w-2/3 md:w-5/6 lg:w-1/2 w-4/5 h-3/4 flex flex-col items-center justify-center rounded-3xl p-8 gap-y-6 mt-28">
            <p className=" text-white font-heading md:text-4xl text-3xl text-balance text-center">
              นโยบายข้อมูลส่วนบุคคล
            </p>
            <div className=" bg-white text-black w-full h-full overflow-y-scroll">
              <LoremIpsum p={10} />
            </div>
            <div className=" w-full">
              <Checkbox
                className="text-white font-normal select-none"
                onChange={(e: CheckboxChangeEvent) => {
                  setCheck(e.target.checked)
                }}
              >
                ยินยอมข้อตกลงนโยบายข้อมูลส่วนบุคคล
              </Checkbox>
            </div>
            <div className="w-full">
              <button
                disabled={!Check}
                onClick={() => {
                  navigate('/register')
                }}
                className="w-full bg-primary_yellow-100 font-body rounded-md py-2 text-primary-200 hover:bg-primary_yellow-300 hover:text-primary-300 duration-200 disabled:cursor-not-allowed disabled:rounded-[5px] disabled:bg-[#FFF0BF] disabled:px-4 disabled:py-2 disabled:text-[#A5A6A7]"
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsentForm
