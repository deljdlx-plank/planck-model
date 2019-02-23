var classes = [
    {
        "name": "Planck\\Model\\Dataset",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "loadForeignEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "wrapEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 2,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 2,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "Phi\\Model\\Dataset",
            "Planck\\Model\\Entity"
        ],
        "parents": [
            "Phi\\Model\\Dataset"
        ],
        "lcom": 2,
        "length": 53,
        "vocabulary": 19,
        "volume": 225.14,
        "difficulty": 5.47,
        "effort": 1230.77,
        "level": 0.18,
        "bugs": 0.08,
        "time": 68,
        "intelligentContent": 41.18,
        "number_operators": 12,
        "number_operands": 41,
        "number_operators_unique": 4,
        "number_operands_unique": 15,
        "cloc": 7,
        "loc": 34,
        "lloc": 27,
        "mi": 84.09,
        "mIwoC": 51.77,
        "commentWeight": 32.32,
        "kanDefect": 0.68,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 0.3,
        "relativeSystemComplexity": 81.3,
        "totalStructuralComplexity": 162,
        "totalDataComplexity": 0.6,
        "totalSystemComplexity": 162.6,
        "package": "Planck\\Model\\",
        "pageRank": 0.03,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Decorator\\Entity",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [
            "Planck\\Model\\Entity",
            "Planck\\Model\\Entity"
        ],
        "parents": [
            "Planck\\Model\\Entity"
        ],
        "lcom": 1,
        "length": 3,
        "vocabulary": 2,
        "volume": 3,
        "difficulty": 0,
        "effort": 0,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 4,
        "number_operators": 0,
        "number_operands": 3,
        "number_operators_unique": 0,
        "number_operands_unique": 2,
        "cloc": 1,
        "loc": 10,
        "lloc": 9,
        "mi": 99.24,
        "mIwoC": 75.71,
        "commentWeight": 23.53,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.5,
        "relativeSystemComplexity": 1.5,
        "totalStructuralComplexity": 1,
        "totalDataComplexity": 0.5,
        "totalSystemComplexity": 1.5,
        "package": "Planck\\Model\\Decorator\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Entity",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getForeignKeys",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "initializeTraits",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRepository",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadForeignEntities",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getForeignEntities",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadForeignEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getForeignEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOwnedEntities",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrimaryKeyFieldName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadById",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntityBaseName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFingerPrint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "toExtendedArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadAll",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRepository",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLabelFieldName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doBeforeStore",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doBeforeUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "doBeforeInsert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 31,
        "nbMethods": 28,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 27,
        "nbMethodsGetter": 3,
        "nbMethodsSetters": 0,
        "wmc": 62,
        "ccn": 32,
        "ccnMethodMax": 4,
        "externals": [
            "Phi\\Model\\Entity",
            "Planck\\Model\\Interfaces\\Timestampable",
            "parent",
            "Phi\\Model\\Repository",
            "parent",
            "Planck\\Exception",
            "Planck\\Model\\Exception\\DoesNotExist",
            "parent",
            "parent",
            "parent"
        ],
        "parents": [
            "Phi\\Model\\Entity"
        ],
        "lcom": 2,
        "length": 365,
        "vocabulary": 60,
        "volume": 2156.02,
        "difficulty": 23.21,
        "effort": 50032.23,
        "level": 0.04,
        "bugs": 0.72,
        "time": 2780,
        "intelligentContent": 92.91,
        "number_operators": 102,
        "number_operands": 263,
        "number_operators_unique": 9,
        "number_operands_unique": 51,
        "cloc": 13,
        "loc": 267,
        "lloc": 254,
        "mi": 36.66,
        "mIwoC": 19.89,
        "commentWeight": 16.76,
        "kanDefect": 3.34,
        "relativeStructuralComplexity": 1225,
        "relativeDataComplexity": 0.94,
        "relativeSystemComplexity": 1225.94,
        "totalStructuralComplexity": 37975,
        "totalDataComplexity": 29.11,
        "totalSystemComplexity": 38004.11,
        "package": "Planck\\Model\\",
        "pageRank": 0.09,
        "afferentCoupling": 3,
        "efferentCoupling": 6,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\EntityDescriptor",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntityLabel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFieldByName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "fieldExists",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLabelFieldName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPrimaryKeyField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLabelField",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getIdFieldName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFields",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "JSONSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 9,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 9,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 23,
        "ccn": 14,
        "ccnMethodMax": 5,
        "externals": [
            "JsonSerializable",
            "Planck\\Model\\Repository",
            "Planck\\Model\\FieldDescriptor",
            "Planck\\Model\\Exception\\DoesNotExist"
        ],
        "parents": [],
        "lcom": 1,
        "length": 105,
        "vocabulary": 25,
        "volume": 487.6,
        "difficulty": 11.05,
        "effort": 5389.32,
        "level": 0.09,
        "bugs": 0.16,
        "time": 299,
        "intelligentContent": 44.12,
        "number_operators": 35,
        "number_operands": 70,
        "number_operators_unique": 6,
        "number_operands_unique": 19,
        "cloc": 11,
        "loc": 102,
        "lloc": 91,
        "mi": 60.91,
        "mIwoC": 36.56,
        "commentWeight": 24.35,
        "kanDefect": 1.79,
        "relativeStructuralComplexity": 81,
        "relativeDataComplexity": 1.24,
        "relativeSystemComplexity": 82.24,
        "totalStructuralComplexity": 810,
        "totalDataComplexity": 12.4,
        "totalSystemComplexity": 822.4,
        "package": "Planck\\Model\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 4,
        "instability": 0.8,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\EntityLoader",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEntityType",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLoadMethod",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setAttributeValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntityByAttributes",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 6,
        "nbMethods": 4,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 2,
        "wmc": 7,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [
            "Planck\\Model\\Model"
        ],
        "parents": [],
        "lcom": 1,
        "length": 38,
        "vocabulary": 13,
        "volume": 140.62,
        "difficulty": 5.78,
        "effort": 812.45,
        "level": 0.17,
        "bugs": 0.05,
        "time": 45,
        "intelligentContent": 24.34,
        "number_operators": 12,
        "number_operands": 26,
        "number_operators_unique": 4,
        "number_operands_unique": 9,
        "cloc": 0,
        "loc": 40,
        "lloc": 40,
        "mi": 49.74,
        "mIwoC": 49.74,
        "commentWeight": 0,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 1.46,
        "relativeSystemComplexity": 10.46,
        "totalStructuralComplexity": 54,
        "totalDataComplexity": 8.75,
        "totalSystemComplexity": 62.75,
        "package": "Planck\\Model\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Exception\\DoesNotExist",
        "interface": false,
        "abstract": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Planck\\Model\\Exception"
        ],
        "parents": [
            "Planck\\Model\\Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Planck\\Model\\Exception\\",
        "pageRank": 0.07,
        "afferentCoupling": 3,
        "efferentCoupling": 1,
        "instability": 0.25,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Exception\\NotUnique",
        "interface": false,
        "abstract": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Planck\\Model\\Exception"
        ],
        "parents": [
            "Planck\\Model\\Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Planck\\Model\\Exception\\",
        "pageRank": 0.03,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Exception",
        "interface": false,
        "abstract": false,
        "methods": [],
        "nbMethodsIncludingGettersSetters": 0,
        "nbMethods": 0,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 0,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 0,
        "ccn": 1,
        "ccnMethodMax": 0,
        "externals": [
            "Planck\\Exception"
        ],
        "parents": [
            "Planck\\Exception"
        ],
        "lcom": 0,
        "length": 0,
        "vocabulary": 0,
        "volume": 0,
        "difficulty": 0,
        "effort": 0,
        "level": 0,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 0,
        "number_operators": 0,
        "number_operands": 0,
        "number_operators_unique": 0,
        "number_operands_unique": 0,
        "cloc": 0,
        "loc": 4,
        "lloc": 4,
        "mi": 171,
        "mIwoC": 171,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 0,
        "relativeSystemComplexity": 0,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 0,
        "totalSystemComplexity": 0,
        "package": "Planck\\Model\\",
        "pageRank": 0.27,
        "afferentCoupling": 5,
        "efferentCoupling": 1,
        "instability": 0.17,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\FieldDescriptor",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescriptor",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAccessLevel",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isPrimaryKey",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDefaultValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getLabel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getType",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isLabel",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInt",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isDate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 2,
        "nbMethodsSetters": 0,
        "wmc": 19,
        "ccn": 8,
        "ccnMethodMax": 3,
        "externals": [
            "JsonSerializable"
        ],
        "parents": [],
        "lcom": 1,
        "length": 86,
        "vocabulary": 30,
        "volume": 421.99,
        "difficulty": 7,
        "effort": 2953.95,
        "level": 0.14,
        "bugs": 0.14,
        "time": 164,
        "intelligentContent": 60.28,
        "number_operators": 30,
        "number_operands": 56,
        "number_operators_unique": 6,
        "number_operands_unique": 24,
        "cloc": 3,
        "loc": 87,
        "lloc": 84,
        "mi": 52.75,
        "mIwoC": 38.57,
        "commentWeight": 14.19,
        "kanDefect": 0.57,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 2.83,
        "relativeSystemComplexity": 18.83,
        "totalStructuralComplexity": 192,
        "totalDataComplexity": 34,
        "totalSystemComplexity": 226,
        "package": "Planck\\Model\\",
        "pageRank": 0.04,
        "afferentCoupling": 1,
        "efferentCoupling": 1,
        "instability": 0.5,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\FingerPrint",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 2,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 1,
        "wmc": 3,
        "ccn": 2,
        "ccnMethodMax": 2,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 14,
        "vocabulary": 9,
        "volume": 44.38,
        "difficulty": 2.75,
        "effort": 122.04,
        "level": 0.36,
        "bugs": 0.01,
        "time": 7,
        "intelligentContent": 16.14,
        "number_operators": 3,
        "number_operands": 11,
        "number_operators_unique": 3,
        "number_operands_unique": 6,
        "cloc": 1,
        "loc": 17,
        "lloc": 16,
        "mi": 80.28,
        "mIwoC": 61.93,
        "commentWeight": 18.35,
        "kanDefect": 0.22,
        "relativeStructuralComplexity": 1,
        "relativeDataComplexity": 0.75,
        "relativeSystemComplexity": 1.75,
        "totalStructuralComplexity": 2,
        "totalDataComplexity": 1.5,
        "totalSystemComplexity": 3.5,
        "package": "Planck\\Model\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\GenericObjectProperty",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isInherited",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "val",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setExtraValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getExtraValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "__toString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 12,
        "nbMethods": 11,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 11,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 27,
        "ccn": 16,
        "ccnMethodMax": 5,
        "externals": [
            "JsonSerializable",
            "Planck\\Exception"
        ],
        "parents": [],
        "lcom": 2,
        "length": 142,
        "vocabulary": 26,
        "volume": 667.46,
        "difficulty": 19.78,
        "effort": 13200.92,
        "level": 0.05,
        "bugs": 0.22,
        "time": 733,
        "intelligentContent": 33.75,
        "number_operators": 53,
        "number_operands": 89,
        "number_operators_unique": 8,
        "number_operands_unique": 18,
        "cloc": 1,
        "loc": 109,
        "lloc": 108,
        "mi": 41.11,
        "mIwoC": 33.71,
        "commentWeight": 7.39,
        "kanDefect": 1.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 4.44,
        "relativeSystemComplexity": 13.44,
        "totalStructuralComplexity": 108,
        "totalDataComplexity": 53.25,
        "totalSystemComplexity": 161.25,
        "package": "Planck\\Model\\",
        "pageRank": 0.03,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Model",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addEntityDecorator",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addSource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSource",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "decorateEntity",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getRepository",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInstanceByFingerPrint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 8,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 8,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 25,
        "ccn": 18,
        "ccnMethodMax": 5,
        "externals": [
            "Planck\\Exception\\ClassDoesNotExist",
            "Planck\\Exception\\ClassDoesNotExist",
            "Phi\\Database\\Source",
            "Planck\\Exception",
            "repositoryClassName",
            "entityName",
            "Planck\\Exception",
            "Planck\\Model\\Entity",
            "repositoryName",
            "Planck\\Exception"
        ],
        "parents": [],
        "lcom": 2,
        "length": 160,
        "vocabulary": 29,
        "volume": 777.28,
        "difficulty": 17.02,
        "effort": 13231.37,
        "level": 0.06,
        "bugs": 0.26,
        "time": 735,
        "intelligentContent": 45.66,
        "number_operators": 53,
        "number_operands": 107,
        "number_operators_unique": 7,
        "number_operands_unique": 22,
        "cloc": 26,
        "loc": 130,
        "lloc": 104,
        "mi": 65.28,
        "mIwoC": 33.34,
        "commentWeight": 31.94,
        "kanDefect": 1.43,
        "relativeStructuralComplexity": 25,
        "relativeDataComplexity": 1.58,
        "relativeSystemComplexity": 26.58,
        "totalStructuralComplexity": 200,
        "totalDataComplexity": 12.67,
        "totalSystemComplexity": 212.67,
        "package": "Planck\\Model\\",
        "pageRank": 0.06,
        "afferentCoupling": 2,
        "efferentCoupling": 7,
        "instability": 0.78,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Repository",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "now",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadForeignEntities",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "describe",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescriptor",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntityFields",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntityFieldsString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "search",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSegmentByQuery",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getSegment",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "update",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "store",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "queryAndGetDataset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getByArray",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOneBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getByQName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getEntityInstance",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getById",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "commit",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "startTransaction",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getFingerPrint",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDataset",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 26,
        "nbMethods": 26,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 26,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 70,
        "ccn": 45,
        "ccnMethodMax": 7,
        "externals": [
            "Phi\\Model\\Repository",
            "Planck\\Model\\Model",
            "parent",
            "Planck\\Model\\EntityDescriptor",
            "descriptor",
            "Planck\\Model\\EntityDescriptor",
            "Planck\\Model\\Segment",
            "Planck\\Model\\Segment",
            "Planck\\Model\\Segment",
            "Planck\\Model\\Segment",
            "Planck\\Model\\Exception",
            "Planck\\Model\\Exception",
            "Phi\\Model\\Entity",
            "Planck\\Model\\Exception\\NotUnique",
            "Planck\\Model\\Exception\\DoesNotExist",
            "parent",
            "Planck\\Model\\Exception\\DoesNotExist",
            "parent",
            "Planck\\Model\\Dataset"
        ],
        "parents": [
            "Phi\\Model\\Repository"
        ],
        "lcom": 3,
        "length": 791,
        "vocabulary": 141,
        "volume": 5647.39,
        "difficulty": 18.31,
        "effort": 103385.65,
        "level": 0.05,
        "bugs": 1.88,
        "time": 5744,
        "intelligentContent": 308.49,
        "number_operators": 254,
        "number_operands": 537,
        "number_operators_unique": 9,
        "number_operands_unique": 132,
        "cloc": 63,
        "loc": 405,
        "lloc": 342,
        "mi": 41.08,
        "mIwoC": 12.4,
        "commentWeight": 28.68,
        "kanDefect": 4.28,
        "relativeStructuralComplexity": 2209,
        "relativeDataComplexity": 0.62,
        "relativeSystemComplexity": 2209.62,
        "totalStructuralComplexity": 57434,
        "totalDataComplexity": 16.23,
        "totalSystemComplexity": 57450.23,
        "package": "Planck\\Model\\",
        "pageRank": 0.12,
        "afferentCoupling": 2,
        "efferentCoupling": 11,
        "instability": 0.85,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Segment",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setRepository",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setEntities",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setTotal",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setFields",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setOffset",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setLimit",
                "role": "setter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "jsonSerialize",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 8,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 5,
        "wmc": 11,
        "ccn": 4,
        "ccnMethodMax": 4,
        "externals": [
            "JsonSerializable",
            "Planck\\Model\\Repository",
            "Planck\\Model\\Repository"
        ],
        "parents": [],
        "lcom": 1,
        "length": 120,
        "vocabulary": 30,
        "volume": 588.83,
        "difficulty": 6.92,
        "effort": 4076.49,
        "level": 0.14,
        "bugs": 0.2,
        "time": 226,
        "intelligentContent": 85.05,
        "number_operators": 30,
        "number_operands": 90,
        "number_operators_unique": 4,
        "number_operands_unique": 26,
        "cloc": 9,
        "loc": 76,
        "lloc": 67,
        "mi": 65.64,
        "mIwoC": 40.23,
        "commentWeight": 25.41,
        "kanDefect": 0.68,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 1.2,
        "relativeSystemComplexity": 37.2,
        "totalStructuralComplexity": 288,
        "totalDataComplexity": 9.57,
        "totalSystemComplexity": 297.57,
        "package": "Planck\\Model\\",
        "pageRank": 0.06,
        "afferentCoupling": 1,
        "efferentCoupling": 2,
        "instability": 0.67,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Traits\\HasProperties",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "hasProperty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProperty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addProperty",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getProperties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getOwnProperties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadPropertiesFromJson",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "_jsonSerializeTraitHasProperties",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValues",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 10,
        "nbMethods": 10,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 10,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 34,
        "ccn": 25,
        "ccnMethodMax": 9,
        "externals": [
            "Planck\\Exception\\EntityPropertyDoesNotExist",
            "Planck\\Model\\GenericObjectProperty",
            "Planck\\Model\\GenericObjectProperty",
            "parent",
            "parent",
            "parent"
        ],
        "parents": [],
        "lcom": 1,
        "length": 169,
        "vocabulary": 27,
        "volume": 803.58,
        "difficulty": 19.95,
        "effort": 16031.34,
        "level": 0.05,
        "bugs": 0.27,
        "time": 891,
        "intelligentContent": 40.28,
        "number_operators": 55,
        "number_operands": 114,
        "number_operators_unique": 7,
        "number_operands_unique": 20,
        "cloc": 8,
        "loc": 131,
        "lloc": 123,
        "mi": 49.38,
        "mIwoC": 30.71,
        "commentWeight": 18.68,
        "kanDefect": 2.49,
        "relativeStructuralComplexity": 121,
        "relativeDataComplexity": 1.26,
        "relativeSystemComplexity": 122.26,
        "totalStructuralComplexity": 1210,
        "totalDataComplexity": 12.58,
        "totalSystemComplexity": 1222.58,
        "package": "Planck\\Model\\Traits\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 3,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Traits\\HasQName",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "getQNameFieldName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setQNameFromString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "HasQNameDoBeforeInsert",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Planck\\Helper\\StringUtil",
            "Planck\\Model\\Exception"
        ],
        "parents": [],
        "lcom": 1,
        "length": 29,
        "vocabulary": 10,
        "volume": 96.34,
        "difficulty": 6.67,
        "effort": 642.24,
        "level": 0.15,
        "bugs": 0.03,
        "time": 36,
        "intelligentContent": 14.45,
        "number_operators": 9,
        "number_operands": 20,
        "number_operators_unique": 4,
        "number_operands_unique": 6,
        "cloc": 0,
        "loc": 26,
        "lloc": 26,
        "mi": 54.84,
        "mIwoC": 54.84,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.48,
        "relativeSystemComplexity": 36.48,
        "totalStructuralComplexity": 108,
        "totalDataComplexity": 1.43,
        "totalSystemComplexity": 109.43,
        "package": "Planck\\Model\\Traits\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Traits\\HasSlug",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "getSlugFieldName",
                "role": "getter",
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setSlugFromString",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "HasQNameDoBeforeInsert",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 2,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 1,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 3,
        "externals": [
            "Planck\\Helper\\StringUtil",
            "Planck\\Model\\Exception"
        ],
        "parents": [],
        "lcom": 1,
        "length": 29,
        "vocabulary": 10,
        "volume": 96.34,
        "difficulty": 6.67,
        "effort": 642.24,
        "level": 0.15,
        "bugs": 0.03,
        "time": 36,
        "intelligentContent": 14.45,
        "number_operators": 9,
        "number_operands": 20,
        "number_operators_unique": 4,
        "number_operands_unique": 6,
        "cloc": 0,
        "loc": 26,
        "lloc": 26,
        "mi": 54.84,
        "mIwoC": 54.84,
        "commentWeight": 0,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 36,
        "relativeDataComplexity": 0.48,
        "relativeSystemComplexity": 36.48,
        "totalStructuralComplexity": 108,
        "totalDataComplexity": 1.43,
        "totalSystemComplexity": 109.43,
        "package": "Planck\\Model\\Traits\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Traits\\IsTreeEntity",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "getRoot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setParent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "addChild",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getChildren",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setChildren",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "loadChildren",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "hasChildren",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getParent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setQName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getQName",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAncestors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescendants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "computePath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findInChildren",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "moveChildrenToParent",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteBranch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "isCluster",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 22,
        "nbMethods": 22,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 22,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 36,
        "ccn": 15,
        "ccnMethodMax": 3,
        "externals": [
            "parent"
        ],
        "parents": [],
        "lcom": 3,
        "length": 192,
        "vocabulary": 36,
        "volume": 992.63,
        "difficulty": 26.92,
        "effort": 26724.54,
        "level": 0.04,
        "bugs": 0.33,
        "time": 1485,
        "intelligentContent": 36.87,
        "number_operators": 52,
        "number_operands": 140,
        "number_operators_unique": 10,
        "number_operands_unique": 26,
        "cloc": 24,
        "loc": 173,
        "lloc": 149,
        "mi": 56.87,
        "mIwoC": 29.59,
        "commentWeight": 27.28,
        "kanDefect": 1.56,
        "relativeStructuralComplexity": 529,
        "relativeDataComplexity": 0.94,
        "relativeSystemComplexity": 529.94,
        "totalStructuralComplexity": 11638,
        "totalDataComplexity": 20.63,
        "totalSystemComplexity": 11658.63,
        "package": "Planck\\Model\\Traits\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 1,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Traits\\IsTreeRepository",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "getRoot",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getByPath",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "insert",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getTree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "flattenTree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getInPathBy",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "findInChildren",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "searchInTree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDescendants",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getAncestors",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getByParentId",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "updateBoundsForInsert",
                "role": null,
                "public": false,
                "private": true,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "deleteBranch",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "delete",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "buildTree",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 15,
        "nbMethods": 15,
        "nbMethodsPrivate": 1,
        "nbMethodsPublic": 14,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 43,
        "ccn": 29,
        "ccnMethodMax": 11,
        "externals": [
            "Planck\\Exception",
            "parent"
        ],
        "parents": [],
        "lcom": 1,
        "length": 623,
        "vocabulary": 106,
        "volume": 4191.49,
        "difficulty": 20.32,
        "effort": 85169.44,
        "level": 0.05,
        "bugs": 1.4,
        "time": 4732,
        "intelligentContent": 206.28,
        "number_operators": 185,
        "number_operands": 438,
        "number_operators_unique": 9,
        "number_operands_unique": 97,
        "cloc": 18,
        "loc": 242,
        "lloc": 224,
        "mi": 39.97,
        "mIwoC": 19.47,
        "commentWeight": 20.5,
        "kanDefect": 3.25,
        "relativeStructuralComplexity": 784,
        "relativeDataComplexity": 0.62,
        "relativeSystemComplexity": 784.62,
        "totalStructuralComplexity": 11760,
        "totalDataComplexity": 9.24,
        "totalSystemComplexity": 11769.24,
        "package": "Planck\\Model\\Traits\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    },
    {
        "name": "Planck\\Model\\Traits\\Timestampable",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "TimestampableDoBeforeUpdate",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 1,
        "nbMethods": 1,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 1,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 1,
        "ccn": 1,
        "ccnMethodMax": 1,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 4,
        "vocabulary": 3,
        "volume": 6.34,
        "difficulty": 0.75,
        "effort": 4.75,
        "level": 1.33,
        "bugs": 0,
        "time": 0,
        "intelligentContent": 8.45,
        "number_operators": 1,
        "number_operands": 3,
        "number_operators_unique": 1,
        "number_operands_unique": 2,
        "cloc": 0,
        "loc": 9,
        "lloc": 9,
        "mi": 73.43,
        "mIwoC": 73.43,
        "commentWeight": 0,
        "kanDefect": 0.15,
        "relativeStructuralComplexity": 9,
        "relativeDataComplexity": 0.25,
        "relativeSystemComplexity": 9.25,
        "totalStructuralComplexity": 9,
        "totalDataComplexity": 0.25,
        "totalSystemComplexity": 9.25,
        "package": "Planck\\Model\\Traits\\",
        "pageRank": 0.02,
        "afferentCoupling": 0,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    }
]