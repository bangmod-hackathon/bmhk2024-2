import { Spin } from 'antd'
import ConfirmModal from '../Modal/ComfirmModal'
import { LoadingOutlined } from '@ant-design/icons'

interface Props {
  page: number
  pageMaxSize: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  handlePrevious: () => void
  handleNext: () => void
  handleLastPage: () => Promise<boolean>
  handleSubmit: () => void
  loading: boolean
}
const PageChanger = (props: Props) => {
  return (
    <div className="flex flex-row gap-x-4 w-full justify-center pt-6 pb-10">
      <button
        className="text-secondary_blue-100 bg-transparent border disabled:border-secondary_blue-100/50 border-secondary_blue-100 font-normal text-lg py-4 px-8 rounded-[8px]"
        onClick={props.handlePrevious}
        disabled={props.loading}
      >
        ย้อนกลับ
      </button>
      {props.page === props.pageMaxSize ? (
        <ConfirmModal
          onSubmit={() => {
            return props.handleLastPage()
          }}
          onConfirm={() => {
            props.handleSubmit()
          }}
        />
      ) : (
        <button
          className="text-bg-200 bg-secondary_blue-100 disabled:bg-secondary_blue-100 border font-normal text-lg py-4 px-8 rounded-[8px] disabled:cursor-wait"
          onClick={props.handleNext}
          disabled={props.loading}
        >
          {props.loading ? <Spin indicator={<LoadingOutlined spin className="text-white" />} size="large" /> : 'ถัดไป'}
        </button>
      )}
    </div>
  )
}
export default PageChanger
