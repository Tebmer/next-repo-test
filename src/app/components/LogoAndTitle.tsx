import Image from 'next/image'

const LogoAndTitle = () => {
  return (
    // Remove extra margins/padding here
    <div className="flex flex-col items-center p-0 m-0">
      {/* Logo */}
      <div className="relative w-64 h-64 p-0 m-0">
        <Image
          src="/livesqlbench.png"
          alt="Humanity's Last Exam logo showing a star shape with an arrow"
          fill
          // object-contain keeps the whole image visible but won’t crop it.
          // Switch to object-cover if you want it to fill the whole box even if cropped.
          className="object-contain"
          priority
        />
      </div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#F95454] to-[#0D92F4] bg-clip-text text-transparent p-0 m-0">
        LiveSQLBench
      </h1>
    </div>
  )
}

export default LogoAndTitle
