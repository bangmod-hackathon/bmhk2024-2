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

interface Props {
  nth: number
}

export default function ParticipantForm(props: Props) {
  const { Text } = Typography
  const [form] = Form.useForm()

  return (
    <Form form={form} layout="vertical" requiredMark={customizeRequiredMark} scrollToFirstError>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">รายละเอียดสมาชิกคนที่ {props.nth}</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="คำนำหน้า" name="prefixTH" rules={[{ required: true }]}>
                <Select
                  options={[
                    { title: 'เด็กชาย', value: 'เด็กชาย' },
                    { title: 'เด็กหญิง', value: 'เด็กหญิง' },
                    { title: 'นาย', value: 'นาย' },
                    { title: 'นาง', value: 'นาง' },
                    { title: 'นางสาว', value: 'นางสาว' }
                  ]}
                  placeholder="คำนำหน้า"
                />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="ชื่อจริง" name="firstNameTH" rules={[{ required: true }]}>
                <Input title="ชื่อจริง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อจริง" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="ชื่อกลาง (ถ้ามี)" name="middleNameTH">
                <Input title="ชื่อกลาง(ภาษาไทย)" placeholder="กรุณากรอกชื่อกลาง (ถ้ามี)" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="นามสกุล" name="lastNameTH" rules={[{ required: true }]}>
                <Input title="นามสกุล(ภาษาไทย)" required={true} placeholder="กรุณากรอกนามสกุล" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<FieldType> label="Prefix" name="prefixEN" rules={[{ required: true }]}>
                <Select
                  options={[
                    { title: 'Master', value: 'Master' },
                    { title: 'Miss', value: 'Miss' },
                    { title: 'Mr.', value: 'Mr.' },
                    { title: 'Mrs.', value: 'Mrs.' },
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
              <Form.Item<FieldType> label="Middle Name (Optional)" name="middleNameEN">
                <Input title="Middle name" placeholder="Middle Name (Optional)" />
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
              <Form.Item<FieldType> label="ระดับชั้น" name="education" rules={[{ required: true }]}>
                <Select
                  options={[
                    { title: 'มัธยมศึกษาปีที่ 4', value: 'มัธยมศึกษาปีที่ 4' },
                    { title: 'มัธยมศึกษาปีที่ 5', value: 'มัธยมศึกษาปีที่ 5' },
                    { title: 'มัธยมศึกษาปีที่ 6', value: 'มัธยมศึกษาปีที่ 6' },
                    { title: 'ประกาศนียบัตรวิชาชีพ ชั้นปีที่ 1', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 1' },
                    { title: 'ประกาศนียบัตรวิชาชีพ ชั้นปีที่ 2', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 2' },
                    { title: 'ประกาศนียบัตรวิชาชีพ ชั้นปีที่ 3', value: 'ประกาศนียบัตรวิชาชีพ ปีที่ 3' }
                  ]}
                  placeholder="ระดับชั้น"
                />
              </Form.Item>
            </div>
            <div className="w-full p-4 lg:w-1/4">
              <Form.Item<FieldType> label="ประเภทอาหาร (เช่น มังสวิรัติ ฮาลาล)" name="foodPreference">
                <Input title="ประเภทอาหาร (เช่น มังสวิรัติ ฮาลาล)" placeholder="มังสวิรัติ" />
              </Form.Item>
            </div>
            <div className="w-full p-4 lg:w-1/4">
              <Form.Item<FieldType> label="อาหารที่แพ้" name="foodAllergy">
                <Input title="อาหารที่แพ้" placeholder="อาหารที่แพ้" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4">
              <Form.Item<FieldType> label="ยาที่แพ้" name="drugAllergy">
                <Input title="ยาที่แพ้" placeholder="ยาที่แพ้" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4">
              <Form.Item<FieldType> label="โรคประจำตัวและวิธีปฐมพยาบาลเบื้องต้น" name="medicalCondition">
                <TextArea title="โรคประจำตัวและวิธีปฐมพยาบาลเบื้องต้น" placeholder="รายละเอียด..." rows={3} />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  )
}
