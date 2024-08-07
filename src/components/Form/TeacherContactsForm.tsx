import { Form, Typography } from 'antd'
import { ITeamTeacherForm } from '../../interfaces/user.interface'
import Input from './Input/Input'

export default function TeacherContactsForm() {
  const { Text } = Typography

  return (
    <>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">ข้อมูลติดต่อ</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 lg:w-1/3">
              <Form.Item<ITeamTeacherForm>
                label="Email"
                name="advisorContactEmail"
                rules={[
                  { required: true, message: 'กรุณากรอกอีเมล์' },
                  { type: 'email', message: 'กรุณากรอกอีเมล์ให้ถูกต้อง' }
                ]}
              >
                <Input title="Email" required={true} placeholder="example@example.com" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <Form.Item<ITeamTeacherForm>
                label="เบอร์โทรศัพท์"
                name="advisorContactPhone"
                rules={[
                  { required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' },
                  { pattern: /^[0-9]{10}$/, message: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง' }
                ]}
              >
                <Input title="เบอร์โทรศัพท์" maxLength={10} required={true} placeholder="0812345678" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <Form.Item<ITeamTeacherForm>
                label="LINE ID"
                name="advisorContactLine"
                rules={[{ required: true, message: 'กรุณากรอกไอดีไลน์' }]}
              >
                <Input title="ID LINE" required={true} placeholder="กรุณากรอกไอดีไลน์" />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
