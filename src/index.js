/* @flow */
import _ from 'lodash';

/**
 * Simple syntactic sugar over setTimeout that looks good when using the async/await pattern.
 * @param {ms} number - Time to wait for in milliseconds.
 * @return {Promise<void>} A promise that resolves when the given time has ended.
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

/**
 * Formats a numeric string MAC address by adding the the right colon charactes.
 * @param {String} plainMacAddress The MAC address without the colon characters.
 * @returns {String} The MAC address with the colon characters.
 */
export const formatMacAddress = (plainMacAddress: string = ''): string => {
  const splittedValues = plainMacAddress.match(/.{1,2}/g);
  return splittedValues ? splittedValues.join(':') : '';
};

/**
 * Transforms a number to its hexadecimal representation.
 * @param {Number} num The number to convert.
 * @returns {String} The hexadecimal representation of the input number.
 */
export const numberToHex = (num: number): string => num.toString(16);

/**
 * Transforms an hexadecimal numeric string to its numeric value.
 * @param {String} hex The hexadecimal string to convert.
 * @returns {Number} The numeric representation of the input string.
 */
export const hexToNumber = (hex: string): number => parseInt(hex, 16);

/**
 * Returns a new array containing the contents of the array list, followed by the given element/s.
 * @param {any[]} array The array.
 * @param {any/any} el The value/values to push.
 * @returns {any[]} The new array.
 */
export const append = (originalArray: any[], el: any | any[]): any[] =>
  Array.isArray(el) ? [...originalArray, ...el] : [...originalArray, el];

/**
 * Removes an element from the array (returns a new array).
 * Doesn't work with collections (array of objects).
 * @param {any[]} array The array.
 * @param {any} el The value to pull.
 * @returns {any[]} The new array.
 */
export const remove = (originalArray: any[], el: any | any[]): any[] =>
  Array.isArray(el) ? _.remove(originalArray, x => x === el) : _.without(originalArray, el);

/**
 * Iterates over elements of the array/collection, deleting the first element predicate returns
 * truthy for and returning a new array.
 * See Lodash.find() for more info on the quey param.
 * @param {any[]} array The collection to inspect.
 * @param {Object} query The function invoked per iteration / Object used for the query.
 * @returns {any[]} The new array (without the found elements).
 */
export const removeBy = (originalArray: any[], query: { [string]: any }): any[] => {
  const elementIndex = _.findIndex(originalArray, query);
  const clonedArray = _.cloneDeep(originalArray);
  if (elementIndex === -1) {
    return clonedArray;
  } else {
    _.pullAt(clonedArray, elementIndex);
    return clonedArray;
  }
};

/**
 * Removes an element from an array if it exists in it, otherwise pushes it (aka toggles it).
 * Returns a new array.
 * @param {any[]} array The array to inspect and update.
 * @param {any} el The value to push/pull.
 * @returns {any[]} The new array.
 */
export const appendOrRemove = (array: any[], el: any): any[] =>
  array.indexOf(el) === -1 ? append(array, el) : remove(array, el);

/**
 * Parses a string to an integer.
 * Useful for converting environment variable (while maintaing the 0 values).
 * @param {Number|String} input The string to convert to integer.
 * @param {Number} defaultOutput Returned if the string is not a valid number.
 * @return {Number} The integer output.
 */
export const toInt = (input: string | number, defaultOutput: number): number => {
  if (typeof input === 'number') {
    return input;
  }
  if (input !== undefined && input !== null && !isNaN(input)) {
    return Number.parseInt(input, 10);
  } else {
    return defaultOutput;
  }
};

/**
 * Creates a new object composed of all the properties of the input object that do not
 * have an undefined value.
 * @param {Object} obj The input object.
 * @return {Object} A new object without  properties with undefined values.
 */
export const omitUndefined = (obj: Object): Object => _.omitBy(obj, _.isUndefined);

/**
 * Creates a new object composed of all the properties of the input object that do not
 * have an null value.
 * @param {Object} obj The input object.
 * @return {Object} A new object without  properties with null values.
 */
export const omitNull = (obj: Object): Object => _.omitBy(obj, _.isNull);

/**
 * Creates a new object composed of all the properties of the input object that do not
 * have an undefined or null value.
 * @param {Object} obj The input object.
 * @return {Object} A new object without properties with undefined and null values.
 */
export const omitNil = (obj: Object): Object => _.omitBy(obj, _.isNil);

/**
 * Formats bytes in a readable string.
 * @param {Number} bytes The bytes to format.
 * @return {String} The formatted bytes.
 */
export const formatBytes = (bytes: number): string => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]}`;
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};

export default {
  delay,
  formatMacAddress,
  numberToHex,
  hexToNumber,
  append,
  remove,
  removeBy,
  appendOrRemove,
  toInt,
  omitUndefined,
  omitNull,
  omitNil,
  formatBytes,
};
