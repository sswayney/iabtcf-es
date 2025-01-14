[@iabtcf/core - API Documentation](../README.md) > [PurposeRestriction](../classes/purposerestriction.md)

# Class: PurposeRestriction

## Hierarchy

**PurposeRestriction**

## Index

### Constructors

* [constructor](purposerestriction.md#constructor)

### Properties

* [restrictionType](purposerestriction.md#restrictiontype)
* [hashSeparator](purposerestriction.md#hashseparator)

### Accessors

* [hash](purposerestriction.md#hash)
* [purposeId](purposerestriction.md#purposeid)

### Methods

* [isSameAs](purposerestriction.md#issameas)
* [isValid](purposerestriction.md#isvalid)
* [unHash](purposerestriction.md#unhash)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PurposeRestriction**(purposeId?: *`undefined` \| `number`*, restrictionType?: *[RestrictionType](../enums/restrictiontype.md)*): [PurposeRestriction](purposerestriction.md)

*Defined in [model/PurposeRestriction.ts:9](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L9)*

constructor

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` purposeId | `undefined` \| `number` |
| `Optional` restrictionType | [RestrictionType](../enums/restrictiontype.md) |

**Returns:** [PurposeRestriction](purposerestriction.md)

___

## Properties

<a id="restrictiontype"></a>

###  restrictionType

**● restrictionType**: *[RestrictionType](../enums/restrictiontype.md)*

*Defined in [model/PurposeRestriction.ts:9](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L9)*

___
<a id="hashseparator"></a>

### `<Static>` hashSeparator

**● hashSeparator**: *`string`* = "-"

*Defined in [model/PurposeRestriction.ts:6](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L6)*

___

## Accessors

<a id="hash"></a>

###  hash

**get hash**(): `string`

*Defined in [model/PurposeRestriction.ts:52](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L52)*

**Returns:** `string`

___
<a id="purposeid"></a>

###  purposeId

**get purposeId**(): `number`

**set purposeId**(idNum: *`number`*): `void`

*Defined in [model/PurposeRestriction.ts:69](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L69)*

**Returns:** `number`
The purpose Id associated with a publisher purpose-by-vendor restriction that resulted in a different consent or LI status than the consent or LI purposes allowed lists.

*Defined in [model/PurposeRestriction.ts:79](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L79)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| idNum | `number` |  The purpose Id associated with a publisher purpose-by-vendor restriction that resulted in a different consent or LI status than the consent or LI purposes allowed lists. |

**Returns:** `void`
The purpose Id associated with a publisher purpose-by-vendor restriction that resulted in a different consent or LI status than the consent or LI purposes allowed lists.

___

## Methods

<a id="issameas"></a>

###  isSameAs

▸ **isSameAs**(otherPR: *[PurposeRestriction](purposerestriction.md)*): `boolean`

*Defined in [model/PurposeRestriction.ts:90](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L90)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| otherPR | [PurposeRestriction](purposerestriction.md) |

**Returns:** `boolean`

___
<a id="isvalid"></a>

###  isValid

▸ **isValid**(): `boolean`

*Defined in [model/PurposeRestriction.ts:85](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L85)*

**Returns:** `boolean`

___
<a id="unhash"></a>

### `<Static>` unHash

▸ **unHash**(hash: *`string`*): [PurposeRestriction](purposerestriction.md)

*Defined in [model/PurposeRestriction.ts:35](https://github.com/chrispaterson/iabtcf/blob/ef31894/modules/core/src/model/PurposeRestriction.ts#L35)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| hash | `string` |

**Returns:** [PurposeRestriction](purposerestriction.md)

___

