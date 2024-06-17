/// <reference types="vite/client" />
interface FormProps {
    shapeForm: ShapeFormType
}
type ShapeFormType = ShapeFormValues[]
type ShapeFormValues = { label: string, placeholder?: string, type: string }