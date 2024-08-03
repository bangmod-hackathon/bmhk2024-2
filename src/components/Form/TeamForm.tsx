import { Form, Typography } from 'antd'
import Input from './Input/Input'
import Select from './Input/Select'
import { customizeRequiredMark } from '../../lib/antdForm'

interface Props {
  setMembers: React.Dispatch<React.SetStateAction<number>>
}

export default function TeamForm(props: Props) {
  const { Text } = Typography
  const [form] = Form.useForm()

  return (
    <Form form={form} layout="vertical" requiredMark={customizeRequiredMark} scrollToFirstError>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text className="font-normal text-white text-lg">ข้อมูลทีม</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col py-4 md:flex-row gap-y-2">
          <div className="w-full px-4">
            <Form.Item
              label="ชื่ิอทีม"
              name={'teamName'}
              rules={[
                {
                  required: true,
                  message: 'กรุณากรอกชื่อทีม'
                }
              ]}
            >
              <Input placeholder="กรอกชื่อทีม" />
            </Form.Item>
          </div>
          <div className="w-full px-4">
            <Form.Item
              label="ชื่อโรงเรียน"
              name={'school'}
              rules={[
                {
                  required: true,
                  message: 'กรุณากรอกชื่อโรงเรียน'
                }
              ]}
            >
              <Input placeholder="กรอกชื่อโรงเรียน" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full px-4">
            <Form.Item
              label="คำคมประจำทีม"
              name={'qoute'}
              rules={[
                {
                  required: true,
                  message: 'กรุณากรอกคำคมประจำทีม'
                }
              ]}
            >
              <Input placeholder="กรอกคำคมของทีม" />
            </Form.Item>
          </div>
          <div className="w-full px-4">
            <Form.Item
              label="จำนวนสมาชิก"
              name={'member'}
              rules={[
                {
                  required: true,
                  message: 'กรุณาเลือกจำนวนสมาชิก'
                }
              ]}
            >
              <Select
                options={[
                  { title: '2', value: '2' },
                  { title: '3', value: '3' }
                ]}
                placeholder="จำนวนสมาชิก"
                onChange={(value) => {
                  props.setMembers(Number(value))
                }}
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  )
}
