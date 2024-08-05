import { Form, FormInstance, Typography } from 'antd'
import { customizeRequiredMark } from '../../lib/antdForm'
import Input from './Input/Input'
import { ITeamTeacherForm } from '../../interfaces/user.interface'

interface Props {
  form: FormInstance<ITeamTeacherForm>
}

export default function TeacherContactsForm({ form }: Props) {
  const { Text } = Typography

  return (
    <Form form={form} layout="vertical" requiredMark={customizeRequiredMark} scrollToFirstError>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">ข้อมูลติดต่อ</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 lg:w-1/3">
              <Form.Item<ITeamTeacherForm> label="Email" name="advisorContactEmail" rules={[{ required: true }]}>
                <Input title="Email" required={true} placeholder="example@example.com" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <Form.Item<ITeamTeacherForm> label="เบอร์โทรศัพท์" name="advisorContactPhone" rules={[{ required: true }]}>
                <Input title="เบอร์โทรศัพท์" required={true} placeholder="0812345678" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <Form.Item<ITeamTeacherForm> label="ID LINE" name="advisorContactLine" rules={[{ required: true }]}>
                <Input title="ID LINE" required={true} placeholder="id line" />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </Form>
  )
}
