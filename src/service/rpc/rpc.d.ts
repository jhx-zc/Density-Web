import * as $protobuf from 'protobufjs'

/** Namespace rpc. */
export namespace rpc {

  /** LoginRespCode enum. */
  enum LoginRespCode {
    ERROR_LOGIN_INFO = 0,
    SUCCESS = 1
  }

  /** Properties of a LoginReq. */
  interface ILoginReq {

    /** LoginReq username */
    username?: (string | null);

    /** LoginReq password */
    password?: (string | null);
  }

  /** Represents a LoginReq. */
  class LoginReq implements ILoginReq {

    /**
     * Constructs a new LoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.ILoginReq);

    /** LoginReq username. */
    public username: string

    /** LoginReq password. */
    public password: string

    /**
     * Creates a new LoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginReq instance
     */
    public static create(properties?: rpc.ILoginReq): rpc.LoginReq;

    /**
     * Encodes the specified LoginReq message. Does not implicitly {@link rpc.LoginReq.verify|verify} messages.
     * @param message LoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: rpc.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link rpc.LoginReq.verify|verify} messages.
     * @param message LoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: rpc.ILoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): rpc.LoginReq;

    /**
     * Decodes a LoginReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): rpc.LoginReq;

    /**
     * Verifies a LoginReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginReq
     */
    public static fromObject(object: { [k: string]: any }): rpc.LoginReq;

    /**
     * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
     * @param message LoginReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rpc.LoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a LoginResp. */
  interface ILoginResp {

    /** LoginResp code */
    code?: (rpc.LoginRespCode | null);

    /** LoginResp sid */
    sid?: (string | null);
  }

  /** Represents a LoginResp. */
  class LoginResp implements ILoginResp {

    /**
     * Constructs a new LoginResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.ILoginResp);

    /** LoginResp code. */
    public code: rpc.LoginRespCode

    /** LoginResp sid. */
    public sid: string

    /**
     * Creates a new LoginResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoginResp instance
     */
    public static create(properties?: rpc.ILoginResp): rpc.LoginResp;

    /**
     * Encodes the specified LoginResp message. Does not implicitly {@link rpc.LoginResp.verify|verify} messages.
     * @param message LoginResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: rpc.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LoginResp message, length delimited. Does not implicitly {@link rpc.LoginResp.verify|verify} messages.
     * @param message LoginResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: rpc.ILoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LoginResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): rpc.LoginResp;

    /**
     * Decodes a LoginResp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): rpc.LoginResp;

    /**
     * Verifies a LoginResp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a LoginResp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoginResp
     */
    public static fromObject(object: { [k: string]: any }): rpc.LoginResp;

    /**
     * Creates a plain object from a LoginResp message. Also converts values to other types if specified.
     * @param message LoginResp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rpc.LoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LoginResp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** GoodsTypes enum. */
  enum GoodsTypes {
    Digital = 0,
    HomeAppliances = 1,
    DailyNecessities = 2,
    Clothing = 3
  }

  /** Properties of a Goods. */
  interface IGoods {

    /** Goods id */
    id?: (number | null);

    /** Goods imgUrl */
    imgUrl?: (string | null);

    /** Goods name */
    name?: (string | null);

    /** Goods star */
    star?: (number | null);

    /** Goods price */
    price?: (number | null);

    /** Goods brief */
    brief?: (string | null);

    /** Goods detail */
    detail?: (string | null);

    /** Goods goodsType */
    goodsType?: (rpc.GoodsTypes | null);

    /** Goods totalSize */
    totalSize?: (number | null);
  }

  /** Represents a Goods. */
  class Goods implements IGoods {

    /**
     * Constructs a new Goods.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGoods);

    /** Goods id. */
    public id: number

    /** Goods imgUrl. */
    public imgUrl: string

    /** Goods name. */
    public name: string

    /** Goods star. */
    public star: number

    /** Goods price. */
    public price: number

    /** Goods brief. */
    public brief: string

    /** Goods detail. */
    public detail: string

    /** Goods goodsType. */
    public goodsType: rpc.GoodsTypes

    /** Goods totalSize. */
    public totalSize: number

    /**
     * Creates a new Goods instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Goods instance
     */
    public static create(properties?: rpc.IGoods): rpc.Goods;

    /**
     * Encodes the specified Goods message. Does not implicitly {@link rpc.Goods.verify|verify} messages.
     * @param message Goods message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: rpc.IGoods, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Goods message, length delimited. Does not implicitly {@link rpc.Goods.verify|verify} messages.
     * @param message Goods message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: rpc.IGoods, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Goods message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Goods
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): rpc.Goods;

    /**
     * Decodes a Goods message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Goods
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): rpc.Goods;

    /**
     * Verifies a Goods message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a Goods message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Goods
     */
    public static fromObject(object: { [k: string]: any }): rpc.Goods;

