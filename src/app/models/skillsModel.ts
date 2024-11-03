export type skillsModel = {
    id: number;
    skillName: string;
    score: number;
    classification: string;
};

export type socialHandles = {
    id: number;
    socialIconName: IconName;
    socialUrl: string;
};

type IconName = "FaWhatsapp" | "FaGithub" | "FaEnvelope" | "FaLinkedin";

export interface DynamicFaIconProps {
  iconName: IconName;
}
