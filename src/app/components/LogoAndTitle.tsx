import Image from 'next/image'

const LogoAndTitle = () => {
  return (
    <div className="text-center mb-8">
      {/* Logo */}
      <div className="w-48 h-48 mx-auto mb-4 relative">
        <Image
          src="/livesqlbench.png"
          alt="Humanity's Last Exam logo showing a star shape with an arrow"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-[#F95454] to-[#0D92F4] bg-clip-text text-transparent">
        LiveSQLBench
      </h1>
    </div>
  )
}

export default LogoAndTitle
