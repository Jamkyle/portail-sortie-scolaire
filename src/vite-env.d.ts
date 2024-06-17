/// <reference types="vite/client" />
interface FormProps {
    shapeForms: ShapeFormType,
    onSubmit: (ev: FormEvent) => void
}
type ShapeFormType = ShapeFormSection[]
type ShapeFormSection = { id: string, sectionLabel: string, fields: ShapeFormValues[] }
type ShapeFormValues = { label: string, placeholder?: string, type: string }