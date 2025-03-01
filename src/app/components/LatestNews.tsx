import Image from 'next/image'
import Link from 'next/link'

const LatestNews = () => {
  return (
    <div className="mb-8">
      {/* Latest News */}
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl font-bold flex-shrink-0">Latest News</h2>
        <div className="h-0.5 flex-grow bg-gray-200"></div>
      </div>
      <div className="font-medium">
        <div className="flex">
          <div className="flex-shrink-0 w-10 flex items-center self-start mt-1">
            <Image
              src="/live_button.png"
              alt="livesqlbench"
              width={40}
              height={40}
              className="w-10 h-10"
            />
          </div>
          <div className="flex-grow ml-2">
            <div className="flex flex-wrap items-baseline">
              <span className="text-gray-500 font-bold mr-2">[02/11/2025]:</span>
              <span className="text-gray-700">
                LiveSQLBench has been released! It contains two versions: LiveSQLBench-Base and LiveSQLBench-Large. Download it and test your text-to-SQL LLMs or agents in a containmation-free way!
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
