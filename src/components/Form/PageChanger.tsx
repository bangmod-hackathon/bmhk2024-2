import ConfirmModal from '../Modal/ComfirmModal'

interface Props {
  page: number
  pageMaxSize: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}
const PageChanger = (props: Props) => {
  const handlePrevious = () => {
    props.setPage(props.page === 1 ? 1 : props.page - 1)
  }
  const handleNext = () => {
    props.setPage(props.page === props.pageMaxSize ? props.pageMaxSize : props.page + 1)
  }
  return (
    <div className="flex flex-row gap-x-4 w-full justify-center pt-6 pb-10">
      <button
        className="text-secondary_blue-100 bg-transparent border border-secondary_blue-100 font-normal text-lg py-4 px-8 rounded-[8px]"
        onClick={handlePrevious}
      >
        ย้อนกลับ
      </button>
      {props.page === props.pageMaxSize ? (
        <ConfirmModal />
      ) : (
        <button
          className="text-bg-200 bg-secondary_blue-100 border font-normal text-lg py-4 px-8 rounded-[8px]"
          onClick={handleNext}
        >
          ถัดไป
        </button>
      )}
    </div>
  )
}
export default PageChanger
