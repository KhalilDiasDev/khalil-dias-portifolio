import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Building2, Code2, Shield, Cloud } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Desenvolvedor Pleno em Cibersegurança',
      company: 'Foco em IAM',
      period: '2023 - Presente',
      icon: Shield,
      description: 'Desenvolvimento e manutenção de sistemas de Identity and Access Management (IAM).',
      achievements: [
        'Criação de SPIs customizados para Keycloak',
        'Integração de cabeçalhos de e-mail (List-Unsubscribe)',
        'Customização completa das interfaces Admin UI e Account UI',
        'Implementação de fluxos de autenticação condicional (Magic Link, FaceID/WebAuthn)',
        'Integrações avançadas com AWS SES SMTP'
      ],
      technologies: ['Keycloak', 'React', 'Ant Design', 'PatternFly', 'AWS SES', 'SNS', 'Lambda', 'DynamoDB']
    },
    {
      title: 'Desenvolvedor de Sistemas Web',
      company: 'Infraestrutura em Nuvem',
      period: '2022 - 2023',
      icon: Code2,
      description: 'Criação de protótipos e sistemas completos utilizando tecnologias modernas.',
      achievements: [
        'Desenvolvimento de aplicações React com Node.js',
        'Integração com bancos de dados SQL Server',
        'Implementação de APIs REST',
        'Pipelines serverless na AWS',
        'Hospedagem e CI/CD em Netlify e AWS'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'SQL Server', 'AWS', 'Netlify']
    },
    {
      title: 'Pesquisador e Desenvolvedor',
      company: 'Projetos Acadêmicos',
      period: '2021 - 2022',
      icon: Building2,
      description: 'Desenvolvimento de projetos inovadores em educação e turismo virtual.',
      achievements: [
        'IntegraEDU: análise de dados educacionais para gestores',
        'Turismo Amazônia VR: realidade virtual aplicada ao turismo',
        'Sistema de controle de gastos com CRUD completo',
        'Integração de micro e macrodados educacionais'
      ],
      technologies: ['React', 'SQL Server', 'VR Technologies', 'Data Analytics']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Experiência Profissional
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Uma jornada de crescimento e especialização em tecnologias modernas
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="p-8 shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <exp.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>

                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-4">{exp.company}</p>
                  <p className="text-muted-foreground mb-6">{exp.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Principais Realizações:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Tecnologias:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="bg-accent/50 text-accent-foreground hover:bg-accent"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;