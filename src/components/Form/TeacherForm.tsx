import { Typography } from 'antd'
import Input from './Input'
import { Input as AntDInput } from 'antd'

export default function TeamForm() {
    const { Text } = Typography
    const { TextArea } = AntDInput

    return (
        <div>
            <div className='bg-primary-200 p-3 rounded-t-md'>
                <Text>ข้อมูลอาจารย์</Text>
            </div>
            <div className='bg-[#0C384E] bg-opacity-50 rounded-b-md'>
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='คำนำหน้า' required={true} placeholder='นาย' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='ชื่อจริง(ภาษาไทย)' required={true} placeholder='กรุณากรอกชื่อจริง' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='ชื่อกลาง(ภาษาไทย)' required={true} placeholder='กรุณากรอกชื่อกลาง' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='นามสกุล(ภาษาไทย)' required={true} placeholder='กรุณากรอกนามสกุล' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='Prefix' required={true} placeholder='Mr.' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='First Name' required={true} placeholder='Name' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='Middle Name' required={true} placeholder='Middle Name' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4 p-4'>
                        <Input title='Last Name' required={true} placeholder='Last Name' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <div className='w-full lg:w-1/3 p-4'>
                        <Input title='อาหารที่แพ้' required={true} placeholder='Food Allergy' />
                    </div>
                    <div className='w-full lg:w-1/3 p-4'>
                        <Input title='ประเภทอาหาร (เช่น มังสวิรัต ฮาลาล)' required={true} placeholder='Food preference Ex. Vegan Halal' />
                    </div>
                    <div className='w-full lg:w-1/3 p-4'>
                        <Input title='ยาที่แพ้' required={true} placeholder='Drug Allergy' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <div className='w-full p-4'>
                        <div className="flex flex-col">
                            <label className="font-body text-text_color-100">
                                โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น <span className="text-primary_yellow-100">*</span>
                            </label>
                            <TextArea
                                className="rounded-[5px] bg-white px-3 py-2 text-primary_yellow-100 focus:text-primary-100 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
