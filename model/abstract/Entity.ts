import Base from "./Base";
import aProperty from "../../../@/aProperty";

export default class Entity extends Base {
	@aProperty(Number)
	public id?: number;
}
