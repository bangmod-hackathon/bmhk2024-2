import { Form, Typography } from 'antd'
import { IParticipant } from '../../interfaces/user.interface'
import Input from './Input/Input'
import Select from './Input/Select'
import TextArea from './Input/TextArea'

interface Props {
  nth: number
}

export default function ParticipantForm(props: Props) {
  const { Text } = Typography

  return (
    <div>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">รายละเอียดสมาชิกคนที่ {props.nth}</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant>
                label="คำนำหน้า"
                name="memberPrefixTH"
                rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า' }]}
              >
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
              <Form.Item<IParticipant>
                label="ชื่อจริง"
                name="memberFirstnameTH"
                rules={[{ required: true, message: 'กรุณากรอกชื่อจริง' }]}
              >
                <Input title="ชื่อจริง(ภาษาไทย)" required={true} placeholder="กรุณากรอกชื่อจริง" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant> label="ชื่อกลาง (ถ้ามี)" name="memberMiddlenameTH">
                <Input title="ชื่อกลาง(ภาษาไทย)" placeholder="กรุณากรอกชื่อกลาง (ถ้ามี)" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant>
                label="นามสกุล"
                name="memberLastnameTH"
                rules={[{ required: true, message: 'กรุณากรอกนามสกุล' }]}
              >
                <Input title="นามสกุล(ภาษาไทย)" required={true} placeholder="กรุณากรอกนามสกุล" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant>
                label="Prefix"
                name="memberPrefixEN"
                rules={[{ required: true, message: 'Please select your Prefix' }]}
              >
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
              <Form.Item<IParticipant>
                label="First Name"
                name="memberFirstnameEN"
                rules={[{ required: true, message: 'Please enter your First name' }]}
              >
                <Input title="First name" required={true} placeholder="First Name" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant> label="Middle Name (Optional)" name="memberMiddlenameEN">
                <Input title="Middle name" placeholder="Middle Name (Optional)" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant>
                label="Last Name"
                name="memberLastnameEN"
                rules={[{ required: true, message: 'Please enter your Last name' }]}
              >
                <Input title="Last Name" required={true} placeholder="Last Name" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant>
                label="ชื่อเล่น"
                name="memberNickname"
                rules={[{ required: true, message: 'กรุณากรอกชื่อเล่น' }]}
              >
                <Input title="ชื่อเล่น" required={true} placeholder="ชื่อเล่น" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/4">
              <Form.Item<IParticipant>
                label="ระดับชั้น"
                name="memberGradeLevel"
                rules={[{ required: true, message: 'กรุณาเลือกระดับชั้น' }]}
              >
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
              <Form.Item<IParticipant> label="ประเภทอาหาร (เช่น มังสวิรัติ ฮาลาล)" name="memberFoodPreference">
                <Input title="ประเภทอาหาร(เช่น มังสวิรัต ฮาลาล)" placeholder="มังสวิรัติ" />
              </Form.Item>
            </div>
            <div className="w-full p-4 lg:w-1/4">
              <Form.Item<IParticipant> label="อาหารที่แพ้" name="memberFoodAllergy">
                <Input title="อาหารที่แพ้" placeholder="อาหารที่แพ้" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4">
              <Form.Item<IParticipant> label="ยาที่แพ้" name="memberDrugAllergy">
                <Input title="ยาที่แพ้" placeholder="ยาที่แพ้" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4">
              <Form.Item<IParticipant> label="โรคประจำตัว และวิธีปฐมพยาบาลเบื้องต้น" name="memberChronicDisease">
                <TextArea title="โรคประจำตัว และวิธีประฐมพยาบาลเบื้องต้น" placeholder="รายละเอียด..." rows={3} />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
