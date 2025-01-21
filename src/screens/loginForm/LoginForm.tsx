import { Button } from "@/components/Common/Action/action";
import { InputEmail, InputPassword } from "@/components/Form/Input/input";
// import { Title } from "@/components/Common/Typography/Typography";
// import { Field } from "@/components/Form/Field/Field";
import clsx from 'clsx'
import styles from './LoginForm.module.scss'
import { Form, FormProps } from "@/components/Form/Form";
import { Field } from "@/components/Form/Field/Field";


export type LoginFormProps = {
    className?: string;
    formSettings?: Omit<FormProps, 'children'>;
}

export function LoginForm({ className, formSettings }: LoginFormProps) {
    return <Form {...formSettings} method = 'post' className={clsx(styles.container, className)}
    >
        {/* <Title>Sing In</Title> */}
        <Field>
            <InputEmail name="email" placeholder="email@example.com" />
        </Field>
        <Field>
            <InputPassword name="password" placeholder="password" />
        </Field>
        <Button type="submit" name="singin">Sing In</Button>
    </Form>
}