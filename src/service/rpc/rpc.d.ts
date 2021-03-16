import * as $protobuf from "protobufjs";
/** Namespace com. */
export namespace com {

    /** Namespace main. */
    namespace main {

        /** Namespace module. */
        namespace module {

            /** Namespace rpc. */
            namespace rpc {

                /** LoginRespCode enum. */
                enum LoginRespCode {
                    ERROR_LOGIN_INFO = 0,
                    SUCCESS = 1
                }

                /** Properties of a LoginReq. */
                interface ILoginReq {

                    /** LoginReq username */
                    username?: (string|null);

                    /** LoginReq password */
                    password?: (string|null);
                }

                /** Represents a LoginReq. */
                class LoginReq implements ILoginReq {

                    /**
                     * Constructs a new LoginReq.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.main.module.rpc.ILoginReq);

                    /** LoginReq username. */
                    public username: string;

                    /** LoginReq password. */
                    public password: string;

                    /**
                     * Creates a new LoginReq instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoginReq instance
                     */
                    public static create(properties?: com.main.module.rpc.ILoginReq): com.main.module.rpc.LoginReq;

                    /**
                     * Encodes the specified LoginReq message. Does not implicitly {@link com.main.module.rpc.LoginReq.verify|verify} messages.
                     * @param message LoginReq message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.main.module.rpc.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link com.main.module.rpc.LoginReq.verify|verify} messages.
                     * @param message LoginReq message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.main.module.rpc.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoginReq message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoginReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.main.module.rpc.LoginReq;

                    /**
                     * Decodes a LoginReq message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoginReq
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.main.module.rpc.LoginReq;

                    /**
                     * Verifies a LoginReq message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoginReq
                     */
                    public static fromObject(object: { [k: string]: any }): com.main.module.rpc.LoginReq;

                    /**
                     * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
                     * @param message LoginReq
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.main.module.rpc.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoginReq to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a LoginResp. */
                interface ILoginResp {

                    /** LoginResp code */
                    code?: (com.main.module.rpc.LoginRespCode|null);

                    /** LoginResp sid */
                    sid?: (string|null);
                }

                /** Represents a LoginResp. */
                class LoginResp implements ILoginResp {

                    /**
                     * Constructs a new LoginResp.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.main.module.rpc.ILoginResp);

                    /** LoginResp code. */
                    public code: com.main.module.rpc.LoginRespCode;

                    /** LoginResp sid. */
                    public sid: string;

                    /**
                     * Creates a new LoginResp instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns LoginResp instance
                     */
                    public static create(properties?: com.main.module.rpc.ILoginResp): com.main.module.rpc.LoginResp;

                    /**
                     * Encodes the specified LoginResp message. Does not implicitly {@link com.main.module.rpc.LoginResp.verify|verify} messages.
                     * @param message LoginResp message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.main.module.rpc.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link com.main.module.rpc.LoginResp.verify|verify} messages.
                     * @param message LoginResp message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.main.module.rpc.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a LoginResp message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns LoginResp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.main.module.rpc.LoginResp;

                    /**
                     * Decodes a LoginResp message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns LoginResp
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.main.module.rpc.LoginResp;

                    /**
                     * Verifies a LoginResp message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns LoginResp
                     */
                    public static fromObject(object: { [k: string]: any }): com.main.module.rpc.LoginResp;

                    /**
                     * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
                     * @param message LoginResp
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.main.module.rpc.LoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this LoginResp to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Goods. */
                interface IGoods {

                    /** Goods id */
                    id?: (number|null);

                    /** Goods imgUrl */
                    imgUrl?: (string|null);

                    /** Goods name */
                    name?: (string|null);

                    /** Goods star */
                    star?: (number|null);

                    /** Goods price */
                    price?: (number|null);

                    /** Goods brief */
                    brief?: (string|null);

                    /** Goods detail */
                    detail?: (string|null);

                    /** Goods totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a Goods. */
                class Goods implements IGoods {

                    /**
                     * Constructs a new Goods.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.main.module.rpc.IGoods);

                    /** Goods id. */
                    public id: number;

                    /** Goods imgUrl. */
                    public imgUrl: string;

                    /** Goods name. */
                    public name: string;

                    /** Goods star. */
                    public star: number;

                    /** Goods price. */
                    public price: number;

                    /** Goods brief. */
                    public brief: string;

                    /** Goods detail. */
                    public detail: string;

                    /** Goods totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new Goods instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Goods instance
                     */
                    public static create(properties?: com.main.module.rpc.IGoods): com.main.module.rpc.Goods;

