# 📄 Documento de Requisitos de Software (SRS)
## Portfólio Single Page

**Autor:** Fabrício Nascimento Moreira  
**Versão:** 1.0  
**Data:** 17/02/2026  

---

# 1. Introdução

## 1.1 Objetivo do Documento

Este documento descreve os requisitos funcionais e não funcionais do sistema **Portfólio Single Page**, servindo como base formal para desenvolvimento, validação, manutenção e futuras evoluções do projeto.

## 1.2 Objetivo do Sistema

Desenvolver uma aplicação web **Single Page Application (SPA)** com o objetivo de:

- Apresentar o perfil profissional do autor  
- Exibir projetos desenvolvidos  
- Permitir interação via comentários  
- Registrar métricas de acesso e curtidas  
- Oferecer controle administrativo sobre comentários  

## 1.3 Escopo

### O sistema permitirá:

- Acesso público sem autenticação  
- Visualização de informações profissionais  
- Visualização de projetos  
- Curtidas anônimas controladas  
- Comentários mediante login via Google OAuth  
- Moderação administrativa  
- Registro de métricas (acessos e curtidas)  

### O sistema não contempla nesta versão:

- Sistema de pagamento  
- Chat em tempo real  
- Multi-admin com hierarquia complexa  
- Área pública de cadastro manual (apenas Google OAuth)  

---

## 1.4 Definições

| Termo | Definição |
|-------|-----------|
| SPA | Single Page Application |
| Visitante | Usuário não autenticado |
| Usuário Autenticado | Usuário logado via Google |
| Administrador | Proprietário do portfólio |
| RF | Requisito Funcional |
| RNF | Requisito Não Funcional |
| RC | Requisito de Conteúdo |

---

## 1.5 Stakeholders

- Fabrício (Administrador)  
- Recrutadores  
- Scouts  
- Líderes técnicos  
- Visitantes gerais  
- Avaliadores acadêmicos (se aplicável)  

---

# 2. Contexto de Uso

O sistema será utilizado por dois perfis principais:

- Profissionais que acessam o portfólio via redes sociais  
- Recrutadores que acessam o portfólio por meio de candidaturas  

### Ambiente de uso

- Navegadores modernos  
- Desktop e Mobile  
- Conexão ativa com internet  
- Tempo médio de permanência: 30 segundos a 2 minutos  

O contexto é de avaliação profissional rápida, exigindo clareza, objetividade e baixo esforço cognitivo.

---

# 3. Personas

## 3.1 Visitante (Recrutador/Scout)

**Objetivos:**

- Entender rapidamente quem é o autor  
- Avaliar projetos  
- Ver provas sociais (comentários)  
- Decidir rapidamente se o perfil é relevante  

## 3.2 Usuário Autenticado

**Objetivos:**

- Deixar feedback  
- Interagir com o portfólio  

## 3.3 Administrador

**Objetivos:**

- Moderar comentários  
- Evitar spam  
- Monitorar métricas  
- Manter controle do sistema  

---

# 4. Requisitos Funcionais

| Código | Descrição |
|--------|-----------|
| RF01 | Permitir acesso ao portfólio sem autenticação |
| RF02 | Exibir informações profissionais |
| RF03 | Exibir foto do proprietário |
| RF04 | Exibir lista de projetos |
| RF05 | Permitir login via Google OAuth |
| RF06 | Apenas usuários autenticados podem comentar |
| RF07 | Exibir apenas comentários aprovados |
| RF08 | Administrador deve aprovar comentários |
| RF09 | Notificar administrador por e-mail |
| RF10 | Administrador pode excluir comentários |
| RF11 | Usuário pode editar próprio comentário |
| RF12 | Comentário editado volta para pendente |
| RF13 | Registrar acessos únicos |
| RF14 | Permitir uma curtida por sessão/dispositivo |
| RF15 | Incrementar contador apenas ao clicar |

---

# 5. Requisitos Não Funcionais

| Código | Descrição |
|--------|-----------|
| RNF01 | Informações claras e objetivas |
| RNF02 | Foto, nome e título visíveis imediatamente |
| RNF03 | Resposta em até 2 segundos |
| RNF04 | Comentários pendentes não exibidos |
| RNF05 | Autenticação segura |
| RNF06 | Sistema responsivo |
| RNF07 | Layout limpo e poucas animações |

---

# 6. Requisitos de Conteúdo

## 6.1 Conteúdo Institucional

- RC01 – Informações pessoais  
- RC02 – Resumo profissional  
- RC03 – Foto  

## 6.2 Conteúdo de Projetos

- RC04 – Lista de projetos  
- RC05 – Cada projeto deve conter:
  - Título  
  - Descrição  
  - Tecnologias  
  - Imagens ou links  
- RC06 – Organização clara  

## 6.3 Conteúdo de Interação

- RC07 – Armazenar comentários  
- RC08 – Comentário deve conter:
  - Autor  
  - Data  
  - Conteúdo  
  - Status  
- RC09 – Armazenar número de curtidas  

## 6.4 Conteúdo de Métricas

- RC10 – Registrar número de acessos  

---

# 7. Casos de Uso

### Diagrama de Casos de Uso

![Diagrama de Casos de Uso](diagramas/casos-de-uso.png)


### Casos mapeados:

- UC01 – Visualizar Portfólio  
- UC02 – Visualizar Projetos  
- UC03 – Visualizar Comentários  
- UC04 – Curtir  
- UC05 – Registrar Acesso  
- UC06 – Login  
- UC07 – Enviar Comentário  
- UC08 – Editar Comentário  
- UC09 – Aprovar Comentário  
- UC10 – Excluir Comentário  
- UC11 – Visualizar Métricas  
- UC12 – Receber Notificação  

---

# 8. Fluxos do Sistema

### Fluxograma Geral do Sistema

![Fluxograma do Sistema](diagramas/fluxograma-sistema.png)

---

# 9. Wireframes

### Wireframe V1

![Wireframe V1](wireframes/v1.png)

### Wireframe V2

![Wireframe V2](wireframes/v2.png)


---

# 10. Regras de Negócio

- RN01 – Apenas autenticados podem comentar  
- RN02 – Comentários devem ser aprovados  
- RN03 – Uma curtida por sessão  
- RN04 – Comentários editados retornam ao estado pendente  
- RN05 – Métricas registradas automaticamente  

---

# 11. Arquitetura do Sistema

## 11.1 Arquitetura Geral

Client (React + Vite + TypeScript)
↓ REST API
Server (Express + Prisma)
↓
PostgreSQL


## 11.2 Modelo de Dados Inicial

### User
- id  
- name  
- email  
- role  
- createdAt  

### Project
- id  
- title  
- description  
- imageUrl  
- repositoryUrl  
- liveUrl  
- userId  

### Comment
- id  
- content  
- status (PENDING | APPROVED)  
- userId  
- createdAt  

---

# 12. Checklist de Aceitação

📌 Inserir checklist completo aqui.

---

# 13. Requisitos Futuros (Backlog)

- Dashboard com gráficos  
- SEO otimizado  
- Dark mode  
- Upload via S3  
- CI/CD automatizado  
- Analytics avançado  

