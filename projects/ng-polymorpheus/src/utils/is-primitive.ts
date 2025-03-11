export function isPrimitive(value: unknown): boolean {
    return (
        value === null ||
        !(typeof value === 'object' || typeof value === 'function') ||
        value instanceof Number ||
        value instanceof String ||
        value instanceof Boolean ||
        value instanceof Symbol ||
        value instanceof BigInt
    );
}
