import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

const HeroSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      label: 'Ver projetos no GitHub'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      label: 'Conectar no LinkedIn'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:khalil@email.com',
      label: 'Enviar email'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          {/* Profile Photo */}
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt="Khalil Dias - Desenvolvedor Full Stack"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto shadow-glow object-cover"
            />
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Khalil Dias
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Desenvolvedor Full Stack com foco em aplicações web modernas, 
            integração com sistemas de identidade (IAM/Keycloak) e soluções em nuvem.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="gradient-primary text-white shadow-glow">
              <Mail className="mr-2 h-5 w-5" />
              Entre em Contato
            </Button>
            <Button variant="outline" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="p-3 rounded-full bg-card shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6 text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;