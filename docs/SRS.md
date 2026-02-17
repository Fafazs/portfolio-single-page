📄 Documento de Requisitos de Software (SRS)
Portfólio Single Page
Autor: Fabrício Nascimento Moreira
 Versão: 1.0
 Data: 17/02/2026

1. Introdução
1.1 Objetivo do Documento
Este documento descreve os requisitos funcionais e não funcionais do sistema Portfólio Single Page, servindo como base formal para desenvolvimento, validação, manutenção e futuras evoluções do projeto.

1.2 Objetivo do Sistema
Desenvolver uma aplicação web Single Page Application (SPA) com o objetivo de:
Apresentar o perfil profissional do autor


Exibir projetos desenvolvidos


Permitir interação via comentários


Registrar métricas de acesso e curtidas


Oferecer controle administrativo sobre comentários



1.3 Escopo
O sistema permitirá:
Acesso público sem autenticação


Visualização de informações profissionais


Visualização de projetos


Curtidas anônimas controladas


Comentários mediante login via Google


Moderação administrativa


Registro de métricas (acessos e curtidas)


O sistema não contempla nesta versão:
Sistema de pagamento


Chat em tempo real


Multi-admin com hierarquia complexa


Área pública de cadastro manual (apenas Google OAuth)



1.4 Definições
Termo
Definição
SPA
Single Page Application
Visitante
Usuário não autenticado
Usuário Autenticado
Usuário logado via Google
Administrador
Proprietário do portfólio
RF
Requisito Funcional
RNF
Requisito Não Funcional
RC
Requisito de Conteúdo


1.5 Stakeholders
Fabrício (Administrador)


Recrutadores


Scouts


Líderes técnicos


Visitantes gerais


Avaliadores acadêmicos (se aplicável)



2. Contexto de Uso
O sistema será utilizado por dois perfis principais:
Profissionais que acessam o portfólio via redes sociais (Instagram, LinkedIn).


Recrutadores que acessam o portfólio por meio de candidaturas.


Ambiente de uso
Navegadores modernos


Desktop e Mobile


Conexão ativa com internet


Tempo médio de permanência inicial: 30 segundos a 2 minutos


O contexto é de avaliação profissional rápida, exigindo clareza, objetividade e baixo esforço cognitivo.

3. Personas
3.1 Visitante (Recrutador/Scout)
Objetivos:
Entender rapidamente quem é o autor


Avaliar projetos


Ver provas sociais (comentários)


Decidir rapidamente se o perfil é relevante



3.2 Usuário Autenticado
Objetivos:
Deixar feedback


Interagir com o portfólio



3.3 Administrador
Objetivos:
Moderar comentários


Evitar spam


Monitorar métricas


Manter controle do sistema



4. Requisitos Funcionais
RF01
O sistema deve permitir acesso ao portfólio sem autenticação.
RF02
O sistema deve exibir informações profissionais do proprietário.
RF03
O sistema deve exibir foto do proprietário.
RF04
O sistema deve exibir lista de projetos desenvolvidos.
RF05
O sistema deve permitir login via Google OAuth.
RF06
Somente usuários autenticados podem enviar comentários.
RF07
O sistema deve exibir apenas comentários aprovados.
RF08
O administrador deve aprovar comentários antes da publicação.
RF09
O sistema deve notificar o administrador por e-mail ao receber novo comentário.
RF10
O administrador pode excluir comentários.
RF11
Usuários podem editar seus próprios comentários.
RF12
Comentários editados devem voltar ao estado pendente.
RF13
O sistema deve registrar acessos únicos por sessão ou intervalo mínimo definido.
RF14
O sistema deve permitir uma curtida anônima por sessão ou dispositivo, evitando múltiplas curtidas artificiais.
RF15
O sistema deve incrementar o contador de curtidas apenas quando o visitante clicar no botão.

5. Requisitos Não Funcionais
RNF01
As informações devem ser apresentadas de forma clara e objetiva.
RNF02
Foto, nome e título devem estar visíveis imediatamente ao carregar a página.
RNF03
O sistema deve responder em até 2 segundos em conexão banda larga (4G ou superior).
RNF04
Comentários pendentes não devem ser exibidos publicamente.
RNF05
O processo de autenticação deve ser seguro.
RNF06
O sistema deve ser responsivo (mobile e desktop).
RNF07
O layout deve ser limpo, com poucas animações e CTAs claros.

6. Requisitos de Conteúdo
6.1 Conteúdo Institucional
RC01 – Informações pessoais


RC02 – Resumo profissional


RC03 – Foto


6.2 Conteúdo de Projetos
RC04 – Lista de projetos


RC05 – Cada projeto deve conter:


Título


Descrição


Tecnologias


Imagens ou links


RC06 – Organização clara e acessível


6.3 Conteúdo de Interação
RC07 – Armazenar comentários


RC08 – Comentário deve conter:


Autor


Data


Conteúdo


Status


RC09 – Armazenar número de curtidas


6.4 Conteúdo de Métricas
RC10 – Registrar número de acessos



7. Casos de Uso
📌 Inserir aqui o Diagrama de Casos de Uso
 /docs/diagramas/casos-de-uso.png
Casos de uso mapeados:
UC01 – Visualizar Portfólio


UC02 – Visualizar Projetos


UC03 – Visualizar Comentários


UC04 – Curtir


UC05 – Registrar Acesso


UC06 – Login


UC07 – Enviar Comentário


UC08 – Editar Comentário


UC09 – Aprovar Comentário


UC10 – Excluir Comentário


UC11 – Visualizar Métricas


UC12 – Receber Notificação



8. Fluxos do Sistema
📌 Inserir Fluxograma Geral com Swimlanes
 /docs/diagramas/fluxograma-sistema.png
Deve representar:
Registro de acesso


Verificação de autenticação


Envio de comentário


Estado pendente


Notificação por e-mail


Aprovação manual


Atualização de métricas



9. Wireframes
📌 Inserir Wireframe V1
 /docs/wireframes/v1.png
📌 Inserir Wireframe V2
 /docs/wireframes/v2.png

10. Regras de Negócio
RN01 – Apenas usuários autenticados podem comentar.
 RN02 – Comentários devem ser aprovados antes da exibição.
 RN03 – Uma curtida por sessão/dispositivo.
 RN04 – Comentários editados retornam ao estado pendente.
 RN05 – Métricas devem ser registradas automaticamente ao acessar.

11. Arquitetura do Sistema
11.1 Arquitetura Geral
Client (React + Vite + TypeScript)
 ↓ REST API
 Server (Express + Prisma)
 ↓
 PostgreSQL

11.2 Modelo de Dados Inicial
User
id


name


email


role


createdAt


Project
id


title


description


imageUrl


repositoryUrl


liveUrl


userId


Comment
id


content


status (PENDING | APPROVED)


userId


createdAt



12. Checklist de Aceitação
(Manter checklist completo que você já criou aqui)
📌 Pode colar seu checklist integral nesta seção.

13. Requisitos Futuros (Backlog)
Dashboard com gráficos


Sistema de SEO otimizado


Dark mode


Upload via S3


CI/CD automatizado


Analytics avançado
