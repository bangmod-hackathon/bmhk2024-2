import { Typography } from 'antd'
import Input from './Input/Input'
import TextArea from './Input/TextArea'
import Select from './Input/Select'

export default function TeacherForm() {
  const { Text } = Typography

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text>ข้อมูลอาจารย์</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Select
              options={[
                { title: 'นาย', value: 'นาย' },
                { title: 'นางสาว', value: 'นางสาว' }
              ]}
              title="คำนำหน้า"
              required={true}
            />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="ชื่อจริง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อจริง" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="ชื่อกลาง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อกลาง" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="นามสกุล(ภาษาไทย)" required={true} placeholder="กรุณากรอกนามสกุล" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Select
              options={[
                { title: 'Mr.', value: 'Mr.' },
                { title: 'Ms.', value: 'Ms.' }
              ]}
              title="คำนำหน้า"
              required={true}
            />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="First Name" required={true} placeholder="Name" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="Middle Name" required={true} placeholder="Middle Name" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="Last Name" required={true} placeholder="Last Name" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 lg:w-1/3">
            <Input title="อาหารที่แพ้" required={true} placeholder="Food Allergy" />
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <Input
              title="ประเภทอาหาร (เช่น มังสวิรัต ฮาลาล)"
              required={true}
              placeholder="Food preference Ex. Vegan Halal"
            />
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <Input title="ยาที่แพ้" required={true} placeholder="Drug Allergy" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4">
            <TextArea title="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น" required={true} placeholder="รายละเอียด..." />
          </div>
        </div>
      </div>
    </div>
  )
}
