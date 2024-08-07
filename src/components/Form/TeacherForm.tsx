import { Form, Typography } from 'antd'
import React from 'react'
import { ITeamTeacherForm } from '../../interfaces/user.interface'
import Input from './Input/Input'
import Select from './Input/Select'
import TextArea from './Input/TextArea'

const TeacherForm: React.FC = () => {
  const { Text } = Typography

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text className="font-normal text-text_color-100 text-lg">ข้อมูลอาจารย์</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm>
              label="คำนำหน้า"
              name="advisorPrefixTH"
              rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า' }]}
            >
              <Select
                options={[
                  { title: 'นาย', value: 'นาย' },
                  { title: 'นาง', value: 'นาง' },
                  { title: 'นางสาว', value: 'นางสาว' }
                ]}
                placeholder="คำนำหน้า"
              />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm>
              label="ชื่อจริง"
              name="advisorFirstnameTH"
              rules={[{ required: true, message: 'กรุณากรอกชื่อจริง' }]}
            >
              <Input title="ชื่อจริง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อจริง" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm> label="ชื่อกลาง (ถ้ามี)" name="advisorMiddlenameTH">
              <Input title="ชื่อกลาง(ภาษาไทย)" placeholder="กรุณากรอกชื่อกลาง (ถ้ามี)" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm>
              label="นามสกุล"
              name="advisorLastnameTH"
              rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}
            >
              <Input title="นามสกุล(ภาษาไทย)" required={true} placeholder="กรุณากรอกนามสกุล" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm>
              label="Prefix"
              name="advisorPrefixEN"
              rules={[{ required: true, message: 'Please select your Prefix' }]}
            >
              <Select
                options={[
                  { title: 'Mr.', value: 'Mr.' },
                  { title: 'Mrs.', value: 'Mrs.' },
                  { title: 'Ms.', value: 'Ms.' }
                ]}
                placeholder="Prefix"
              />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm>
              label="First Name"
              name="advisorFirstnameEN"
              rules={[{ required: true, message: 'Please enter your First name' }]}
            >
              <Input title="First Name" required={true} placeholder="First Name" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm> label="Middle Name (Optional)" name="advisorMiddlenameEN">
              <Input title="Middle Name" placeholder="Middle Name (Optional)" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm>
              label="Last Name"
              name="advisorLastnameEN"
              rules={[{ required: true, message: 'Please enter your Last name' }]}
            >
              <Input title="Last Name" required={true} placeholder="Last Name" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item<ITeamTeacherForm> label="อาหารที่แพ้" name="advisorFoodAllergy">
              <Input title="อาหารที่แพ้" placeholder="Food Allergy" />
            </Form.Item>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item<ITeamTeacherForm> label="ประเภทอาหาร (เช่น มังสวิรัต ฮาลาล)" name="advisorFoodPreference">
              <Input title="ประเภทอาหาร (เช่น มังสวิรัติ ฮาลาล)" placeholder="Food preference Ex. Vegan Halal" />
            </Form.Item>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item<ITeamTeacherForm> label="ยาที่แพ้" name="advisorDrugAllergy">
              <Input title="ยาที่แพ้" placeholder="Drug Allergy" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4">
            <Form.Item<ITeamTeacherForm> label="โรคประจำตัว และวิธีปฐมพยาบาลเบื้องต้น" name="advisorChronicDisease">
              <TextArea title="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น" placeholder="รายละเอียด..." />
            </Form.Item>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeacherForm
