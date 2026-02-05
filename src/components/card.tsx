export default function Card({ image, title, year, lugar }: { image: string, title: string, year: number, lugar?: string }) {
    return (
        <div className="bg-white px-4 pt-4 pb-1">
            <img src={image} alt="" className="w-[300px] h-[400px]" />
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-[#f1b82a] dancing-script text-2xl">{title}</h1>
                <div className="flex justify-center items-center gap-2">
                    {year} <div className="text-[#f1b82a] w-1.5 h-1.5 rounded-full bg-[#f1b82a]"></div> {lugar}
                </div>
            </div>
        </div>
    )
}