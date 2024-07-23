import { Input as AntDInput, Typography } from 'antd'
import Input from './Input'

export default function ParticipantForm() {
  const { Text } = Typography
  const { TextArea } = AntDInput

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text>รายละเอียดสมาชิกคนที่ 1</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input title="คำนำหน้า" required={true} placeholder="นาย" />
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
            <Input title="Prefix" required={true} placeholder="Mr." />
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
            <Input title="ชื่อเล่น" required={true} placeholder="Food Allergy" />
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Input
              title="ระดับชั้น (เช่น มังสวิรัต ฮาลาล)"
              required={true}
              placeholder="Food preference Ex. Vegan Halal"
            />
          </div>
          <div className="w-full p-4 lg:w-1/4">
            <Input title="ประเภทอาหาร(เช่น มังสวิรัต ฮาลาล)" required={true} placeholder="Drug Allergy" />
          </div>
          <div className="w-full p-4 lg:w-1/4">
            <Input title="อาหารที่แพ้" required={true} placeholder="Drug Allergy" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4">
            <Input title="ยาที่แพ้" required={true} placeholder="Drug Allergy" />
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4">
            <div className="flex flex-col">
              <label className="font-body text-text_color-100">
                โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น <span className="text-primary_yellow-100">*</span>
              </label>
              <TextArea className="rounded-[5px] bg-white px-3 py-2 text-primary_yellow-100 focus:text-primary-100 focus:shadow-[0_4px_6px_0px_rgba(138,213,244,0.25)] focus:outline-none focus:ring-2 focus:ring-[#8AD5F4]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
