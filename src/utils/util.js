/*
 * @FilePath: /Users/i104/vite3/src/utils/util.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import { ValueType } from 'enum'

const getValueType = value => Object.prototype.toString.call(value)

const isArray = value => getValueType(value) === ValueType.ARRAY
const isObject = value => getValueType(value) === ValueType.OBJECT
const isBlob = value => getValueType(value) === ValueType.BLOB
const isFile = value => getValueType(value) === ValueType.FILE
const isBlank = value => value === ''
const isFalseValue = value => isBlank(value) || [ValueType.NULL, ValueType.UNDEFINED].includes(getValueType(value)) || value === false

export {
    getValueType,
    isArray,
    isObject,
    isBlob,
    isFile,
    isBlank,
    isFalseValue
}