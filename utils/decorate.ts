import {ClassType, Nullable} from "../types";
import Objects from "./Objects/Objects";
import {ClassWithProperties} from "../../@/aProperty";

function decorate(Class: ClassType, propsDecorators: PropertiesDecorators): void;
function decorate(Class: ClassType, classDecorators: ClassDecorator[], propsDecorators?: PropertiesDecorators): void;

function decorate(Class: ClassType, classDecorators: PropertiesDecorators | ClassDecorator[], propsDecorators?: PropertiesDecorators) {
	if (classDecorators instanceof Array)
		classDecorators.forEach(decorate => decorate(Class));
	else
		propsDecorators = classDecorators;

	if (propsDecorators)
		Objects.forEach(propsDecorators, (decorators, property) => {
			const {properties} = <ClassWithProperties>Class;
			if (properties && !properties[property])
				console.warn(`Property ${Class.name}.${property} is programmatically decorated not declared in class. Use @aProperty decorator on it.`);

			decorators.forEach(decorate => decorate(Class.prototype, property));
		});
}

type ClassDecorator = ((Class: ClassType) => void)
	| Function; // for third party library which don't write correctly their annotations type;

type PropertyDecorator =
	((prototype: {}, name: string, description?: Nullable<PropertyDescriptor>) => Nullable<PropertyDescriptor> | void)
	| Function; // for third party library which don't write correctly their annotations type

interface PropertiesDecorators {
	[name: string]: PropertyDecorator[]
}

export default decorate;
