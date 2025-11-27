import project_card_data from "@/data/project_card_data.json";
import ProjectCard from "./project_card";

export default function ProjectCards(){
    return (<>
        {project_card_data.map((card, index) => {
            return <ProjectCard key={"project-card-" + index} name={card.name} description={card.description} tags={card.tags} href={card.href} />;
        })}
    </>);
}