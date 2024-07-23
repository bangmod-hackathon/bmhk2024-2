import { Typography } from 'antd'
import Input from './Input'

export default function ParticipantContacts() {
  const { Text } = Typography

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text>ข้อมูลติดต่อ</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 lg:w-1/3">
            <Input title="Email" required={true} placeholder="นาย" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <Input title="เบอร์โทรศัพท์" required={true} placeholder="กรุณากรอกชื่อจริง" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/3">
            <Input title="ID LINE" required={true} placeholder="กรุณากรอกชื่อกลาง" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2">
            <Input title="เบอร์โทรติดต่อฉุกเฉิน" required={true} placeholder="Mr." />
          </div>
          <div className="w-full p-4 md:w-1/2">
            <Input title="ผู้ติดต่อฉุกเฉินเกี่ยวข้องเป็น" required={true} placeholder="Name" />
          </div>
        </div>
      </div>
    </div>
  )
}
