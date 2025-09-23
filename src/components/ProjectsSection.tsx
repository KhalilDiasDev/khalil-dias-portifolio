import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Headphones, GraduationCap, Settings, LayoutDashboard, CircleDollarSign } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
  
    {
      title: 'Keycloak Manager',
      description: 'Personalização completa das interfaces e arquitetura do Keycloak, incluindo redesign da sidebar, masthead e Account UI para melhor experiência do usuário.',
      icon: Settings,
      technologies: ['Keycloak', 'React', 'PatternFly', 'Ant Design', 'IAM'],
      features: [
        'Interface administrativa redesenhada',
        'Account UI moderna',
        'SPIs customizados',
        'Fluxos de autenticação para segurança avançada'
      ],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'API Business Model Canvas',
      description: 'Saas que permite arquitetos, product owners e analistas mapear requisitos de dados, modelar o valor do produto, identificar gaps de APIs e desenhar fluxos de dados e contratos de API de forma colaborativa.',
      icon: LayoutDashboard ,
      technologies: [
        'React',
        'React Flow',
        'Node.js',
        'Gemini 2.0',
        'WebSocket',
        'MongoDB'
      ],
      features: [
        'Canvas visual para desenhar e organizar APIs (React Flow)',
        'Geração e sugestão de especificações assistida por IA (Gemini 2.0)',
        'Colaboração em tempo real entre arquitetos e PMs via WebSocket',
        'Mapeamento de requisitos de dados e value proposition para APIs',
        'Persistência de modelos e metadados em MongoDB',
      ],
      links: {
        demo: 'https://konneqt.io/qap-canvas/',
        github: 'https://github.com/qriar-labs/qap-canvas-support'
      }
    }
,    
    {
      title: 'Sistema de Controle de Reembolsos',
      description: 'Sistema completo de gestão financeira para reembolsos com CRUD integrado ao SQL (Strapi), hospedado em nuvem com interface moderna.',
      icon: CircleDollarSign,
      technologies: ['React', 'Node.js', 'SQL Server', 'Cloud Hosting'],
      features: [
        'CRUD completo para transações',
        'Relatórios financeiros detalhados',
        'Interface responsiva',
        'Backup automático em nuvem'
      ],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'IntegraEDU',
      description: 'Protótipo para análise de dados educacionais em redes municipais de ensino, integrando micro e macrodados para gestores educacionais.',
      icon: GraduationCap,
      technologies: ['React', 'Data Analytics', 'SQL Server', 'Dashboard'],
      features: [
        'Análise de performance educacional',
        'Dashboards interativos para gestores',
        'Integração de múltiplas fontes de dados',
        'Visualizações em tempo real'
      ],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Projetos
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus projetos mais relevantes e inovadores
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <project.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">Características:</h4>
                <ul className="space-y-2">
                  {project.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.links.demo} className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.links.github} className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;