import Image from 'next/image'

const LogoAndTitle = () => {
  return (
    <div className="text-center mb-6">
      {/* Logo */}
      <div className="w-128 h-128 mx-auto mb-2 relative">
        <Image
          src="/livesqlbench.png"
          alt="LiveSQLBench logo showing a cloud with SQL text inside"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#F95454] to-[#0D92F4] bg-clip-text text-transparent">
        LiveSQLBench
      </h1>
    </div>
  )
}

export default LogoAndTitle
