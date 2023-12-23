export type PasswordStrength = {
  label: string;
  color: string;
  score: number;
};

export const calculatePasswordStrength = (
  password: string
): PasswordStrength => {
  let score = 0;
  if (!password) {
    return { label: "None", color: "gray", score: 0 };
  }
  const lengthCriteria = password.length >= 8;
  const lowercaseCriteria = /[a-z]/.test(password);
  const uppercaseCriteria = /[A-Z]/.test(password);
  const numberCriteria = /[0-9]/.test(password);
  const specialCharCriteria = /[^A-Za-z0-9]/.test(password);

  if (lengthCriteria) score += 20;
  if (lowercaseCriteria) score += 20;
  if (uppercaseCriteria) score += 20;
  if (numberCriteria) score += 20;
  if (specialCharCriteria) score += 20;

  // Determine label and color based on the score
  let label;
  let color;

  if (score < 40) {
    label = "Weak";
    color = "red";
  } else if (score < 60) {
    label = "Fair";
    color = "orange";
  } else if (score < 80) {
    label = "Good";
    color = "blue";
  } else {
    label = "Strong";
    color = "green";
  }

  return { label, color, score };
};
