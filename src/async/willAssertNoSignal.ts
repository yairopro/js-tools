import { nil } from "../types/common";

export default function willAssertNoSignal(signal: AbortSignal | nil){
	return () => signal?.throwIfAborted();
}