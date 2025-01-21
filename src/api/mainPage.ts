interface ManeData {
    message: string;
}

export const getManeDate = (): Promise<ManeData> => {
    return Promise.resolve({
        message: 'Mane Page'
    })
}