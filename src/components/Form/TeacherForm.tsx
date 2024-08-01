import { Typography } from 'antd'
import Input from './Input/Input'
import TextArea from './Input/TextArea'
import Select from './Input/Select'
import { Form } from 'antd'
import { customizeRequiredMark } from '../../lib/antdForm'

type FieldType = {
  prefixTH: string;
  prefixEN: string;
  firstNameTH: string;
  middleNameTH: string;
  lastNameTH: string;
  firstNameEN: string;
  middleNameEN: string;
  lastNameEN: string;
  foodPreference: string;
  foodAllergy: string;
  drugAllergy: string;
  medicalCondition: string;
}

export default function TeacherForm() {
  const { Text } = Typography
  const [form] = Form.useForm()

  return (
    <Form form={form} layout="vertical" requiredMark={customizeRequiredMark} scrollToFirstError>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text>ข้อมูลอาจารย์</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item 
              <FieldType>
              label="คำนำหน้า"
              name="prefixTH"
              rules={[{ required: true }]}
            >
              <Select
                options={[
                  { title: 'นาย', value: 'นาย' },
                  { title: 'นางสาว', value: 'นางสาว' }
                ]}
                title="คำนำหน้า"
              />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item 
              <FieldType>
              label="คำนำหน้า"
              name="firstNameTH"
              rules={[{ required: true }]}
            >
              <Input title="ชื่อจริง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อจริง" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item
              <FieldType>
              label="ชื่อกลาง(ภาษาไทย)"
              name="middleNameTH"
              rules={[{ required: true }]}
            >
              <Input title="ชื่อกลาง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อกลาง" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item 
              <FieldType>
              label="นามสกุล(ภาษาไทย)"
              name="lastNameTH"
              rules={[{ required: true }]}
            >
              <Input title="นามสกุล(ภาษาไทย)" required={true} placeholder="กรุณากรอกนามสกุล" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div
            className="w-full p-4 md:w-1/2 lg:w-1/4"
          >
            <Form.Item 
              <FieldType>
              label="Prefix"
              name="prefixEN"
              rules={[{ required: true }]}
            >
              <Select
                options={[
                  { title: 'Mr.', value: 'Mr.' },
                  { title: 'Ms.', value: 'Ms.' }
                ]}
                title="คำนำหน้า"
              />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item 
              <FieldType>
              label="First Name"
              name="firstNameEN"
              rules={[{ required: true }]}
            >
              <Input title="First Name" required={true} placeholder="Name" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item
              <FieldType>
              label="Middle Name"
              name="middleNameEN"
              rules={[{ required: true }]}
            >
              <Input title="Middle Name" required={true} placeholder="Middle Name" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item 
              <FieldType>
              label="Last Name"
              name="lastNameEN"
              rules={[{ required: true }]}
            >
              <Input title="Last Name" required={true} placeholder="Last Name" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">                                          
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item 
              <FieldType>
              label="อาหารที่แพ้"
              name="foodAllergy"
              rules={[{ required: true }]}
            >
              <Input title="อาหารที่แพ้" required={true} placeholder="Food Allergy" />
            </Form.Item>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item 
              <FieldType>
              label="ประเภทอาหาร (เช่น มังสวิรัต ฮาลาล)"
              name="foodPreference"
              rules={[{ required: true }]}
            >
              <Input
                title="ประเภทอาหาร (เช่น มังสวิรัต ฮาลาล)"
                required={true}
                placeholder="Food preference Ex. Vegan Halal"
              />
            </Form.Item>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item 
              <FieldType>
              label="ยาที่แพ้"
              name="drugAllergy"
              rules={[{ required: true }]}
            >
              <Input title="ยาที่แพ้" required={true} placeholder="Drug Allergy" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4">
            <Form.Item 
              <FieldType>
              label="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น"
              name="medicalCondition"
              rules={[{ required: true }]}
            >
              <TextArea title="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น" required={true} placeholder="รายละเอียด..." />
            </Form.Item >
          </div>
        </div>
      </div>
    </Form>
  )
}
