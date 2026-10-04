import { projects } from "./projects.js";
import { getRepository } from "./github.js";

const swiperWrapper = document.querySelector(".swiper-wrapper");
const loader = document.querySelector("#project-loader");

export async function renderProjects() {
  if (!swiperWrapper) return;

  // Exibe o loader antes de iniciar as buscas
  if (loader) loader.style.display = "block";

  try {
    // Ordena os projetos conforme a configuração
    const orderedProjects = [...projects].sort((a, b) => a.order - b.order);

    // Dispara todas as requisições em paralelo
    const projectPromises = orderedProjects.map((project) => getRepository(project.repo));
    const repositories = await Promise.all(projectPromises);

    // Limpa o conteúdo atual
    swiperWrapper.replaceChildren();
    const fragment = document.createDocumentFragment();

    // Renderiza apenas os projetos que retornaram dados válidos
    repositories.forEach((repository, index) => {
      if (repository) {
        const card = createProjectCard(orderedProjects[index], repository);
        fragment.appendChild(card);
      }
    });

    swiperWrapper.appendChild(fragment);
  } catch (error) {
    console.error("Erro ao carregar projetos:", error);
  } finally {
    // Esconde o loader independentemente de sucesso ou erro
    if (loader) loader.style.display = "none";
  }
}

// Funções de criação do DOM
function createProjectCard(project, repository) {
  const slide = document.createElement("div");
  slide.className = "swiper-slide";

  const card = document.createElement("article");
  card.className = "project-card";

  card.append(createProjectImage(project, repository), createProjectContent(project, repository));
  slide.appendChild(card);
  return slide;
}

function createProjectImage(project, repository) {
  const figure = document.createElement("figure");
  figure.className = "project-image";

  const image = document.createElement("img");
  image.loading = "lazy";
  image.decoding = "async";
  image.src = `./assets/img/projects/${project.image}`;
  image.alt = `Preview do projeto ${repository.name || project.name}`;
  figure.appendChild(image);
  return figure;
}

function createProjectContent(project, repository) {
  const content = document.createElement("div");
  content.className = "project-content";

  const title = document.createElement("h3");

  // Se existir um nome no objeto project, usa ele; senão, usa o do GitHub
  title.textContent = project.name || repository.name;

  const description = document.createElement("p");
  const repoDescription =
    repository.description && repository.description !== "Projeto desenvolvido por José Rodrigues."
      ? repository.description
      : null;

  description.textContent = repoDescription || project.description || "Projeto desenvolvido por José Rodrigues.";

  content.append(title, description, createTechnologies(project.technologies), createButtons(project, repository));

  return content;
}

function createTechnologies(technologies) {
  const container = document.createElement("div");
  container.className = "project-tags";

  technologies.forEach((technology) => {
    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = technology;
    container.appendChild(tag);
  });
  return container;
}

function createButtons(project, repository) {
  const buttons = document.createElement("div");
  buttons.className = "project-buttons";
  buttons.append(createGithubButton(repository), createDeployButton(project, repository));
  return buttons;
}

function createGithubButton(repository) {
  const button = document.createElement("a");
  button.href = repository.url;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.className = "botao botao-sm";
  button.textContent = "GitHub";
  return button;
}

function createDeployButton(project, repository) {
  const button = document.createElement("a");
  button.textContent = "Deploy";

  const homepage = repository.homepage || project.homepage;

  if (homepage) {
    button.href = homepage;
    button.target = "_blank";
    button.rel = "noopener noreferrer";
    button.className = "botao-outline botao-sm";
  } else {
    button.className = "botao-outline botao-sm invisible-button";
    button.setAttribute("aria-hidden", "true");
    button.tabIndex = -1;
  }
  return button;
}
