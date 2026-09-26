interface Props {
  current: number;
}

const steps = ["Team", "M1", "M2", "M3", "M4", "Review"];

export default function ProgressStepper({ current }: Props) {
  return (
    <div className="flex items-center justify-between mb-10">
      {steps.map((step, index) => (
        <div key={step} className="flex-1 flex items-center">
          <div
            className={`h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold border
            ${
              index <= current
                ? "bg-[#7A0C14] border-[#C8A96A] text-white"
                : "bg-transparent border-[#7B6B57] text-[#7B6B57]"
            }`}
          >
            {index + 1}
          </div>

          {index !== steps.length - 1 && (
            <div
              className={`h-[2px] flex-1 ${
                index < current ? "bg-[#C8A96A]" : "bg-[#5A5045]"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
