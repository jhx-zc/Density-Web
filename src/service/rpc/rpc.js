/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    /**
     * LoginRespCode enum.
     * @name rpc.LoginRespCode
     * @enum {number}
     * @property {number} ERROR_LOGIN_INFO=0 ERROR_LOGIN_INFO value
     * @property {number} SUCCESS=1 SUCCESS value
     */
    rpc.LoginRespCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ERROR_LOGIN_INFO"] = 0;
        values[valuesById[1] = "SUCCESS"] = 1;
        return values;
    })();

    rpc.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof rpc
         * @interface ILoginReq
         * @property {string|null} [username] LoginReq username
         * @property {string|null} [password] LoginReq password
         */

        /**
         * Constructs a new LoginReq.
         * @memberof rpc
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {rpc.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq username.
         * @member {string} username
         * @memberof rpc.LoginReq
         * @instance
         */
        LoginReq.prototype.username = "";

        /**
         * LoginReq password.
         * @member {string} password
         * @memberof rpc.LoginReq
         * @instance
         */
        LoginReq.prototype.password = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof rpc.LoginReq
         * @static
         * @param {rpc.ILoginReq=} [properties] Properties to set
         * @returns {rpc.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link rpc.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof rpc.LoginReq
         * @static
         * @param {rpc.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.password != null && Object.hasOwnProperty.call(message, "password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link rpc.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.LoginReq
         * @static
         * @param {rpc.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof rpc.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.LoginReq)
                return object;
            var message = new $root.rpc.LoginReq();
            if (object.username != null)
                message.username = String(object.username);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.LoginReq
         * @static
         * @param {rpc.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.password = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof rpc.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    rpc.LoginResp = (function() {

        /**
         * Properties of a LoginResp.
         * @memberof rpc
         * @interface ILoginResp
         * @property {rpc.LoginRespCode|null} [code] LoginResp code
         * @property {string|null} [sid] LoginResp sid
         */

        /**
         * Constructs a new LoginResp.
         * @memberof rpc
         * @classdesc Represents a LoginResp.
         * @implements ILoginResp
         * @constructor
         * @param {rpc.ILoginResp=} [properties] Properties to set
         */
        function LoginResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginResp code.
         * @member {rpc.LoginRespCode} code
         * @memberof rpc.LoginResp
         * @instance
         */
        LoginResp.prototype.code = 0;

        /**
         * LoginResp sid.
         * @member {string} sid
         * @memberof rpc.LoginResp
         * @instance
         */
        LoginResp.prototype.sid = "";

        /**
         * Creates a new LoginResp instance using the specified properties.
         * @function create
         * @memberof rpc.LoginResp
         * @static
         * @param {rpc.ILoginResp=} [properties] Properties to set
         * @returns {rpc.LoginResp} LoginResp instance
         */
        LoginResp.create = function create(properties) {
            return new LoginResp(properties);
        };

        /**
         * Encodes the specified LoginResp message. Does not implicitly {@link rpc.LoginResp.verify|verify} messages.
         * @function encode
         * @memberof rpc.LoginResp
         * @static
         * @param {rpc.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            if (message.sid != null && Object.hasOwnProperty.call(message, "sid"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.sid);
            return writer;
        };

        /**
         * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link rpc.LoginResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.LoginResp
         * @static
         * @param {rpc.ILoginResp} message LoginResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.LoginResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.sid = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.LoginResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.LoginResp} LoginResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginResp message.
         * @function verify
         * @memberof rpc.LoginResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                    break;
                }
            if (message.sid != null && message.hasOwnProperty("sid"))
                if (!$util.isString(message.sid))
                    return "sid: string expected";
            return null;
        };

        /**
         * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.LoginResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.LoginResp} LoginResp
         */
        LoginResp.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.LoginResp)
                return object;
            var message = new $root.rpc.LoginResp();
            switch (object.code) {
            case "ERROR_LOGIN_INFO":
            case 0:
                message.code = 0;
                break;
            case "SUCCESS":
            case 1:
                message.code = 1;
                break;
            }
            if (object.sid != null)
                message.sid = String(object.sid);
            return message;
        };

        /**
         * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.LoginResp
         * @static
         * @param {rpc.LoginResp} message LoginResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = options.enums === String ? "ERROR_LOGIN_INFO" : 0;
                object.sid = "";
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = options.enums === String ? $root.rpc.LoginRespCode[message.code] : message.code;
            if (message.sid != null && message.hasOwnProperty("sid"))
                object.sid = message.sid;
            return object;
        };

        /**
         * Converts this LoginResp to JSON.
         * @function toJSON
         * @memberof rpc.LoginResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginResp;
    })();

    /**
     * GoodsTypes enum.
     * @name rpc.GoodsTypes
     * @enum {number}
     * @property {number} Digital=0 Digital value
     * @property {number} HomeAppliances=1 HomeAppliances value
     * @property {number} DailyNecessities=2 DailyNecessities value
     * @property {number} Clothing=3 Clothing value
     */
    rpc.GoodsTypes = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Digital"] = 0;
        values[valuesById[1] = "HomeAppliances"] = 1;
        values[valuesById[2] = "DailyNecessities"] = 2;
        values[valuesById[3] = "Clothing"] = 3;
        return values;
    })();

    rpc.Goods = (function() {

        /**
         * Properties of a Goods.
         * @memberof rpc
         * @interface IGoods
         * @property {number|null} [id] Goods id
         * @property {string|null} [imgUrl] Goods imgUrl
         * @property {string|null} [name] Goods name
         * @property {number|null} [star] Goods star
         * @property {number|null} [price] Goods price
         * @property {string|null} [brief] Goods brief
         * @property {string|null} [detail] Goods detail
         * @property {rpc.GoodsTypes|null} [goodsType] Goods goodsType
         * @property {number|null} [totalSize] Goods totalSize
         */

        /**
         * Constructs a new Goods.
         * @memberof rpc
         * @classdesc Represents a Goods.
         * @implements IGoods
         * @constructor
         * @param {rpc.IGoods=} [properties] Properties to set
         */
        function Goods(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Goods id.
         * @member {number} id
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.id = 0;

        /**
         * Goods imgUrl.
         * @member {string} imgUrl
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.imgUrl = "";

        /**
         * Goods name.
         * @member {string} name
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.name = "";

        /**
         * Goods star.
         * @member {number} star
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.star = 0;

        /**
         * Goods price.
         * @member {number} price
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.price = 0;

        /**
         * Goods brief.
         * @member {string} brief
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.brief = "";

        /**
         * Goods detail.
         * @member {string} detail
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.detail = "";

        /**
         * Goods goodsType.
         * @member {rpc.GoodsTypes} goodsType
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.goodsType = 0;

        /**
         * Goods totalSize.
         * @member {number} totalSize
         * @memberof rpc.Goods
         * @instance
         */
        Goods.prototype.totalSize = 0;

        /**
         * Creates a new Goods instance using the specified properties.
         * @function create
         * @memberof rpc.Goods
         * @static
         * @param {rpc.IGoods=} [properties] Properties to set
         * @returns {rpc.Goods} Goods instance
         */
        Goods.create = function create(properties) {
            return new Goods(properties);
        };

        /**
         * Encodes the specified Goods message. Does not implicitly {@link rpc.Goods.verify|verify} messages.
         * @function encode
         * @memberof rpc.Goods
         * @static
         * @param {rpc.IGoods} message Goods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Goods.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.imgUrl != null && Object.hasOwnProperty.call(message, "imgUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.imgUrl);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
            if (message.star != null && Object.hasOwnProperty.call(message, "star"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.star);
            if (message.price != null && Object.hasOwnProperty.call(message, "price"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.price);
            if (message.brief != null && Object.hasOwnProperty.call(message, "brief"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.brief);
            if (message.detail != null && Object.hasOwnProperty.call(message, "detail"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.detail);
            if (message.goodsType != null && Object.hasOwnProperty.call(message, "goodsType"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.goodsType);
            if (message.totalSize != null && Object.hasOwnProperty.call(message, "totalSize"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.totalSize);
            return writer;
        };

        /**
         * Encodes the specified Goods message, length delimited. Does not implicitly {@link rpc.Goods.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.Goods
         * @static
         * @param {rpc.IGoods} message Goods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Goods.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Goods message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.Goods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.Goods} Goods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Goods.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.Goods();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.imgUrl = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.star = reader.int32();
                    break;
                case 5:
                    message.price = reader.int32();
                    break;
                case 6:
                    message.brief = reader.string();
                    break;
                case 7:
                    message.detail = reader.string();
                    break;
                case 8:
                    message.goodsType = reader.int32();
                    break;
                case 9:
                    message.totalSize = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Goods message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.Goods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.Goods} Goods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Goods.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Goods message.
         * @function verify
         * @memberof rpc.Goods
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Goods.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                if (!$util.isString(message.imgUrl))
                    return "imgUrl: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.star != null && message.hasOwnProperty("star"))
                if (!$util.isInteger(message.star))
                    return "star: integer expected";
            if (message.price != null && message.hasOwnProperty("price"))
                if (!$util.isInteger(message.price))
                    return "price: integer expected";
            if (message.brief != null && message.hasOwnProperty("brief"))
                if (!$util.isString(message.brief))
                    return "brief: string expected";
            if (message.detail != null && message.hasOwnProperty("detail"))
                if (!$util.isString(message.detail))
                    return "detail: string expected";
            if (message.goodsType != null && message.hasOwnProperty("goodsType"))
                switch (message.goodsType) {
                default:
                    return "goodsType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.totalSize != null && message.hasOwnProperty("totalSize"))
                if (!$util.isInteger(message.totalSize))
                    return "totalSize: integer expected";
            return null;
        };

        /**
         * Creates a Goods message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.Goods
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.Goods} Goods
         */
        Goods.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.Goods)
                return object;
            var message = new $root.rpc.Goods();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.imgUrl != null)
                message.imgUrl = String(object.imgUrl);
            if (object.name != null)
                message.name = String(object.name);
            if (object.star != null)
                message.star = object.star | 0;
            if (object.price != null)
                message.price = object.price | 0;
            if (object.brief != null)
                message.brief = String(object.brief);
            if (object.detail != null)
                message.detail = String(object.detail);
            switch (object.goodsType) {
            case "Digital":
            case 0:
                message.goodsType = 0;
                break;
            case "HomeAppliances":
            case 1:
                message.goodsType = 1;
                break;
            case "DailyNecessities":
            case 2:
                message.goodsType = 2;
                break;
            case "Clothing":
            case 3:
                message.goodsType = 3;
                break;
            }
            if (object.totalSize != null)
                message.totalSize = object.totalSize | 0;
            return message;
        };

        /**
         * Creates a plain object from a Goods message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.Goods
         * @static
         * @param {rpc.Goods} message Goods
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Goods.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.imgUrl = "";
                object.name = "";
                object.star = 0;
                object.price = 0;
                object.brief = "";
                object.detail = "";
                object.goodsType = options.enums === String ? "Digital" : 0;
                object.totalSize = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.imgUrl != null && message.hasOwnProperty("imgUrl"))
                object.imgUrl = message.imgUrl;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.star != null && message.hasOwnProperty("star"))
                object.star = message.star;
            if (message.price != null && message.hasOwnProperty("price"))
                object.price = message.price;
            if (message.brief != null && message.hasOwnProperty("brief"))
                object.brief = message.brief;
            if (message.detail != null && message.hasOwnProperty("detail"))
                object.detail = message.detail;
            if (message.goodsType != null && message.hasOwnProperty("goodsType"))
                object.goodsType = options.enums === String ? $root.rpc.GoodsTypes[message.goodsType] : message.goodsType;
            if (message.totalSize != null && message.hasOwnProperty("totalSize"))
                object.totalSize = message.totalSize;
            return object;
        };

        /**
         * Converts this Goods to JSON.
         * @function toJSON
         * @memberof rpc.Goods
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Goods.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Goods;
    })();

    rpc.GoodsList = (function() {

        /**
         * Properties of a GoodsList.
         * @memberof rpc
         * @interface IGoodsList
         * @property {Array.<rpc.IGoods>|null} [goods] GoodsList goods
         */

        /**
         * Constructs a new GoodsList.
         * @memberof rpc
         * @classdesc Represents a GoodsList.
         * @implements IGoodsList
         * @constructor
         * @param {rpc.IGoodsList=} [properties] Properties to set
         */
        function GoodsList(properties) {
            this.goods = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GoodsList goods.
         * @member {Array.<rpc.IGoods>} goods
         * @memberof rpc.GoodsList
         * @instance
         */
        GoodsList.prototype.goods = $util.emptyArray;

        /**
         * Creates a new GoodsList instance using the specified properties.
         * @function create
         * @memberof rpc.GoodsList
         * @static
         * @param {rpc.IGoodsList=} [properties] Properties to set
         * @returns {rpc.GoodsList} GoodsList instance
         */
        GoodsList.create = function create(properties) {
            return new GoodsList(properties);
        };

        /**
         * Encodes the specified GoodsList message. Does not implicitly {@link rpc.GoodsList.verify|verify} messages.
         * @function encode
         * @memberof rpc.GoodsList
         * @static
         * @param {rpc.IGoodsList} message GoodsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goods != null && message.goods.length)
                for (var i = 0; i < message.goods.length; ++i)
                    $root.rpc.Goods.encode(message.goods[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GoodsList message, length delimited. Does not implicitly {@link rpc.GoodsList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GoodsList
         * @static
         * @param {rpc.IGoodsList} message GoodsList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GoodsList message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GoodsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GoodsList} GoodsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GoodsList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.goods && message.goods.length))
                        message.goods = [];
                    message.goods.push($root.rpc.Goods.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GoodsList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GoodsList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GoodsList} GoodsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GoodsList message.
         * @function verify
         * @memberof rpc.GoodsList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GoodsList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.goods != null && message.hasOwnProperty("goods")) {
                if (!Array.isArray(message.goods))
                    return "goods: array expected";
                for (var i = 0; i < message.goods.length; ++i) {
                    var error = $root.rpc.Goods.verify(message.goods[i]);
                    if (error)
                        return "goods." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GoodsList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GoodsList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GoodsList} GoodsList
         */
        GoodsList.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GoodsList)
                return object;
            var message = new $root.rpc.GoodsList();
            if (object.goods) {
                if (!Array.isArray(object.goods))
                    throw TypeError(".rpc.GoodsList.goods: array expected");
                message.goods = [];
                for (var i = 0; i < object.goods.length; ++i) {
                    if (typeof object.goods[i] !== "object")
                        throw TypeError(".rpc.GoodsList.goods: object expected");
                    message.goods[i] = $root.rpc.Goods.fromObject(object.goods[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GoodsList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GoodsList
         * @static
         * @param {rpc.GoodsList} message GoodsList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GoodsList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.goods = [];
            if (message.goods && message.goods.length) {
                object.goods = [];
                for (var j = 0; j < message.goods.length; ++j)
                    object.goods[j] = $root.rpc.Goods.toObject(message.goods[j], options);
            }
            return object;
        };

        /**
         * Converts this GoodsList to JSON.
         * @function toJSON
         * @memberof rpc.GoodsList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GoodsList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GoodsList;
    })();

    rpc.GoodsUpdateRet = (function() {

        /**
         * Properties of a GoodsUpdateRet.
         * @memberof rpc
         * @interface IGoodsUpdateRet
         * @property {boolean|null} [success] GoodsUpdateRet success
         */

        /**
         * Constructs a new GoodsUpdateRet.
         * @memberof rpc
         * @classdesc Represents a GoodsUpdateRet.
         * @implements IGoodsUpdateRet
         * @constructor
         * @param {rpc.IGoodsUpdateRet=} [properties] Properties to set
         */
        function GoodsUpdateRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GoodsUpdateRet success.
         * @member {boolean} success
         * @memberof rpc.GoodsUpdateRet
         * @instance
         */
        GoodsUpdateRet.prototype.success = false;

        /**
         * Creates a new GoodsUpdateRet instance using the specified properties.
         * @function create
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {rpc.IGoodsUpdateRet=} [properties] Properties to set
         * @returns {rpc.GoodsUpdateRet} GoodsUpdateRet instance
         */
        GoodsUpdateRet.create = function create(properties) {
            return new GoodsUpdateRet(properties);
        };

        /**
         * Encodes the specified GoodsUpdateRet message. Does not implicitly {@link rpc.GoodsUpdateRet.verify|verify} messages.
         * @function encode
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {rpc.IGoodsUpdateRet} message GoodsUpdateRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsUpdateRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.success != null && Object.hasOwnProperty.call(message, "success"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
            return writer;
        };

        /**
         * Encodes the specified GoodsUpdateRet message, length delimited. Does not implicitly {@link rpc.GoodsUpdateRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {rpc.IGoodsUpdateRet} message GoodsUpdateRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GoodsUpdateRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GoodsUpdateRet message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GoodsUpdateRet} GoodsUpdateRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsUpdateRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GoodsUpdateRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.success = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GoodsUpdateRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GoodsUpdateRet} GoodsUpdateRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GoodsUpdateRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GoodsUpdateRet message.
         * @function verify
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GoodsUpdateRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.success != null && message.hasOwnProperty("success"))
                if (typeof message.success !== "boolean")
                    return "success: boolean expected";
            return null;
        };

        /**
         * Creates a GoodsUpdateRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GoodsUpdateRet} GoodsUpdateRet
         */
        GoodsUpdateRet.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GoodsUpdateRet)
                return object;
            var message = new $root.rpc.GoodsUpdateRet();
            if (object.success != null)
                message.success = Boolean(object.success);
            return message;
        };

        /**
         * Creates a plain object from a GoodsUpdateRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GoodsUpdateRet
         * @static
         * @param {rpc.GoodsUpdateRet} message GoodsUpdateRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GoodsUpdateRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.success = false;
            if (message.success != null && message.hasOwnProperty("success"))
                object.success = message.success;
            return object;
        };

        /**
         * Converts this GoodsUpdateRet to JSON.
         * @function toJSON
         * @memberof rpc.GoodsUpdateRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GoodsUpdateRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GoodsUpdateRet;
    })();

    rpc.ShopGoods = (function() {

        /**
         * Properties of a ShopGoods.
         * @memberof rpc
         * @interface IShopGoods
         * @property {number|null} [goodsId] ShopGoods goodsId
         * @property {number|null} [count] ShopGoods count
         */

        /**
         * Constructs a new ShopGoods.
         * @memberof rpc
         * @classdesc Represents a ShopGoods.
         * @implements IShopGoods
         * @constructor
         * @param {rpc.IShopGoods=} [properties] Properties to set
         */
        function ShopGoods(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShopGoods goodsId.
         * @member {number} goodsId
         * @memberof rpc.ShopGoods
         * @instance
         */
        ShopGoods.prototype.goodsId = 0;

        /**
         * ShopGoods count.
         * @member {number} count
         * @memberof rpc.ShopGoods
         * @instance
         */
        ShopGoods.prototype.count = 0;

        /**
         * Creates a new ShopGoods instance using the specified properties.
         * @function create
         * @memberof rpc.ShopGoods
         * @static
         * @param {rpc.IShopGoods=} [properties] Properties to set
         * @returns {rpc.ShopGoods} ShopGoods instance
         */
        ShopGoods.create = function create(properties) {
            return new ShopGoods(properties);
        };

        /**
         * Encodes the specified ShopGoods message. Does not implicitly {@link rpc.ShopGoods.verify|verify} messages.
         * @function encode
         * @memberof rpc.ShopGoods
         * @static
         * @param {rpc.IShopGoods} message ShopGoods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopGoods.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.goodsId != null && Object.hasOwnProperty.call(message, "goodsId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.goodsId);
            if (message.count != null && Object.hasOwnProperty.call(message, "count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
            return writer;
        };

        /**
         * Encodes the specified ShopGoods message, length delimited. Does not implicitly {@link rpc.ShopGoods.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.ShopGoods
         * @static
         * @param {rpc.IShopGoods} message ShopGoods message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShopGoods.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShopGoods message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.ShopGoods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.ShopGoods} ShopGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopGoods.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.ShopGoods();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.goodsId = reader.int32();
                    break;
                case 2:
                    message.count = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShopGoods message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.ShopGoods
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.ShopGoods} ShopGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShopGoods.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShopGoods message.
         * @function verify
         * @memberof rpc.ShopGoods
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShopGoods.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.goodsId != null && message.hasOwnProperty("goodsId"))
                if (!$util.isInteger(message.goodsId))
                    return "goodsId: integer expected";
            if (message.count != null && message.hasOwnProperty("count"))
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
            return null;
        };

        /**
         * Creates a ShopGoods message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.ShopGoods
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.ShopGoods} ShopGoods
         */
        ShopGoods.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.ShopGoods)
                return object;
            var message = new $root.rpc.ShopGoods();
            if (object.goodsId != null)
                message.goodsId = object.goodsId | 0;
            if (object.count != null)
                message.count = object.count | 0;
            return message;
        };

        /**
         * Creates a plain object from a ShopGoods message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.ShopGoods
         * @static
         * @param {rpc.ShopGoods} message ShopGoods
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShopGoods.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.goodsId = 0;
                object.count = 0;
            }
            if (message.goodsId != null && message.hasOwnProperty("goodsId"))
                object.goodsId = message.goodsId;
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            return object;
        };

        /**
         * Converts this ShopGoods to JSON.
         * @function toJSON
         * @memberof rpc.ShopGoods
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShopGoods.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShopGoods;
    })();

    return rpc;
})();

module.exports = $root;
