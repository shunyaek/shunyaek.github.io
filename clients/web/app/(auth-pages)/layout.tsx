export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`
        min-w-full w-full max-w-full
        min-h-full h-full max-h-full
        rounded-lg overflow-y-auto
        flex flex-col lg:flex-row justify-between lg:justify-between items-stretch lg:items-stretch
      `}
    >
      <section
        className={`
          min-w-[100%] lg:min-w-[50%] w-full lg:w-1/2 max-w-[100%] lg:max-w-[50%]
          min-h-full h-full max-h-full
          rounded-lg
          flex flex-col justify-center items-stretch
          px-8 sm:px-16 md:px-16 lg:px-16 py-8 sm:py-16 md:py-16 lg:py-16
        `}
      >
        {children}
      </section>
      <section
        className={`
          min-w-[100%] lg:min-w-[50%] w-full lg:w-1/2 max-w-[100%] lg:max-w-[50%]
          min-h-full h-full max-h-full
          rounded-lg
          flex flex-col justify-center items-center
        `}
      >
        {"auth"}
      </section>
    </section>
  );
}
