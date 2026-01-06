export default function HeroSection({ image }: { image: string }) {
    return <div className="h-52 w-full rounded-2xl overflow-clip relative">
        <img src={image} alt={`${image} image`} className="h-full w-full object-cover" />
        <div className="absolute bottom-0 right-0 p-4">
            <button className="shadow-2xl bg-white rounded-xl text-sm p-3 px-6">
                Shop now
            </button>
        </div>
    </div>
}