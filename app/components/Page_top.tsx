import main_image from '../assets/main.png'
import Image from 'next/image';



export default function Page_top() {
    return (
        <div className="page-top relative flex flex-col items-center justify-center h-64">
            <p className="z-10 text-white text-10xl font-bold">START</p>
            <p className="z-10 text-white text-sm">仕事に最高のスタートを</p>
            <Image
                src={main_image}
                alt=""
                fill
                className="object-cover -z-10"
            />
        </div>
    )
}