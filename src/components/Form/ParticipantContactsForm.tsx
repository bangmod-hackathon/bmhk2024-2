import { Form, Typography } from 'antd'
import { IParticipant } from '../../interfaces/user.interface'
import Input from './Input/Input'

export default function ParticipantContactsForm() {
  const { Text } = Typography
  return (
    <div>
      <div>
        <div className="rounded-t-md bg-primary-200 p-3">
          <Text className="font-normal text-text_color-100 text-lg">ข้อมูลติดต่อ</Text>
        </div>
        <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 lg:w-1/3">
              <Form.Item<IParticipant>
                label="email"
                name="memberContactEmail"
                rules={[
                  { required: true, message: 'กรุณากรอกอีเมล์' },
                  { type: 'email', message: 'กรุณากรอกอีเมล์ให้ถูกต้อง' }
                ]}
              >
                <Input title="Email" required={true} placeholder="example@example.com" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <Form.Item<IParticipant>
                label="เบอร์โทรศัพท์"
                name="memberContactPhone"
                rules={[
                  { required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' },
                  { pattern: /^[0-9]{10}$/, message: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง' }
                ]}
              >
                <Input title="เบอร์โทรศัพท์" required={true} placeholder="0812345678" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2 lg:w-1/3">
              <Form.Item<IParticipant>
                label="ID LINE"
                name="memberContactLine"
                rules={[{ required: true, message: 'กรุณากรอกไอดีไลน์' }]}
              >
                <Input title="ID LINE" required={true} placeholder="กรุณากรอกไอดีไลน์" />
              </Form.Item>
            </div>
          </div>
          <div className="flex flex-col flex-wrap md:flex-row">
            <div className="w-full p-4 md:w-1/2">
              <Form.Item<IParticipant>
                label="เบอร์โทรติดต่อฉุกเฉิน"
                name="memberContactEmergencyPhone"
                rules={[
                  { required: true, message: 'กรุณากรอกเบอร์โทรศัพท์' },
                  { pattern: /^[0-9]{10}$/, message: 'กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง' }
                ]}
              >
                <Input title="เบอร์โทรติดต่อฉุกเฉิน" required={true} placeholder="0812345678" />
              </Form.Item>
            </div>
            <div className="w-full p-4 md:w-1/2">
              <Form.Item<IParticipant>
                label="ผู้ติดต่อฉุกเฉินเกี่ยวข้องเป็น"
                name="memberContactEmergencyRelation"
                rules={[{ required: true, message: 'กรุณากรอกความสัมพันธ์' }]}
              >
                <Input title="ผู้ติดต่อฉุกเฉินเกี่ยวข้องเป็น" required={true} placeholder="Ex. บิดา มารดา" />
              </Form.Item>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
