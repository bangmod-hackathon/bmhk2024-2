import { Checkbox, ConfigProvider } from 'antd'
import LoremIpsum from 'react-lorem-ipsum'

const ConsentForm = () => {
  return (
    <>
      <div className="sm:bg-[url(/LoginPage/LoginPageBg.svg)] w-full h-screen bg-cover bg-[url(/LoginPage/LoginPageMobileBg.svg)]">
        <div className="flex flex-col h-full w-auto items-center justify-center">
          <div className=" bg-[#9ddef9]/10 sm:w-2/3 md:w-5/6 lg:w-1/2 w-4/5 h-3/4 flex flex-col items-center justify-center rounded-3xl p-8 gap-y-6 mt-28">
            <p className=" text-white font-heading md:text-4xl text-3xl text-balance text-center">
              นโยบายข้อมูลส่วนบุคคล
            </p>
            <div className=" bg-white text-black w-full h-full overflow-y-scroll">
              <LoremIpsum p={10} />
            </div>
            <div className=" w-full">
              <ConfigProvider
                theme={{
                  token: {
                    colorPrimary: '#8ad5f4'
                  }
                }}
              >
                <Checkbox className="">ยินยอมข้อตกลงนโยบายข้อมูลส่วนบุคคล</Checkbox>
              </ConfigProvider>
            </div>
            <div className=" w-full">
              <button className=" w-full bg-primary_yellow-100 font-body rounded-md py-2 text-primary-200 hover:bg-primary_yellow-300 hover:text-primary-300 duration-200">
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
