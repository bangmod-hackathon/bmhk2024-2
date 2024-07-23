import { Typography } from 'antd'
import Input from './Input'

export default function ParticipantContacts() {
    const { Text } = Typography

    return (
        <div>
            <div className='bg-primary-200 p-3 rounded-t-md'>
                <Text>ข้อมูลติดต่อ</Text>
            </div>
            <div className='bg-[#0C384E] bg-opacity-50 rounded-b-md'>
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <div className='w-full lg:w-1/3 p-4'>
                        <Input title='Email' required={true} placeholder='นาย' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                        <Input title='เบอร์โทรศัพท์' required={true} placeholder='กรุณากรอกชื่อจริง' />
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/3 p-4'>
                        <Input title='ID LINE' required={true} placeholder='กรุณากรอกชื่อกลาง' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row flex-wrap'>
                    <div className='w-full md:w-1/2 p-4'>
                        <Input title='เบอร์โทรติดต่อฉุกเฉิน' required={true} placeholder='Mr.' />
                    </div>
                    <div className='w-full md:w-1/2 p-4'>
                        <Input title='ผู้ติดต่อฉุกเฉินเกี่ยวข้องเป็น' required={true} placeholder='Name' />
                    </div>
                </div>         
            </div>
        </div>
    )
}
