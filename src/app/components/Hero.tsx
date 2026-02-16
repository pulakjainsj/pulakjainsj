import { Youtube, Mail } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Modern Graphic Design Background */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-[#2d2d2d]"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(rgba(232, 213, 196, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(232, 213, 196, 0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Animated color blobs - removed for cleaner look */}
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-[10%] w-32 h-32 border-2 border-[#e8d5c4]/20 rounded-lg rotate-45 animate-spin-slow"></div>
        <div className="absolute top-40 right-[15%] w-24 h-24 border-2 border-[#e8d5c4]/20 rounded-full animate-float"></div>
        <div className="absolute bottom-32 left-[20%] w-20 h-20 bg-[#e8d5c4]/10 rotate-12 animate-float-delayed"></div>
        <div className="absolute bottom-48 right-[25%] w-0 h-0 border-l-[40px] border-l-transparent border-r-[40px] border-r-transparent border-b-[70px] border-b-[#e8d5c4]/20 animate-bounce-slow"></div>
        
        {/* Design tool icons pattern */}
        <div className="absolute top-1/4 right-[10%] text-[#e8d5c4]/10 animate-float">
          <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-[15%] text-[#e8d5c4]/10 animate-float-delayed">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/>
          </svg>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(232, 213, 196, 0.4); }
          50% { box-shadow: 0 0 30px rgba(232, 213, 196, 0.6), 0 0 40px rgba(255, 107, 107, 0.3); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Side - Main Content */}
          <div className="space-y-8 order-1 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-[#e8d5c4] text-lg sm:text-xl font-light tracking-widest uppercase">Hello, I am</span>
              </div>
              <h1 className="text-white text-6xl sm:text-7xl lg:text-8xl font-bold leading-none">
                Pulak<br />
                <span className="text-[#e8d5c4]">Jain</span>
              </h1>
              <div className="flex items-center gap-4 pt-2">
                <div className="h-0.5 w-16 bg-[#e8d5c4]"></div>
                <p className="text-white/90 text-xl sm:text-2xl font-light">Graphics Designer</p>
                <button 
                  onClick={scrollToAbout}
                  className="text-[#e8d5c4] text-sm hover:text-white transition-colors underline decoration-[#e8d5c4] underline-offset-4 ml-2"
                >
                  Read More
                </button>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                onClick={scrollToContact} 
                size="lg"
                className="bg-[#e8d5c4] text-[#2d2d2d] hover:bg-[#d4b896] font-semibold px-8"
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                className="bg-[#e8d5c4] text-[#2d2d2d] hover:bg-[#d4b896] font-semibold px-8"
                asChild
              >
                <a href="#projects">
                  View My Work
                </a>
              </Button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 pt-6">
              <a
                href="https://youtube.com/@pulakjain7922?si=uK-bePsuxLwJigTW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#e8d5c4]/40 flex items-center justify-center text-[#e8d5c4] hover:bg-[#e8d5c4] hover:text-[#2d2d2d] transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://www.reddit.com/u/pulakjainsj/s/k6uCym4qcS"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#e8d5c4]/40 flex items-center justify-center text-[#e8d5c4] hover:bg-[#e8d5c4] hover:text-[#2d2d2d] transition-all duration-300"
                aria-label="Reddit"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
              <a
                href="https://x.com/pulakjainsj"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#e8d5c4]/40 flex items-center justify-center text-[#e8d5c4] hover:bg-[#e8d5c4] hover:text-[#2d2d2d] transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&to=jainpulakcomp@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border-2 border-[#e8d5c4]/40 flex items-center justify-center text-[#e8d5c4] hover:bg-[#e8d5c4] hover:text-[#2d2d2d] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Side - Graphic Design Elements */}
          <div className="flex items-center justify-center order-2 lg:order-2 relative">
            <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
              
              {/* Ultra-Modern 3D Bento Grid Design Workspace */}
              <div className="relative w-full h-full">
                
                {/* Main floating phone mockup with holographic effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-[440px] bg-gradient-to-br from-white/10 via-[#e8d5c4]/5 to-white/5 backdrop-blur-xl border border-white/20 rounded-[3rem] shadow-2xl transform hover:scale-105 transition-all duration-700 hover:shadow-[0_0_60px_rgba(232,213,196,0.4)]" style={{
                  animation: 'float 8s ease-in-out infinite'
                }}>
                  {/* Screen content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-[#FF6B6B]/80 via-[#4ECDC4]/80 to-[#45B7D1]/80 rounded-[2.5rem] p-5 overflow-hidden">
                    {/* Status bar */}
                    <div className="flex justify-between items-center text-white/90 text-xs mb-6">
                      <span className="font-semibold">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-3 border border-white/60 rounded-sm"></div>
                        <div className="w-1 h-3 bg-white/60 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* App content - Design preview */}
                    <div className="space-y-3">
                      <div className="h-7 w-3/4 bg-white/30 backdrop-blur-sm rounded-lg"></div>
                      <div className="h-28 w-full bg-white/20 backdrop-blur-sm rounded-2xl"></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="h-16 bg-white/25 backdrop-blur-sm rounded-xl"></div>
                        <div className="h-16 bg-white/25 backdrop-blur-sm rounded-xl"></div>
                      </div>
                      <div className="h-5 w-1/2 bg-white/30 backdrop-blur-sm rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Holographic glow */}
                  <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                </div>

                {/* Floating AI Sparkle Top Left */}
                <div className="absolute top-8 left-8 w-20 h-20 bg-gradient-to-br from-[#FA8BFF]/20 via-[#2BD2FF]/20 to-transparent backdrop-blur-md border border-white/20 rounded-3xl p-3 shadow-lg hover:scale-110 transition-transform duration-500" style={{
                  animation: 'float-delayed 6s ease-in-out infinite'
                }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#2BD2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#2BD2FF] rounded-full animate-ping opacity-20"></div>
                </div>

                {/* Color Picker Glass Card Top Right */}
                <div className="absolute top-16 right-12 w-28 h-32 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl hover:scale-105 transition-all duration-500" style={{
                  animation: 'float 7s ease-in-out 0.5s infinite'
                }}>
                  <div className="text-xs text-white/70 font-semibold mb-2">Colors</div>
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="w-7 h-7 bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] rounded-lg shadow-lg hover:scale-110 transition-transform"></div>
                    <div className="w-7 h-7 bg-gradient-to-br from-[#4ECDC4] to-[#44A6A0] rounded-lg shadow-lg hover:scale-110 transition-transform"></div>
                    <div className="w-7 h-7 bg-gradient-to-br from-[#F7B731] to-[#F39C12] rounded-lg shadow-lg hover:scale-110 transition-transform"></div>
                    <div className="w-7 h-7 bg-gradient-to-br from-[#5F27CD] to-[#341F97] rounded-lg shadow-lg hover:scale-110 transition-transform"></div>
                    <div className="w-7 h-7 bg-gradient-to-br from-[#2BFF88] to-[#0EE29E] rounded-lg shadow-lg hover:scale-110 transition-transform"></div>
                    <div className="w-7 h-7 bg-gradient-to-br from-[#e8d5c4] to-[#d4b896] rounded-lg shadow-lg hover:scale-110 transition-transform"></div>
                  </div>
                </div>

                {/* Typography Tool Bottom Left */}
                <div className="absolute bottom-20 left-4 w-36 h-24 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl hover:scale-105 transition-all duration-500" style={{
                  animation: 'float-delayed 9s ease-in-out 1s infinite'
                }}>
                  <div className="text-xs text-white/70 font-semibold mb-2">Typography</div>
                  <div className="space-y-1.5">
                    <div className="h-3 w-full bg-gradient-to-r from-[#e8d5c4]/60 to-transparent rounded"></div>
                    <div className="h-2.5 w-5/6 bg-gradient-to-r from-[#d4b896]/60 to-transparent rounded"></div>
                    <div className="h-2.5 w-4/6 bg-gradient-to-r from-[#c4a68a]/60 to-transparent rounded"></div>
                    <div className="h-2 w-3/6 bg-gradient-to-r from-white/40 to-transparent rounded"></div>
                  </div>
                </div>

                {/* 3D Pen Tool Bottom Right */}
                <div className="absolute bottom-12 right-8 w-24 h-24 bg-gradient-to-br from-[#FF6B6B]/20 via-[#F7B731]/20 to-transparent backdrop-blur-md border border-white/20 rounded-3xl p-3 shadow-lg hover:rotate-12 hover:scale-110 transition-all duration-500" style={{
                  animation: 'float 6s ease-in-out 1.5s infinite'
                }}>
                  <div className="w-full h-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-[#FF6B6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </div>
                </div>

                {/* Layers Panel Middle Right */}
                <div className="absolute top-1/3 -right-4 w-32 h-38 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-3 shadow-2xl hover:scale-105 transition-all duration-500" style={{
                  animation: 'float-delayed 8s ease-in-out 2s infinite'
                }}>
                  <div className="text-xs text-white/70 font-semibold mb-2">Layers</div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1.5 hover:bg-white/20 transition-colors">
                      <div className="w-2.5 h-2.5 bg-[#4ECDC4] rounded"></div>
                      <div className="h-1.5 w-14 bg-white/40 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1.5 hover:bg-white/20 transition-colors">
                      <div className="w-2.5 h-2.5 bg-[#FF6B6B] rounded"></div>
                      <div className="h-1.5 w-10 bg-white/40 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1.5 hover:bg-white/20 transition-colors">
                      <div className="w-2.5 h-2.5 bg-[#F7B731] rounded"></div>
                      <div className="h-1.5 w-12 bg-white/40 rounded"></div>
                    </div>
                    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1.5 hover:bg-white/20 transition-colors">
                      <div className="w-2.5 h-2.5 bg-[#e8d5c4] rounded"></div>
                      <div className="h-1.5 w-8 bg-white/40 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Floating Design System Chips */}
                <div className="absolute top-1/4 -left-8 flex flex-col gap-3">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#2BD2FF]/30 to-[#2BFF88]/30 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-500 shadow-lg" style={{
                    animation: 'float 5s ease-in-out infinite'
                  }}>
                    <svg className="w-8 h-8 text-[#2BD2FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                </div>

                {/* Floating Gradient Orbs for depth */}
                <div className="absolute top-12 right-1/4 w-14 h-14 bg-gradient-to-br from-[#FA8BFF]/40 to-[#2BD2FF]/40 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-gradient-to-br from-[#F7B731]/40 to-[#FF6B6B]/40 rounded-full blur-xl" style={{animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite'}}></div>
                
                {/* Modern UI Icons floating */}
                <div className="absolute top-2/3 left-16 w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300" style={{
                  animation: 'float 7s ease-in-out 0.8s infinite'
                }}>
                  <svg className="w-5 h-5 text-[#e8d5c4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                  </svg>
                </div>

                {/* Magic wand sparkles */}
                <div className="absolute top-1/2 right-4 w-6 h-6">
                  <div className="absolute w-1.5 h-1.5 bg-[#FFD700] rounded-full animate-ping"></div>
                  <div className="absolute w-1.5 h-1.5 bg-[#FFD700] rounded-full"></div>
                </div>
                <div className="absolute bottom-1/3 left-1/4 w-5 h-5">
                  <div className="absolute w-1 h-1 bg-[#FF6B6B] rounded-full" style={{animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) 0.5s infinite'}}></div>
                  <div className="absolute w-1 h-1 bg-[#FF6B6B] rounded-full"></div>
                </div>
                <div className="absolute top-1/3 left-1/2 w-5 h-5">
                  <div className="absolute w-1 h-1 bg-[#4ECDC4] rounded-full" style={{animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) 1s infinite'}}></div>
                  <div className="absolute w-1 h-1 bg-[#4ECDC4] rounded-full"></div>
                </div>
                
              </div>
              
            </div>
          </div>

        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#e8d5c4]/50 animate-bounce">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-[#e8d5c4]/50"></div>
      </div>
    </section>
  );
}