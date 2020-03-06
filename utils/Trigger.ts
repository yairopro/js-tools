import AutoMap from "./AutoMap"

export default class Trigger<T extends any[]> {
	private map = new AutoMap<(...params: T) => any>();

	add(callback: (...params: T) => any){
		if (!callback)
			return DO_NOTHING;

		const key = this.map.add(callback);
		return () => this.map.remove(key);
	}

	fire(...params: T){
		this.map.getKeys().forEach(key => {
			const callback = this.map.get(key);

			try {
				if (callback)
					callback(...params);
			} catch (error) {
				console.warn('Error while firing callback: ', error);
			}
		});
	}
}

const DO_NOTHING = () => {};
