import { Typography } from 'antd'
import Input from './Input/Input'
import Select from './Input/Select'
import TextArea from './Input/TextArea'
import { Form } from 'antd'
import { customizeRequiredMark } from '../../lib/antdForm'

type FieldType = {
  prefixTH: string
  prefixEN: string
  firstNameTH: string
  middleNameTH: string
  lastNameTH: string
  firstNameEN: string
  middleNameEN: string
  lastNameEN: string
  nickname: string
  education: string
  foodPreference: string
  foodAllergy: string
  drugAllergy: string
  medicalCondition: string
}

export default function ParticipantForm() {
  const { Text } = Typography
  const [form] = Form.useForm()

  return (
    <Form form={form} layout="vertical" requiredMark={customizeRequiredMark} scrollToFirstError>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-white text-lg">รายละเอียดสมาชิกคนที่ 1</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="คำนำหน้า" name="prefixTH" rules={[{ required: true }]}>
                <Select
                  options={[
                    { title: 'นาย', value: 'นาย' },
                    { title: 'นางสาว', value: 'นางสาว' }
                  ]}
                  placeholder="คำนำหน้า"
                />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="ชื่อจริง(ภาษาไทย)" name="firstNameTH" rules={[{ required: true }]}>
                <Input title="ชื่อจริง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อจริง" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="ชื่อกลาง(ภาษาไทย)" name="middleNameTH" rules={[{ required: true }]}>
                <Input title="ชื่อกลาง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อกลาง" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="นามสกุล(ภาษาไทย)" name="lastNameTH" rules={[{ required: true }]}>
                <Input title="นามสกุล(ภาษาไทย)" required={true} placeholder="กรุณากรอกนามสกุล" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="Prefix" name="prefixEN" rules={[{ required: true }]}>
                <Select
                  options={[
                    { title: 'Mr.', value: 'Mr.' },
                    { title: 'Ms.', value: 'Ms.' }
                  ]}
                  placeholder="Prefix"
                />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="First Name" name="firstNameEN" rules={[{ required: true }]}>
                <Input title="First name" required={true} placeholder="Name" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="Middle Name" name="middleNameEN" rules={[{ required: true }]}>
                <Input title="Middle name" required={true} placeholder="Middle Name" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="Last Name" name="lastNameEN" rules={[{ required: true }]}>
                <Input title="Last Name" required={true} placeholder="Last Name" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="ชื่อเล่น" name="nickname" rules={[{ required: true }]}>
                <Input title="ชื่อเล่น" required={true} placeholder="ชื่อเล่น" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="ระดับการชั้น" name="education" rules={[{ required: true }]}>
                <Select
                  options={[
                    { title: 'ประกาศนียบัตรวิชาชีพ ปีที่ 1', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 1' },
                    { title: 'ประกาศนียบัตรวิชาชีพ ปีที่ 2.', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 2' },
                    { title: 'ประกาศนียบัตรวิชาชีพ ปีที่ 3', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 3' },
                    { title: 'มัธยมศึกษาปีที่ 4', value: 'มัธยมศึกษาปีที่ 4' },
                    { title: 'มัธยมศึกษาปีที่ 5', value: 'มัธยมศึกษาปีที่ 5' },
                    { title: 'มัธยมศึกษาปีที่ 6', value: 'มัธยมศึกษาปีที่ 6' }
                  ]}
                  placeholder="ระดับชั้น"
                />
              </Form.Item>
            </div>
            <div className="w-full p-4 lg:w-1/4">
              <Form.Item<FieldType>
                label="ประเภทอาหาร(เช่น มังสวิรัต ฮาลาล)"
                name="foodPreference"
                rules={[{ required: true }]}
              >
                <Input title="ประเภทอาหาร(เช่น มังสวิรัต ฮาลาล)" required={true} placeholder="มังสวิรัต" />
              </Form.Item>
            </div>
            <div className="w-full p-4 lg:w-1/4">
              <Form.Item<FieldType> label="อาหารที่แพ้" name="foodAllergy" rules={[{ required: true }]}>
                <Input title="อาหารที่แพ้" required={true} placeholder="อาหารที่แพ้" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4">
              <Form.Item<FieldType> label="ยาที่แพ้" name="drugAllergy" rules={[{ required: true }]}>
                <Input title="ยาที่แพ้" required={true} placeholder="ยาที่แพ้" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4">
              <Form.Item<FieldType>
                label="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น"
                name="medicalCondition"
                rules={[{ required: true }]}
              >
                <TextArea
                  title="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น"
                  required={true}
                  placeholder="รายละเอียด..."
                  rows={3}
                />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  )
}
