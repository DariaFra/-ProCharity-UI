import Section from "@/components/Layout/Section/Section"
import { RegisterForm, RegisterFormProps } from "@/screens/registerForm/RegisterForm"
import { Layout } from "@/ui"

export function RegisterPage({ formSettings }: RegisterFormProps) {
    return (
        <Layout>
            <Section>
                <RegisterForm formSettings={formSettings}/>
            </Section>
        </Layout>
    )
}