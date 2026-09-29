"use client";

import Image from "next/image";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

import desktopBg from "@/assets/images/form-desktop.png";
import mobileBg from "@/assets/images/form-mobile.png";

import MemberForm from "@/components/form/MemberForm";

import {
  emptyMember,
  validateMember,
  validateTeam,
  type MemberData,
  type ParticipantType,
} from "@/components/form/validation";

const steps = [
  "Team",
  "M1",
  "M2",
  "M3",
  "M4",
  "Review",
];

export default function TeamRegistrationPage() {

  /* ================================================== */
  /* STEP */
  /* ================================================== */

  const [step, setStep] = useState(0);

  /* ================================================== */
  /* TEAM */
  /* ================================================== */

  const [teamName, setTeamName] =
    useState("");

  const [leaderName, setLeaderName] =
    useState("");

  const [participantType, setParticipantType] =
    useState<ParticipantType | "">("");

  /* ================================================== */
  /* MEMBERS */
  /* ================================================== */

  const [members, setMembers] =
    useState<MemberData[]>([
      { ...emptyMember },
      { ...emptyMember },
      { ...emptyMember },
      { ...emptyMember },
    ]);

  /* ================================================== */
  /* ERRORS */
  /* ================================================== */

  const [teamErrors, setTeamErrors] =
    useState<
      ReturnType<typeof validateTeam>
    >({});

  const [memberErrors, setMemberErrors] =
    useState<
      Partial<Record<keyof MemberData, string>>
    >({});

  /* ================================================== */
  /* UPDATE MEMBER */
  /* ================================================== */

  const updateMember = (
    index: number,
    data: MemberData,
  ) => {

    setMembers((current) => {
      const updated = [...current];

      updated[index] = data;

      return updated;
    });

    setMemberErrors({});
  };

  /* ================================================== */
  /* PARTICIPANT TYPE */
  /* ================================================== */

  const handleParticipantTypeChange = (
    type: ParticipantType,
  ) => {

    setParticipantType(type);

    setTeamErrors((current) => ({
      ...current,
      participantType: undefined,
    }));

    /*
     * Clear fields belonging to the previous
     * participant type.
     */

    setMembers((current) =>
      current.map((member) => ({
        ...member,
        year: "",
        branch: "",
        rollNumber: "",
        pid: "",
        collegeName: "",
      })),
    );
  };

  /* ================================================== */
  /* NEXT */
  /* ================================================== */

  const handleNext = () => {

    /* ---------------------------------------------- */
    /* TEAM */
    /* ---------------------------------------------- */

    if (step === 0) {

      const errors = validateTeam({
        teamName,
        leaderName,
        participantType,
      });

      setTeamErrors(errors);

      if (
        Object.keys(errors).length > 0
      ) {
        return;
      }

      setStep(1);

      return;
    }

    /* ---------------------------------------------- */
    /* MEMBERS */
    /* ---------------------------------------------- */

    if (
      step >= 1 &&
      step <= 4 &&
      participantType
    ) {

      const currentMember =
        members[step - 1];

      const errors =
        validateMember(
          currentMember,
          participantType,
        );

      setMemberErrors(errors);

      if (
        Object.keys(errors).length > 0
      ) {
        return;
      }

      setStep(
        (current) => current + 1,
      );

      setMemberErrors({});

      return;
    }

    /* ---------------------------------------------- */
    /* REVIEW */
    /* ---------------------------------------------- */

    if (step === 5) {

      /*
       * Payment will be connected here.
       * For now we simply log the data.
       */

      console.log(
        "Registration Data:",
        {
          teamName,
          leaderName,
          participantType,
          members,
        },
      );

      return;
    }
  };

  /* ================================================== */
  /* BACK */
  /* ================================================== */

  const handleBack = () => {

    if (step === 0) {
      return;
    }

    setStep(
      (current) => current - 1,
    );

    setTeamErrors({});
    setMemberErrors({});
  };

  /* ================================================== */
  /* CURRENT MEMBER */
  /* ================================================== */

  const currentMember =
    step >= 1 && step <= 4
      ? members[step - 1]
      : null;

  /* ================================================== */
  /* UI */
  /* ================================================== */

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#120B08]">

      {/* ================================================== */}
      {/* DESKTOP BACKGROUND */}
      {/* ================================================== */}

      <Image
        src={desktopBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="hidden object-cover md:block"
      />

      {/* ================================================== */}
      {/* MOBILE BACKGROUND */}
      {/* ================================================== */}

      <Image
        src={mobileBg}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover md:hidden"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* ================================================== */}
      {/* PAGE */}
      {/* ================================================== */}

      <section className="relative z-10 mx-auto min-h-screen w-full max-w-5xl px-3 py-4 sm:px-5 sm:py-6 md:px-8 md:py-12">

        {/* ================================================== */}
        {/* GLASS CONTAINER */}
        {/* ================================================== */}

        <div className="relative rounded-[22px] border border-[#C8A96A]/20 bg-white/5 p-4 shadow-2xl backdrop-blur-[2px] sm:rounded-[28px] sm:p-6 md:p-10">

          {/* ================================================== */}
          {/* HEADER */}
          {/* ================================================== */}

          <div className="text-center">

            <p className="text-[9px] uppercase tracking-[0.4em] text-[#7A0C14] sm:text-[10px]">
              MOSAIC 2026
            </p>

            <h1 className="mt-2 font-serif text-[30px] font-bold leading-none tracking-wide text-[#2B2118] sm:text-4xl md:text-5xl">
              THE CONJURING
            </h1>

            <p className="mt-2 text-[8px] uppercase tracking-[0.3em] text-[#7A0C14] sm:text-[10px] sm:tracking-[0.35em]">
              PARANORMAL INVESTIGATION
            </p>

          </div>

          {/* ================================================== */}
          {/* PROGRESS */}
          {/* ================================================== */}

          <div className="mt-7 sm:mt-8">

            <div className="mb-3 flex items-center justify-between text-[10px] text-[#6B4F3A] sm:text-xs">

              <span>
                {step === 0
                  ? "Team Details"
                  : step <= 4
                    ? `Member ${step}`
                    : "Review"}
              </span>

              <span>
                {step + 1} / {steps.length}
              </span>

            </div>

            <div className="flex items-center">

              {steps.map(
                (label, index) => (
                  <div
                    key={label}
                    className="flex flex-1 items-center"
                  >

                    {/* STEP CIRCLE */}

                    <div
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[9px] font-bold transition sm:h-8 sm:w-8 sm:text-xs ${
                        index < step
                          ? "bg-[#7A0C14] text-white"
                          : index === step
                            ? "border-2 border-[#7A0C14] bg-[#E8D9BF] text-[#7A0C14]"
                            : "border border-[#A68A67] bg-white/10 text-[#7C6348]"
                      }`}
                    >
                      {index < step ? (
                        <Check size={14} />
                      ) : (
                        index + 1
                      )}
                    </div>

                    {/* LINE */}

                    {index <
                      steps.length - 1 && (
                      <div
                        className={`h-[2px] flex-1 transition ${
                          index < step
                            ? "bg-[#7A0C14]"
                            : "bg-[#C7AF8A]"
                        }`}
                      />
                    )}

                  </div>
                ),
              )}

            </div>
          </div>

          {/* ================================================== */}
          {/* STEP 0 — TEAM */}
          {/* ================================================== */}

          {step === 0 && (
            <div className="mt-9 sm:mt-10">

              <div className="mb-7">

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#7A0C14] sm:text-xs">
                  Case File
                </p>

                <h2 className="mt-2 font-serif text-[28px] font-bold leading-none text-[#2B2118] sm:text-3xl">
                  Team Details
                </h2>

                <p className="mt-3 text-[13px] leading-6 text-[#6F5A46] sm:text-sm">
                  Begin the investigation by
                  registering your team.
                </p>

              </div>

              <div className="space-y-5 sm:space-y-6">

                {/* TEAM NAME */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-[#4B3726]">
                    Team Name *
                  </label>

                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => {

                      setTeamName(
                        e.target.value,
                      );

                      setTeamErrors(
                        (current) => ({
                          ...current,
                          teamName:
                            undefined,
                        }),
                      );
                    }}
                    placeholder="Enter team name"
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3.5 text-[15px] text-[#2B2118] placeholder:text-[#816A53] backdrop-blur-[3px] outline-none transition focus:bg-white/20 ${
                      teamErrors.teamName
                        ? "border-[#7A0C14]"
                        : "border-[#B89563]/50 focus:border-[#7A0C14]"
                    }`}
                  />

                  {teamErrors.teamName && (
                    <p className="mt-1.5 text-xs font-medium text-[#7A0C14]">
                      {teamErrors.teamName}
                    </p>
                  )}

                </div>

                {/* LEADER */}

                <div>

                  <label className="mb-2 block text-sm font-medium text-[#4B3726]">
                    Team Leader Name *
                  </label>

                  <input
                    type="text"
                    value={leaderName}
                    onChange={(e) => {

                      setLeaderName(
                        e.target.value,
                      );

                      setTeamErrors(
                        (current) => ({
                          ...current,
                          leaderName:
                            undefined,
                        }),
                      );
                    }}
                    placeholder="Enter team leader name"
                    className={`w-full rounded-xl border bg-white/10 px-4 py-3.5 text-[15px] text-[#2B2118] placeholder:text-[#816A53] backdrop-blur-[3px] outline-none transition focus:bg-white/20 ${
                      teamErrors.leaderName
                        ? "border-[#7A0C14]"
                        : "border-[#B89563]/50 focus:border-[#7A0C14]"
                    }`}
                  />

                  {teamErrors.leaderName && (
                    <p className="mt-1.5 text-xs font-medium text-[#7A0C14]">
                      {teamErrors.leaderName}
                    </p>
                  )}

                </div>

                {/* PARTICIPANT TYPE */}

                <div>

                  <label className="mb-3 block text-sm font-medium text-[#4B3726]">
                    Participant Type *
                  </label>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">

                    {/* SFIT */}

                    <button
                      type="button"
                      onClick={() =>
                        handleParticipantTypeChange(
                          "SFIT",
                        )
                      }
                      className={`min-h-[100px] rounded-2xl border p-4 text-left transition active:scale-[0.98] sm:min-h-[120px] sm:p-5 ${
                        participantType ===
                        "SFIT"
                          ? "border-[#7A0C14] bg-[#7A0C14]/10 shadow-sm"
                          : "border-[#B89563]/50 bg-white/10 hover:bg-white/20"
                      }`}
                    >

                      <div className="flex h-full flex-col justify-between">

                        <div className="flex justify-end">

                          <span
                            className={`h-4 w-4 rounded-full border-2 ${
                              participantType ===
                              "SFIT"
                                ? "border-[#7A0C14] bg-[#7A0C14]"
                                : "border-[#A68A67]"
                            }`}
                          />

                        </div>

                        <div>

                          <p className="font-semibold text-[#2B2118]">
                            SFIT
                          </p>

                          <p className="mt-1 text-[10px] leading-4 text-[#6F5A46] sm:text-xs">
                            SFIT students
                          </p>

                        </div>

                      </div>

                    </button>

                    {/* OTHER */}

                    <button
                      type="button"
                      onClick={() =>
                        handleParticipantTypeChange(
                          "Other",
                        )
                      }
                      className={`min-h-[100px] rounded-2xl border p-4 text-left transition active:scale-[0.98] sm:min-h-[120px] sm:p-5 ${
                        participantType ===
                        "Other"
                          ? "border-[#7A0C14] bg-[#7A0C14]/10 shadow-sm"
                          : "border-[#B89563]/50 bg-white/10 hover:bg-white/20"
                      }`}
                    >

                      <div className="flex h-full flex-col justify-between">

                        <div className="flex justify-end">

                          <span
                            className={`h-4 w-4 rounded-full border-2 ${
                              participantType ===
                              "Other"
                                ? "border-[#7A0C14] bg-[#7A0C14]"
                                : "border-[#A68A67]"
                            }`}
                          />

                        </div>

                        <div>

                          <p className="font-semibold text-[#2B2118]">
                            Other
                          </p>

                          <p className="mt-1 text-[10px] leading-4 text-[#6F5A46] sm:text-xs">
                            Other colleges
                          </p>

                        </div>

                      </div>

                    </button>

                  </div>

                  {teamErrors.participantType && (
                    <p className="mt-1.5 text-xs font-medium text-[#7A0C14]">
                      {
                        teamErrors.participantType
                      }
                    </p>
                  )}

                </div>

                {/* INFO */}

                <div className="rounded-xl border border-[#7A0C14]/20 bg-[#7A0C14]/5 p-4">

                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#7A0C14]">
                    Registration
                  </p>

                  <p className="mt-1 text-[13px] text-[#4B3726]">
                    Exactly 4 investigators
                    per team.
                  </p>

                </div>

              </div>
            </div>
          )}

          {/* ================================================== */}
          {/* MEMBER */}
          {/* ================================================== */}

          {currentMember &&
            participantType && (
              <div className="mt-9 sm:mt-10">

                <MemberForm
                  member={currentMember}
                  memberNumber={step}
                  participantType={
                    participantType
                  }
                  errors={memberErrors}
                  onChange={(data) =>
                    updateMember(
                      step - 1,
                      data,
                    )
                  }
                />

              </div>
            )}

          {/* ================================================== */}
          {/* REVIEW */}
          {/* ================================================== */}

          {step === 5 && (
            <div className="mt-9 sm:mt-10">

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#7A0C14] sm:text-xs">
                Final Check
              </p>

              <h2 className="mt-2 font-serif text-[29px] font-bold leading-none text-[#2B2118] sm:text-3xl">
                Review Registration
              </h2>

              <p className="mt-3 text-[13px] leading-6 text-[#6F5A46] sm:text-sm">
                Check all details carefully
                before proceeding to payment.
              </p>

              {/* TEAM */}

              <div className="mt-7 rounded-2xl border border-[#B89563]/40 bg-white/10 p-4 sm:p-5">

                <p className="text-[9px] uppercase tracking-[0.2em] text-[#7A0C14]">
                  Team
                </p>

                <p className="mt-2 text-lg font-semibold text-[#2B2118] sm:text-xl">
                  {teamName}
                </p>

                <div className="mt-2 space-y-1 text-[13px] text-[#6B4F3A]">

                  <p>
                    Leader:{" "}
                    <span className="font-medium">
                      {leaderName}
                    </span>
                  </p>

                  <p>
                    Participant Type:{" "}
                    <span className="font-medium">
                      {participantType}
                    </span>
                  </p>

                </div>

              </div>

              {/* MEMBERS */}

              <div className="mt-4 space-y-3">

                {members.map(
                  (member, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#B89563]/40 bg-white/10 p-4 sm:p-5"
                    >

                      <div className="flex items-start justify-between gap-3">

                        <div>

                          <p className="text-[9px] uppercase tracking-[0.2em] text-[#7A0C14]">
                            Member {index + 1}
                          </p>

                          <p className="mt-1 text-base font-semibold text-[#2B2118]">
                            {member.fullName}
                          </p>

                        </div>

                      </div>

                      {participantType ===
                      "SFIT" ? (
                        <div className="mt-3 space-y-1 text-[12px] leading-5 text-[#6B4F3A]">

                          <p>
                            {member.year} •{" "}
                            {member.branch}
                          </p>

                          <p>
                            Roll No:{" "}
                            {member.rollNumber}
                          </p>

                          <p>
                            PID: {member.pid}
                          </p>

                        </div>
                      ) : (
                        <div className="mt-3 text-[12px] leading-5 text-[#6B4F3A]">

                          <p>
                            {member.year} •{" "}
                            {member.collegeName}
                          </p>

                        </div>
                      )}

                      <div className="mt-3 border-t border-[#B89563]/20 pt-3 text-[12px] leading-5 text-[#6B4F3A]">

                        <p>
                          {member.phone}
                        </p>

                        <p className="break-all">
                          {member.email}
                        </p>

                      </div>

                    </div>
                  ),
                )}

              </div>

            </div>
          )}

          {/* ================================================== */}
          {/* NAVIGATION */}
          {/* ================================================== */}

          <div className="mt-9 flex items-center justify-between border-t border-[#A68A67]/30 pt-5 sm:mt-12 sm:pt-6">

            {/* BACK */}

            <button
              type="button"
              disabled={step === 0}
              onClick={handleBack}
              className="
                flex
                min-h-[46px]
                items-center
                gap-2
                rounded-xl
                border
                border-[#A68A67]/50
                bg-white/10
                px-4
                text-xs
                font-medium
                text-[#4B3726]
                transition
                hover:bg-white/20
                active:scale-[0.98]
                disabled:cursor-not-allowed
                disabled:opacity-30
                sm:px-5
                sm:text-sm
              "
            >
              <ArrowLeft size={16} />

              <span>
                Back
              </span>
            </button>

            {/* NEXT */}

            {step < 5 ? (
              <button
                type="button"
                onClick={handleNext}
                className="
                  flex
                  min-h-[46px]
                  items-center
                  gap-2
                  rounded-xl
                  bg-[#7A0C14]
                  px-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white
                  shadow-[0_8px_20px_rgba(122,12,20,0.2)]
                  transition
                  hover:bg-[#93131E]
                  active:scale-[0.98]
                  sm:px-7
                  sm:text-sm
                "
              >
                Next
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleNext}
                className="
                  min-h-[46px]
                  rounded-xl
                  bg-[#7A0C14]
                  px-5
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.12em]
                  text-white
                  shadow-[0_8px_20px_rgba(122,12,20,0.2)]
                  transition
                  hover:bg-[#93131E]
                  active:scale-[0.98]
                  sm:px-7
                  sm:text-sm
                "
              >
                Proceed to Payment
              </button>
            )}

          </div>

        </div>
      </section>
    </main>
  );
}