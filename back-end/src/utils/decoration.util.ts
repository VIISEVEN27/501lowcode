export function multiDebounce(delay: number, maxDelay?: number) {
    const timerMap = new Map<any, NodeJS.Timer>()
    const lastInvokeTimeMap = new Map<any, number>()
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const keyIndex: number = Reflect.getMetadata("multiDebounce", target, propertyKey)
        return {
            ...descriptor,
            value(...args: any[]): any {
                const key = args.at(keyIndex ?? -1)
                clearTimeout(timerMap.get(key))
                if (lastInvokeTimeMap.get(key) === undefined) {
                    lastInvokeTimeMap.set(key, Date.now())
                }
                if (maxDelay !== undefined && Date.now() - lastInvokeTimeMap.get(key) >= maxDelay) {
                    setTimeout(() => {
                        descriptor.value.call(this, ...args)
                        lastInvokeTimeMap.set(key, Date.now())
                    }, 0)
                } else {
                    timerMap.set(key, setTimeout(() => {
                        descriptor.value.call(this, ...args)
                        lastInvokeTimeMap.set(key, Date.now())
                    }, delay))
                }
            },
        }
    }
}

export function key(name: string | symbol) {
    return function (target: any, propertyKey: string, paramIndex: number) {
        Reflect.defineMetadata(name, paramIndex, target, propertyKey)
    }
}