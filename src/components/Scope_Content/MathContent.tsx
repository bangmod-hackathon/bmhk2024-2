import './CustomScrollBar.css'

interface ClassNames {
  MainTopic: string
  SubTopic: string
  SubTopicRoman: string
}

const classNames: ClassNames = {
  MainTopic: 'font-body text-lg font-normal text-secondary_blue-100',
  SubTopic: 'list-alpha pl-5 font-body text-lg font-normal text-text_color-100',
  SubTopicRoman: 'list-roman pl-5 font-body text-lg font-normal text-text_color-100'
}

const MathContent: React.FC = (): JSX.Element => {
  return (
    <>
      <h1 className="mb-5 text-center text-2xl font-normal text-primary_yellow-100">หมวดคณิตศาสตร์</h1>
      <div className="custom-scroll max-h-[500px] w-[auto] self-stretch overflow-y-auto pl-[25px]">
        <ol className="list-decimal">
          <li className={classNames.MainTopic}>เลขคณิตและเรขาคณิต</li>
          <ul className={classNames.SubTopic}>
            <li>จำนวนเต็ม คุณสมบัติของเลขจำนวนเต็ม (ค่าบวก ค่าลบ เลขคู่ เลขคี่ การหารลงตัว จำนวนเฉพาะ)</li>
            <li>เลขเศษส่วน และร้อยละ</li>
            <li>จุด เวคเตอร์ พิกัดจุดแบบคาร์ทิเชียน (Cartesian coordinates) ในตารางสองมิติที่มีพิกัดเป็นจำนวนเต็ม</li>
            <li>ระยะทางแบบยูคลิด ทฤษฏีพิธากอรัส</li>
            <li>ส่วนของเส้นตรง จุดตัดของเส้นตรง และคุณสมบัติพื้นฐานที่เกี่ยวข้อง</li>
            <li>มุม สามเหลี่ยม สี่เหลี่ยมผืนผ้า สี่เหลี่ยมจัตุรัส วงกลม</li>
          </ul>
          <li className={classNames.MainTopic}>โครงสร้างไม่ต่อเนื่อง (discrete structures)</li>
          <ul className={classNames.SubTopic}>
            <li>ฟังก์ชัน ความสัมพันธ์ และเซ็ต</li>
            <li>ตรรกศาสตร์พื้นฐาน</li>
            <li>วิธีการพิสูจน์</li>
            <li>วิธีการนับเบื้องต้น</li>
            <ul className={classNames.SubTopicRoman}>
              <li>
                กฎของการบวกและกฎของการคูณ (Sum rule and Product rule), หลักการเพิ่มเข้า-ตัดออก (inclusion-exclusion
                principle), ลำดับเลขคณิตและเรขาคณิต จำนวนแบบฟิโบนัชชิ (Fibonacci numbers)
              </li>
              <li>กฏรังนกพิราบ (Pigeonhole principle) เพื่อใช้ในการหาขอบเขต</li>
              <li>การเรียงสับเปลี่ยน และวิธีจัดหมู่ระดับพื้นฐาน</li>
              <li>ฟังก์ชันเลขเศษส่วน (Fractional function) และสัมประสิทธิ์ทวินาม (Binomial coefficient)</li>
            </ul>
            <li>กราฟและต้นไม้</li>
            <ul className={classNames.SubTopicRoman}>
              <li>ต้นไม้และคุณสมบัติพื้นฐาน</li>
              <li>กราฟไม่มีทิศทาง (degree, path, cycle, connectedness, Handshaking Lemma)</li>
              <li>กราฟแบบมีทิศทาง (in-degree, out-degree, directed path/cycle)</li>
              <li>กราฟแบบมีทิศทาง (in-degree, out-degree, directed path/cycle)</li>
              <li>Spanning trees</li>
              <li>วิธีการเดินผ่านต้นไม้ (traversal strategies: defining the node order for ordered trees)</li>
              <li>&apos;Decorated&apos; graphs with edge/node labels, weights, colors</li>
              <li>Multigraphs และ graphs ที่มี self loops</li>
              <li>planar graphs, bipartite graphs, และ hypergraphs</li>
            </ul>
          </ul>
          <li className={classNames.MainTopic}>เนื้อหาเพิ่มเติม</li>
          <ul className={classNames.SubTopic}>
            <li>แคลคูลัส</li>
            <li>ความน่าจะเป็น</li>
            <li>สถิติ</li>
            <li>จำนวนจริงและจำนวนเชิงซ้อน</li>
            <li>ภาคตัดกรวยทั่วไป (parabolas, hyperbolas, ellipses)</li>
            <li>โพลิกอน</li>
          </ul>
        </ol>
      </div>
    </>
  )
}
export default MathContent
