import { twMerge } from "tailwind-merge";
import { Marquee } from "./marqueComponents";

const secondRow = [
    "alibabaCertifikat.avif",
    "codepolitanapp.avif",
    "dicodingai.avif",
    "rakaminuiux.avif",
    "dicodingbackend.avif",
    "dicodingfrondend.avif"
];

const ReviewCard = ({
    img,
}) => {
    return (
        <figure
            className={twMerge(
                "relative h-full w-64  cursor-pointer overflow-hidden rounded-xl border p-4",
                // dark styles
                "border-gray-50/10 bg-linear-to-r bg-indigo to-storm hover:bg-royal hover-animation",
            )}
        >
            <img src={img != "" ? img : "assets/farid.avif"} alt="" width={256} height={144} loading="lazy" decoding="async" className="w-2xl h-2xl min-h-36 max-h-36 rounded-xl overflow-hidden object-cover" />
        </figure>
    );
};

export default function SertivicateComponent() {
    return (
        <div className="relative flex w-full flex-col items-center box-border justify-center overflow-hidden">
            <Marquee reverse pauseOnHover className="[--duration:20s]">
                {secondRow.map((img, index) => (
                    <ReviewCard key={index} img={`/assets/sertivicate/${img}`} />
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-background"></div>
        </div>
    );
}
