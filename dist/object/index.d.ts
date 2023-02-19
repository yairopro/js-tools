export const filterProperties: (accept: any) => (object: any) => any;
export const flatProperties: (depth?: number) => (object: any) => any;
export const groupProperties: (by: any, groupsNeeded: any) => (object: any) => any;
export const mapKeys: (to: any) => (object: any) => any;
export const mapProperties: (to: any) => ((object: any) => any) | undefined;
export const reduceObject: (to: any, factorInitial: any) => (object: any) => any;
