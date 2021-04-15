
/*************************************

Created On: 04-14-2021
Author: Corbin Murray
Description: This custom scalar makes client/server adhere to a standard date and time syntax for sharing
this kind of information. The DateTime will represent an ISO-8601 formatted string.

*************************************/

import { GraphQLScalarType, Kind } from "graphql";


export const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "A date and time, represented as an ISO-8601 formatted string",
  serialize: (value: Date) => value.toISOString(),
  parseValue: (value: string) => new Date(value),
  parseLiteral: (ast) =>
    ast.kind === Kind.STRING ? new Date(ast.value) : undefined,
});
