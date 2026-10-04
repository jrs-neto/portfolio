# Projeto Portfólio Pessoal

---

<div align="center"> 
   <img src="https://img.shields.io/badge/HTML-5-orange?style=for-the-badge&logo=html5" alt="HTML Badge" /> 
   <img src="https://img.shields.io/badge/CSS-3-blue?style=for-the-badge&logo=css&logoColor=white" alt="CSS Badge"/>
   <img src="https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript&logoColor=yellow" alt="JavaScript Badge" /> 
</div>

<br />

O **Projeto Portfólio Pessoal** é um **site profissional moderno**, desenvolvido com **HTML, CSS e JavaScript**, com o objetivo de apresentar informações sobre a pessoa desenvolvedora, suas competências técnicas, projetos em destaque e formas de contato de maneira clara, interativa e responsiva.

O projeto integra-se à **API do GitHub** para enriquecer dinamicamente os metadados dos projetos em destaque (como descrição, estrelas e links de deploy), contando com tratamento de erros e fallback para garantir a exibição contínua dos dados.

------

## Funcionalidades

- Estrutura de páginas desenvolvida com **HTML semântico**
- Estilização moderna com **CSS**, utilizando variáveis, animações e layout totalmente responsivo
- Identidade visual **Dark Theme nativa**, baseada no estilo Dark Slate & Obsidian com destaques em azul
- Integração com a **API do GitHub** para enriquecimento dinâmico dos metadados dos projetos em destaque, com sistema de fallback
- Exibição dos projetos em **carrossel interativo** utilizando **Swiper.js**
- **Menu mobile responsivo** com alternância de ícones e atributos de acessibilidade (WAI-ARIA)
- **Seção Minhas Stacks** com tecnologias e ferramentas categorizadas
- **Hero Canvas interativo** com animação dinâmica
- **Formulário de contato com validação no frontend**, garantindo o correto preenchimento dos campos
- Página dedicada de **confirmação de envio** do formulário integrada ao **FormSubmit**
- Navegação fluida com menu fixo e rolagem suave
- Interface intuitiva e organizada, focada na experiência do usuário

------

## Estrutura do Projeto

```
📁portfolio/
│
├── index.html        # Página principal do portfólio
├── success.html      # Página de confirmação de envio do formulário
│
├── 📁assets/
│   ├── 📁css/
│   │   ├── style.css     # Orquestrador principal de estilos (@import)
│   │   └── 📁modules/    # Módulos CSS desacoplados
│   │       ├── variables.css
│   │       ├── base.css
│   │       ├── buttons.css
│   │       ├── header.css
│   │       ├── footer.css
│   │       ├── hero.css
│   │       ├── about.css
│   │       ├── stacks.css
│   │       ├── projects.css
│   │       ├── contact.css
│   │       ├── success.css
│   │       └── responsive.css
│   │
│   ├── 📁js/
│   │   ├── script.js          # Orquestrador, inicialização, menu mobile e validações
│   │   ├── projects.js        # Catálogo e curadoria dos projetos em destaque
│   │   ├── renderProjects.js  # Renderização dinâmica dos cards e loader
│   │   └── github.js          # Integração e consumo da API do GitHub
│   │
│   ├── 📁img/
│   │   ├── favicon.svg
│   │   ├── perfil.png
│   │   ├── success.svg
│   │   └── 📁projects/        # Imagens de preview dos projetos
│   │
│   └── 📁icons/               # Ícones de suporte (legado)
│
└── README.md
```

------

## Tecnologias Utilizadas

- **HTML5**: Estruturação semântica do conteúdo
- **CSS3**: Estilização modular, layout responsivo e variáveis CSS
- **JavaScript (ES6+)**: Interatividade, consumo de APIs e modularização via **ES Modules**
- **Swiper.js**: Carrossel de projetos responsivo com suporte a navegação e paginação
- **FormSubmit**: Serviço de envio de e-mails via formulário HTML
- **GitHub API**: Enriquecimento dinâmico de dados dos repositórios
- **Devicon**: Ícones vetoriais das tecnologias e ferramentas na seção de stacks
- **Google Fonts**: Tipografia moderna com as famílias Inter e Fira Sans

------

## Executando Localmente

Para executar o projeto em ambiente local, siga os passos abaixo.

### Pré-requisitos

- [Visual Studio Code](https://code.visualstudio.com/) (ou outro editor de sua preferência)
- Extensão **Live Server** instalada no VS Code

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/jrs-neto/portfolio
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd portfolio
   ```

3. Abra o projeto no Visual Studio Code:

   ```bash
   code .
   ```

4. Abra o arquivo `index.html`, clique com o botão direito e selecione **"Open with Live Server"**.

O site será aberto no navegador e todas as alterações poderão ser visualizadas em tempo real.

------

## Diferenciais do Projeto

- Layout **totalmente responsivo** (desktop, tablet e mobile)
- Identidade visual **Dark Theme moderna** (paleta Slate & Obsidian com acentos em azul)
- **Arquitetura CSS modular**, facilitando a organização, manutenção e escalabilidade
- **JavaScript estruturado em ES Modules**, com divisão clara de responsabilidades
- **Menu mobile acessível** com gerenciamento de estado via WAI-ARIA
- **Hero Canvas dinâmico**, agregando sofisticação visual à experiência inicial
- **Formulário funcional** com validação no cliente e envio via FormSubmit
- Estrutura de código **limpa e semântica**, seguindo boas práticas de desenvolvimento

---

## Deploy

Este site está disponível publicamente através do **GitHub Pages**. Você pode acessar a versão online pelo link abaixo:

🔗 https://jrs-neto.github.io/portfolio/

------

## Contribuições

Contribuições são bem-vindas. Caso tenha sugestões de melhorias, correções ou novas funcionalidades, sinta-se à vontade para abrir uma **issue** ou enviar um **pull request**.