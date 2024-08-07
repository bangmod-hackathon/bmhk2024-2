import { Form, Typography } from 'antd'
import { ITeamTeacherForm } from '../../interfaces/user.interface'
import Input from './Input/Input'
import Select from './Input/Select'
import { axiosInstance } from '../../utils/axios'

interface Props {
  setMembers: React.Dispatch<React.SetStateAction<number>>
  teamName: string
  setTeamName: React.Dispatch<React.SetStateAction<string>>
}

export default function TeamForm(props: Props) {
  const { Text } = Typography

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text className="font-normal text-text_color-100 text-lg">ข้อมูลทีม</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col py-4 md:flex-row gap-y-2">
          <div className="w-full px-4">
            <Form.Item<ITeamTeacherForm>
              label="ชื่ิอทีม"
              name={'teamName'}
              rules={[
                {
                  required: true,
                  message: 'กรุณากรอกชื่อทีม'
                },
                {
                  async validator(_, value) {
                    const isUnique = (
                      await axiosInstance.post('/api/user/check-team-unique', {
                        teamName: value
                      })
                    ).data
                    if (isUnique) {
                      return Promise.resolve()
                    } else {
                      return Promise.reject(new Error('ชื่อทีมถูกใช้ไปแล้ว'))
                    }
                  }
                }
              ]}
            >
              <Input
                placeholder="กรอกชื่อทีม"
                onChange={(e) => {
                  props.setTeamName(e.target.value)
                }}
              />
            </Form.Item>
          </div>
          <div className="w-full px-4">
            <Form.Item<ITeamTeacherForm>
              label="ชื่อสถานศึกษา"
              name={'school'}
              rules={[
                {
                  required: true,
                  message: 'กรุณากรอกชื่อสถานศึกษา'
                }
              ]}
            >
              <Input placeholder="กรอกชื่อสถานศึกษา" />
            </Form.Item>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full px-4">
            <Form.Item<ITeamTeacherForm>
              label="คำคมประจำทีม"
              name={'quote'}
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
            <Form.Item<ITeamTeacherForm>
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
    </div>
  )
}
