/**
 * 基础返回类型
 */
export abstract class BaseResDto {
  /**
   * 返回状态码。
   * 为 0 代表正常，为 -1 代表一般错误，其他code代表特殊错误
   */
  error: number;

  /**
   * 返回描述信息
   */
  message: string;

  /**
   * 额外需要返回的数据
   */
  data?: any;
}

/**
 * 普通数据返回类型
 */
export class DataResDto<T> extends BaseResDto {
  /**
   * 数据
   */
  data: T;
}

/**
 * 分页数据返回类型
 */
export class PageResDto<T> extends BaseResDto {
  /**
   * 分页数据总数
   */
  total: number;

  /**
   * 分页数据列表
   */
  list: T[];
}
