import { InputEmail, InputPassword, InputText } from "@/components/Form/Input/input";
// import { Form } from '../../containers/Form/form'
import { Field } from "@/components/Form/Field/Field";
// import { Title } from "@/components/Common/Typography/Typography";
// import { Form, FormProps } from "@/components/Action/Form/Form";
import { Button } from "@/components/Common/Action/action";
import styles from './RegisterForm.module.scss'
import clsx from "clsx";
import { Form, FormProps } from "@/components/Form/Form";

export type RegisterFormProps = {
    className?: string;
    formSettings?: Omit<FormProps, 'children'>;
}

export function RegisterForm({ className, formSettings }: RegisterFormProps) {
    return <Form {...formSettings} method = 'post' className={clsx(styles.container, className)}
    >
        {/* <Title>Sing Up</Title> */}
        <Field>
            <InputText name="name" placeholder="Name" />
        </Field>
        <Field>
            <InputEmail name="email" placeholder="email@example.com" />
        </Field>
        <Field>
            <InputPassword name="password" placeholder="password" />
        </Field>
        <Field>
            <InputPassword name="repeat password" placeholder="repeat password" />
        </Field>
        <Button type="submit" name="singup">Sing Up</Button>
    </Form>
}