                    /**
                     * Encodes the specified Goods message. Does not implicitly {@link com.main.module.rpc.Goods.verify|verify} messages.
                     * @param message Goods message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.main.module.rpc.IGoods, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Goods message, length delimited. Does not implicitly {@link com.main.module.rpc.Goods.verify|verify} messages.
                     * @param message Goods message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.main.module.rpc.IGoods, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Goods message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Goods
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.main.module.rpc.Goods;

                    /**
                     * Decodes a Goods message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Goods
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.main.module.rpc.Goods;

                    /**
                     * Verifies a Goods message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Goods message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Goods
                     */
                    public static fromObject(object: { [k: string]: any }): com.main.module.rpc.Goods;

                    /**
                     * Creates a plain object from a Goods message. Also converts values to other types if specified.
                     * @param message Goods
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.main.module.rpc.Goods, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Goods to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GoodsList. */
                interface IGoodsList {

                    /** GoodsList goods */
                    goods?: (com.main.module.rpc.IGoods[]|null);
                }

                /** Represents a GoodsList. */
                class GoodsList implements IGoodsList {

                    /**
                     * Constructs a new GoodsList.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.main.module.rpc.IGoodsList);

                    /** GoodsList goods. */
                    public goods: com.main.module.rpc.IGoods[];

                    /**
                     * Creates a new GoodsList instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GoodsList instance
                     */
                    public static create(properties?: com.main.module.rpc.IGoodsList): com.main.module.rpc.GoodsList;

                    /**
                     * Encodes the specified GoodsList message. Does not implicitly {@link com.main.module.rpc.GoodsList.verify|verify} messages.
                     * @param message GoodsList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.main.module.rpc.IGoodsList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GoodsList message, length delimited. Does not implicitly {@link com.main.module.rpc.GoodsList.verify|verify} messages.
                     * @param message GoodsList message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.main.module.rpc.IGoodsList, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GoodsList message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GoodsList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.main.module.rpc.GoodsList;

                    /**
                     * Decodes a GoodsList message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GoodsList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.main.module.rpc.GoodsList;

                    /**
                     * Verifies a GoodsList message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GoodsList message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GoodsList
                     */
                    public static fromObject(object: { [k: string]: any }): com.main.module.rpc.GoodsList;

                    /**
                     * Creates a plain object from a GoodsList message. Also converts values to other types if specified.
                     * @param message GoodsList
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.main.module.rpc.GoodsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GoodsList to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GoodsUpdateRet. */
                interface IGoodsUpdateRet {

                    /** GoodsUpdateRet success */
                    success?: (boolean|null);
                }

                /** Represents a GoodsUpdateRet. */
                class GoodsUpdateRet implements IGoodsUpdateRet {

                    /**
                     * Constructs a new GoodsUpdateRet.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: com.main.module.rpc.IGoodsUpdateRet);

                    /** GoodsUpdateRet success. */
                    public success: boolean;

                    /**
                     * Creates a new GoodsUpdateRet instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GoodsUpdateRet instance
                     */
                    public static create(properties?: com.main.module.rpc.IGoodsUpdateRet): com.main.module.rpc.GoodsUpdateRet;

                    /**
                     * Encodes the specified GoodsUpdateRet message. Does not implicitly {@link com.main.module.rpc.GoodsUpdateRet.verify|verify} messages.
                     * @param message GoodsUpdateRet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: com.main.module.rpc.IGoodsUpdateRet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GoodsUpdateRet message, length delimited. Does not implicitly {@link com.main.module.rpc.GoodsUpdateRet.verify|verify} messages.
                     * @param message GoodsUpdateRet message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: com.main.module.rpc.IGoodsUpdateRet, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GoodsUpdateRet message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GoodsUpdateRet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): com.main.module.rpc.GoodsUpdateRet;

                    /**
                     * Decodes a GoodsUpdateRet message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GoodsUpdateRet
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): com.main.module.rpc.GoodsUpdateRet;

                    /**
                     * Verifies a GoodsUpdateRet message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GoodsUpdateRet message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GoodsUpdateRet
                     */
                    public static fromObject(object: { [k: string]: any }): com.main.module.rpc.GoodsUpdateRet;

                    /**
                     * Creates a plain object from a GoodsUpdateRet message. Also converts values to other types if specified.
                     * @param message GoodsUpdateRet
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: com.main.module.rpc.GoodsUpdateRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GoodsUpdateRet to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}
