import { Typography } from 'antd'
import Input from './Input'

export default function TeamForm() {
    const { Text } = Typography

    return (
        <div>
            <div className='bg-primary-200 p-3 rounded-t-md'>
                <Text>ข้อมูลทีม</Text>
            </div>
            <div className='bg-[#0C384E] bg-opacity-50 rounded-b-md'>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full p-4'>
                        <Input title='ชื่ิอทีม' required={true} placeholder='กรอกชื่อทีม' />
                    </div>
                    <div className='w-full p-4'>
                        <Input title='ชื่อโรงเรียน' required={true} placeholder='กรอกชื่อโรงเรียน' />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row'>
                    <div className='w-full p-4'>
                        <Input title='คำคมประจำทีม' required={true} placeholder='กรอกคำคมของทีม' />
                    </div>
                    <div className='w-full p-4'>
                        <Input title='จำนวนสมาชิก' required={true} placeholder='จำนวน' />
                    </div>
                </div>
            </div>
        </div>
    )
}
