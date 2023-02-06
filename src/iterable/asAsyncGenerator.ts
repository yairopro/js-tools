export async function* asAsyncGenerator<T>(iterable: Iterable<T>) {
    yield* iterable;
}