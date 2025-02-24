export interface InputDateProps {
    label: string;
    width?: string;
    selected?: Date | null;
    startDate?: Date | null;
    endDate?: Date | null;
    onChange: (dates: [Date | null, Date | null]) => void;
};
