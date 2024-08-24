import Image from "next/image";

export default function Home() {
  return (
    <main className="text-white">
        <div className={`flex flex-col items-center justify-center h-[65vh] font-bold text-4xl md:text-7xl gap-2 z-10`}>
            <h1 className="z-10">WELCOME TO MY</h1>
            <span className="text-gradient text-shadow text-stroke z-10">PORTIFOLIO</span>
            <div className={"w-full flex justify-center items-center gap-5 absolute"}>
                <svg className={"responsive-svg"} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 500 500"}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="0%" stop-color="#f222ff"/>
                            <stop offset="50%" stop-color="#7e117c"/>
                            <stop offset="100%" stop-color="#570b74"/>
                        </linearGradient>

                        <mask id="line-mask">
                            <rect x="0" y="0" width="100%" height="100%" fill="white"/>
                            <rect x="0" y="320" width="100%" height="8" fill="black"/>
                            <rect x="0" y="350" width="100%" height="10" fill="black"/>
                            <rect x="0" y="380" width="100%" height="12" fill="black"/>
                            <rect x="0" y="410" width="100%" height="14" fill="black"/>
                        </mask>
                    </defs>

                    <circle cx="250" cy="250" r="200" fill="url(#gradient)" shapeRendering={"circle"}
                            mask="url(#line-mask)" opacity={"0.6"}/>
                </svg>
            </div>


        </div>
    </main>
  );
}
