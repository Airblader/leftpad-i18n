/**
  * Pads the given input to at least the specified length using a given character.
  * If the rtl flag is set, the padding occurs from the right.
  * If the input's length is greater than or equal to the specified length, it is
  * returned unchanged (but stringified).
  *
  * Note that the padding character is not validated to be a single character.
  */
declare function leftPad(input: string|number, length: number, char: string|number = ' ', rtl: boolean = false): string;

export = leftPad;
