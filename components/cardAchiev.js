function CardAchievement({ achievement }) {
  return (
      <div className="flex items-center space-x-8">
        <div>
            <h1 className="text-sm font-medium">Tahun</h1>
            <p className="text-3xl lg:text-4xl font-bold">{achievement.tahun}</p>
        </div>
        <div>
            <h1 className="text-2xl lg:text-3xl font-bold">{achievement.juara}</h1>
            <p className="text-gray-500 text-sm lg:text-base">{achievement.ketLomba}</p>
        </div>
      </div>  
  );
}

export default CardAchievement;
