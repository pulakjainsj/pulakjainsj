import profileImage from 'figma:asset/0c73d1325f6b46184a6bb7cb76efb0c0cb96afb8.png';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#e8e8e8]">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <p className="text-muted-foreground leading-relaxed">Hi, I'm Pulak Jain, an aspiring graphic designer with a strong passion for creating visually appealing and impactful designs. I'm proficient in Canva, CorelDRAW, PowerPoint and Figma, with hands-on experience designing flyers, social media graphics, and branding materials. I also have a keen interest in photography and photo editing, enhancing my designs with high-quality images.</p>
            <p className="text-muted-foreground leading-relaxed">Eager to contribute, to learn, adapt, and grow in a collaborative environment, I'm always looking for opportunities to push my creative boundaries.</p>
            
            <div className="mt-6 pt-6 border-t border-gray-300">
              <h3 className="text-xl font-semibold mb-4 text-[#2d2d2d]">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-[#2d2d2d]">Master of Business Administration</p>
                  <p className="text-muted-foreground text-sm">Swami Vivekanand Subharti University, Meerut</p>
                  <p className="text-muted-foreground text-sm">2024 - 2025</p>
                </div>
                <div>
                  <p className="font-semibold text-[#2d2d2d]">Bachelor of Commerce</p>
                  <p className="text-muted-foreground text-sm">Dr. Bhimrao Ambedkar University, Agra</p>
                  <p className="text-muted-foreground text-sm">2021 - 2023</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="rounded-lg overflow-hidden shadow-lg aspect-square w-full max-w-md">
              <img
                src="https://drive.google.com/thumbnail?id=16J-FsrqywvhesUc7ztBx3UVNBOWU2ehP&sz=w1080"
                alt="Pulak Jain - Graphic Designer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}