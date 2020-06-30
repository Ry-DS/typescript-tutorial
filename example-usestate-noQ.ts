type ReactUseStateReturnType<T> = [T, (val: T | ((prevState: T) => T)) => void];


// the declare keyword is how most APIs define their types.
// Used correctly, it lets you define types for already existing functions, so they are compatible with TS
// notice how we don't actually write the function, just its types.
// declare works on almost anything, including modules
// this doesn't carry over to runtime, its treated exactly like a type and is basically saying this function exists in the global scope,
declare function useState<T>(initialValue: T): ReactUseStateReturnType<T>;

const [state, setState] = useState<'f' | 'g'>('f');

