

function Hero() {

    return (
        <section className="relative h-screen overflow-hidden bg-black">
            <div className="absolute top-18 bottom-0 right-0 left-0 z-0">
                <img src=".././public/img/hero.jpg" className="w-full h-full object-cover opacity-90"></img>
                <div className="absolute inset-0 bg-gradient-to from-black/30 via-transparent to-black/80"></div>
            </div>

            <div className="absolute bottom-8 left-1/2 z-10 animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                </svg>

            </div>

        </section>
    )
}

export default Hero