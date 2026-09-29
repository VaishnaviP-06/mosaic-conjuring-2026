export type ParticipantType = "SFIT" | "Other";

export interface MemberData {
  fullName: string;
  year: string;
  branch: string;
  rollNumber: string;
  pid: string;
  collegeName: string;
  phone: string;
  email: string;
}

export interface TeamData {
  teamName: string;
  leaderName: string;
  participantType: ParticipantType | "";
}

/* ================================================== */
/* SFIT OPTIONS */
/* ================================================== */

export const SFIT_YEARS = [
  "FE",
  "SE",
  "TE",
  "BE",
];

export const SFIT_BRANCHES = [
  "AI/ML",
  "CMPN",
  "ECS",
  "EXTC",
  "IT",
  "MECH",
];

/* ================================================== */
/* OTHER COLLEGE OPTIONS */
/* ================================================== */

export const OTHER_YEARS = [
  "First Year",
  "Second Year",
  "Third Year",
  "Final Year",
];

/* ================================================== */
/* EMPTY MEMBER */
/* ================================================== */

export const emptyMember: MemberData = {
  fullName: "",
  year: "",
  branch: "",
  rollNumber: "",
  pid: "",
  collegeName: "",
  phone: "",
  email: "",
};

/* ================================================== */
/* TEAM VALIDATION */
/* ================================================== */

export function validateTeam(
  data: TeamData,
) {
  const errors: Partial<
    Record<keyof TeamData, string>
  > = {};

  if (!data.teamName.trim()) {
    errors.teamName =
      "Team name is required.";
  }

  if (!data.leaderName.trim()) {
    errors.leaderName =
      "Team leader name is required.";
  }

  if (!data.participantType) {
    errors.participantType =
      "Please select a participant type.";
  }

  return errors;
}

/* ================================================== */
/* MEMBER VALIDATION */
/* ================================================== */

export function validateMember(
  member: MemberData,
  participantType: ParticipantType,
) {
  const errors: Partial<
    Record<keyof MemberData, string>
  > = {};

  /* ---------------------------------------------- */
  /* FULL NAME */
  /* ---------------------------------------------- */

  if (!member.fullName.trim()) {
    errors.fullName =
      "Full name is required.";
  } else if (
    member.fullName.trim().length < 2
  ) {
    errors.fullName =
      "Please enter a valid name.";
  }

  /* ---------------------------------------------- */
  /* YEAR */
  /* ---------------------------------------------- */

  if (!member.year) {
    errors.year =
      "Please select a year.";
  }

  /* ---------------------------------------------- */
  /* SFIT */
  /* ---------------------------------------------- */

  if (participantType === "SFIT") {

    if (!member.branch) {
      errors.branch =
        "Please select a branch / stream.";
    }

    if (!member.rollNumber.trim()) {
      errors.rollNumber =
        "Roll number is required.";
    }

    if (!member.pid.trim()) {
      errors.pid =
        "PID is required.";
    }
  }

  /* ---------------------------------------------- */
  /* OTHER */
  /* ---------------------------------------------- */

  if (participantType === "Other") {

    if (!member.collegeName.trim()) {
      errors.collegeName =
        "College name is required.";
    }
  }

  /* ---------------------------------------------- */
  /* PHONE */
  /* ---------------------------------------------- */

  if (!member.phone.trim()) {
    errors.phone =
      "Phone number is required.";
  } else if (
    !/^[6-9]\d{9}$/.test(
      member.phone.trim(),
    )
  ) {
    errors.phone =
      "Enter a valid 10-digit phone number.";
  }

  /* ---------------------------------------------- */
  /* EMAIL */
  /* ---------------------------------------------- */

  if (!member.email.trim()) {
    errors.email =
      "Email address is required.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      member.email.trim(),
    )
  ) {
    errors.email =
      "Enter a valid email address.";
  }

  return errors;
}