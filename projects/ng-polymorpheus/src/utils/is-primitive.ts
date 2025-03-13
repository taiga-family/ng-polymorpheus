export function isPrimitive(value: unknown): boolean {
    return Object(value) !== value;
}
