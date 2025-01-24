import { InputEmail, InputPassword, InputText } from "@/components/Common/Input/Input";
import { Field } from "@/components/Form/Field/Field";
import { Button } from "@/components/Common/Action/action";
import styles from './RegisterForm.module.scss'
import clsx from "clsx";
import { FormProps } from "@/components/Form/Form";
import { Title } from "@/components/Common/Typography/Typography";
import { Form } from "react-router";

export type RegisterFormProps = {
    className?: string;
    formSettings?: Omit<FormProps, 'children'>;
}

export function RegisterForm({ className, formSettings }: RegisterFormProps) {
    return <Form {...formSettings} action='/register' method = 'post' className={clsx(styles.container, className)}
    >
        <Title>Sing Up</Title>
        <Field>
            <InputText placeholder="name" />
        </Field>
        <Field>
            <InputEmail placeholder="email@example.com" />
        </Field>
        <Field>
            <InputPassword placeholder="password" />
        </Field>
        <Field>
            <InputPassword placeholder="repeat password" />
        </Field>
        <Button type="submit" name="singup">Sing Up</Button>
    </Form>
}