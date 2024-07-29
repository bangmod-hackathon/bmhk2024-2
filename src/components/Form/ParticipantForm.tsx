import { Typography } from 'antd'
import Input from './Input/Input'
import Select from './Input/Select'
import TextArea from './Input/TextArea'

export default function ParticipantForm() {
  const { Text } = Typography

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text>รายละเอียดสมาชิกคนที่ 1</Text>
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
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="ชื่อเล่น" required={true} placeholder="ชื่อเล่น" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Select
              options={[
                { title: 'ประกาศนียบัตรวิชาชีพ ปีที่ 1', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 1' },
                { title: 'ประกาศนียบัตรวิชาชีพ ปีที่ 2.', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 2' },
                { title: 'ประกาศนียบัตรวิชาชีพ ปีที่ 3', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 3' },
                { title: 'มัธยมศึกษาปีที่ 4', value: 'มัธยมศึกษาปีที่ 4' },
                { title: 'มัธยมศึกษาปีที่ 5', value: 'มัธยมศึกษาปีที่ 5' },
                { title: 'มัธยมศึกษาปีที่ 6', value: 'มัธยมศึกษาปีที่ 6' }
              ]}
              title="คำนำหน้า"
              required={true}
            />
          </div>
          <div className="w-full p-4 lg:w-1/4">
            <Input title="ประเภทอาหาร(เช่น มังสวิรัต ฮาลาล)" required={true} placeholder="มังสวิรัต" />
          </div>
          <div className="w-full p-4 lg:w-1/4">
            <Input title="อาหารที่แพ้" required={true} placeholder="อาหารที่แพ้" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4">
            <Input title="ยาที่แพ้" required={true} placeholder="ยาที่แพ้" />
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
