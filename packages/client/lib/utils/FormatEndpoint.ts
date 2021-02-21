export function formatEndpoint(endpoint: string, ...params: any[]) {
    let argi = 0;
    return endpoint.replace(/\{.+?\}/g, part => {
        const inner = part.substring(1, part.length - 1);
        const accessors = inner.split(".").slice(1);

        const deep_access = (obj) => {
            if (typeof obj === "string")
                return obj;

            const next = accessors.shift();

            if (next) {
                return deep_access(obj[next]);
            }

            return obj;
        }

        const accessed = deep_access(params[argi++]);

        return encodeURIComponent(accessed) as string;
    });
}
