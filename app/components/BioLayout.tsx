interface BioLayoutProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWrapperClass?: string;
  children: React.ReactNode;
}

export function BioLayout({
  name,
  title,
  imageSrc,
  imageAlt,
  imageWrapperClass = "flex md:justify-end",
  children,
}: BioLayoutProps) {
  return (
    <div className="bg-white scroll-smooth text-[#2C466D] min-h-screen pt-20">
      <section className="bg-gray-50 text-[#2C466D] px-6 sm:px-12 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT TEXT */}
          <div className="bio-content">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-[#2C466D]">
              {name}
            </h1>
            <p className="text-sm sm:text-base text-gray-600 mb-6">{title}</p>
            <div className="space-y-4 text-base leading-relaxed text-[#2C466D]">
              {children}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className={imageWrapperClass}>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg object-cover object-top"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
