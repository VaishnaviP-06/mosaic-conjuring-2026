"use client";

import { ChevronDown } from "lucide-react";

import {
  OTHER_YEARS,
  SFIT_BRANCHES,
  SFIT_YEARS,
  type MemberData,
  type ParticipantType,
} from "./validation";

interface MemberFormProps {
  member: MemberData;
  memberNumber: number;
  participantType: ParticipantType;
  errors: Partial<Record<keyof MemberData, string>>;
  onChange: (data: MemberData) => void;
}

function FieldError({ message }: { message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p className="mt-1.5 text-xs font-medium text-[#7A0C14]">
      {message}
    </p>
  );
}

const inputBase =
  "w-full rounded-xl border bg-white/10 px-4 py-3.5 text-[15px] text-[#2B2118] placeholder:text-[#816A53] backdrop-blur-[3px] outline-none transition focus:bg-white/20";

export default function MemberForm({
  member,
  memberNumber,
  participantType,
  errors,
  onChange,
}: MemberFormProps) {
  const isSFIT = participantType === "SFIT";

  const update = (
    field: keyof MemberData,
    value: string,
  ) => {
    onChange({
      ...member,
      [field]: value,
    });
  };

  const getInputClass = (
    field: keyof MemberData,
  ) => {
    return `${inputBase} ${
      errors[field]
        ? "border-[#7A0C14]"
        : "border-[#B89563]/50 focus:border-[#7A0C14]"
    }`;
  };

  return (
    <div>

      {/* ============================================ */}
      {/* MEMBER HEADER */}
      {/* ============================================ */}

      <div className="mb-8">

        <p className="text-[9px] uppercase tracking-[0.3em] text-[#7A0C14] sm:text-xs">
          Investigator {memberNumber}
        </p>

        <h2 className="mt-2 font-serif text-[30px] font-bold leading-none text-[#2B2118] sm:text-3xl">
          MEMBER {memberNumber}
          <br className="sm:hidden" /> DETAILS
        </h2>

        <p className="mt-3 text-[13px] leading-6 text-[#6F5A46] sm:text-sm">
          Enter the details exactly as they appear on
          the student ID.
        </p>

      </div>

      <div className="space-y-5 sm:space-y-6">

        {/* ============================================ */}
        {/* FULL NAME */}
        {/* ============================================ */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#4B3726]">
            Full Name *
          </label>

          <input
            type="text"
            value={member.fullName}
            onChange={(e) =>
              update("fullName", e.target.value)
            }
            placeholder="Enter full name"
            autoComplete="name"
            className={getInputClass("fullName")}
          />

          <FieldError message={errors.fullName} />
        </div>

        {/* ============================================ */}
        {/* YEAR */}
        {/* ============================================ */}

        <div>
          <label className="mb-2 block text-sm font-medium text-[#4B3726]">
            Year *
          </label>

          <div className="relative">

            <select
              value={member.year}
              onChange={(e) =>
                update("year", e.target.value)
              }
              className={`${getInputClass("year")} appearance-none pr-11`}
            >
              <option value="">Select year</option>

              {isSFIT
                ? SFIT_YEARS.map((year) => (
                    <option
                      key={year}
                      value={year}
                    >
                      {year}
                    </option>
                  ))
                : OTHER_YEARS.map((year) => (
                    <option
                      key={year}
                      value={year}
                    >
                      {year}
                    </option>
                  ))}
            </select>

            <ChevronDown
              size={18}
              className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A0C14]"
            />

          </div>

          <FieldError message={errors.year} />
        </div>

        {/* ============================================ */}
        {/* SFIT ONLY */}
        {/* ============================================ */}

        {isSFIT && (
          <>
            {/* BRANCH */}
            <div>

              <label className="mb-2 block text-sm font-medium text-[#4B3726]">
                Branch / Stream *
              </label>

              <div className="relative">

                <select
                  value={member.branch}
                  onChange={(e) =>
                    update(
                      "branch",
                      e.target.value,
                    )
                  }
                  className={`${getInputClass("branch")} appearance-none pr-11`}
                >
                  <option value="">
                    Select branch / stream
                  </option>

                  {SFIT_BRANCHES.map((branch) => (
                    <option
                      key={branch}
                      value={branch}
                    >
                      {branch}
                    </option>
                  ))}
                </select>

                <ChevronDown
                  size={18}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A0C14]"
                />

              </div>

              <FieldError message={errors.branch} />

            </div>

            {/* ROLL NUMBER */}
            <div>

              <label className="mb-2 block text-sm font-medium text-[#4B3726]">
                Roll Number *
              </label>

              <input
                type="text"
                value={member.rollNumber}
                onChange={(e) =>
                  update(
                    "rollNumber",
                    e.target.value,
                  )
                }
                placeholder="Enter roll number"
                className={getInputClass(
                  "rollNumber",
                )}
              />

              <FieldError
                message={errors.rollNumber}
              />

            </div>

            {/* PID */}
            <div>

              <label className="mb-2 block text-sm font-medium text-[#4B3726]">
                PID *
              </label>

              <input
                type="text"
                value={member.pid}
                onChange={(e) =>
                  update(
                    "pid",
                    e.target.value,
                  )
                }
                placeholder="Enter PID"
                className={getInputClass("pid")}
              />

              <FieldError message={errors.pid} />

            </div>
          </>
        )}

        {/* ============================================ */}
        {/* OTHER ONLY */}
        {/* ============================================ */}

        {!isSFIT && (
          <div>

            <label className="mb-2 block text-sm font-medium text-[#4B3726]">
              College Name *
            </label>

            <input
              type="text"
              value={member.collegeName}
              onChange={(e) =>
                update(
                  "collegeName",
                  e.target.value,
                )
              }
              placeholder="Enter college name"
              className={getInputClass(
                "collegeName",
              )}
            />

            <FieldError
              message={errors.collegeName}
            />

          </div>
        )}

        {/* ============================================ */}
        {/* PHONE */}
        {/* ============================================ */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#4B3726]">
            Phone Number *
          </label>

          <input
            type="tel"
            inputMode="numeric"
            value={member.phone}
            onChange={(e) => {
              const value = e.target.value
                .replace(/\D/g, "")
                .slice(0, 10);

              update("phone", value);
            }}
            placeholder="Enter 10-digit phone number"
            maxLength={10}
            autoComplete="tel"
            className={getInputClass("phone")}
          />

          <FieldError message={errors.phone} />

        </div>

        {/* ============================================ */}
        {/* EMAIL */}
        {/* ============================================ */}

        <div>

          <label className="mb-2 block text-sm font-medium text-[#4B3726]">
            Email Address *
          </label>

          <input
            type="email"
            value={member.email}
            onChange={(e) =>
              update(
                "email",
                e.target.value,
              )
            }
            placeholder="Enter email address"
            autoComplete="email"
            className={getInputClass("email")}
          />

          <FieldError message={errors.email} />

        </div>

      </div>
    </div>
  );
}