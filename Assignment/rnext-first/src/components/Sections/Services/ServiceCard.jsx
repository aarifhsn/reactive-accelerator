export default function ServiceCard({
  title,
  description,
  imageUrl,
  containerClassName = "",
  imageClassName = "h-full",
}) {
  return (
    <>
      <div
        className={`p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6 ${containerClassName}`}
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
            {title}
          </h3>
          <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
            {description}
          </p>
        </div>
        <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
          <img src={imageUrl} className={`object-cover ${imageClassName}`} />
        </div>
      </div>
    </>
  );
}
