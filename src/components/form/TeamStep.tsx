import FormInput from "./FormInput";

export default function TeamStep({ team, setTeam }: any) {
  return (
    <div>
      <h2 className="mb-8 font-cinzel text-2xl text-[#2B2118]">
        Team Details
      </h2>

      <div className="grid gap-5 md:grid-cols-2">
        <FormInput
          label="Team Name *"
          placeholder="Enter team name"
          value={team.teamName}
          onChange={(v) => setTeam({ ...team, teamName: v })}
        />

        <FormInput
          label="Team Leader *"
          placeholder="Enter leader name"
          value={team.leader}
          onChange={(v) => setTeam({ ...team, leader: v })}
        />

        <FormInput
          label="Year *"
          placeholder="FE / SE / TE / BE"
          value={team.year}
          onChange={(v) => setTeam({ ...team, year: v })}
        />

        <FormInput
          label="Department *"
          placeholder="EXTC"
          value={team.department}
          onChange={(v) => setTeam({ ...team, department: v })}
        />
      </div>

      {/* Participant Type */}
      <div className="mt-8">
        <label className="mb-3 block text-sm font-medium text-[#4B3726]">
          Participant Type
        </label>

        <div className="flex gap-4">
          <button className="rounded-full bg-[#7A0C14] px-5 py-2 text-sm text-white">
            SFIT
          </button>

          <button className="rounded-full border border-[#A89274] px-5 py-2 text-sm text-[#4B3726]">
            CKG
          </button>
        </div>
      </div>
    </div>
  );
}