import image1 from '../assets/Webメディア運営.png'
import image2 from '../assets/スクール事業.png'
import image3 from '../assets/人材紹介業.png'
import Image, { StaticImageData } from 'next/image';
type ImageItem = {
    src: StaticImageData;
    label: string;
};

const images: ImageItem[] = [
    { src: image1, label: "Webメディア運営" },
    { src: image2, label: "スクール事業" },
    { src: image3, label: "人材紹介業" }
]

export default function List() {
    return (
        <div>
            <div className="title">
                <p>サービス</p>
            </div>
            <ul>
                {images.map((image, index) => (
                    <li key={index}>
                        <Image
                            src={image.src}
                            alt={image.label}
                            fill
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}