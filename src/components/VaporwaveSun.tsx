export default function VaporwaveSun(){
    return (
        <svg className={"responsive-svg"} xmlns="http://www.w3.org/2000/svg" viewBox={"0 0 500 500"}>
            <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#ffe543"/>
                    <stop offset="30%" stopColor="#ff901f"/>
                    <stop offset="100%" stopColor="#c8085a"/>
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
                    mask="url(#line-mask)" opacity={"1"}/>
        </svg>
    )
}