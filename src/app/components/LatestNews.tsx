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
        <div className="flex gap-2">
          <Image
            src="/1.png"
            alt="hle"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          <span className="text-gray-500 font-bold">[02/11/2025]:</span>
          <div>
            <Link href="#" className="text-blue-600 hover:text-blue-700">
              HLE Community Feedback Expansion - Bug Bounty
            </Link>
            <span className="text-gray-700">
              . Finalized Original Authors and we are working on later contributors for co-authorship soon
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestNews