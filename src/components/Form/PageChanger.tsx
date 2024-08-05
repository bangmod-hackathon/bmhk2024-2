import ConfirmModal from '../Modal/ComfirmModal'

interface Props {
  page: number
  pageMaxSize: number
  setPage: React.Dispatch<React.SetStateAction<number>>
  handlePrevious: () => void
  handleNext: () => void
}
const PageChanger = (props: Props) => {
  return (
    <div className="flex flex-row gap-x-4 w-full justify-center pt-6 pb-10">
      <button
        className="text-secondary_blue-100 bg-transparent border border-secondary_blue-100 font-normal text-lg py-4 px-8 rounded-[8px]"
        onClick={props.handlePrevious}
      >
        ย้อนกลับ
      </button>
      {props.page === props.pageMaxSize ? (
        <ConfirmModal />
      ) : (
        <button
          className="text-bg-200 bg-secondary_blue-100 border font-normal text-lg py-4 px-8 rounded-[8px]"
          onClick={props.handleNext}
        >
          ถัดไป
        </button>
      )}
    </div>
  )
}
export default PageChanger
