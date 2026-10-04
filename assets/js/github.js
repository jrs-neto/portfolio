const BASE_URL = "https://api.github.com/repos/jrs-neto";

export async function getRepository(repo) {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    let response = await fetch(`${BASE_URL}/${repo}`, { headers });

    if (!response.ok) {
      throw new Error(`Erro ${response.status} ao buscar o repositório: ${repo}`);
    }

    const data = await response.json();

    return {
      name: data.name,
      description: data.description,
      homepage: data.homepage,
      url: data.html_url,
      stars: data.stargazers_count,
      updatedAt: data.updated_at,
      topics: data.topics,
    };
  } catch (error) {
    console.error(`Falha ao obter repositório "${repo}":`, error);
    return {
      name: repo,
      description: "Projeto desenvolvido por José Rodrigues.",
      homepage: null,
      url: `https://github.com/jrs-neto/${repo}`,
      stars: 0,
      updatedAt: null,
      topics: [],
    };
  }
}
