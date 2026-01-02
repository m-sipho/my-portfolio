import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
    {href: "Home", label: "Home"},
    {href: "#projects", label: "Projects"},
    {href: "#education", label: "Education"},
    {href: "#about", label: "About"},
    {href: "#contact", label: "Contact"}
]

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    return (
        <header className="glass fixed top-0 left-0 right-0 bg-transparent py-5 border-b border-gray-200 shadow-md">
            <nav className="container mx-auto px-6  flex items-center justify-between">
                <a href="#" className="text-xl font-bold tracking-tight hover:text-text-muted flex gap-2">
                    <svg id="logo"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z" /></svg>
                    Mthokozisi Hlatshwayo
                </a>

                {/* Desktop Nav */}
                <div>
                    <div className="hidden md:flex gap-2">
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="nav-link group relative font-medium mx-2 my-2 hover:text-black transition-colors">
                                {link.label}
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <div className="left flex items-center gap-4 border-l border-gray-200 pl-6 ml-2">
                            <a href="https://github.com/m-sipho" target="_blank" className="hover:text-black">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            </a>

                            <a href="https://www.linkedin.com/in/mthokozisi-hlatshwayo-39929a267" target="_blank" className="hover:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 cursor-pointer" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <X Menu size={24}/> : <Menu size={24}/>}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass animate-fade-in">
                    <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
                        {navLinks.map((link, index) => (
                            <a href={link.href} key={index} className="text-lg py-2 hover:text-black transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="left flex items-center gap-10 border-t border-gray-200 px-6 pt-4 mt-2">
                        <a href="https://github.com/m-sipho" target="_blank" className="flex items-center gap-1 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                            GitHub
                        </a>

                        <a href="https://www.linkedin.com/in/mthokozisi-hlatshwayo-39929a267" target="_blank" className="flex items-center gap-1 hover:text-blue-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                            LinkedIn
                        </a>
                    </div>
                </div>
            )}
        </header>
    )
}