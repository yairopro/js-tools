import Generator from "./Generator"
import {Nullable} from "../types";

export default class AutoMap<T> {
	private generator = new Generator();
	private content: {[key: string]: T} = {};
	public _keys: string[] = [];

	add(value: T): string {
		const key = this.generator.getNewString();
		this.content[key] = value;
		this._keys.push(key);
		return key;
	}

	getKeys(): string[] {
		return [...this._keys];
	}

	remove(key: string) {
		delete this.content[key];
		const index = this._keys.indexOf(key);
		if (index >= 0)
			this._keys.splice(index, 1);
	}

	get(key: string): Nullable<T> {
		return this.content[key];
	}
}
