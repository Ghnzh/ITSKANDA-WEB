import achievementList from "@/app/json/achievements.json"
import CardAchievement from "@/components/achievement/card";
import Footer from "@/components/footer"
import Header from "@/components/header/page";

export const metadata = {
    title: 'Achievement | ITSKANDA',
    description: 'SKANDA TI WEBSITE',
  }

export default function achievementsPage() {
    const renderAchiev = () => {
        return achievementList.map((achievement) => <CardAchievement key={achievement.id} achievement={achievement} />);
      };
    return (
        <>
        <Header judul={'Achievements'} desc={`${achievementList.length} Trophy`} />

        <div className="bg-cream lg:px-36 lg:pb-28 px-10 pb-12 lg:-mt-44 -mt-52 rounded-t-3xl">
            <div className="grid lg:grid-cols-2 mb-12 lg:gap-16 gap-y-10">
                {renderAchiev()}
            </div>
        </div>
        <Footer />
        </>
    )
}