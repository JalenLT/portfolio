import CustomCard from "./custom_card";
import Image from "next/image";
import { Badge } from "../ui/badge";
import user_data from "@/data/user_data.json";

export default function ExperienceCard(){
    return (
        <CustomCard>
            <h2 className="text-[#a89989] text-3xl md:text-5xl font-semibold text-shadow-sm mb-4">
                Experience
            </h2>
            {user_data.experience.map((experience, index) => (
                <div key={`experience-${index}`} className="flex gap-3 mb-3">
                    <div className="relative shrink-0 overflow-hidden rounded-lg w-[80px] h-[80px]">
                        <Image
                            src={experience.image}
                            alt={`${experience.company} Logo`}
                            fill
                            className="object-contain"
                        />
                    </div>

                    <div className="grow">
                        <p className="text-[#746352] font-bold text-xl md:text-2xl">
                            {experience.title}
                        </p>
                        <p className="text-[#746352] font-semibold text-md md:text-xl">
                            {experience.company}
                        </p>
                        <div className="md:flex md:justify-between">
                            <p className="text-[#a89989] text-md md:text-lg font-semibold text-shadow-sm">
                                {experience.duration_dates}
                            </p>
                            <div className="flex justify-start">
                                <Badge className="border-[#a89989] text-[#a89989] bg-light font-bold md:mx-1">
                                    {experience.duration_time}
                                </Badge>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </CustomCard>
    );
}