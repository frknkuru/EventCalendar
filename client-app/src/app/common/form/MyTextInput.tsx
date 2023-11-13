import { useField } from "formik";
import { FormField, Label } from "semantic-ui-react";

interface Props {
    placeholder: string
    name: string
    label?: string
    type?: string
    autoComplete?: string
}

export default function MyTextInput(props: Props) {
    const [field, meta] = useField(props.name);
    return (
        <FormField error={meta.touched && !!meta.error}
            autoComplete={props.autoComplete === "off" ? "new-password" : ""}>
            <label>{props.label}</label>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <Label basic color="red">{meta.error}</Label>
            ) : null}

        </FormField>
    )
}