const labels = ["Team", "M1", "M2", "M3", "M4", "Review"];

export default function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-between">
      {labels.map((label, i) => (
        <div key={label} className="flex flex-1 items-center">
          <div
            className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${
              i <= step
                ? "bg-[#7A0C14] text-white"
                : "border border-[#A89274] text-[#8B7355]"
            }`}
          >
            {i + 1}
          </div>

          {i !== labels.length - 1 && (
            <div
              className={`h-[2px] flex-1 ${
                i < step ? "bg-[#7A0C14]" : "bg-[#C8B08B]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}