import { Card, CardContent } from "./card";

export default function CustomCard({children}: {children: React.ReactNode}) {
    return (
        <Card className="rounded-[28px] p-6 md:p-8 shadow-sm bg-[#f7f6f2]/90 drop-shadow-xl hover:-translate-y-0.5 transition duration-200 hover:shadow-lg border-none">
            <CardContent className="p-0">
                {children}
            </CardContent>
        </Card>
    );
}