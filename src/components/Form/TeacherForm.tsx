import { Form, Typography } from 'antd'
import React from 'react'
import { ITeamTeacherForm } from '../../interfaces/user.interface'
import Input from './Input/Input'
import Select from './Input/Select'
import TextArea from './Input/TextArea'

const TeacherForm: React.FC = () => {
  const { Text } = Typography

  return (
    <>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text className="font-normal text-text_color-100 text-lg">ข้อมูลอาจารย์</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm> label="คำนำหน้า" name="advisorPrefixTH" rules={[{ required: true }]}>
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
              label="ชื่อจริง(ภาษาไทย)"
              name="advisorFirstnameTH"
              rules={[{ required: true }]}
            >
              <Input title="ชื่อจริง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อจริง" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm>
              label="ชื่อกลาง(ภาษาไทย)"
              name="advisorMiddlenameTH"
              rules={[{ required: true }]}
            >
              <Input title="ชื่อกลาง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อกลาง" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm> label="นามสกุล(ภาษาไทย)" name="advisorLastnameTH" rules={[{ required: true }]}>
              <Input title="นามสกุล(ภาษาไทย)" required={true} placeholder="กรุณากรอกนามสกุล" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm> label="Prefix" name="advisorPrefixEN" rules={[{ required: true }]}>
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
            <Form.Item<ITeamTeacherForm> label="First Name" name="advisorFirstnameEN" rules={[{ required: true }]}>
              <Input title="First Name" required={true} placeholder="Name" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm> label="Middle Name" name="advisorMiddlenameEN" rules={[{ required: true }]}>
              <Input title="Middle Name" required={true} placeholder="Middle Name" />
            </Form.Item>
          </div>
          <div className="w-full p-4 md:w-1/2 lg:w-1/4">
            <Form.Item<ITeamTeacherForm> label="Last Name" name="advisorLastnameEN" rules={[{ required: true }]}>
              <Input title="Last Name" required={true} placeholder="Last Name" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item<ITeamTeacherForm> label="อาหารที่แพ้" name="advisorFoodAllergy" rules={[{ required: true }]}>
              <Input title="อาหารที่แพ้" required={true} placeholder="Food Allergy" />
            </Form.Item>
          </div>
          <div className="w-full p-4 lg:w-1/3">
            <Form.Item<ITeamTeacherForm>
              label="ประเภทอาหาร (เช่น มังสวิรัต ฮาลาล)"
              name="advisorFoodPreference"
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
            <Form.Item<ITeamTeacherForm> label="ยาที่แพ้" name="advisorDrugAllergy" rules={[{ required: true }]}>
              <Input title="ยาที่แพ้" required={true} placeholder="Drug Allergy" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col flex-wrap md:flex-row">
          <div className="w-full p-4">
            <Form.Item<ITeamTeacherForm>
              label="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น"
              name="advisorChronicDisease"
              rules={[{ required: true }]}
            >
              <TextArea title="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น" required={true} placeholder="รายละเอียด..." />
            </Form.Item>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeacherForm
