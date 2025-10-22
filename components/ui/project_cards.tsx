import { ProjectCardData } from "@/data/project_card_data";
import ProjectCard from "./project_card";

export default function ProjectCards(){
    return (<>
        {ProjectCardData.map((card, index) => {
            return <ProjectCard key={"project-card-" + index} name={card.name} description={card.description} tags={card.tags} icon={card.icon} />;
        })}
    </>);
}