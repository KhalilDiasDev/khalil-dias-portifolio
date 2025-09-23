import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: '#',
      label: 'Projetos no GitHub'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: '#',
      label: 'Perfil no LinkedIn'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:khalil@email.com',
      label: 'Enviar email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Khalil Dias</h3>
            <p className="text-background/80 mb-4">
              Desenvolvedor Full Stack especializado em cibersegurança, 
              IAM e soluções em nuvem.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 rounded-full bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-background/80">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="hover:text-background transition-colors"
                >
                  Início
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-background transition-colors"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="hover:text-background transition-colors"
                >
                  Experiência
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-background transition-colors"
                >
                  Projetos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-background transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-2 text-background/80">
              <p>khalil@email.com</p>
              <p>+55 (11) 99999-9999</p>
              <p>São Paulo, Brasil</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © {currentYear} Khalil Dias. Todos os direitos reservados.
            </p>
            <p className="text-background/60 text-sm flex items-center gap-2 mt-2 md:mt-0">
              Feito com <Heart className="h-4 w-4 text-red-400" /> usando React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;