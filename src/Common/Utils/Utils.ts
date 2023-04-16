export const arrayToObj = <T>(array: string[]): Record<string, T> =>
    array.reduce((obj, item) =>
        ({ ...obj, [item]: '' }),
        {}
    )
