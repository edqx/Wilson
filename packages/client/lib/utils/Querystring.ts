export type Querystring = Record<string, string | number>;

export function stringifyQuery(object: Querystring) {
    const entries = Object.entries(object);

    return entries
        .map(([key, value]) => {
            return key + "=" + encodeURIComponent(value);
        })
        .join("&");
}
