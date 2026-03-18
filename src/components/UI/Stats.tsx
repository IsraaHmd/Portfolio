import "./styles/Stats.css";

interface StatItem {
  value: string;
  label: string;
}

interface StatsProps {
  stats: StatItem[];
}

export default function Stats({ stats }: StatsProps) {
  return (
    <div className="stats grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-16 px-8 lg:px-16">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-item flex flex-col items-center text-center p-6 rounded-2xl">
          <span className="stat-value text-3xl font-bold">{stat.value}</span>
          <span className="stat-label text-sm mt-2">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}