import Image from "next/image";

export default function Home() {
  return (
    <div className="m-6">
     
      <nav className="flex justify-between items-center">
        <Image
          src="/print-forge-logo.svg"
          alt="print-forge"
          width={240}
          height={61}
          className="hidden md:block"
        />
        <img src="/printforge-logo mobile.svg" className="block md:hidden" alt="" />

        <ul className="flex justify-between">
          <ol className="mr-[1.5rem] cursor-pointer ">3D MODELS</ol>
          <ol className="cursor-pointer">ABOUT</ol>
        </ul>
      </nav>

      <main className="my-5">
        <header className="flex flex-col md:flex-row items-center">
          <div className="flex flex-col gap-4">
            <h1 className="uppercase text-[1.2rem] hidden md:block">Your Go-to Platform for 3D Printing Files</h1>

            <h2 className="font-['Montserrat_Alternates'] font-bold md:text-[3.5rem]">Discover what's possible with 3D printing</h2>

            <p className="text-[1.2rem] w-[60%]">
              Join our community of creators and explore a vast library of
              user-submitted models.
            </p>

            <span className="border-1 py-2 px-3 uppercase font-[500] w-[fit-content] cursor-pointer">Browse Models</span>
          </div>

          <div>
            <img src="/3d-hero-image.svg" alt="" />
          </div>
        </header>
      </main>
    </div>
  );
}
