import CardAchievement from "@/components/achievement/card";
import Footer from "@/components/footer";
import Header from "@/components/header/page";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const metadata = {
  title: "Achievement | ITSKANDA",
  description: "SKANDA TI WEBSITE",
};

export default async function achievementsPage() {
  const achievement = await prisma.achievements.findMany();

  const renderAchiev = () => {
    return achievement.map((achievement) => (
      <CardAchievement key={achievement.id} achievement={achievement} />
    ));
  };
  return (
    <>
      <Header judul={"Achievements"} desc={`${achievement.length} Trophy`} />

      <div className="bg-cream lg:px-36 lg:pb-28 px-10 pb-12 lg:-mt-44 -mt-60 rounded-t-3xl">
        <div className="grid lg:grid-cols-2 mb-12 lg:gap-16 gap-y-10">
          {renderAchiev()}
        </div>
      </div>
      <Footer />
    </>
  );
}
