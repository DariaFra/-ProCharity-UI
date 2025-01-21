interface RegisterData {
    message: string;
}

export const getregisterDate = (): Promise<RegisterData> => {
    return Promise.resolve({
        message: 'Register Page'
    })
}