import Base from "./Base";
import aProperty from "../../../@/aProperty";
import is from "../../utils/is";

export default class Entity extends Base {
	@aProperty(String)
	public id?: string;

	isEntityValid(toWrite: any = false) : boolean {
		return Boolean(toWrite) || is.null(this.id);
	}
}
