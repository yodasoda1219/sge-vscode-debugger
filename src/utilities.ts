/*
	Copyright 2022 Nora Beda

	Licensed under the Apache License, Version 2.0 (the "License");
	you may not use this file except in compliance with the License.
	You may obtain a copy of the License at

		http://www.apache.org/licenses/LICENSE-2.0

	Unless required by applicable law or agreed to in writing, software
	distributed under the License is distributed on an "AS IS" BASIS,
	WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	See the License for the specific language governing permissions and
	limitations under the License.
*/

export class Queue<T> {
	public constructor() {
		this.array = [];
	}

	public push(data: T) {
		this.array.push(data);
	}

	public peek(): T | undefined {
		if (this.size === 0) {
			return undefined;
		}

		return this.array[0];
	}

	public pop(): boolean {
		if (this.size === 0) {
			return false;
		}

		this.array = this.array.slice(1);
		return true;
	}

	public get size(): number {
		return this.array.length;
	}

	private array: T[];
}

export class Stack<T> {
	public constructor() {
		this.array = [];
	}

	public push(data: T) {
		this.array.push(data);
	}

	public peek(): T | undefined {
		if (this.size === 0) {
			return undefined;
		}

		return this.array[this.array.length - 1];
	}

	public pop(): boolean {
		if (this.size === 0) {
			return false;
		}

		this.array = this.array.slice(0, this.array.length - 1);
		return true;
	}

	public get size(): number {
		return this.array.length;
	}

	private array: T[];
}

export class Dictionary<K, V> {
	public constructor() {
		this.object = {};
	}

	public set(key: K, value: V) {
		this.object[key] = value;
	}

	public get(key: K | string): V | undefined {
		return this.object[key];
	}

	public exists(key: K): boolean {
		return key in this.object;
	}

	public stringExists(key: string): boolean {
		return key in this.object;
	}

	public iterate(callback: (key: string, value: V) => void): void {
		for (let key in this.object) {
			callback(key, this.get(key)!);
		}
	}

	public get size(): number {
		let count = 0;
		this.iterate((key, value) => {
			count++;
		});

		return count;
	}

	private object: any;
}