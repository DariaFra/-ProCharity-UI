interface RegisterData {
    message: string;
}

export const getRegisterDate = (): Promise<RegisterData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ({message: 'Register Page'})
        }, 500)
    })
}