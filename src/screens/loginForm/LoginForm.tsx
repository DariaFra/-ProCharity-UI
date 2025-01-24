import { Button } from "@/components/Common/Action/action";
import { InputEmail, InputPassword } from "@/components/Common/Input/Input";
import clsx from 'clsx'
import styles from './LoginForm.module.scss'
import { FormProps } from "@/components/Form/Form";
import { Field } from "@/components/Form/Field/Field";
import { Title } from "@/components/Common/Typography/Typography";
import { Form } from "react-router";


export type LoginFormProps = {
    className?: string;
    formSettings?: Omit<FormProps, 'children'>;
}

export function LoginForm({ className, formSettings }: LoginFormProps) {
    return <Form {...formSettings} action='/login' method = 'POST' className={clsx(styles.container, className)}
    >
        <Title>Sing In</Title>
        <Field>
            <InputEmail placeholder="email@example.com" />
        </Field>
        <Field>
            <InputPassword placeholder="password" />
        </Field>
        <Button type="button" name="singin">Sing In</Button>
    </Form>
}