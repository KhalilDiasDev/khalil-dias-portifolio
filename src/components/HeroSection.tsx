import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbBrandTypescript } from "react-icons/tb";

const HeroSection = () => {
  const [hoveredOrb, setHoveredOrb] = useState(null);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/KhalilDiasDev?tab=repositories',
      label: 'Ver projetos no GitHub'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/khalildias/',
      label: 'Conectar no LinkedIn'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'khalildsouza1@gmail.com',
      label: 'Enviar email'
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-700 cursor-pointer bg-blue-500/30"
          style={{
            left: '20%',
            top: '10%',
            animation: 'float 8s ease-in-out infinite',
            transform: hoveredOrb === 1 ? 'translateX(-20px) scale(1.1)' : 'none',
          }}
          onMouseEnter={() => setHoveredOrb(1)}
          onMouseLeave={() => setHoveredOrb(null)}
        />
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 transition-all duration-700 cursor-pointer bg-purple-500/30"
          style={{
            right: '15%',
            top: '30%',
            animation: 'float 10s ease-in-out infinite reverse',
            transform: hoveredOrb === 2 ? 'translateX(25px) scale(1.1)' : 'none',
          }}
          onMouseEnter={() => setHoveredOrb(2)}
          onMouseLeave={() => setHoveredOrb(null)}
        />
        <div 
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-10 transition-all duration-700 cursor-pointer bg-emerald-500/30"
          style={{
            left: '50%',
            bottom: '20%',
            animation: 'float 12s ease-in-out infinite',
            transform: hoveredOrb === 3 ? 'translateX(-30px) scale(1.1)' : 'none',
          }}
          onMouseEnter={() => setHoveredOrb(3)}
          onMouseLeave={() => setHoveredOrb(null)}
        />
      </div>

      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full opacity-30 bg-muted-foreground"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div 
        className="absolute inset-0 opacity-[0.02] z-0"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Khalil Dias - Desenvolvedor Full Stack"
              className="w-40 h-40 md:w-45 md:h-45 rounded-full mx-auto object-cover shadow-2xl border-2 border-border"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Khalil Dias
          </h1>
          <h2 className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-muted-foreground">
            Desenvolvedor Full Stack com foco em aplicações web modernas,
            integração com sistemas de identidade (IAM/Keycloak) e soluções em nuvem.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-border text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="p-3 rounded-full bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-accent group"
                aria-label={link.label}
                style={{ 
                  animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <link.icon className="h-6 w-6 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>

     
          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Tecnologias principais</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="flex items-center gap-2 text-xs font-mono bg-card border border-border px-3 py-1 rounded-full"><FaReact  />React</div>
              <div className="flex items-center gap-2 text-xs font-mono bg-card border border-border px-3 py-1 rounded-full"><FaNodeJs />Node.js</div>
              <div className="flex items-center gap-2 text-xs font-mono bg-card border border-border px-3 py-1 rounded-full"><TbBrandTypescript />TypeScript</div>
              <div className="flex items-center gap-2 text-xs font-mono bg-card border border-border px-3 py-1 rounded-full"><FaAws />AWS</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3; 
          }
          25% { 
            transform: translateY(-8px) translateX(4px); 
            opacity: 0.5; 
          }
          50% { 
            transform: translateY(-12px) translateX(-2px); 
            opacity: 0.7; 
          }
          75% { 
            transform: translateY(-4px) translateX(6px); 
            opacity: 0.5; 
          }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;