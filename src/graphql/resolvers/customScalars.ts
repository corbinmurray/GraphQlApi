/*************************************

Created On: 04-14-2021
Author: Corbin Murray
Description: Customer scalars that show the client exactly what to send and what they'll recieve.

*************************************/

import { GraphQLScalarType, Kind } from "graphql";

export const DateTime = new GraphQLScalarType({
  name: "DateTime",
  description: "A date and time, represented as an ISO-8601 formatted string.",
  serialize: (value: Date) => value.toISOString(),
  parseValue: (value: string) => new Date(value),
  parseLiteral: (ast) =>
    ast.kind !== Kind.NULL &&
    (ast.kind === Kind.STRING || ast.kind === Kind.INT)
      ? new Date(ast.value)
      : undefined,
});

export const BufferType = new GraphQLScalarType({
  name: "Buffer",
  description: "A buffer type will represent bytea, blob, and jsonb types.",
  serialize: (value: Buffer) => {
    try {
      return value.toString();
    } catch (err) {
      return undefined;
    }
  },
  parseValue: (value: any) => {
    try {
      return Buffer.from(value);
    } catch (err) {
      return undefined;
    }
  },
  parseLiteral: (ast) => {
    if (ast.kind !== Kind.NULL && ast.kind === Kind.STRING) {
      try {
        return Buffer.from(ast.value);
      } catch (err) {
        return undefined;
      }
    }
  },
});
