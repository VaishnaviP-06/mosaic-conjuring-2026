interface Props {
  data: any;
  setData: (v: any) => void;
}

export default function TeamDetails({ data, setData }: Props) {
  return (
    <div className="grid gap-5 md:grid-cols-2">

      <input
        placeholder="Team Name"
        value={data.teamName}
        onChange={(e) => setData({ ...data, teamName: e.target.value })}
        className="input"
      />

      <input
        placeholder="Team Leader"
        value={data.leader}
        onChange={(e) => setData({ ...data, leader: e.target.value })}
        className="input"
      />

      <input
        placeholder="Year"
        value={data.year}
        onChange={(e) => setData({ ...data, year: e.target.value })}
        className="input"
      />

      <input
        placeholder="Department"
        value={data.department}
        onChange={(e) => setData({ ...data, department: e.target.value })}
        className="input"
      />

    </div>
  );
}