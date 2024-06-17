/// <reference types="vite/client" />
interface FormProps {
    shapeForms: ShapeFormType,
    onSubmit: (ev: FormEvent) => void
}
type ShapeFormType = ShapeFormSection[]
type ShapeFormSection = { id: string, sectionLabel: string, fields: ShapeFormValues[] }
type ShapeFormValues = { label: string, placeholder?: string, type: string }

//USER

type User = {
    token: string;
} | null;

type UserContext = {
    user: User;
    setUser: (user: User) => void;
};

type ComponentProps = {
    children: ReactNode;
};