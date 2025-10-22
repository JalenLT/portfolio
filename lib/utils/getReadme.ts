export async function getReadme({repository}: {repository: string}){
    const username = "JalenLT";
    const repo = repository;
    const branch = "main";

    const result = await fetch(`https://raw.githubusercontent.com/${username}/${repo}/${branch}/README.md`, {
        next: {
            revalidate: 3600
        }
    });

    if(!result.ok){
        return "This project was not found.";
    }

    return result.text();
}