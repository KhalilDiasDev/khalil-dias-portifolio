import { Card } from '@/components/ui/card';
import { Shield, Code, Cloud, Database } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Shield,
      title: 'Cibersegurança & IAM',
      description: 'Atuação em Identity Access Management, customização do Keycloak e implementação de fluxos de autenticação seguros.'
    },
    {
      icon: Code,
      title: 'Desenvolvimento Web',
      description: 'Criação de interfaces modernas com React, TypeScript, JavaScript e desenvolvimento backend com Node.js.'
    },
    {
      icon: Cloud,
      title: 'Soluções em Nuvem',
      description: 'Integração com AWS (SES, SNS e API Gateway), uso do GCP para consulta de logs e repositório de imagens e implementação de pipelines.'
    },
    {
      icon: Database,
      title: 'Banco de Dados',
      description: 'Experiência com SQL Server, Strapi, MongoDB, Supabase, modelagem de banco de dados e integração backend/frontend eficiente.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre Mim
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Desenvolvedor atuando 3 anos no mercado de tecnologia com foco em criar soluções inovadoras e seguras
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Minha Jornada
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Sou um desenvolvedor Full Stack com experiência sólida em cibersegurança, 
                sistemas de Identity and Access Management (IAM) e 
                customização avançada do Keycloak.
              </p>
              <p>
                Minha expertise inclui o desenvolvimento de interfaces web modernas utilizando 
                React (e suas bibliotecas), TypeScript e JavaScript, sempre focando em criar experiências de usuário 
                excepcionais e sistemas altamente seguros.
              </p>
              <p>
                Tenho experiência prática em soluções cloud com AWS e GCP. Também ja desenvolvi projetos com 
                realidade virtual aplicada ao turismo e análise de dados educacionais.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title}
                className="p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-accent mb-4">
                    <skill.icon className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;