    /**
     * Creates a plain object from a Goods message. Also converts values to other types if specified.
     * @param message Goods
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rpc.Goods, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Goods to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GoodsList. */
  interface IGoodsList {

    /** GoodsList goods */
    goods?: (rpc.IGoods[] | null);
  }

  /** Represents a GoodsList. */
  class GoodsList implements IGoodsList {

    /**
     * Constructs a new GoodsList.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGoodsList);

    /** GoodsList goods. */
    public goods: rpc.IGoods[]

    /**
     * Creates a new GoodsList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GoodsList instance
     */
    public static create(properties?: rpc.IGoodsList): rpc.GoodsList;

    /**
     * Encodes the specified GoodsList message. Does not implicitly {@link rpc.GoodsList.verify|verify} messages.
     * @param message GoodsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: rpc.IGoodsList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GoodsList message, length delimited. Does not implicitly {@link rpc.GoodsList.verify|verify} messages.
     * @param message GoodsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: rpc.IGoodsList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GoodsList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GoodsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): rpc.GoodsList;

    /**
     * Decodes a GoodsList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GoodsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): rpc.GoodsList;

    /**
     * Verifies a GoodsList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a GoodsList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GoodsList
     */
    public static fromObject(object: { [k: string]: any }): rpc.GoodsList;

    /**
     * Creates a plain object from a GoodsList message. Also converts values to other types if specified.
     * @param message GoodsList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rpc.GoodsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GoodsList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a GoodsUpdateRet. */
  interface IGoodsUpdateRet {

    /** GoodsUpdateRet success */
    success?: (boolean | null);
  }

  /** Represents a GoodsUpdateRet. */
  class GoodsUpdateRet implements IGoodsUpdateRet {

    /**
     * Constructs a new GoodsUpdateRet.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IGoodsUpdateRet);

    /** GoodsUpdateRet success. */
    public success: boolean

    /**
     * Creates a new GoodsUpdateRet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GoodsUpdateRet instance
     */
    public static create(properties?: rpc.IGoodsUpdateRet): rpc.GoodsUpdateRet;

    /**
     * Encodes the specified GoodsUpdateRet message. Does not implicitly {@link rpc.GoodsUpdateRet.verify|verify} messages.
     * @param message GoodsUpdateRet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: rpc.IGoodsUpdateRet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GoodsUpdateRet message, length delimited. Does not implicitly {@link rpc.GoodsUpdateRet.verify|verify} messages.
     * @param message GoodsUpdateRet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: rpc.IGoodsUpdateRet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GoodsUpdateRet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GoodsUpdateRet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): rpc.GoodsUpdateRet;

    /**
     * Decodes a GoodsUpdateRet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GoodsUpdateRet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): rpc.GoodsUpdateRet;

    /**
     * Verifies a GoodsUpdateRet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a GoodsUpdateRet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GoodsUpdateRet
     */
    public static fromObject(object: { [k: string]: any }): rpc.GoodsUpdateRet;

    /**
     * Creates a plain object from a GoodsUpdateRet message. Also converts values to other types if specified.
     * @param message GoodsUpdateRet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rpc.GoodsUpdateRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GoodsUpdateRet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ShopGoods. */
  interface IShopGoods {

    /** ShopGoods goodsId */
    goodsId?: (number | null);

    /** ShopGoods count */
    count?: (number | null);
  }

  /** Represents a ShopGoods. */
  class ShopGoods implements IShopGoods {

    /**
     * Constructs a new ShopGoods.
     * @param [properties] Properties to set
     */
    constructor(properties?: rpc.IShopGoods);

    /** ShopGoods goodsId. */
    public goodsId: number

    /** ShopGoods count. */
    public count: number

    /**
     * Creates a new ShopGoods instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShopGoods instance
     */
    public static create(properties?: rpc.IShopGoods): rpc.ShopGoods;

    /**
     * Encodes the specified ShopGoods message. Does not implicitly {@link rpc.ShopGoods.verify|verify} messages.
     * @param message ShopGoods message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: rpc.IShopGoods, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ShopGoods message, length delimited. Does not implicitly {@link rpc.ShopGoods.verify|verify} messages.
     * @param message ShopGoods message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: rpc.IShopGoods, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ShopGoods message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShopGoods
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader | Uint8Array), length?: number): rpc.ShopGoods;

    /**
     * Decodes a ShopGoods message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShopGoods
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader | Uint8Array)): rpc.ShopGoods;

    /**
     * Verifies a ShopGoods message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string | null);

    /**
     * Creates a ShopGoods message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShopGoods
     */
    public static fromObject(object: { [k: string]: any }): rpc.ShopGoods;

    /**
     * Creates a plain object from a ShopGoods message. Also converts values to other types if specified.
     * @param message ShopGoods
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: rpc.ShopGoods, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ShopGoods to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
