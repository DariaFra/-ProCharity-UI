interface LoginData {
    message: string;
}

export const getLoginDate = (): Promise<LoginData> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve ({message: 'Login Page'})
        }, 500)
    })
}
