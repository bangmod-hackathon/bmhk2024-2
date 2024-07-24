import { Typography } from 'antd';
import ThemeProvider from './lib/ThemeProvider';

const prizes = [
  {
    id: 1,
    title: 'รางวัลชนะเลิศ',
    amount: '30,000 บาท',
    image: '/img/chest1.png',
  },
  {
    id: 2,
    title: 'รางวัลรองชนะเลิศอันดับ1',
    amount: '15,000 บาท',
    image: '/img/chest2.png',
  },
  {
    id: 3,
    title: 'รางวัลรองชนะเลิศอันดับ2',
    amount: '5,000 บาท',
    image: '/img/chest3.png',
  },
];

const consolationPrize = {
  title: 'รางวัลชมเชย',
  amount: '2,000 บาท',
};

function App() {
  const { Text } = Typography;

  return (
    <ThemeProvider>
      <div className="bg-[#0E2A3F] min-h-screen flex flex-col items-center p-4 md:p-8">
        <h1 className="text-4xl font-heading text-[#FDEDDC] text-center mb-8">
          รางวัลการแข่งขัน
        </h1>
        <div className="flex-wrap grid grid-cols-1 justify-center md:grid-cols-3 gap-8 md:gap-4">
          <div className="flex flex-col items-center md:order-2">
            <img src={prizes[0].image} alt={prizes[0].title} className="lg:w-96 lg:h-96 mb-4 md:w-80 md:h-72 sm:w-64 sm:h-64 hover:scale-105 transition duration-0 hover:duration-700 hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.15)]" />
            <div className="bg-[rgba(199,_199,_199,_0.21)] border border-[#C7C7C7] p-4 rounded-3xl text-center md:w-64 sm:w-64 lg:w-96 md:h-28 sm:h-28 lg:h-36">
              <h2 className="lg:text-2xl md:text-xl sm:text-xl text-[#EBD176] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                {prizes[0].title}
              </h2>
              <p className="lg:text-lg md:text-md sm:text-sm text-[#9EDFFA] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                {prizes[0].amount}
              </p>
              <p className="lg:text-lg md:text-md sm:text-sm text-[#9EDFFA] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                พร้อมโล่เกียรติคุณ
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:order-1 lg:mt-16">
            <img src={prizes[1].image} alt={prizes[1].title} className="lg:Sw-80 lg:h-80 mb-4 md:w-80 md:h-72 sm:w-64 sm:h-64 hover:scale-105 transition duration-0 hover:duration-700 hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.15)]" />
            <div className="bg-[rgba(199,_199,_199,_0.21)] border border-[#C7C7C7] p-4 rounded-3xl text-center md:w-64 sm:w-64 lg:w-96 md:h-28 sm:h-28 lg:h-36">
              <h2 className="lg:text-2xl md:text-xl sm:text-xl text-[#EBD176] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                {prizes[1].title}
              </h2>
              <p className="lg:text-lg md:text-md sm:text-sm text-[#9EDFFA] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                {prizes[1].amount}
              </p>
              <p className="lg:text-lg md:text-md sm:text-sm text-[#9EDFFA] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                พร้อมโล่เกียรติคุณ
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:order-3 lg:mt-16">
            <img src={prizes[2].image} alt={prizes[2].title} className="lg:w-80 lg:h-80 mb-4 md:w-80 md:h-72 sm:w-64 sm:h-64 hover:scale-105 transition duration-0 hover:duration-700 hover:drop-shadow-[0_20px_20px_rgba(255,255,255,0.15)]" />
            <div className="bg-[rgba(199,_199,_199,_0.21)] border border-[#C7C7C7] p-4 rounded-3xl text-center md:w-64 sm:w-64 lg:w-96 md:h-28 sm:h-28 lg:h-36 ">
              <h2 className="lg:text-2xl md:text-lg sm:text-lg text-[#EBD176] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                {prizes[2].title}
              </h2>
              <p className="lg:text-lg md:text-md sm:text-sm text-[#9EDFFA] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                {prizes[2].amount}
              </p>
              <p className="lg:text-lg md:text-md sm:text-sm text-[#9EDFFA] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] my-1">
                พร้อมโล่เกียรติคุณ
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <div className="flex flex-row justify-center items-center bg-[rgba(199,_199,_199,_0.21)] border border-[#C7C7C7] p-4 rounded-3xl text-center lg:h-24 lg:w-[586px] md:w-64	sm:w-64	md:h-12 sm:h-12">
            <Text className="lg:lg:text-2xl md:text-xl sm:text-xl text-[#EBD176] text-center font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)] mr-2">
              {consolationPrize.title}
            </Text>
            <Text className="lg:text-lg md:text-md sm:text-sm text-[#9EDFFA] font-body [text-shadow:_0_2px_4px_rgba(255,_255,_255,_0.56)]">
              {consolationPrize.amount}
            </Text>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
