import Image from 'next/image'

const LogoAndTitle = () => {
  return (
    <div className="text-center mb-4">
      {/* Logo */}
      <div className="w-80 h-80 mx-auto relative mb-0">
        <Image
          src="/livesqlbench.png"
          alt="LiveSQLBench logo showing a cloud with SQL text inside"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Title - positioned closer to the logo */}
      <h1 className="text-5xl font-extrabold mt-0 bg-gradient-to-r from-[#F95454] to-[#0D92F4] bg-clip-text text-transparent">
        LiveSQLBench
      </h1>
    </div>
  )
}

export default LogoAndTitle
