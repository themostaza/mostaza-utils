# mostaza-utils 
#### Our own utilities

# Setup
This library is available on npm, install it with: `npm install --save mostaza-utils`

## API
<dl>
<dt><a href="#delay">delay</a> ⇒ <code>Promise.&lt;void&gt;</code></dt>
<dd><p>Simple syntactic sugar over setTimeout that looks good when using the async/await pattern.</p>
</dd>
<dt><a href="#formatMacAddress">formatMacAddress</a> ⇒ <code>String</code></dt>
<dd><p>Formats a numeric string MAC address by adding the the right colon charactes.</p>
</dd>
<dt><a href="#numberToHex">numberToHex</a> ⇒ <code>String</code></dt>
<dd><p>Transforms a number to its hexadecimal representation.</p>
</dd>
<dt><a href="#hexToNumber">hexToNumber</a> ⇒ <code>Number</code></dt>
<dd><p>Transforms an hexadecimal numeric string to its numeric value.</p>
</dd>
<dt><a href="#append">append</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Returns a new array containing the contents of the array list, followed by the given element/s.</p>
</dd>
<dt><a href="#remove">remove</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Removes an element from the array (returns a new array).
Doesn&#39;t work with collections (array of objects).</p>
</dd>
<dt><a href="#removeBy">removeBy</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Iterates over elements of the array/collection, deleting the first element predicate returns
truthy for and returning a new array.
See Lodash.find() for more info on the quey param.</p>
</dd>
<dt><a href="#appendOrRemove">appendOrRemove</a> ⇒ <code>Array.&lt;any&gt;</code></dt>
<dd><p>Removes an element from an array if it exists in it, otherwise pushes it (aka toggles it).
Returns a new array.</p>
</dd>
<dt><a href="#toInt">toInt</a> ⇒ <code>Number</code></dt>
<dd><p>Parses a string to an integer.
Useful for converting environment variable (while maintaing the 0 values).</p>
</dd>
<dt><a href="#omitUndefined">omitUndefined</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a new object composed of all the properties of the input object that do not
have an undefined value.</p>
</dd>
<dt><a href="#omitNull">omitNull</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a new object composed of all the properties of the input object that do not
have an null value.</p>
</dd>
<dt><a href="#omitNil">omitNil</a> ⇒ <code>Object</code></dt>
<dd><p>Creates a new object composed of all the properties of the input object that do not
have an undefined or null value.</p>
</dd>
<dt><a href="#formatBytes">formatBytes</a> ⇒ <code>String</code></dt>
<dd><p>Formats bytes in a readable string.</p>
</dd>
</dl>

<a name="delay"></a>

## delay ⇒ <code>Promise.&lt;void&gt;</code>
Simple syntactic sugar over setTimeout that looks good when using the async/await pattern.

**Kind**: global variable
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the given time has ended.

| Param | Type | Description |
| --- | --- | --- |
| number | <code>ms</code> | Time to wait for in milliseconds. |

<a name="formatMacAddress"></a>

## formatMacAddress ⇒ <code>String</code>
Formats a numeric string MAC address by adding the the right colon charactes.

**Kind**: global variable
**Returns**: <code>String</code> - The MAC address with the colon characters.

| Param | Type | Description |
| --- | --- | --- |
| plainMacAddress | <code>String</code> | The MAC address without the colon characters. |

<a name="numberToHex"></a>

## numberToHex ⇒ <code>String</code>
Transforms a number to its hexadecimal representation.

**Kind**: global variable
**Returns**: <code>String</code> - The hexadecimal representation of the input number.

| Param | Type | Description |
| --- | --- | --- |
| num | <code>Number</code> | The number to convert. |

<a name="hexToNumber"></a>

## hexToNumber ⇒ <code>Number</code>
Transforms an hexadecimal numeric string to its numeric value.

**Kind**: global variable
**Returns**: <code>Number</code> - The numeric representation of the input string.

| Param | Type | Description |
| --- | --- | --- |
| hex | <code>String</code> | The hexadecimal string to convert. |

<a name="append"></a>

## append ⇒ <code>Array.&lt;any&gt;</code>
Returns a new array containing the contents of the array list, followed by the given element/s.

**Kind**: global variable
**Returns**: <code>Array.&lt;any&gt;</code> - The new array.

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | The array. |
| el | <code>any/any</code> | The value/values to push. |

<a name="remove"></a>

## remove ⇒ <code>Array.&lt;any&gt;</code>
Removes an element from the array (returns a new array).
Doesn't work with collections (array of objects).

**Kind**: global variable
**Returns**: <code>Array.&lt;any&gt;</code> - The new array.

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | The array. |
| el | <code>any</code> | The value to pull. |

<a name="removeBy"></a>

## removeBy ⇒ <code>Array.&lt;any&gt;</code>
Iterates over elements of the array/collection, deleting the first element predicate returns
truthy for and returning a new array.
See Lodash.find() for more info on the quey param.

**Kind**: global variable
**Returns**: <code>Array.&lt;any&gt;</code> - The new array (without the found elements).

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | The collection to inspect. |
| query | <code>Object</code> | The function invoked per iteration / Object used for the query. |

<a name="appendOrRemove"></a>

## appendOrRemove ⇒ <code>Array.&lt;any&gt;</code>
Removes an element from an array if it exists in it, otherwise pushes it (aka toggles it).
Returns a new array.

**Kind**: global variable
**Returns**: <code>Array.&lt;any&gt;</code> - The new array.

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | The array to inspect and update. |
| el | <code>any</code> | The value to push/pull. |

<a name="toInt"></a>

## toInt ⇒ <code>Number</code>
Parses a string to an integer.
Useful for converting environment variable (while maintaing the 0 values).

**Kind**: global variable
**Returns**: <code>Number</code> - The integer output.

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Number</code> &#124; <code>String</code> | The string to convert to integer. |
| defaultOutput | <code>Number</code> | Returned if the string is not a valid number. |

<a name="omitUndefined"></a>

## omitUndefined ⇒ <code>Object</code>
Creates a new object composed of all the properties of the input object that do not
have an undefined value.

**Kind**: global variable
**Returns**: <code>Object</code> - A new object without  properties with undefined values.

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The input object. |

<a name="omitNull"></a>

## omitNull ⇒ <code>Object</code>
Creates a new object composed of all the properties of the input object that do not
have an null value.

**Kind**: global variable
**Returns**: <code>Object</code> - A new object without  properties with null values.

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The input object. |

<a name="omitNil"></a>

## omitNil ⇒ <code>Object</code>
Creates a new object composed of all the properties of the input object that do not
have an undefined or null value.

**Kind**: global variable
**Returns**: <code>Object</code> - A new object without properties with undefined and null values.

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | The input object. |

## formatBytes ⇒ <code>String</code>
Formats bytes in a readable string.

**Kind**: global variable
**Returns**: <code>String</code> - The formatted bytes.

| Param | Type | Description |
| --- | --- | --- |
| bytes | <code>Number</code> | The bytes to format. |