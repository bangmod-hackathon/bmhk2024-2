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

const AlgorithmContent: React.FC = (): JSX.Element => {
  return (
    <>
      <h1 className="mb-5 text-center text-2xl font-[550] text-primary_yellow-100">หมวดอัลกอริทึม</h1>
      <div className="custom-scroll max-h-[500px] w-auto self-stretch overflow-y-auto pl-[25px]">
        <ul className=" ul">
          <li className={classNames.MainTopic}>พื้นฐานการวิเคราะห์ความซับซ้อนของอัลกอริทึม (algorithmic complexity)</li>
          <li className={classNames.MainTopic}>กลวิธีทางอัลกอริทึม</li>
          <ul className={classNames.SubTopic + ` ul`}>
            <li>Brute-Force algorithm</li>
            <li>Greedy algorithm</li>
            <li>การแบ่งแยกและเอาชนะ</li>
            <li>Backtracking (ทั้งที่เป็นแบบเรียกตัวเองซ้ำ และไม่เรียกตัวเองซ้ำ)</li>
            <li>Branch-and-Bound algorithm</li>
            <li>Pattern matching and string/text algorithm</li>
            <li>Dynamic programming</li>
          </ul>
          <li className={classNames.MainTopic}>อัลกอริทึมเชิงคำนวณพื้นฐาน</li>
          <ul className={classNames.SubTopic + ` ul`}>
            <li>
              อัลกอริทึมเชิงตัวเลขพื้นฐานที่เกี่ยวข้องกับจำนวนเต็ม เช่น Radix Conversion, Euclid&apos;s algorithm,
              Primality test in O(√N), Sieve of Eratosthenes, Factorization, Efficient exponentiation
            </li>
            <li>การจัดการอาร์เรย์ขั้นพื้นฐาน (รวมถึงการทำฮิสโทแกรม และ Bucket sort)</li>
            <li>Sequential และ Binary search</li>
            <li>Search by elimination</li>
            <li>การแบ่งข้อมูล (partitioning) การจัดลำดับด้วยการแบ่งข้อมูลซ้ำๆ Quick sort</li>
            <li>การเรียงข้อมูลที่มีเวลาที่แย่ที่สุดเป็น O(NlogN) เช่น Heap sort และ Merge sort</li>
            <li>Binary heap พื้นฐาน และ Binary search tree</li>
            <li>การบรรยายโครงสร้างกราฟ เช่น adjacency list และ adjacency matrix</li>
            <li>
              Depth-first and breadth-first traversals of graphs และการหาองค์ประกอบที่เชื่อมต่อกันของกราฟแบบไม่มีทิศทาง
            </li>
            <li>Shortest path algorithm เช่น Dijkstra, Bellman-Ford และ Floyd-Warshall</li>
            <li>Transitive closure (Floyd&apos;s algorithm)</li>
            <li>Minimum spanning tree</li>
            <li>Topological sort</li>
          </ul>
        </ul>
      </div>
    </>
  )
}
export default AlgorithmContent
