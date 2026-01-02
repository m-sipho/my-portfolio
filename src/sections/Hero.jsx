

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto px-6 pt-32 pb-20 relative">
                <div className="grid lg:grid-cols-2 gap-12 item-center">
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 border-1 glass">
                                <span className="w-2 h-2 bg-blue-700 rounded-full animate-pulse" />
                                Backend Developer
                            </span>
                        </div>

                        {/* Headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                                Writing <span className="text-text-muted">logic</span>
                                <br />that powers
                                <br />
                                <span className="font-serif italic font-normal">applications.</span>
                            </h1>
                            <p className="text-lg text-text-muted max-w-lg animate-fade-in animation-delay-200">
                                Aspiring Backend Developer focused on writing clean, maintainable code.
                                I am constantly building projects to sharpen my skills in API design and database management
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 animate-fade-in animation-delay-300">
                            <a href="" className="group flex justify-center items-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium transition-all active:scale-95 text-nowrap">
                                Get in Touch
                                <svg className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right-icon lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
                            </a>
                            <a href="" className="group flex justify-center items-center gap-2 px-6 py-3 border-1 rounded-full font-medium transition-all active:scale-95 text-nowrap">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right column */}
                    <div className="relative animate-fade-in animation-delay-300">
                        {/* Profile image */}
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl p-2">
                                <img src="/src/assets/profile-photo.jpg" alt="Mthokozisi Hlatshwayo" className="w-full aspect-[4/5] object-cover rounded-2xl grayscale" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}