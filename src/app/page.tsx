import Image from "next/image";

export default function Home() {
  return (
      <div
          className = "font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-yellow-100">
        <main className = "flex flex-col gap-[32px] row-start-2 items-center ">
          <div className = {"flex w-full justify-center"}>
            
            <Image
                src = "/logo.png"
                alt = "TiszaP logó"
                width = {180}
                height = {38}
                priority
            />
          </div>
          <ol className = "font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className = "mb-2 tracking-[-.01em]">
              A gombra kattintva töltsd le a{" "}
              <code className = "bg-black/[.1] font-mono font-semibold px-1 py-0.5 rounded">
                TiszApp
              </code>
              -ot!
            </li>
            <li className = "tracking-[-.01em]">
              Letöltés után telepítsd fel az alkalmazást a telefonodra!
            </li>
          </ol>
          
          <a
              className = "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#444] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto gap-4"
              href = "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target = "_blank"
              rel = "noopener noreferrer"
          >
            <Image
                src = "/android.svg"
                alt = "android logomark"
                width = {20}
                height = {20}
            />
            Letöltés Android-ra
          </a>
          <a
              className = "rounded-full border border-solid border-2 border-black transition-colors flex items-center justify-center hover:bg-[#f2f2f2] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto gap-4"
              href = "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target = "_blank"
              rel = "noopener noreferrer"
          >
            <Image
                src = "/ios.svg"
                alt = "ios logomark"
                width = {20}
                height = {20}
            />
            Letöltés iOS-re az AppStore-ból
          </a>
          <ol className = "font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            Köszi! Tali a táborban :))
          </ol>
        </main>
        <footer className = "row-start-3 flex text-sm flex-wrap items-center justify-center">
          A domain-t a <a href='https://www.kir-dev.hu' className='underline'>Kir-Dev</a>-től kaptuk, köszönet nekik érte.
        </footer>
      </div>
);
}
