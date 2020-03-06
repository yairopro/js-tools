import Entity from "./Entity"
import View from "./View";
import { ClassType } from "../../types";

export default function EntityView<T extends Entity>(runTimeT: ClassType<T>) {
	runTimeT.name;

	// instead of `isAbstract`, we have to provide a unique type name used in schema
	// @ObjectType(`Paginated${TItemClass.name}Response`, {isAbstract: true})
	return class EntityViewClass extends View {
		// here we use the runtime argument
		// @Field(type => [runTimeT])
		// and here the generic type
		entity?: T;
	}
}