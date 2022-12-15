import { ZodTypeDef } from "zod";
import { getDefaultOptions, Options } from "./Options";
import { JsonSchema7Type } from "./parseDef";

export type Refs = {
  seen: Seen[];
  currentPath: string[];
  propertyPath: string[] | undefined;
} & Options;

export type Seen = {
  def: ZodTypeDef;
  path: string[];
  jsonSchema: JsonSchema7Type | undefined;
};

export const getRefs = (options?: string | Partial<Options>): Refs => {
  const _options = getDefaultOptions(options);
  const currentPath =
    _options.name !== undefined
      ? [..._options.basePath, _options.definitionPath, _options.name]
      : _options.basePath;
  return {
    ..._options,
    currentPath: currentPath,
    propertyPath: undefined,
    seen: [],
  };
};