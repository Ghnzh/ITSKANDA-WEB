import achievementList from "@/app/json/achievements.json"
import CardAchievement from "@/components/achievement/card";
import Footer from "@/components/footer"
import Header from "@/components/header/page";

export default function achievementsPage() {
    const renderAchiev = () => {
        return achievementList.map((achievement) => <CardAchievement key={achievement.id} achievement={achievement} />);
      };
    return (
        <>
        <Header judul={'Achievements'} desc={`${achievementList.length} Trophy`} />

        <div className="bg-cream lg:px-36 lg:pb-28 px-10 pb-12 -mt-44 rounded-t-3xl">
            {/* <p className="font-light italic">|| Klik untuk Melihat Info lengkap</p> */}
            <div className="grid lg:grid-cols-2 mb-12 lg:gap-16 gap-y-10">
                {renderAchiev()}
            </div>
        </div>
        <Footer />
        </>
    )
}