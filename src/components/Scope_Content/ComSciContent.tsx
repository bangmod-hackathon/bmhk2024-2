import './CustomScrollBar.css'

interface ClassNames {
  MainTopic: string
  SubTopic: string
  SubTopicRoman: string
}

const classNames: ClassNames = {
  MainTopic: 'font-body text-default font-[500] text-secondary_blue-100',
  SubTopic: 'list-alpha pl-5 font-body font-normal text-default font-normal text-text_color-100',
  SubTopicRoman: 'list-roman pl-5 font-body text-default font-normal text-text_color-100'
}
const ComSciContent: React.FC = (): JSX.Element => {
  return (
    <>
      <h1 className="mb-5 text-center text-2xl font-[550] text-primary_yellow-100">หมวดพื้นฐานวิทยาการคอมพิวเตอร์</h1>
      <div className="custom-scroll max-h-[500px] w-auto self-stretch overflow-y-auto pl-[25px]">
        <ol className="list-decimal">
          <li className={classNames.MainTopic}>พื้นฐานด้านการเขียนโปรแกรม</li>
          <li className={classNames.MainTopic}>ทักษะการแก้ปัญหา (problem-solving skill)</li>
          <li className={classNames.MainTopic}>พื้นฐานโครงสร้างข้อมูล</li>
          <ul className={classNames.SubTopic}>
            <li>ชนิดข้อมูลดั้งเดิม (Primitive data type) ได้แก่ Boolean, signed/unsigned integer, character</li>
            <li>แถวลำดับ (อาเรย์ อาเรย์หลายมิติ)</li>
            <li>Record/Struct</li>
            <li>สตริงและการดำเนินการกับสตริง</li>
            <li>Static และ Stack allocation</li>
            <li>Lined structures (ทั้งที่เป็นแบบเส้นตรง และแบบที่แบ่งเป็นสาขาได้)</li>
            <li>การสร้าง โครงสร้างกองซ้อน (stack), คิว (queue), ต้นไม้ และกราฟ</li>
            <li>การเลือกโครงสร้างข้อมูลที่เหมาะสม</li>
            <li>คิวลำดับความสำคัญ (priority queue), ไดนามิกเซต (dynamic set), ไดนามิกแมพ (dynamic map)</li>
          </ul>
          <li className={classNames.MainTopic}>การเรียกตัวเองซ้ำ (Recursion)</li>
          <ul className={classNames.SubTopic}>
            <li>แนวคิด</li>
            <li>ฟังก์ชันทางคณิตศาสตร์ที่เรียกตัวเองซ้ำ</li>
            <li>วิธีแบ่งแยกและเอาชนะ (divide and conquer)</li>
            <li>อัลกอริทึมการย้อนรอยแบบเรียกตัวเองซ้ำ (recursive backtracking)</li>
          </ul>
        </ol>
      </div>
    </>
  )
}
export default ComSciContent
