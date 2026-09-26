interface Props {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}

export default function FormInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-[#4B3726]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[#C8A96A]/40 bg-[#F4E8CF]/70 px-4 py-3 text-[#2B2118] placeholder:text-[#8B7355] focus:border-[#7A0C14] focus:outline-none"
      />
    </div>
  );
}