import Image from 'next/image'

const LogoAndTitle = () => {
  return (
    <div className="text-center mb-8">
      {/* Logo */}
      <div className="w-24 h-24 mx-auto mb-4 relative">
        <Image
          src="/1.png"
          alt="Humanity's Last Exam logo showing a star shape with an arrow"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#D2E0FB] via-[#8967B3] to-[#FF9874] bg-clip-text text-transparent">
        LiveSQLBench
      </h1>
    </div>
  )
}

export default LogoAndTitle
