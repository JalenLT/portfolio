import CustomCard from "./custom_card";
import Image from "next/image";
import user_data from "@/data/user_data.json";

export default function EducationCard(){
    return (
        <CustomCard>
            <h2 className="text-[#a89989] text-3xl md:text-5xl font-semibold text-shadow-sm mb-4">
                Education
            </h2>
            {user_data.education.map((education, index) => (
                <div key={`education-${index}`} className="flex items-center gap-3 mb-3">
                    <div className="shrink rounded-5 overflow-hidden">
                        <Image src={education.image} alt={`${education.institute} Logo`} width={100} height={100} />
                    </div>
                    <div>
                        <p className="text-[#746352] font-bold text-xl md:text-2xl">{education.institute}</p>
                        <p className="text-[#746352] font-semibold text-md md:text-xl">{education.degree}</p>
                        <p className="text-[#746352]">{education.duration}</p>
                    </div>
                </div>
            ))}
        </CustomCard>
    );
}