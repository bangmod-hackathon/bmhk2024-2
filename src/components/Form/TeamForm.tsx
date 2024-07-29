import { Typography } from 'antd'
import Input from './Input/Input'
import Select from './Input/Select'

export default function TeamForm() {
  const { Text } = Typography

  return (
    <div>
      <div className="rounded-t-md bg-primary-200 p-3">
        <Text>ข้อมูลทีม</Text>
      </div>
      <div className="rounded-b-md bg-[#0C384E] bg-opacity-50">
        <div className="flex flex-col md:flex-row">
          <div className="w-full p-4">
            <Input title="ชื่ิอทีม" required={true} placeholder="กรอกชื่อทีม" />
          </div>
          <div className="w-full p-4">
            <Input title="ชื่อโรงเรียน" required={true} placeholder="กรอกชื่อโรงเรียน" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-full p-4">
            <Input title="คำคมประจำทีม" required={true} placeholder="กรอกคำคมของทีม" />
          </div>
          <div className="w-full p-4">
            <Select
              options={[
                { title: '1', value: 1 },
                { title: '2', value: 2 },
                { title: '3', value: 3 }
              ]}
              title="จำนวนสมาชิก"
              required={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
