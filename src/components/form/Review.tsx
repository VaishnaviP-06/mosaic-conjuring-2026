export default function Review({ team, members }: any) {
  return (
    <div className="space-y-6">

      <div>
        <h2 className="font-cinzel text-3xl text-[#E8D9BF]">
          Team Summary
        </h2>
      </div>

      <div className="rounded-xl bg-white/5 p-5 border border-white/10">
        <p>
          <strong>Team:</strong> {team.teamName}
        </p>
        <p>
          <strong>Leader:</strong> {team.leader}
        </p>
        <p>
          <strong>Department:</strong> {team.department}
        </p>
      </div>

      {members.map((m: any, i: number) => (
        <div
          key={i}
          className="rounded-xl border border-white/10 bg-white/5 p-5"
        >
          <h3 className="font-semibold mb-2">Member {i + 1}</h3>
          <p>{m.name}</p>
          <p>{m.email}</p>
          <p>{m.phone}</p>
        </div>
      ))}

      <div className="rounded-xl border border-[#C8A96A]/30 bg-[#7A0C14]/20 p-5">
        <h3 className="text-xl font-semibold text-[#C8A96A]">
          Registration Fee
        </h3>
        <p className="mt-2 text-3xl font-bold">₹400</p>
        <p className="text-sm text-neutral-400">
          ₹100 × 4 Members
        </p>
      </div>

    </div>
  );
}