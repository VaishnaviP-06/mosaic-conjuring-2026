interface Props {
  member: any;
  setMember: (v: any) => void;
  title: string;
}

export default function MemberForm({ member, setMember, title }: Props) {
  const update = (key: string, value: string) =>
    setMember({ ...member, [key]: value });

  return (
    <div>

      <h3 className="font-cinzel text-3xl mb-6 text-[#E8D9BF]">
        {title}
      </h3>

      <div className="grid gap-4 md:grid-cols-2">

        {[
          ["name", "Full Name"],
          ["year", "Year"],
          ["department", "Department"],
          ["roll", "Roll Number"],
          ["pid", "PID"],
          ["phone", "Phone"],
          ["email", "Email"],
        ].map(([key, label]) => (
          <input
            key={key}
            placeholder={label}
            value={member[key]}
            onChange={(e) => update(key, e.target.value)}
            className="input"
          />
        ))}

      </div>

    </div>
  );
}