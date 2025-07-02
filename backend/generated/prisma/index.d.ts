
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model employees
 * 
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model employees_attendance
 * 
 */
export type employees_attendance = $Result.DefaultSelection<Prisma.$employees_attendancePayload>
/**
 * Model employee_request
 * 
 */
export type employee_request = $Result.DefaultSelection<Prisma.$employee_requestPayload>
/**
 * Model hr_employee
 * 
 */
export type hr_employee = $Result.DefaultSelection<Prisma.$hr_employeePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const employees_employee_Gender: {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other'
};

export type employees_employee_Gender = (typeof employees_employee_Gender)[keyof typeof employees_employee_Gender]


export const employees_employee_CivilStatus: {
  Single: 'Single',
  Married: 'Married',
  Divorced: 'Divorced'
};

export type employees_employee_CivilStatus = (typeof employees_employee_CivilStatus)[keyof typeof employees_employee_CivilStatus]


export const employees_employee_Status: {
  Active: 'Active',
  Inactive: 'Inactive',
  On_Leave: 'On_Leave',
  Suspended: 'Suspended',
  Terminated: 'Terminated',
  Resigned: 'Resigned',
  Retired: 'Retired',
  Probation: 'Probation',
  Contract_Ended: 'Contract_Ended'
};

export type employees_employee_Status = (typeof employees_employee_Status)[keyof typeof employees_employee_Status]


export const employees_employee_ShiftSchedule: {
  DayShift: 'DayShift',
  MidNight: 'MidNight',
  NightShift: 'NightShift'
};

export type employees_employee_ShiftSchedule = (typeof employees_employee_ShiftSchedule)[keyof typeof employees_employee_ShiftSchedule]


export const employee_request_leave: {
  Vacation: 'Vacation',
  Sick: 'Sick',
  Parental: 'Parental',
  Family_Medical: 'Family_Medical',
  Unpaid: 'Unpaid',
  Personal: 'Personal',
  Public_Holiday: 'Public_Holiday',
  Religious_Observance: 'Religious_Observance',
  Sabbatical: 'Sabbatical',
  Bereavement: 'Bereavement',
  Compensatory: 'Compensatory',
  Military: 'Military',
  Jury_Duty: 'Jury_Duty',
  Garden: 'Garden',
  Election: 'Election',
  Study: 'Study',
  Adverse_Weather: 'Adverse_Weather',
  Volunteer: 'Volunteer',
  Domestic_Violence: 'Domestic_Violence',
  Disability: 'Disability'
};

export type employee_request_leave = (typeof employee_request_leave)[keyof typeof employee_request_leave]


export const employee_request_status: {
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected'
};

export type employee_request_status = (typeof employee_request_status)[keyof typeof employee_request_status]


export const hr_employee_employee_Gender: {
  Male: 'Male',
  Female: 'Female',
  Other: 'Other'
};

export type hr_employee_employee_Gender = (typeof hr_employee_employee_Gender)[keyof typeof hr_employee_employee_Gender]


export const hr_employee_position: {
  Intern: 'Intern',
  INTERN: 'INTERN',
  HR_ASSISTANT: 'HR_ASSISTANT',
  HR_COORDINATOR: 'HR_COORDINATOR',
  RECRUITER: 'RECRUITER',
  HR_SPECIALIST: 'HR_SPECIALIST',
  HR_GENERALIST: 'HR_GENERALIST',
  HR_OFFICER: 'HR_OFFICER',
  HR_ANALYST: 'HR_ANALYST',
  HR_BUSINESS_PARTNER: 'HR_BUSINESS_PARTNER',
  HR_SUPERVISOR: 'HR_SUPERVISOR',
  HR_MANAGER: 'HR_MANAGER',
  TALENT_ACQUISITION_MANAGER: 'TALENT_ACQUISITION_MANAGER',
  COMPENSATION_AND_BENEFITS_MANAGER: 'COMPENSATION_AND_BENEFITS_MANAGER',
  TRAINING_AND_DEVELOPMENT_MANAGER: 'TRAINING_AND_DEVELOPMENT_MANAGER',
  HR_DIRECTOR: 'HR_DIRECTOR',
  VP_OF_HUMAN_RESOURCES: 'VP_OF_HUMAN_RESOURCES',
  CHIEF_HUMAN_RESOURCES_OFFICER: 'CHIEF_HUMAN_RESOURCES_OFFICER'
};

export type hr_employee_position = (typeof hr_employee_position)[keyof typeof hr_employee_position]


export const hr_employee_request_leave: {
  Vacation: 'Vacation',
  Sick: 'Sick',
  Parental: 'Parental',
  Family_Medical: 'Family_Medical',
  Unpaid: 'Unpaid',
  Personal: 'Personal',
  Public_Holiday: 'Public_Holiday',
  Religious_Observance: 'Religious_Observance',
  Sabbatical: 'Sabbatical',
  Bereavement: 'Bereavement',
  Compensatory: 'Compensatory',
  Military: 'Military',
  Jury_Duty: 'Jury_Duty',
  Garden: 'Garden',
  Election: 'Election',
  Study: 'Study',
  Adverse_Weather: 'Adverse_Weather',
  Volunteer: 'Volunteer',
  Domestic_Violence: 'Domestic_Violence',
  Disability: 'Disability'
};

export type hr_employee_request_leave = (typeof hr_employee_request_leave)[keyof typeof hr_employee_request_leave]


export const hr_employee_request_status: {
  Pending: 'Pending',
  Approved: 'Approved',
  Rejected: 'Rejected'
};

export type hr_employee_request_status = (typeof hr_employee_request_status)[keyof typeof hr_employee_request_status]

}

export type employees_employee_Gender = $Enums.employees_employee_Gender

export const employees_employee_Gender: typeof $Enums.employees_employee_Gender

export type employees_employee_CivilStatus = $Enums.employees_employee_CivilStatus

export const employees_employee_CivilStatus: typeof $Enums.employees_employee_CivilStatus

export type employees_employee_Status = $Enums.employees_employee_Status

export const employees_employee_Status: typeof $Enums.employees_employee_Status

export type employees_employee_ShiftSchedule = $Enums.employees_employee_ShiftSchedule

export const employees_employee_ShiftSchedule: typeof $Enums.employees_employee_ShiftSchedule

export type employee_request_leave = $Enums.employee_request_leave

export const employee_request_leave: typeof $Enums.employee_request_leave

export type employee_request_status = $Enums.employee_request_status

export const employee_request_status: typeof $Enums.employee_request_status

export type hr_employee_employee_Gender = $Enums.hr_employee_employee_Gender

export const hr_employee_employee_Gender: typeof $Enums.hr_employee_employee_Gender

export type hr_employee_position = $Enums.hr_employee_position

export const hr_employee_position: typeof $Enums.hr_employee_position

export type hr_employee_request_leave = $Enums.hr_employee_request_leave

export const hr_employee_request_leave: typeof $Enums.hr_employee_request_leave

export type hr_employee_request_status = $Enums.hr_employee_request_status

export const hr_employee_request_status: typeof $Enums.hr_employee_request_status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employees.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employees.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employees_attendance`: Exposes CRUD operations for the **employees_attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees_attendances
    * const employees_attendances = await prisma.employees_attendance.findMany()
    * ```
    */
  get employees_attendance(): Prisma.employees_attendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee_request`: Exposes CRUD operations for the **employee_request** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employee_requests
    * const employee_requests = await prisma.employee_request.findMany()
    * ```
    */
  get employee_request(): Prisma.employee_requestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hr_employee`: Exposes CRUD operations for the **hr_employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Hr_employees
    * const hr_employees = await prisma.hr_employee.findMany()
    * ```
    */
  get hr_employee(): Prisma.hr_employeeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    employees: 'employees',
    employees_attendance: 'employees_attendance',
    employee_request: 'employee_request',
    hr_employee: 'hr_employee'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employees" | "employees_attendance" | "employee_request" | "hr_employee"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      employees_attendance: {
        payload: Prisma.$employees_attendancePayload<ExtArgs>
        fields: Prisma.employees_attendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employees_attendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employees_attendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload>
          }
          findFirst: {
            args: Prisma.employees_attendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employees_attendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload>
          }
          findMany: {
            args: Prisma.employees_attendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload>[]
          }
          create: {
            args: Prisma.employees_attendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload>
          }
          createMany: {
            args: Prisma.employees_attendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.employees_attendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload>
          }
          update: {
            args: Prisma.employees_attendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload>
          }
          deleteMany: {
            args: Prisma.employees_attendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employees_attendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.employees_attendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employees_attendancePayload>
          }
          aggregate: {
            args: Prisma.Employees_attendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees_attendance>
          }
          groupBy: {
            args: Prisma.employees_attendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<Employees_attendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.employees_attendanceCountArgs<ExtArgs>
            result: $Utils.Optional<Employees_attendanceCountAggregateOutputType> | number
          }
        }
      }
      employee_request: {
        payload: Prisma.$employee_requestPayload<ExtArgs>
        fields: Prisma.employee_requestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employee_requestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employee_requestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload>
          }
          findFirst: {
            args: Prisma.employee_requestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employee_requestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload>
          }
          findMany: {
            args: Prisma.employee_requestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload>[]
          }
          create: {
            args: Prisma.employee_requestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload>
          }
          createMany: {
            args: Prisma.employee_requestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.employee_requestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload>
          }
          update: {
            args: Prisma.employee_requestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload>
          }
          deleteMany: {
            args: Prisma.employee_requestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employee_requestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.employee_requestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employee_requestPayload>
          }
          aggregate: {
            args: Prisma.Employee_requestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee_request>
          }
          groupBy: {
            args: Prisma.employee_requestGroupByArgs<ExtArgs>
            result: $Utils.Optional<Employee_requestGroupByOutputType>[]
          }
          count: {
            args: Prisma.employee_requestCountArgs<ExtArgs>
            result: $Utils.Optional<Employee_requestCountAggregateOutputType> | number
          }
        }
      }
      hr_employee: {
        payload: Prisma.$hr_employeePayload<ExtArgs>
        fields: Prisma.hr_employeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.hr_employeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.hr_employeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload>
          }
          findFirst: {
            args: Prisma.hr_employeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.hr_employeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload>
          }
          findMany: {
            args: Prisma.hr_employeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload>[]
          }
          create: {
            args: Prisma.hr_employeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload>
          }
          createMany: {
            args: Prisma.hr_employeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.hr_employeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload>
          }
          update: {
            args: Prisma.hr_employeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload>
          }
          deleteMany: {
            args: Prisma.hr_employeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.hr_employeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.hr_employeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$hr_employeePayload>
          }
          aggregate: {
            args: Prisma.Hr_employeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHr_employee>
          }
          groupBy: {
            args: Prisma.hr_employeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Hr_employeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.hr_employeeCountArgs<ExtArgs>
            result: $Utils.Optional<Hr_employeeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    employees?: employeesOmit
    employees_attendance?: employees_attendanceOmit
    employee_request?: employee_requestOmit
    hr_employee?: hr_employeeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EmployeesCountOutputType
   */

  export type EmployeesCountOutputType = {
    attendances: number
    leaveRequests: number
  }

  export type EmployeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | EmployeesCountOutputTypeCountAttendancesArgs
    leaveRequests?: boolean | EmployeesCountOutputTypeCountLeaveRequestsArgs
  }

  // Custom InputTypes
  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeesCountOutputType
     */
    select?: EmployeesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employees_attendanceWhereInput
  }

  /**
   * EmployeesCountOutputType without action
   */
  export type EmployeesCountOutputTypeCountLeaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employee_requestWhereInput
  }


  /**
   * Models
   */

  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    employeeId: number | null
    employee_Salary: Decimal | null
  }

  export type EmployeesSumAggregateOutputType = {
    employeeId: number | null
    employee_Salary: Decimal | null
  }

  export type EmployeesMinAggregateOutputType = {
    employeeId: number | null
    employee_FirstName: string | null
    employee_LastName: string | null
    employee_Address: string | null
    employee_PhoneNumber: string | null
    employee_HireDate: Date | null
    employee_Gender: $Enums.employees_employee_Gender | null
    employee_Position: string | null
    employee_Department: string | null
    employee_Salary: Decimal | null
    employee_CivilStatus: $Enums.employees_employee_CivilStatus | null
    employee_Status: $Enums.employees_employee_Status | null
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule | null
    employee_TIN: string | null
    employee_SSSNumber: string | null
    employee_PhilhealthNumber: string | null
    employee_emergencyContactName: string | null
    employee_emergencyContactNumber: string | null
    employee_imageURL: string | null
    password: string | null
    mustChangePassword: boolean | null
  }

  export type EmployeesMaxAggregateOutputType = {
    employeeId: number | null
    employee_FirstName: string | null
    employee_LastName: string | null
    employee_Address: string | null
    employee_PhoneNumber: string | null
    employee_HireDate: Date | null
    employee_Gender: $Enums.employees_employee_Gender | null
    employee_Position: string | null
    employee_Department: string | null
    employee_Salary: Decimal | null
    employee_CivilStatus: $Enums.employees_employee_CivilStatus | null
    employee_Status: $Enums.employees_employee_Status | null
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule | null
    employee_TIN: string | null
    employee_SSSNumber: string | null
    employee_PhilhealthNumber: string | null
    employee_emergencyContactName: string | null
    employee_emergencyContactNumber: string | null
    employee_imageURL: string | null
    password: string | null
    mustChangePassword: boolean | null
  }

  export type EmployeesCountAggregateOutputType = {
    employeeId: number
    employee_FirstName: number
    employee_LastName: number
    employee_Address: number
    employee_PhoneNumber: number
    employee_HireDate: number
    employee_Gender: number
    employee_Position: number
    employee_Department: number
    employee_Salary: number
    employee_CivilStatus: number
    employee_Status: number
    employee_ShiftSchedule: number
    employee_TIN: number
    employee_SSSNumber: number
    employee_PhilhealthNumber: number
    employee_emergencyContactName: number
    employee_emergencyContactNumber: number
    employee_imageURL: number
    password: number
    mustChangePassword: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    employeeId?: true
    employee_Salary?: true
  }

  export type EmployeesSumAggregateInputType = {
    employeeId?: true
    employee_Salary?: true
  }

  export type EmployeesMinAggregateInputType = {
    employeeId?: true
    employee_FirstName?: true
    employee_LastName?: true
    employee_Address?: true
    employee_PhoneNumber?: true
    employee_HireDate?: true
    employee_Gender?: true
    employee_Position?: true
    employee_Department?: true
    employee_Salary?: true
    employee_CivilStatus?: true
    employee_Status?: true
    employee_ShiftSchedule?: true
    employee_TIN?: true
    employee_SSSNumber?: true
    employee_PhilhealthNumber?: true
    employee_emergencyContactName?: true
    employee_emergencyContactNumber?: true
    employee_imageURL?: true
    password?: true
    mustChangePassword?: true
  }

  export type EmployeesMaxAggregateInputType = {
    employeeId?: true
    employee_FirstName?: true
    employee_LastName?: true
    employee_Address?: true
    employee_PhoneNumber?: true
    employee_HireDate?: true
    employee_Gender?: true
    employee_Position?: true
    employee_Department?: true
    employee_Salary?: true
    employee_CivilStatus?: true
    employee_Status?: true
    employee_ShiftSchedule?: true
    employee_TIN?: true
    employee_SSSNumber?: true
    employee_PhilhealthNumber?: true
    employee_emergencyContactName?: true
    employee_emergencyContactNumber?: true
    employee_imageURL?: true
    password?: true
    mustChangePassword?: true
  }

  export type EmployeesCountAggregateInputType = {
    employeeId?: true
    employee_FirstName?: true
    employee_LastName?: true
    employee_Address?: true
    employee_PhoneNumber?: true
    employee_HireDate?: true
    employee_Gender?: true
    employee_Position?: true
    employee_Department?: true
    employee_Salary?: true
    employee_CivilStatus?: true
    employee_Status?: true
    employee_ShiftSchedule?: true
    employee_TIN?: true
    employee_SSSNumber?: true
    employee_PhilhealthNumber?: true
    employee_emergencyContactName?: true
    employee_emergencyContactNumber?: true
    employee_imageURL?: true
    password?: true
    mustChangePassword?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    employeeId: number
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword: boolean
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    employeeId?: boolean
    employee_FirstName?: boolean
    employee_LastName?: boolean
    employee_Address?: boolean
    employee_PhoneNumber?: boolean
    employee_HireDate?: boolean
    employee_Gender?: boolean
    employee_Position?: boolean
    employee_Department?: boolean
    employee_Salary?: boolean
    employee_CivilStatus?: boolean
    employee_Status?: boolean
    employee_ShiftSchedule?: boolean
    employee_TIN?: boolean
    employee_SSSNumber?: boolean
    employee_PhilhealthNumber?: boolean
    employee_emergencyContactName?: boolean
    employee_emergencyContactNumber?: boolean
    employee_imageURL?: boolean
    password?: boolean
    mustChangePassword?: boolean
    attendances?: boolean | employees$attendancesArgs<ExtArgs>
    leaveRequests?: boolean | employees$leaveRequestsArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees"]>



  export type employeesSelectScalar = {
    employeeId?: boolean
    employee_FirstName?: boolean
    employee_LastName?: boolean
    employee_Address?: boolean
    employee_PhoneNumber?: boolean
    employee_HireDate?: boolean
    employee_Gender?: boolean
    employee_Position?: boolean
    employee_Department?: boolean
    employee_Salary?: boolean
    employee_CivilStatus?: boolean
    employee_Status?: boolean
    employee_ShiftSchedule?: boolean
    employee_TIN?: boolean
    employee_SSSNumber?: boolean
    employee_PhilhealthNumber?: boolean
    employee_emergencyContactName?: boolean
    employee_emergencyContactNumber?: boolean
    employee_imageURL?: boolean
    password?: boolean
    mustChangePassword?: boolean
  }

  export type employeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"employeeId" | "employee_FirstName" | "employee_LastName" | "employee_Address" | "employee_PhoneNumber" | "employee_HireDate" | "employee_Gender" | "employee_Position" | "employee_Department" | "employee_Salary" | "employee_CivilStatus" | "employee_Status" | "employee_ShiftSchedule" | "employee_TIN" | "employee_SSSNumber" | "employee_PhilhealthNumber" | "employee_emergencyContactName" | "employee_emergencyContactNumber" | "employee_imageURL" | "password" | "mustChangePassword", ExtArgs["result"]["employees"]>
  export type employeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | employees$attendancesArgs<ExtArgs>
    leaveRequests?: boolean | employees$leaveRequestsArgs<ExtArgs>
    _count?: boolean | EmployeesCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {
      attendances: Prisma.$employees_attendancePayload<ExtArgs>[]
      leaveRequests: Prisma.$employee_requestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      employeeId: number
      employee_FirstName: string
      employee_LastName: string
      employee_Address: string
      employee_PhoneNumber: string
      employee_HireDate: Date
      employee_Gender: $Enums.employees_employee_Gender
      employee_Position: string
      employee_Department: string
      employee_Salary: Prisma.Decimal
      employee_CivilStatus: $Enums.employees_employee_CivilStatus
      employee_Status: $Enums.employees_employee_Status
      employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
      employee_TIN: string
      employee_SSSNumber: string
      employee_PhilhealthNumber: string
      employee_emergencyContactName: string
      employee_emergencyContactNumber: string
      employee_imageURL: string
      password: string
      mustChangePassword: boolean
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `employeeId`
     * const employeesWithEmployeeIdOnly = await prisma.employees.findMany({ select: { employeeId: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    attendances<T extends employees$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, employees$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaveRequests<T extends employees$leaveRequestsArgs<ExtArgs> = {}>(args?: Subset<T, employees$leaveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employees model
   */
  interface employeesFieldRefs {
    readonly employeeId: FieldRef<"employees", 'Int'>
    readonly employee_FirstName: FieldRef<"employees", 'String'>
    readonly employee_LastName: FieldRef<"employees", 'String'>
    readonly employee_Address: FieldRef<"employees", 'String'>
    readonly employee_PhoneNumber: FieldRef<"employees", 'String'>
    readonly employee_HireDate: FieldRef<"employees", 'DateTime'>
    readonly employee_Gender: FieldRef<"employees", 'employees_employee_Gender'>
    readonly employee_Position: FieldRef<"employees", 'String'>
    readonly employee_Department: FieldRef<"employees", 'String'>
    readonly employee_Salary: FieldRef<"employees", 'Decimal'>
    readonly employee_CivilStatus: FieldRef<"employees", 'employees_employee_CivilStatus'>
    readonly employee_Status: FieldRef<"employees", 'employees_employee_Status'>
    readonly employee_ShiftSchedule: FieldRef<"employees", 'employees_employee_ShiftSchedule'>
    readonly employee_TIN: FieldRef<"employees", 'String'>
    readonly employee_SSSNumber: FieldRef<"employees", 'String'>
    readonly employee_PhilhealthNumber: FieldRef<"employees", 'String'>
    readonly employee_emergencyContactName: FieldRef<"employees", 'String'>
    readonly employee_emergencyContactNumber: FieldRef<"employees", 'String'>
    readonly employee_imageURL: FieldRef<"employees", 'String'>
    readonly password: FieldRef<"employees", 'String'>
    readonly mustChangePassword: FieldRef<"employees", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employees.attendances
   */
  export type employees$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    where?: employees_attendanceWhereInput
    orderBy?: employees_attendanceOrderByWithRelationInput | employees_attendanceOrderByWithRelationInput[]
    cursor?: employees_attendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Employees_attendanceScalarFieldEnum | Employees_attendanceScalarFieldEnum[]
  }

  /**
   * employees.leaveRequests
   */
  export type employees$leaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    where?: employee_requestWhereInput
    orderBy?: employee_requestOrderByWithRelationInput | employee_requestOrderByWithRelationInput[]
    cursor?: employee_requestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Employee_requestScalarFieldEnum | Employee_requestScalarFieldEnum[]
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employeesInclude<ExtArgs> | null
  }


  /**
   * Model employees_attendance
   */

  export type AggregateEmployees_attendance = {
    _count: Employees_attendanceCountAggregateOutputType | null
    _avg: Employees_attendanceAvgAggregateOutputType | null
    _sum: Employees_attendanceSumAggregateOutputType | null
    _min: Employees_attendanceMinAggregateOutputType | null
    _max: Employees_attendanceMaxAggregateOutputType | null
  }

  export type Employees_attendanceAvgAggregateOutputType = {
    attendance_id: number | null
    employeeId: number | null
  }

  export type Employees_attendanceSumAggregateOutputType = {
    attendance_id: number | null
    employeeId: number | null
  }

  export type Employees_attendanceMinAggregateOutputType = {
    attendance_id: number | null
    shiftSchedule: $Enums.employees_employee_ShiftSchedule | null
    employeeId: number | null
    clockIn: Date | null
    clockOut: Date | null
  }

  export type Employees_attendanceMaxAggregateOutputType = {
    attendance_id: number | null
    shiftSchedule: $Enums.employees_employee_ShiftSchedule | null
    employeeId: number | null
    clockIn: Date | null
    clockOut: Date | null
  }

  export type Employees_attendanceCountAggregateOutputType = {
    attendance_id: number
    shiftSchedule: number
    employeeId: number
    clockIn: number
    clockOut: number
    _all: number
  }


  export type Employees_attendanceAvgAggregateInputType = {
    attendance_id?: true
    employeeId?: true
  }

  export type Employees_attendanceSumAggregateInputType = {
    attendance_id?: true
    employeeId?: true
  }

  export type Employees_attendanceMinAggregateInputType = {
    attendance_id?: true
    shiftSchedule?: true
    employeeId?: true
    clockIn?: true
    clockOut?: true
  }

  export type Employees_attendanceMaxAggregateInputType = {
    attendance_id?: true
    shiftSchedule?: true
    employeeId?: true
    clockIn?: true
    clockOut?: true
  }

  export type Employees_attendanceCountAggregateInputType = {
    attendance_id?: true
    shiftSchedule?: true
    employeeId?: true
    clockIn?: true
    clockOut?: true
    _all?: true
  }

  export type Employees_attendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees_attendance to aggregate.
     */
    where?: employees_attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees_attendances to fetch.
     */
    orderBy?: employees_attendanceOrderByWithRelationInput | employees_attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employees_attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees_attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees_attendances
    **/
    _count?: true | Employees_attendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Employees_attendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Employees_attendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Employees_attendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Employees_attendanceMaxAggregateInputType
  }

  export type GetEmployees_attendanceAggregateType<T extends Employees_attendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees_attendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees_attendance[P]>
      : GetScalarType<T[P], AggregateEmployees_attendance[P]>
  }




  export type employees_attendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employees_attendanceWhereInput
    orderBy?: employees_attendanceOrderByWithAggregationInput | employees_attendanceOrderByWithAggregationInput[]
    by: Employees_attendanceScalarFieldEnum[] | Employees_attendanceScalarFieldEnum
    having?: employees_attendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Employees_attendanceCountAggregateInputType | true
    _avg?: Employees_attendanceAvgAggregateInputType
    _sum?: Employees_attendanceSumAggregateInputType
    _min?: Employees_attendanceMinAggregateInputType
    _max?: Employees_attendanceMaxAggregateInputType
  }

  export type Employees_attendanceGroupByOutputType = {
    attendance_id: number
    shiftSchedule: $Enums.employees_employee_ShiftSchedule
    employeeId: number
    clockIn: Date
    clockOut: Date
    _count: Employees_attendanceCountAggregateOutputType | null
    _avg: Employees_attendanceAvgAggregateOutputType | null
    _sum: Employees_attendanceSumAggregateOutputType | null
    _min: Employees_attendanceMinAggregateOutputType | null
    _max: Employees_attendanceMaxAggregateOutputType | null
  }

  type GetEmployees_attendanceGroupByPayload<T extends employees_attendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Employees_attendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Employees_attendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Employees_attendanceGroupByOutputType[P]>
            : GetScalarType<T[P], Employees_attendanceGroupByOutputType[P]>
        }
      >
    >


  export type employees_attendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    attendance_id?: boolean
    shiftSchedule?: boolean
    employeeId?: boolean
    clockIn?: boolean
    clockOut?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employees_attendance"]>



  export type employees_attendanceSelectScalar = {
    attendance_id?: boolean
    shiftSchedule?: boolean
    employeeId?: boolean
    clockIn?: boolean
    clockOut?: boolean
  }

  export type employees_attendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"attendance_id" | "shiftSchedule" | "employeeId" | "clockIn" | "clockOut", ExtArgs["result"]["employees_attendance"]>
  export type employees_attendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }

  export type $employees_attendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees_attendance"
    objects: {
      employee: Prisma.$employeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      attendance_id: number
      shiftSchedule: $Enums.employees_employee_ShiftSchedule
      employeeId: number
      clockIn: Date
      clockOut: Date
    }, ExtArgs["result"]["employees_attendance"]>
    composites: {}
  }

  type employees_attendanceGetPayload<S extends boolean | null | undefined | employees_attendanceDefaultArgs> = $Result.GetResult<Prisma.$employees_attendancePayload, S>

  type employees_attendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employees_attendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Employees_attendanceCountAggregateInputType | true
    }

  export interface employees_attendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees_attendance'], meta: { name: 'employees_attendance' } }
    /**
     * Find zero or one Employees_attendance that matches the filter.
     * @param {employees_attendanceFindUniqueArgs} args - Arguments to find a Employees_attendance
     * @example
     * // Get one Employees_attendance
     * const employees_attendance = await prisma.employees_attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employees_attendanceFindUniqueArgs>(args: SelectSubset<T, employees_attendanceFindUniqueArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees_attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employees_attendanceFindUniqueOrThrowArgs} args - Arguments to find a Employees_attendance
     * @example
     * // Get one Employees_attendance
     * const employees_attendance = await prisma.employees_attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employees_attendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, employees_attendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees_attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees_attendanceFindFirstArgs} args - Arguments to find a Employees_attendance
     * @example
     * // Get one Employees_attendance
     * const employees_attendance = await prisma.employees_attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employees_attendanceFindFirstArgs>(args?: SelectSubset<T, employees_attendanceFindFirstArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees_attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees_attendanceFindFirstOrThrowArgs} args - Arguments to find a Employees_attendance
     * @example
     * // Get one Employees_attendance
     * const employees_attendance = await prisma.employees_attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employees_attendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, employees_attendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees_attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees_attendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees_attendances
     * const employees_attendances = await prisma.employees_attendance.findMany()
     * 
     * // Get first 10 Employees_attendances
     * const employees_attendances = await prisma.employees_attendance.findMany({ take: 10 })
     * 
     * // Only select the `attendance_id`
     * const employees_attendanceWithAttendance_idOnly = await prisma.employees_attendance.findMany({ select: { attendance_id: true } })
     * 
     */
    findMany<T extends employees_attendanceFindManyArgs>(args?: SelectSubset<T, employees_attendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees_attendance.
     * @param {employees_attendanceCreateArgs} args - Arguments to create a Employees_attendance.
     * @example
     * // Create one Employees_attendance
     * const Employees_attendance = await prisma.employees_attendance.create({
     *   data: {
     *     // ... data to create a Employees_attendance
     *   }
     * })
     * 
     */
    create<T extends employees_attendanceCreateArgs>(args: SelectSubset<T, employees_attendanceCreateArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees_attendances.
     * @param {employees_attendanceCreateManyArgs} args - Arguments to create many Employees_attendances.
     * @example
     * // Create many Employees_attendances
     * const employees_attendance = await prisma.employees_attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employees_attendanceCreateManyArgs>(args?: SelectSubset<T, employees_attendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees_attendance.
     * @param {employees_attendanceDeleteArgs} args - Arguments to delete one Employees_attendance.
     * @example
     * // Delete one Employees_attendance
     * const Employees_attendance = await prisma.employees_attendance.delete({
     *   where: {
     *     // ... filter to delete one Employees_attendance
     *   }
     * })
     * 
     */
    delete<T extends employees_attendanceDeleteArgs>(args: SelectSubset<T, employees_attendanceDeleteArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees_attendance.
     * @param {employees_attendanceUpdateArgs} args - Arguments to update one Employees_attendance.
     * @example
     * // Update one Employees_attendance
     * const employees_attendance = await prisma.employees_attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employees_attendanceUpdateArgs>(args: SelectSubset<T, employees_attendanceUpdateArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees_attendances.
     * @param {employees_attendanceDeleteManyArgs} args - Arguments to filter Employees_attendances to delete.
     * @example
     * // Delete a few Employees_attendances
     * const { count } = await prisma.employees_attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employees_attendanceDeleteManyArgs>(args?: SelectSubset<T, employees_attendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees_attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees_attendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees_attendances
     * const employees_attendance = await prisma.employees_attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employees_attendanceUpdateManyArgs>(args: SelectSubset<T, employees_attendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees_attendance.
     * @param {employees_attendanceUpsertArgs} args - Arguments to update or create a Employees_attendance.
     * @example
     * // Update or create a Employees_attendance
     * const employees_attendance = await prisma.employees_attendance.upsert({
     *   create: {
     *     // ... data to create a Employees_attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees_attendance we want to update
     *   }
     * })
     */
    upsert<T extends employees_attendanceUpsertArgs>(args: SelectSubset<T, employees_attendanceUpsertArgs<ExtArgs>>): Prisma__employees_attendanceClient<$Result.GetResult<Prisma.$employees_attendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees_attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees_attendanceCountArgs} args - Arguments to filter Employees_attendances to count.
     * @example
     * // Count the number of Employees_attendances
     * const count = await prisma.employees_attendance.count({
     *   where: {
     *     // ... the filter for the Employees_attendances we want to count
     *   }
     * })
    **/
    count<T extends employees_attendanceCountArgs>(
      args?: Subset<T, employees_attendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Employees_attendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees_attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employees_attendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Employees_attendanceAggregateArgs>(args: Subset<T, Employees_attendanceAggregateArgs>): Prisma.PrismaPromise<GetEmployees_attendanceAggregateType<T>>

    /**
     * Group by Employees_attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employees_attendanceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employees_attendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employees_attendanceGroupByArgs['orderBy'] }
        : { orderBy?: employees_attendanceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employees_attendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployees_attendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees_attendance model
   */
  readonly fields: employees_attendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees_attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employees_attendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeesDefaultArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employees_attendance model
   */
  interface employees_attendanceFieldRefs {
    readonly attendance_id: FieldRef<"employees_attendance", 'Int'>
    readonly shiftSchedule: FieldRef<"employees_attendance", 'employees_employee_ShiftSchedule'>
    readonly employeeId: FieldRef<"employees_attendance", 'Int'>
    readonly clockIn: FieldRef<"employees_attendance", 'DateTime'>
    readonly clockOut: FieldRef<"employees_attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * employees_attendance findUnique
   */
  export type employees_attendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * Filter, which employees_attendance to fetch.
     */
    where: employees_attendanceWhereUniqueInput
  }

  /**
   * employees_attendance findUniqueOrThrow
   */
  export type employees_attendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * Filter, which employees_attendance to fetch.
     */
    where: employees_attendanceWhereUniqueInput
  }

  /**
   * employees_attendance findFirst
   */
  export type employees_attendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * Filter, which employees_attendance to fetch.
     */
    where?: employees_attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees_attendances to fetch.
     */
    orderBy?: employees_attendanceOrderByWithRelationInput | employees_attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees_attendances.
     */
    cursor?: employees_attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees_attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees_attendances.
     */
    distinct?: Employees_attendanceScalarFieldEnum | Employees_attendanceScalarFieldEnum[]
  }

  /**
   * employees_attendance findFirstOrThrow
   */
  export type employees_attendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * Filter, which employees_attendance to fetch.
     */
    where?: employees_attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees_attendances to fetch.
     */
    orderBy?: employees_attendanceOrderByWithRelationInput | employees_attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees_attendances.
     */
    cursor?: employees_attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees_attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees_attendances.
     */
    distinct?: Employees_attendanceScalarFieldEnum | Employees_attendanceScalarFieldEnum[]
  }

  /**
   * employees_attendance findMany
   */
  export type employees_attendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * Filter, which employees_attendances to fetch.
     */
    where?: employees_attendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees_attendances to fetch.
     */
    orderBy?: employees_attendanceOrderByWithRelationInput | employees_attendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees_attendances.
     */
    cursor?: employees_attendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees_attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees_attendances.
     */
    skip?: number
    distinct?: Employees_attendanceScalarFieldEnum | Employees_attendanceScalarFieldEnum[]
  }

  /**
   * employees_attendance create
   */
  export type employees_attendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a employees_attendance.
     */
    data: XOR<employees_attendanceCreateInput, employees_attendanceUncheckedCreateInput>
  }

  /**
   * employees_attendance createMany
   */
  export type employees_attendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees_attendances.
     */
    data: employees_attendanceCreateManyInput | employees_attendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees_attendance update
   */
  export type employees_attendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a employees_attendance.
     */
    data: XOR<employees_attendanceUpdateInput, employees_attendanceUncheckedUpdateInput>
    /**
     * Choose, which employees_attendance to update.
     */
    where: employees_attendanceWhereUniqueInput
  }

  /**
   * employees_attendance updateMany
   */
  export type employees_attendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees_attendances.
     */
    data: XOR<employees_attendanceUpdateManyMutationInput, employees_attendanceUncheckedUpdateManyInput>
    /**
     * Filter which employees_attendances to update
     */
    where?: employees_attendanceWhereInput
    /**
     * Limit how many employees_attendances to update.
     */
    limit?: number
  }

  /**
   * employees_attendance upsert
   */
  export type employees_attendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the employees_attendance to update in case it exists.
     */
    where: employees_attendanceWhereUniqueInput
    /**
     * In case the employees_attendance found by the `where` argument doesn't exist, create a new employees_attendance with this data.
     */
    create: XOR<employees_attendanceCreateInput, employees_attendanceUncheckedCreateInput>
    /**
     * In case the employees_attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employees_attendanceUpdateInput, employees_attendanceUncheckedUpdateInput>
  }

  /**
   * employees_attendance delete
   */
  export type employees_attendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
    /**
     * Filter which employees_attendance to delete.
     */
    where: employees_attendanceWhereUniqueInput
  }

  /**
   * employees_attendance deleteMany
   */
  export type employees_attendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees_attendances to delete
     */
    where?: employees_attendanceWhereInput
    /**
     * Limit how many employees_attendances to delete.
     */
    limit?: number
  }

  /**
   * employees_attendance without action
   */
  export type employees_attendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees_attendance
     */
    select?: employees_attendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees_attendance
     */
    omit?: employees_attendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employees_attendanceInclude<ExtArgs> | null
  }


  /**
   * Model employee_request
   */

  export type AggregateEmployee_request = {
    _count: Employee_requestCountAggregateOutputType | null
    _avg: Employee_requestAvgAggregateOutputType | null
    _sum: Employee_requestSumAggregateOutputType | null
    _min: Employee_requestMinAggregateOutputType | null
    _max: Employee_requestMaxAggregateOutputType | null
  }

  export type Employee_requestAvgAggregateOutputType = {
    leaverequest_id: number | null
    employeeId: number | null
  }

  export type Employee_requestSumAggregateOutputType = {
    leaverequest_id: number | null
    employeeId: number | null
  }

  export type Employee_requestMinAggregateOutputType = {
    leaverequest_id: number | null
    leaverequest_reason: string | null
    leaverequest_status: $Enums.employee_request_status | null
    leave: $Enums.employee_request_leave | null
    employeeId: number | null
  }

  export type Employee_requestMaxAggregateOutputType = {
    leaverequest_id: number | null
    leaverequest_reason: string | null
    leaverequest_status: $Enums.employee_request_status | null
    leave: $Enums.employee_request_leave | null
    employeeId: number | null
  }

  export type Employee_requestCountAggregateOutputType = {
    leaverequest_id: number
    leaverequest_reason: number
    leaverequest_status: number
    leave: number
    employeeId: number
    _all: number
  }


  export type Employee_requestAvgAggregateInputType = {
    leaverequest_id?: true
    employeeId?: true
  }

  export type Employee_requestSumAggregateInputType = {
    leaverequest_id?: true
    employeeId?: true
  }

  export type Employee_requestMinAggregateInputType = {
    leaverequest_id?: true
    leaverequest_reason?: true
    leaverequest_status?: true
    leave?: true
    employeeId?: true
  }

  export type Employee_requestMaxAggregateInputType = {
    leaverequest_id?: true
    leaverequest_reason?: true
    leaverequest_status?: true
    leave?: true
    employeeId?: true
  }

  export type Employee_requestCountAggregateInputType = {
    leaverequest_id?: true
    leaverequest_reason?: true
    leaverequest_status?: true
    leave?: true
    employeeId?: true
    _all?: true
  }

  export type Employee_requestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee_request to aggregate.
     */
    where?: employee_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_requests to fetch.
     */
    orderBy?: employee_requestOrderByWithRelationInput | employee_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employee_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employee_requests
    **/
    _count?: true | Employee_requestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Employee_requestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Employee_requestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Employee_requestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Employee_requestMaxAggregateInputType
  }

  export type GetEmployee_requestAggregateType<T extends Employee_requestAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee_request]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee_request[P]>
      : GetScalarType<T[P], AggregateEmployee_request[P]>
  }




  export type employee_requestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employee_requestWhereInput
    orderBy?: employee_requestOrderByWithAggregationInput | employee_requestOrderByWithAggregationInput[]
    by: Employee_requestScalarFieldEnum[] | Employee_requestScalarFieldEnum
    having?: employee_requestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Employee_requestCountAggregateInputType | true
    _avg?: Employee_requestAvgAggregateInputType
    _sum?: Employee_requestSumAggregateInputType
    _min?: Employee_requestMinAggregateInputType
    _max?: Employee_requestMaxAggregateInputType
  }

  export type Employee_requestGroupByOutputType = {
    leaverequest_id: number
    leaverequest_reason: string
    leaverequest_status: $Enums.employee_request_status
    leave: $Enums.employee_request_leave
    employeeId: number
    _count: Employee_requestCountAggregateOutputType | null
    _avg: Employee_requestAvgAggregateOutputType | null
    _sum: Employee_requestSumAggregateOutputType | null
    _min: Employee_requestMinAggregateOutputType | null
    _max: Employee_requestMaxAggregateOutputType | null
  }

  type GetEmployee_requestGroupByPayload<T extends employee_requestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Employee_requestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Employee_requestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Employee_requestGroupByOutputType[P]>
            : GetScalarType<T[P], Employee_requestGroupByOutputType[P]>
        }
      >
    >


  export type employee_requestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    leaverequest_id?: boolean
    leaverequest_reason?: boolean
    leaverequest_status?: boolean
    leave?: boolean
    employeeId?: boolean
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee_request"]>



  export type employee_requestSelectScalar = {
    leaverequest_id?: boolean
    leaverequest_reason?: boolean
    leaverequest_status?: boolean
    leave?: boolean
    employeeId?: boolean
  }

  export type employee_requestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"leaverequest_id" | "leaverequest_reason" | "leaverequest_status" | "leave" | "employeeId", ExtArgs["result"]["employee_request"]>
  export type employee_requestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | employeesDefaultArgs<ExtArgs>
  }

  export type $employee_requestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employee_request"
    objects: {
      employee: Prisma.$employeesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      leaverequest_id: number
      leaverequest_reason: string
      leaverequest_status: $Enums.employee_request_status
      leave: $Enums.employee_request_leave
      employeeId: number
    }, ExtArgs["result"]["employee_request"]>
    composites: {}
  }

  type employee_requestGetPayload<S extends boolean | null | undefined | employee_requestDefaultArgs> = $Result.GetResult<Prisma.$employee_requestPayload, S>

  type employee_requestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employee_requestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Employee_requestCountAggregateInputType | true
    }

  export interface employee_requestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee_request'], meta: { name: 'employee_request' } }
    /**
     * Find zero or one Employee_request that matches the filter.
     * @param {employee_requestFindUniqueArgs} args - Arguments to find a Employee_request
     * @example
     * // Get one Employee_request
     * const employee_request = await prisma.employee_request.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employee_requestFindUniqueArgs>(args: SelectSubset<T, employee_requestFindUniqueArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee_request that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employee_requestFindUniqueOrThrowArgs} args - Arguments to find a Employee_request
     * @example
     * // Get one Employee_request
     * const employee_request = await prisma.employee_request.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employee_requestFindUniqueOrThrowArgs>(args: SelectSubset<T, employee_requestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee_request that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_requestFindFirstArgs} args - Arguments to find a Employee_request
     * @example
     * // Get one Employee_request
     * const employee_request = await prisma.employee_request.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employee_requestFindFirstArgs>(args?: SelectSubset<T, employee_requestFindFirstArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee_request that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_requestFindFirstOrThrowArgs} args - Arguments to find a Employee_request
     * @example
     * // Get one Employee_request
     * const employee_request = await prisma.employee_request.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employee_requestFindFirstOrThrowArgs>(args?: SelectSubset<T, employee_requestFindFirstOrThrowArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employee_requests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_requestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employee_requests
     * const employee_requests = await prisma.employee_request.findMany()
     * 
     * // Get first 10 Employee_requests
     * const employee_requests = await prisma.employee_request.findMany({ take: 10 })
     * 
     * // Only select the `leaverequest_id`
     * const employee_requestWithLeaverequest_idOnly = await prisma.employee_request.findMany({ select: { leaverequest_id: true } })
     * 
     */
    findMany<T extends employee_requestFindManyArgs>(args?: SelectSubset<T, employee_requestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee_request.
     * @param {employee_requestCreateArgs} args - Arguments to create a Employee_request.
     * @example
     * // Create one Employee_request
     * const Employee_request = await prisma.employee_request.create({
     *   data: {
     *     // ... data to create a Employee_request
     *   }
     * })
     * 
     */
    create<T extends employee_requestCreateArgs>(args: SelectSubset<T, employee_requestCreateArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employee_requests.
     * @param {employee_requestCreateManyArgs} args - Arguments to create many Employee_requests.
     * @example
     * // Create many Employee_requests
     * const employee_request = await prisma.employee_request.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employee_requestCreateManyArgs>(args?: SelectSubset<T, employee_requestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee_request.
     * @param {employee_requestDeleteArgs} args - Arguments to delete one Employee_request.
     * @example
     * // Delete one Employee_request
     * const Employee_request = await prisma.employee_request.delete({
     *   where: {
     *     // ... filter to delete one Employee_request
     *   }
     * })
     * 
     */
    delete<T extends employee_requestDeleteArgs>(args: SelectSubset<T, employee_requestDeleteArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee_request.
     * @param {employee_requestUpdateArgs} args - Arguments to update one Employee_request.
     * @example
     * // Update one Employee_request
     * const employee_request = await prisma.employee_request.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employee_requestUpdateArgs>(args: SelectSubset<T, employee_requestUpdateArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employee_requests.
     * @param {employee_requestDeleteManyArgs} args - Arguments to filter Employee_requests to delete.
     * @example
     * // Delete a few Employee_requests
     * const { count } = await prisma.employee_request.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employee_requestDeleteManyArgs>(args?: SelectSubset<T, employee_requestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employee_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_requestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employee_requests
     * const employee_request = await prisma.employee_request.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employee_requestUpdateManyArgs>(args: SelectSubset<T, employee_requestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee_request.
     * @param {employee_requestUpsertArgs} args - Arguments to update or create a Employee_request.
     * @example
     * // Update or create a Employee_request
     * const employee_request = await prisma.employee_request.upsert({
     *   create: {
     *     // ... data to create a Employee_request
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee_request we want to update
     *   }
     * })
     */
    upsert<T extends employee_requestUpsertArgs>(args: SelectSubset<T, employee_requestUpsertArgs<ExtArgs>>): Prisma__employee_requestClient<$Result.GetResult<Prisma.$employee_requestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employee_requests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_requestCountArgs} args - Arguments to filter Employee_requests to count.
     * @example
     * // Count the number of Employee_requests
     * const count = await prisma.employee_request.count({
     *   where: {
     *     // ... the filter for the Employee_requests we want to count
     *   }
     * })
    **/
    count<T extends employee_requestCountArgs>(
      args?: Subset<T, employee_requestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Employee_requestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Employee_requestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Employee_requestAggregateArgs>(args: Subset<T, Employee_requestAggregateArgs>): Prisma.PrismaPromise<GetEmployee_requestAggregateType<T>>

    /**
     * Group by Employee_request.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employee_requestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends employee_requestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employee_requestGroupByArgs['orderBy'] }
        : { orderBy?: employee_requestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, employee_requestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployee_requestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employee_request model
   */
  readonly fields: employee_requestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee_request.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employee_requestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends employeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, employeesDefaultArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the employee_request model
   */
  interface employee_requestFieldRefs {
    readonly leaverequest_id: FieldRef<"employee_request", 'Int'>
    readonly leaverequest_reason: FieldRef<"employee_request", 'String'>
    readonly leaverequest_status: FieldRef<"employee_request", 'employee_request_status'>
    readonly leave: FieldRef<"employee_request", 'employee_request_leave'>
    readonly employeeId: FieldRef<"employee_request", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * employee_request findUnique
   */
  export type employee_requestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * Filter, which employee_request to fetch.
     */
    where: employee_requestWhereUniqueInput
  }

  /**
   * employee_request findUniqueOrThrow
   */
  export type employee_requestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * Filter, which employee_request to fetch.
     */
    where: employee_requestWhereUniqueInput
  }

  /**
   * employee_request findFirst
   */
  export type employee_requestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * Filter, which employee_request to fetch.
     */
    where?: employee_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_requests to fetch.
     */
    orderBy?: employee_requestOrderByWithRelationInput | employee_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employee_requests.
     */
    cursor?: employee_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employee_requests.
     */
    distinct?: Employee_requestScalarFieldEnum | Employee_requestScalarFieldEnum[]
  }

  /**
   * employee_request findFirstOrThrow
   */
  export type employee_requestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * Filter, which employee_request to fetch.
     */
    where?: employee_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_requests to fetch.
     */
    orderBy?: employee_requestOrderByWithRelationInput | employee_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employee_requests.
     */
    cursor?: employee_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_requests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employee_requests.
     */
    distinct?: Employee_requestScalarFieldEnum | Employee_requestScalarFieldEnum[]
  }

  /**
   * employee_request findMany
   */
  export type employee_requestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * Filter, which employee_requests to fetch.
     */
    where?: employee_requestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employee_requests to fetch.
     */
    orderBy?: employee_requestOrderByWithRelationInput | employee_requestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employee_requests.
     */
    cursor?: employee_requestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employee_requests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employee_requests.
     */
    skip?: number
    distinct?: Employee_requestScalarFieldEnum | Employee_requestScalarFieldEnum[]
  }

  /**
   * employee_request create
   */
  export type employee_requestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * The data needed to create a employee_request.
     */
    data: XOR<employee_requestCreateInput, employee_requestUncheckedCreateInput>
  }

  /**
   * employee_request createMany
   */
  export type employee_requestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employee_requests.
     */
    data: employee_requestCreateManyInput | employee_requestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employee_request update
   */
  export type employee_requestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * The data needed to update a employee_request.
     */
    data: XOR<employee_requestUpdateInput, employee_requestUncheckedUpdateInput>
    /**
     * Choose, which employee_request to update.
     */
    where: employee_requestWhereUniqueInput
  }

  /**
   * employee_request updateMany
   */
  export type employee_requestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employee_requests.
     */
    data: XOR<employee_requestUpdateManyMutationInput, employee_requestUncheckedUpdateManyInput>
    /**
     * Filter which employee_requests to update
     */
    where?: employee_requestWhereInput
    /**
     * Limit how many employee_requests to update.
     */
    limit?: number
  }

  /**
   * employee_request upsert
   */
  export type employee_requestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * The filter to search for the employee_request to update in case it exists.
     */
    where: employee_requestWhereUniqueInput
    /**
     * In case the employee_request found by the `where` argument doesn't exist, create a new employee_request with this data.
     */
    create: XOR<employee_requestCreateInput, employee_requestUncheckedCreateInput>
    /**
     * In case the employee_request was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employee_requestUpdateInput, employee_requestUncheckedUpdateInput>
  }

  /**
   * employee_request delete
   */
  export type employee_requestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
    /**
     * Filter which employee_request to delete.
     */
    where: employee_requestWhereUniqueInput
  }

  /**
   * employee_request deleteMany
   */
  export type employee_requestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee_requests to delete
     */
    where?: employee_requestWhereInput
    /**
     * Limit how many employee_requests to delete.
     */
    limit?: number
  }

  /**
   * employee_request without action
   */
  export type employee_requestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee_request
     */
    select?: employee_requestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employee_request
     */
    omit?: employee_requestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: employee_requestInclude<ExtArgs> | null
  }


  /**
   * Model hr_employee
   */

  export type AggregateHr_employee = {
    _count: Hr_employeeCountAggregateOutputType | null
    _avg: Hr_employeeAvgAggregateOutputType | null
    _sum: Hr_employeeSumAggregateOutputType | null
    _min: Hr_employeeMinAggregateOutputType | null
    _max: Hr_employeeMaxAggregateOutputType | null
  }

  export type Hr_employeeAvgAggregateOutputType = {
    hrId: number | null
  }

  export type Hr_employeeSumAggregateOutputType = {
    hrId: number | null
  }

  export type Hr_employeeMinAggregateOutputType = {
    hrId: number | null
    humanresources_firstname: string | null
    humanresources_lastname: string | null
    employee_Gender: $Enums.hr_employee_employee_Gender | null
    hr_position: $Enums.hr_employee_position | null
    leave: $Enums.hr_employee_request_leave | null
    leaverequest_reason: string | null
    leaverequest_status: $Enums.hr_employee_request_status | null
    password: string | null
    hr_employee_imageURL: string | null
  }

  export type Hr_employeeMaxAggregateOutputType = {
    hrId: number | null
    humanresources_firstname: string | null
    humanresources_lastname: string | null
    employee_Gender: $Enums.hr_employee_employee_Gender | null
    hr_position: $Enums.hr_employee_position | null
    leave: $Enums.hr_employee_request_leave | null
    leaverequest_reason: string | null
    leaverequest_status: $Enums.hr_employee_request_status | null
    password: string | null
    hr_employee_imageURL: string | null
  }

  export type Hr_employeeCountAggregateOutputType = {
    hrId: number
    humanresources_firstname: number
    humanresources_lastname: number
    employee_Gender: number
    hr_position: number
    leave: number
    leaverequest_reason: number
    leaverequest_status: number
    password: number
    hr_employee_imageURL: number
    _all: number
  }


  export type Hr_employeeAvgAggregateInputType = {
    hrId?: true
  }

  export type Hr_employeeSumAggregateInputType = {
    hrId?: true
  }

  export type Hr_employeeMinAggregateInputType = {
    hrId?: true
    humanresources_firstname?: true
    humanresources_lastname?: true
    employee_Gender?: true
    hr_position?: true
    leave?: true
    leaverequest_reason?: true
    leaverequest_status?: true
    password?: true
    hr_employee_imageURL?: true
  }

  export type Hr_employeeMaxAggregateInputType = {
    hrId?: true
    humanresources_firstname?: true
    humanresources_lastname?: true
    employee_Gender?: true
    hr_position?: true
    leave?: true
    leaverequest_reason?: true
    leaverequest_status?: true
    password?: true
    hr_employee_imageURL?: true
  }

  export type Hr_employeeCountAggregateInputType = {
    hrId?: true
    humanresources_firstname?: true
    humanresources_lastname?: true
    employee_Gender?: true
    hr_position?: true
    leave?: true
    leaverequest_reason?: true
    leaverequest_status?: true
    password?: true
    hr_employee_imageURL?: true
    _all?: true
  }

  export type Hr_employeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_employee to aggregate.
     */
    where?: hr_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hr_employees to fetch.
     */
    orderBy?: hr_employeeOrderByWithRelationInput | hr_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: hr_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hr_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hr_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned hr_employees
    **/
    _count?: true | Hr_employeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Hr_employeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Hr_employeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Hr_employeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Hr_employeeMaxAggregateInputType
  }

  export type GetHr_employeeAggregateType<T extends Hr_employeeAggregateArgs> = {
        [P in keyof T & keyof AggregateHr_employee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHr_employee[P]>
      : GetScalarType<T[P], AggregateHr_employee[P]>
  }




  export type hr_employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hr_employeeWhereInput
    orderBy?: hr_employeeOrderByWithAggregationInput | hr_employeeOrderByWithAggregationInput[]
    by: Hr_employeeScalarFieldEnum[] | Hr_employeeScalarFieldEnum
    having?: hr_employeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Hr_employeeCountAggregateInputType | true
    _avg?: Hr_employeeAvgAggregateInputType
    _sum?: Hr_employeeSumAggregateInputType
    _min?: Hr_employeeMinAggregateInputType
    _max?: Hr_employeeMaxAggregateInputType
  }

  export type Hr_employeeGroupByOutputType = {
    hrId: number
    humanresources_firstname: string
    humanresources_lastname: string
    employee_Gender: $Enums.hr_employee_employee_Gender
    hr_position: $Enums.hr_employee_position
    leave: $Enums.hr_employee_request_leave
    leaverequest_reason: string
    leaverequest_status: $Enums.hr_employee_request_status
    password: string
    hr_employee_imageURL: string
    _count: Hr_employeeCountAggregateOutputType | null
    _avg: Hr_employeeAvgAggregateOutputType | null
    _sum: Hr_employeeSumAggregateOutputType | null
    _min: Hr_employeeMinAggregateOutputType | null
    _max: Hr_employeeMaxAggregateOutputType | null
  }

  type GetHr_employeeGroupByPayload<T extends hr_employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hr_employeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Hr_employeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Hr_employeeGroupByOutputType[P]>
            : GetScalarType<T[P], Hr_employeeGroupByOutputType[P]>
        }
      >
    >


  export type hr_employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    hrId?: boolean
    humanresources_firstname?: boolean
    humanresources_lastname?: boolean
    employee_Gender?: boolean
    hr_position?: boolean
    leave?: boolean
    leaverequest_reason?: boolean
    leaverequest_status?: boolean
    password?: boolean
    hr_employee_imageURL?: boolean
  }, ExtArgs["result"]["hr_employee"]>



  export type hr_employeeSelectScalar = {
    hrId?: boolean
    humanresources_firstname?: boolean
    humanresources_lastname?: boolean
    employee_Gender?: boolean
    hr_position?: boolean
    leave?: boolean
    leaverequest_reason?: boolean
    leaverequest_status?: boolean
    password?: boolean
    hr_employee_imageURL?: boolean
  }

  export type hr_employeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"hrId" | "humanresources_firstname" | "humanresources_lastname" | "employee_Gender" | "hr_position" | "leave" | "leaverequest_reason" | "leaverequest_status" | "password" | "hr_employee_imageURL", ExtArgs["result"]["hr_employee"]>

  export type $hr_employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hr_employee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      hrId: number
      humanresources_firstname: string
      humanresources_lastname: string
      employee_Gender: $Enums.hr_employee_employee_Gender
      hr_position: $Enums.hr_employee_position
      leave: $Enums.hr_employee_request_leave
      leaverequest_reason: string
      leaverequest_status: $Enums.hr_employee_request_status
      password: string
      hr_employee_imageURL: string
    }, ExtArgs["result"]["hr_employee"]>
    composites: {}
  }

  type hr_employeeGetPayload<S extends boolean | null | undefined | hr_employeeDefaultArgs> = $Result.GetResult<Prisma.$hr_employeePayload, S>

  type hr_employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<hr_employeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Hr_employeeCountAggregateInputType | true
    }

  export interface hr_employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hr_employee'], meta: { name: 'hr_employee' } }
    /**
     * Find zero or one Hr_employee that matches the filter.
     * @param {hr_employeeFindUniqueArgs} args - Arguments to find a Hr_employee
     * @example
     * // Get one Hr_employee
     * const hr_employee = await prisma.hr_employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends hr_employeeFindUniqueArgs>(args: SelectSubset<T, hr_employeeFindUniqueArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hr_employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {hr_employeeFindUniqueOrThrowArgs} args - Arguments to find a Hr_employee
     * @example
     * // Get one Hr_employee
     * const hr_employee = await prisma.hr_employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends hr_employeeFindUniqueOrThrowArgs>(args: SelectSubset<T, hr_employeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hr_employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_employeeFindFirstArgs} args - Arguments to find a Hr_employee
     * @example
     * // Get one Hr_employee
     * const hr_employee = await prisma.hr_employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends hr_employeeFindFirstArgs>(args?: SelectSubset<T, hr_employeeFindFirstArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hr_employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_employeeFindFirstOrThrowArgs} args - Arguments to find a Hr_employee
     * @example
     * // Get one Hr_employee
     * const hr_employee = await prisma.hr_employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends hr_employeeFindFirstOrThrowArgs>(args?: SelectSubset<T, hr_employeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Hr_employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_employeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hr_employees
     * const hr_employees = await prisma.hr_employee.findMany()
     * 
     * // Get first 10 Hr_employees
     * const hr_employees = await prisma.hr_employee.findMany({ take: 10 })
     * 
     * // Only select the `hrId`
     * const hr_employeeWithHrIdOnly = await prisma.hr_employee.findMany({ select: { hrId: true } })
     * 
     */
    findMany<T extends hr_employeeFindManyArgs>(args?: SelectSubset<T, hr_employeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hr_employee.
     * @param {hr_employeeCreateArgs} args - Arguments to create a Hr_employee.
     * @example
     * // Create one Hr_employee
     * const Hr_employee = await prisma.hr_employee.create({
     *   data: {
     *     // ... data to create a Hr_employee
     *   }
     * })
     * 
     */
    create<T extends hr_employeeCreateArgs>(args: SelectSubset<T, hr_employeeCreateArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Hr_employees.
     * @param {hr_employeeCreateManyArgs} args - Arguments to create many Hr_employees.
     * @example
     * // Create many Hr_employees
     * const hr_employee = await prisma.hr_employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends hr_employeeCreateManyArgs>(args?: SelectSubset<T, hr_employeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hr_employee.
     * @param {hr_employeeDeleteArgs} args - Arguments to delete one Hr_employee.
     * @example
     * // Delete one Hr_employee
     * const Hr_employee = await prisma.hr_employee.delete({
     *   where: {
     *     // ... filter to delete one Hr_employee
     *   }
     * })
     * 
     */
    delete<T extends hr_employeeDeleteArgs>(args: SelectSubset<T, hr_employeeDeleteArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hr_employee.
     * @param {hr_employeeUpdateArgs} args - Arguments to update one Hr_employee.
     * @example
     * // Update one Hr_employee
     * const hr_employee = await prisma.hr_employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends hr_employeeUpdateArgs>(args: SelectSubset<T, hr_employeeUpdateArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Hr_employees.
     * @param {hr_employeeDeleteManyArgs} args - Arguments to filter Hr_employees to delete.
     * @example
     * // Delete a few Hr_employees
     * const { count } = await prisma.hr_employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends hr_employeeDeleteManyArgs>(args?: SelectSubset<T, hr_employeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Hr_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hr_employees
     * const hr_employee = await prisma.hr_employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends hr_employeeUpdateManyArgs>(args: SelectSubset<T, hr_employeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hr_employee.
     * @param {hr_employeeUpsertArgs} args - Arguments to update or create a Hr_employee.
     * @example
     * // Update or create a Hr_employee
     * const hr_employee = await prisma.hr_employee.upsert({
     *   create: {
     *     // ... data to create a Hr_employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hr_employee we want to update
     *   }
     * })
     */
    upsert<T extends hr_employeeUpsertArgs>(args: SelectSubset<T, hr_employeeUpsertArgs<ExtArgs>>): Prisma__hr_employeeClient<$Result.GetResult<Prisma.$hr_employeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Hr_employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_employeeCountArgs} args - Arguments to filter Hr_employees to count.
     * @example
     * // Count the number of Hr_employees
     * const count = await prisma.hr_employee.count({
     *   where: {
     *     // ... the filter for the Hr_employees we want to count
     *   }
     * })
    **/
    count<T extends hr_employeeCountArgs>(
      args?: Subset<T, hr_employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hr_employeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hr_employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hr_employeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Hr_employeeAggregateArgs>(args: Subset<T, Hr_employeeAggregateArgs>): Prisma.PrismaPromise<GetHr_employeeAggregateType<T>>

    /**
     * Group by Hr_employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_employeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends hr_employeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hr_employeeGroupByArgs['orderBy'] }
        : { orderBy?: hr_employeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, hr_employeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHr_employeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hr_employee model
   */
  readonly fields: hr_employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hr_employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hr_employeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hr_employee model
   */
  interface hr_employeeFieldRefs {
    readonly hrId: FieldRef<"hr_employee", 'Int'>
    readonly humanresources_firstname: FieldRef<"hr_employee", 'String'>
    readonly humanresources_lastname: FieldRef<"hr_employee", 'String'>
    readonly employee_Gender: FieldRef<"hr_employee", 'hr_employee_employee_Gender'>
    readonly hr_position: FieldRef<"hr_employee", 'hr_employee_position'>
    readonly leave: FieldRef<"hr_employee", 'hr_employee_request_leave'>
    readonly leaverequest_reason: FieldRef<"hr_employee", 'String'>
    readonly leaverequest_status: FieldRef<"hr_employee", 'hr_employee_request_status'>
    readonly password: FieldRef<"hr_employee", 'String'>
    readonly hr_employee_imageURL: FieldRef<"hr_employee", 'String'>
  }
    

  // Custom InputTypes
  /**
   * hr_employee findUnique
   */
  export type hr_employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * Filter, which hr_employee to fetch.
     */
    where: hr_employeeWhereUniqueInput
  }

  /**
   * hr_employee findUniqueOrThrow
   */
  export type hr_employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * Filter, which hr_employee to fetch.
     */
    where: hr_employeeWhereUniqueInput
  }

  /**
   * hr_employee findFirst
   */
  export type hr_employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * Filter, which hr_employee to fetch.
     */
    where?: hr_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hr_employees to fetch.
     */
    orderBy?: hr_employeeOrderByWithRelationInput | hr_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hr_employees.
     */
    cursor?: hr_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hr_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hr_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hr_employees.
     */
    distinct?: Hr_employeeScalarFieldEnum | Hr_employeeScalarFieldEnum[]
  }

  /**
   * hr_employee findFirstOrThrow
   */
  export type hr_employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * Filter, which hr_employee to fetch.
     */
    where?: hr_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hr_employees to fetch.
     */
    orderBy?: hr_employeeOrderByWithRelationInput | hr_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for hr_employees.
     */
    cursor?: hr_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hr_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hr_employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of hr_employees.
     */
    distinct?: Hr_employeeScalarFieldEnum | Hr_employeeScalarFieldEnum[]
  }

  /**
   * hr_employee findMany
   */
  export type hr_employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * Filter, which hr_employees to fetch.
     */
    where?: hr_employeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of hr_employees to fetch.
     */
    orderBy?: hr_employeeOrderByWithRelationInput | hr_employeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing hr_employees.
     */
    cursor?: hr_employeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` hr_employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` hr_employees.
     */
    skip?: number
    distinct?: Hr_employeeScalarFieldEnum | Hr_employeeScalarFieldEnum[]
  }

  /**
   * hr_employee create
   */
  export type hr_employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * The data needed to create a hr_employee.
     */
    data: XOR<hr_employeeCreateInput, hr_employeeUncheckedCreateInput>
  }

  /**
   * hr_employee createMany
   */
  export type hr_employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hr_employees.
     */
    data: hr_employeeCreateManyInput | hr_employeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hr_employee update
   */
  export type hr_employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * The data needed to update a hr_employee.
     */
    data: XOR<hr_employeeUpdateInput, hr_employeeUncheckedUpdateInput>
    /**
     * Choose, which hr_employee to update.
     */
    where: hr_employeeWhereUniqueInput
  }

  /**
   * hr_employee updateMany
   */
  export type hr_employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hr_employees.
     */
    data: XOR<hr_employeeUpdateManyMutationInput, hr_employeeUncheckedUpdateManyInput>
    /**
     * Filter which hr_employees to update
     */
    where?: hr_employeeWhereInput
    /**
     * Limit how many hr_employees to update.
     */
    limit?: number
  }

  /**
   * hr_employee upsert
   */
  export type hr_employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * The filter to search for the hr_employee to update in case it exists.
     */
    where: hr_employeeWhereUniqueInput
    /**
     * In case the hr_employee found by the `where` argument doesn't exist, create a new hr_employee with this data.
     */
    create: XOR<hr_employeeCreateInput, hr_employeeUncheckedCreateInput>
    /**
     * In case the hr_employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hr_employeeUpdateInput, hr_employeeUncheckedUpdateInput>
  }

  /**
   * hr_employee delete
   */
  export type hr_employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
    /**
     * Filter which hr_employee to delete.
     */
    where: hr_employeeWhereUniqueInput
  }

  /**
   * hr_employee deleteMany
   */
  export type hr_employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_employees to delete
     */
    where?: hr_employeeWhereInput
    /**
     * Limit how many hr_employees to delete.
     */
    limit?: number
  }

  /**
   * hr_employee without action
   */
  export type hr_employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_employee
     */
    select?: hr_employeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hr_employee
     */
    omit?: hr_employeeOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeesScalarFieldEnum: {
    employeeId: 'employeeId',
    employee_FirstName: 'employee_FirstName',
    employee_LastName: 'employee_LastName',
    employee_Address: 'employee_Address',
    employee_PhoneNumber: 'employee_PhoneNumber',
    employee_HireDate: 'employee_HireDate',
    employee_Gender: 'employee_Gender',
    employee_Position: 'employee_Position',
    employee_Department: 'employee_Department',
    employee_Salary: 'employee_Salary',
    employee_CivilStatus: 'employee_CivilStatus',
    employee_Status: 'employee_Status',
    employee_ShiftSchedule: 'employee_ShiftSchedule',
    employee_TIN: 'employee_TIN',
    employee_SSSNumber: 'employee_SSSNumber',
    employee_PhilhealthNumber: 'employee_PhilhealthNumber',
    employee_emergencyContactName: 'employee_emergencyContactName',
    employee_emergencyContactNumber: 'employee_emergencyContactNumber',
    employee_imageURL: 'employee_imageURL',
    password: 'password',
    mustChangePassword: 'mustChangePassword'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const Employees_attendanceScalarFieldEnum: {
    attendance_id: 'attendance_id',
    shiftSchedule: 'shiftSchedule',
    employeeId: 'employeeId',
    clockIn: 'clockIn',
    clockOut: 'clockOut'
  };

  export type Employees_attendanceScalarFieldEnum = (typeof Employees_attendanceScalarFieldEnum)[keyof typeof Employees_attendanceScalarFieldEnum]


  export const Employee_requestScalarFieldEnum: {
    leaverequest_id: 'leaverequest_id',
    leaverequest_reason: 'leaverequest_reason',
    leaverequest_status: 'leaverequest_status',
    leave: 'leave',
    employeeId: 'employeeId'
  };

  export type Employee_requestScalarFieldEnum = (typeof Employee_requestScalarFieldEnum)[keyof typeof Employee_requestScalarFieldEnum]


  export const Hr_employeeScalarFieldEnum: {
    hrId: 'hrId',
    humanresources_firstname: 'humanresources_firstname',
    humanresources_lastname: 'humanresources_lastname',
    employee_Gender: 'employee_Gender',
    hr_position: 'hr_position',
    leave: 'leave',
    leaverequest_reason: 'leaverequest_reason',
    leaverequest_status: 'leaverequest_status',
    password: 'password',
    hr_employee_imageURL: 'hr_employee_imageURL'
  };

  export type Hr_employeeScalarFieldEnum = (typeof Hr_employeeScalarFieldEnum)[keyof typeof Hr_employeeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const employeesOrderByRelevanceFieldEnum: {
    employee_FirstName: 'employee_FirstName',
    employee_LastName: 'employee_LastName',
    employee_Address: 'employee_Address',
    employee_PhoneNumber: 'employee_PhoneNumber',
    employee_Position: 'employee_Position',
    employee_Department: 'employee_Department',
    employee_TIN: 'employee_TIN',
    employee_SSSNumber: 'employee_SSSNumber',
    employee_PhilhealthNumber: 'employee_PhilhealthNumber',
    employee_emergencyContactName: 'employee_emergencyContactName',
    employee_emergencyContactNumber: 'employee_emergencyContactNumber',
    employee_imageURL: 'employee_imageURL',
    password: 'password'
  };

  export type employeesOrderByRelevanceFieldEnum = (typeof employeesOrderByRelevanceFieldEnum)[keyof typeof employeesOrderByRelevanceFieldEnum]


  export const employee_requestOrderByRelevanceFieldEnum: {
    leaverequest_reason: 'leaverequest_reason'
  };

  export type employee_requestOrderByRelevanceFieldEnum = (typeof employee_requestOrderByRelevanceFieldEnum)[keyof typeof employee_requestOrderByRelevanceFieldEnum]


  export const hr_employeeOrderByRelevanceFieldEnum: {
    humanresources_firstname: 'humanresources_firstname',
    humanresources_lastname: 'humanresources_lastname',
    leaverequest_reason: 'leaverequest_reason',
    password: 'password',
    hr_employee_imageURL: 'hr_employee_imageURL'
  };

  export type hr_employeeOrderByRelevanceFieldEnum = (typeof hr_employeeOrderByRelevanceFieldEnum)[keyof typeof hr_employeeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'employees_employee_Gender'
   */
  export type Enumemployees_employee_GenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'employees_employee_Gender'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'employees_employee_CivilStatus'
   */
  export type Enumemployees_employee_CivilStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'employees_employee_CivilStatus'>
    


  /**
   * Reference to a field of type 'employees_employee_Status'
   */
  export type Enumemployees_employee_StatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'employees_employee_Status'>
    


  /**
   * Reference to a field of type 'employees_employee_ShiftSchedule'
   */
  export type Enumemployees_employee_ShiftScheduleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'employees_employee_ShiftSchedule'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'employee_request_status'
   */
  export type Enumemployee_request_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'employee_request_status'>
    


  /**
   * Reference to a field of type 'employee_request_leave'
   */
  export type Enumemployee_request_leaveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'employee_request_leave'>
    


  /**
   * Reference to a field of type 'hr_employee_employee_Gender'
   */
  export type Enumhr_employee_employee_GenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hr_employee_employee_Gender'>
    


  /**
   * Reference to a field of type 'hr_employee_position'
   */
  export type Enumhr_employee_positionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hr_employee_position'>
    


  /**
   * Reference to a field of type 'hr_employee_request_leave'
   */
  export type Enumhr_employee_request_leaveFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hr_employee_request_leave'>
    


  /**
   * Reference to a field of type 'hr_employee_request_status'
   */
  export type Enumhr_employee_request_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'hr_employee_request_status'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    employeeId?: IntFilter<"employees"> | number
    employee_FirstName?: StringFilter<"employees"> | string
    employee_LastName?: StringFilter<"employees"> | string
    employee_Address?: StringFilter<"employees"> | string
    employee_PhoneNumber?: StringFilter<"employees"> | string
    employee_HireDate?: DateTimeFilter<"employees"> | Date | string
    employee_Gender?: Enumemployees_employee_GenderFilter<"employees"> | $Enums.employees_employee_Gender
    employee_Position?: StringFilter<"employees"> | string
    employee_Department?: StringFilter<"employees"> | string
    employee_Salary?: DecimalFilter<"employees"> | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFilter<"employees"> | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFilter<"employees"> | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFilter<"employees"> | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFilter<"employees"> | string
    employee_SSSNumber?: StringFilter<"employees"> | string
    employee_PhilhealthNumber?: StringFilter<"employees"> | string
    employee_emergencyContactName?: StringFilter<"employees"> | string
    employee_emergencyContactNumber?: StringFilter<"employees"> | string
    employee_imageURL?: StringFilter<"employees"> | string
    password?: StringFilter<"employees"> | string
    mustChangePassword?: BoolFilter<"employees"> | boolean
    attendances?: Employees_attendanceListRelationFilter
    leaveRequests?: Employee_requestListRelationFilter
  }

  export type employeesOrderByWithRelationInput = {
    employeeId?: SortOrder
    employee_FirstName?: SortOrder
    employee_LastName?: SortOrder
    employee_Address?: SortOrder
    employee_PhoneNumber?: SortOrder
    employee_HireDate?: SortOrder
    employee_Gender?: SortOrder
    employee_Position?: SortOrder
    employee_Department?: SortOrder
    employee_Salary?: SortOrder
    employee_CivilStatus?: SortOrder
    employee_Status?: SortOrder
    employee_ShiftSchedule?: SortOrder
    employee_TIN?: SortOrder
    employee_SSSNumber?: SortOrder
    employee_PhilhealthNumber?: SortOrder
    employee_emergencyContactName?: SortOrder
    employee_emergencyContactNumber?: SortOrder
    employee_imageURL?: SortOrder
    password?: SortOrder
    mustChangePassword?: SortOrder
    attendances?: employees_attendanceOrderByRelationAggregateInput
    leaveRequests?: employee_requestOrderByRelationAggregateInput
    _relevance?: employeesOrderByRelevanceInput
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    employeeId?: number
    employee_SSSNumber?: string
    employee_PhilhealthNumber?: string
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    employee_FirstName?: StringFilter<"employees"> | string
    employee_LastName?: StringFilter<"employees"> | string
    employee_Address?: StringFilter<"employees"> | string
    employee_PhoneNumber?: StringFilter<"employees"> | string
    employee_HireDate?: DateTimeFilter<"employees"> | Date | string
    employee_Gender?: Enumemployees_employee_GenderFilter<"employees"> | $Enums.employees_employee_Gender
    employee_Position?: StringFilter<"employees"> | string
    employee_Department?: StringFilter<"employees"> | string
    employee_Salary?: DecimalFilter<"employees"> | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFilter<"employees"> | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFilter<"employees"> | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFilter<"employees"> | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFilter<"employees"> | string
    employee_emergencyContactName?: StringFilter<"employees"> | string
    employee_emergencyContactNumber?: StringFilter<"employees"> | string
    employee_imageURL?: StringFilter<"employees"> | string
    password?: StringFilter<"employees"> | string
    mustChangePassword?: BoolFilter<"employees"> | boolean
    attendances?: Employees_attendanceListRelationFilter
    leaveRequests?: Employee_requestListRelationFilter
  }, "employeeId" | "employee_SSSNumber" | "employee_PhilhealthNumber">

  export type employeesOrderByWithAggregationInput = {
    employeeId?: SortOrder
    employee_FirstName?: SortOrder
    employee_LastName?: SortOrder
    employee_Address?: SortOrder
    employee_PhoneNumber?: SortOrder
    employee_HireDate?: SortOrder
    employee_Gender?: SortOrder
    employee_Position?: SortOrder
    employee_Department?: SortOrder
    employee_Salary?: SortOrder
    employee_CivilStatus?: SortOrder
    employee_Status?: SortOrder
    employee_ShiftSchedule?: SortOrder
    employee_TIN?: SortOrder
    employee_SSSNumber?: SortOrder
    employee_PhilhealthNumber?: SortOrder
    employee_emergencyContactName?: SortOrder
    employee_emergencyContactNumber?: SortOrder
    employee_imageURL?: SortOrder
    password?: SortOrder
    mustChangePassword?: SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    employeeId?: IntWithAggregatesFilter<"employees"> | number
    employee_FirstName?: StringWithAggregatesFilter<"employees"> | string
    employee_LastName?: StringWithAggregatesFilter<"employees"> | string
    employee_Address?: StringWithAggregatesFilter<"employees"> | string
    employee_PhoneNumber?: StringWithAggregatesFilter<"employees"> | string
    employee_HireDate?: DateTimeWithAggregatesFilter<"employees"> | Date | string
    employee_Gender?: Enumemployees_employee_GenderWithAggregatesFilter<"employees"> | $Enums.employees_employee_Gender
    employee_Position?: StringWithAggregatesFilter<"employees"> | string
    employee_Department?: StringWithAggregatesFilter<"employees"> | string
    employee_Salary?: DecimalWithAggregatesFilter<"employees"> | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusWithAggregatesFilter<"employees"> | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusWithAggregatesFilter<"employees"> | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleWithAggregatesFilter<"employees"> | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringWithAggregatesFilter<"employees"> | string
    employee_SSSNumber?: StringWithAggregatesFilter<"employees"> | string
    employee_PhilhealthNumber?: StringWithAggregatesFilter<"employees"> | string
    employee_emergencyContactName?: StringWithAggregatesFilter<"employees"> | string
    employee_emergencyContactNumber?: StringWithAggregatesFilter<"employees"> | string
    employee_imageURL?: StringWithAggregatesFilter<"employees"> | string
    password?: StringWithAggregatesFilter<"employees"> | string
    mustChangePassword?: BoolWithAggregatesFilter<"employees"> | boolean
  }

  export type employees_attendanceWhereInput = {
    AND?: employees_attendanceWhereInput | employees_attendanceWhereInput[]
    OR?: employees_attendanceWhereInput[]
    NOT?: employees_attendanceWhereInput | employees_attendanceWhereInput[]
    attendance_id?: IntFilter<"employees_attendance"> | number
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFilter<"employees_attendance"> | $Enums.employees_employee_ShiftSchedule
    employeeId?: IntFilter<"employees_attendance"> | number
    clockIn?: DateTimeFilter<"employees_attendance"> | Date | string
    clockOut?: DateTimeFilter<"employees_attendance"> | Date | string
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }

  export type employees_attendanceOrderByWithRelationInput = {
    attendance_id?: SortOrder
    shiftSchedule?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    employee?: employeesOrderByWithRelationInput
  }

  export type employees_attendanceWhereUniqueInput = Prisma.AtLeast<{
    attendance_id?: number
    AND?: employees_attendanceWhereInput | employees_attendanceWhereInput[]
    OR?: employees_attendanceWhereInput[]
    NOT?: employees_attendanceWhereInput | employees_attendanceWhereInput[]
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFilter<"employees_attendance"> | $Enums.employees_employee_ShiftSchedule
    employeeId?: IntFilter<"employees_attendance"> | number
    clockIn?: DateTimeFilter<"employees_attendance"> | Date | string
    clockOut?: DateTimeFilter<"employees_attendance"> | Date | string
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }, "attendance_id">

  export type employees_attendanceOrderByWithAggregationInput = {
    attendance_id?: SortOrder
    shiftSchedule?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
    _count?: employees_attendanceCountOrderByAggregateInput
    _avg?: employees_attendanceAvgOrderByAggregateInput
    _max?: employees_attendanceMaxOrderByAggregateInput
    _min?: employees_attendanceMinOrderByAggregateInput
    _sum?: employees_attendanceSumOrderByAggregateInput
  }

  export type employees_attendanceScalarWhereWithAggregatesInput = {
    AND?: employees_attendanceScalarWhereWithAggregatesInput | employees_attendanceScalarWhereWithAggregatesInput[]
    OR?: employees_attendanceScalarWhereWithAggregatesInput[]
    NOT?: employees_attendanceScalarWhereWithAggregatesInput | employees_attendanceScalarWhereWithAggregatesInput[]
    attendance_id?: IntWithAggregatesFilter<"employees_attendance"> | number
    shiftSchedule?: Enumemployees_employee_ShiftScheduleWithAggregatesFilter<"employees_attendance"> | $Enums.employees_employee_ShiftSchedule
    employeeId?: IntWithAggregatesFilter<"employees_attendance"> | number
    clockIn?: DateTimeWithAggregatesFilter<"employees_attendance"> | Date | string
    clockOut?: DateTimeWithAggregatesFilter<"employees_attendance"> | Date | string
  }

  export type employee_requestWhereInput = {
    AND?: employee_requestWhereInput | employee_requestWhereInput[]
    OR?: employee_requestWhereInput[]
    NOT?: employee_requestWhereInput | employee_requestWhereInput[]
    leaverequest_id?: IntFilter<"employee_request"> | number
    leaverequest_reason?: StringFilter<"employee_request"> | string
    leaverequest_status?: Enumemployee_request_statusFilter<"employee_request"> | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFilter<"employee_request"> | $Enums.employee_request_leave
    employeeId?: IntFilter<"employee_request"> | number
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }

  export type employee_requestOrderByWithRelationInput = {
    leaverequest_id?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    leave?: SortOrder
    employeeId?: SortOrder
    employee?: employeesOrderByWithRelationInput
    _relevance?: employee_requestOrderByRelevanceInput
  }

  export type employee_requestWhereUniqueInput = Prisma.AtLeast<{
    leaverequest_id?: number
    AND?: employee_requestWhereInput | employee_requestWhereInput[]
    OR?: employee_requestWhereInput[]
    NOT?: employee_requestWhereInput | employee_requestWhereInput[]
    leaverequest_reason?: StringFilter<"employee_request"> | string
    leaverequest_status?: Enumemployee_request_statusFilter<"employee_request"> | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFilter<"employee_request"> | $Enums.employee_request_leave
    employeeId?: IntFilter<"employee_request"> | number
    employee?: XOR<EmployeesScalarRelationFilter, employeesWhereInput>
  }, "leaverequest_id">

  export type employee_requestOrderByWithAggregationInput = {
    leaverequest_id?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    leave?: SortOrder
    employeeId?: SortOrder
    _count?: employee_requestCountOrderByAggregateInput
    _avg?: employee_requestAvgOrderByAggregateInput
    _max?: employee_requestMaxOrderByAggregateInput
    _min?: employee_requestMinOrderByAggregateInput
    _sum?: employee_requestSumOrderByAggregateInput
  }

  export type employee_requestScalarWhereWithAggregatesInput = {
    AND?: employee_requestScalarWhereWithAggregatesInput | employee_requestScalarWhereWithAggregatesInput[]
    OR?: employee_requestScalarWhereWithAggregatesInput[]
    NOT?: employee_requestScalarWhereWithAggregatesInput | employee_requestScalarWhereWithAggregatesInput[]
    leaverequest_id?: IntWithAggregatesFilter<"employee_request"> | number
    leaverequest_reason?: StringWithAggregatesFilter<"employee_request"> | string
    leaverequest_status?: Enumemployee_request_statusWithAggregatesFilter<"employee_request"> | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveWithAggregatesFilter<"employee_request"> | $Enums.employee_request_leave
    employeeId?: IntWithAggregatesFilter<"employee_request"> | number
  }

  export type hr_employeeWhereInput = {
    AND?: hr_employeeWhereInput | hr_employeeWhereInput[]
    OR?: hr_employeeWhereInput[]
    NOT?: hr_employeeWhereInput | hr_employeeWhereInput[]
    hrId?: IntFilter<"hr_employee"> | number
    humanresources_firstname?: StringFilter<"hr_employee"> | string
    humanresources_lastname?: StringFilter<"hr_employee"> | string
    employee_Gender?: Enumhr_employee_employee_GenderFilter<"hr_employee"> | $Enums.hr_employee_employee_Gender
    hr_position?: Enumhr_employee_positionFilter<"hr_employee"> | $Enums.hr_employee_position
    leave?: Enumhr_employee_request_leaveFilter<"hr_employee"> | $Enums.hr_employee_request_leave
    leaverequest_reason?: StringFilter<"hr_employee"> | string
    leaverequest_status?: Enumhr_employee_request_statusFilter<"hr_employee"> | $Enums.hr_employee_request_status
    password?: StringFilter<"hr_employee"> | string
    hr_employee_imageURL?: StringFilter<"hr_employee"> | string
  }

  export type hr_employeeOrderByWithRelationInput = {
    hrId?: SortOrder
    humanresources_firstname?: SortOrder
    humanresources_lastname?: SortOrder
    employee_Gender?: SortOrder
    hr_position?: SortOrder
    leave?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    password?: SortOrder
    hr_employee_imageURL?: SortOrder
    _relevance?: hr_employeeOrderByRelevanceInput
  }

  export type hr_employeeWhereUniqueInput = Prisma.AtLeast<{
    hrId?: number
    AND?: hr_employeeWhereInput | hr_employeeWhereInput[]
    OR?: hr_employeeWhereInput[]
    NOT?: hr_employeeWhereInput | hr_employeeWhereInput[]
    humanresources_firstname?: StringFilter<"hr_employee"> | string
    humanresources_lastname?: StringFilter<"hr_employee"> | string
    employee_Gender?: Enumhr_employee_employee_GenderFilter<"hr_employee"> | $Enums.hr_employee_employee_Gender
    hr_position?: Enumhr_employee_positionFilter<"hr_employee"> | $Enums.hr_employee_position
    leave?: Enumhr_employee_request_leaveFilter<"hr_employee"> | $Enums.hr_employee_request_leave
    leaverequest_reason?: StringFilter<"hr_employee"> | string
    leaverequest_status?: Enumhr_employee_request_statusFilter<"hr_employee"> | $Enums.hr_employee_request_status
    password?: StringFilter<"hr_employee"> | string
    hr_employee_imageURL?: StringFilter<"hr_employee"> | string
  }, "hrId">

  export type hr_employeeOrderByWithAggregationInput = {
    hrId?: SortOrder
    humanresources_firstname?: SortOrder
    humanresources_lastname?: SortOrder
    employee_Gender?: SortOrder
    hr_position?: SortOrder
    leave?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    password?: SortOrder
    hr_employee_imageURL?: SortOrder
    _count?: hr_employeeCountOrderByAggregateInput
    _avg?: hr_employeeAvgOrderByAggregateInput
    _max?: hr_employeeMaxOrderByAggregateInput
    _min?: hr_employeeMinOrderByAggregateInput
    _sum?: hr_employeeSumOrderByAggregateInput
  }

  export type hr_employeeScalarWhereWithAggregatesInput = {
    AND?: hr_employeeScalarWhereWithAggregatesInput | hr_employeeScalarWhereWithAggregatesInput[]
    OR?: hr_employeeScalarWhereWithAggregatesInput[]
    NOT?: hr_employeeScalarWhereWithAggregatesInput | hr_employeeScalarWhereWithAggregatesInput[]
    hrId?: IntWithAggregatesFilter<"hr_employee"> | number
    humanresources_firstname?: StringWithAggregatesFilter<"hr_employee"> | string
    humanresources_lastname?: StringWithAggregatesFilter<"hr_employee"> | string
    employee_Gender?: Enumhr_employee_employee_GenderWithAggregatesFilter<"hr_employee"> | $Enums.hr_employee_employee_Gender
    hr_position?: Enumhr_employee_positionWithAggregatesFilter<"hr_employee"> | $Enums.hr_employee_position
    leave?: Enumhr_employee_request_leaveWithAggregatesFilter<"hr_employee"> | $Enums.hr_employee_request_leave
    leaverequest_reason?: StringWithAggregatesFilter<"hr_employee"> | string
    leaverequest_status?: Enumhr_employee_request_statusWithAggregatesFilter<"hr_employee"> | $Enums.hr_employee_request_status
    password?: StringWithAggregatesFilter<"hr_employee"> | string
    hr_employee_imageURL?: StringWithAggregatesFilter<"hr_employee"> | string
  }

  export type employeesCreateInput = {
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date | string
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal | DecimalJsLike | number | string
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword?: boolean
    attendances?: employees_attendanceCreateNestedManyWithoutEmployeeInput
    leaveRequests?: employee_requestCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateInput = {
    employeeId?: number
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date | string
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal | DecimalJsLike | number | string
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword?: boolean
    attendances?: employees_attendanceUncheckedCreateNestedManyWithoutEmployeeInput
    leaveRequests?: employee_requestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUpdateInput = {
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    attendances?: employees_attendanceUpdateManyWithoutEmployeeNestedInput
    leaveRequests?: employee_requestUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    attendances?: employees_attendanceUncheckedUpdateManyWithoutEmployeeNestedInput
    leaveRequests?: employee_requestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesCreateManyInput = {
    employeeId?: number
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date | string
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal | DecimalJsLike | number | string
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword?: boolean
  }

  export type employeesUpdateManyMutationInput = {
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
  }

  export type employeesUncheckedUpdateManyInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
  }

  export type employees_attendanceCreateInput = {
    shiftSchedule: $Enums.employees_employee_ShiftSchedule
    clockIn: Date | string
    clockOut: Date | string
    employee: employeesCreateNestedOneWithoutAttendancesInput
  }

  export type employees_attendanceUncheckedCreateInput = {
    attendance_id?: number
    shiftSchedule: $Enums.employees_employee_ShiftSchedule
    employeeId: number
    clockIn: Date | string
    clockOut: Date | string
  }

  export type employees_attendanceUpdateInput = {
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: employeesUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type employees_attendanceUncheckedUpdateInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employeeId?: IntFieldUpdateOperationsInput | number
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employees_attendanceCreateManyInput = {
    attendance_id?: number
    shiftSchedule: $Enums.employees_employee_ShiftSchedule
    employeeId: number
    clockIn: Date | string
    clockOut: Date | string
  }

  export type employees_attendanceUpdateManyMutationInput = {
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employees_attendanceUncheckedUpdateManyInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employeeId?: IntFieldUpdateOperationsInput | number
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employee_requestCreateInput = {
    leaverequest_reason: string
    leaverequest_status: $Enums.employee_request_status
    leave: $Enums.employee_request_leave
    employee: employeesCreateNestedOneWithoutLeaveRequestsInput
  }

  export type employee_requestUncheckedCreateInput = {
    leaverequest_id?: number
    leaverequest_reason: string
    leaverequest_status: $Enums.employee_request_status
    leave: $Enums.employee_request_leave
    employeeId: number
  }

  export type employee_requestUpdateInput = {
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumemployee_request_statusFieldUpdateOperationsInput | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFieldUpdateOperationsInput | $Enums.employee_request_leave
    employee?: employeesUpdateOneRequiredWithoutLeaveRequestsNestedInput
  }

  export type employee_requestUncheckedUpdateInput = {
    leaverequest_id?: IntFieldUpdateOperationsInput | number
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumemployee_request_statusFieldUpdateOperationsInput | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFieldUpdateOperationsInput | $Enums.employee_request_leave
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type employee_requestCreateManyInput = {
    leaverequest_id?: number
    leaverequest_reason: string
    leaverequest_status: $Enums.employee_request_status
    leave: $Enums.employee_request_leave
    employeeId: number
  }

  export type employee_requestUpdateManyMutationInput = {
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumemployee_request_statusFieldUpdateOperationsInput | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFieldUpdateOperationsInput | $Enums.employee_request_leave
  }

  export type employee_requestUncheckedUpdateManyInput = {
    leaverequest_id?: IntFieldUpdateOperationsInput | number
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumemployee_request_statusFieldUpdateOperationsInput | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFieldUpdateOperationsInput | $Enums.employee_request_leave
    employeeId?: IntFieldUpdateOperationsInput | number
  }

  export type hr_employeeCreateInput = {
    humanresources_firstname: string
    humanresources_lastname: string
    employee_Gender: $Enums.hr_employee_employee_Gender
    hr_position: $Enums.hr_employee_position
    leave: $Enums.hr_employee_request_leave
    leaverequest_reason: string
    leaverequest_status: $Enums.hr_employee_request_status
    password: string
    hr_employee_imageURL: string
  }

  export type hr_employeeUncheckedCreateInput = {
    hrId?: number
    humanresources_firstname: string
    humanresources_lastname: string
    employee_Gender: $Enums.hr_employee_employee_Gender
    hr_position: $Enums.hr_employee_position
    leave: $Enums.hr_employee_request_leave
    leaverequest_reason: string
    leaverequest_status: $Enums.hr_employee_request_status
    password: string
    hr_employee_imageURL: string
  }

  export type hr_employeeUpdateInput = {
    humanresources_firstname?: StringFieldUpdateOperationsInput | string
    humanresources_lastname?: StringFieldUpdateOperationsInput | string
    employee_Gender?: Enumhr_employee_employee_GenderFieldUpdateOperationsInput | $Enums.hr_employee_employee_Gender
    hr_position?: Enumhr_employee_positionFieldUpdateOperationsInput | $Enums.hr_employee_position
    leave?: Enumhr_employee_request_leaveFieldUpdateOperationsInput | $Enums.hr_employee_request_leave
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumhr_employee_request_statusFieldUpdateOperationsInput | $Enums.hr_employee_request_status
    password?: StringFieldUpdateOperationsInput | string
    hr_employee_imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type hr_employeeUncheckedUpdateInput = {
    hrId?: IntFieldUpdateOperationsInput | number
    humanresources_firstname?: StringFieldUpdateOperationsInput | string
    humanresources_lastname?: StringFieldUpdateOperationsInput | string
    employee_Gender?: Enumhr_employee_employee_GenderFieldUpdateOperationsInput | $Enums.hr_employee_employee_Gender
    hr_position?: Enumhr_employee_positionFieldUpdateOperationsInput | $Enums.hr_employee_position
    leave?: Enumhr_employee_request_leaveFieldUpdateOperationsInput | $Enums.hr_employee_request_leave
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumhr_employee_request_statusFieldUpdateOperationsInput | $Enums.hr_employee_request_status
    password?: StringFieldUpdateOperationsInput | string
    hr_employee_imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type hr_employeeCreateManyInput = {
    hrId?: number
    humanresources_firstname: string
    humanresources_lastname: string
    employee_Gender: $Enums.hr_employee_employee_Gender
    hr_position: $Enums.hr_employee_position
    leave: $Enums.hr_employee_request_leave
    leaverequest_reason: string
    leaverequest_status: $Enums.hr_employee_request_status
    password: string
    hr_employee_imageURL: string
  }

  export type hr_employeeUpdateManyMutationInput = {
    humanresources_firstname?: StringFieldUpdateOperationsInput | string
    humanresources_lastname?: StringFieldUpdateOperationsInput | string
    employee_Gender?: Enumhr_employee_employee_GenderFieldUpdateOperationsInput | $Enums.hr_employee_employee_Gender
    hr_position?: Enumhr_employee_positionFieldUpdateOperationsInput | $Enums.hr_employee_position
    leave?: Enumhr_employee_request_leaveFieldUpdateOperationsInput | $Enums.hr_employee_request_leave
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumhr_employee_request_statusFieldUpdateOperationsInput | $Enums.hr_employee_request_status
    password?: StringFieldUpdateOperationsInput | string
    hr_employee_imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type hr_employeeUncheckedUpdateManyInput = {
    hrId?: IntFieldUpdateOperationsInput | number
    humanresources_firstname?: StringFieldUpdateOperationsInput | string
    humanresources_lastname?: StringFieldUpdateOperationsInput | string
    employee_Gender?: Enumhr_employee_employee_GenderFieldUpdateOperationsInput | $Enums.hr_employee_employee_Gender
    hr_position?: Enumhr_employee_positionFieldUpdateOperationsInput | $Enums.hr_employee_position
    leave?: Enumhr_employee_request_leaveFieldUpdateOperationsInput | $Enums.hr_employee_request_leave
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumhr_employee_request_statusFieldUpdateOperationsInput | $Enums.hr_employee_request_status
    password?: StringFieldUpdateOperationsInput | string
    hr_employee_imageURL?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Enumemployees_employee_GenderFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Gender | Enumemployees_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Gender[]
    notIn?: $Enums.employees_employee_Gender[]
    not?: NestedEnumemployees_employee_GenderFilter<$PrismaModel> | $Enums.employees_employee_Gender
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type Enumemployees_employee_CivilStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_CivilStatus | Enumemployees_employee_CivilStatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_CivilStatus[]
    notIn?: $Enums.employees_employee_CivilStatus[]
    not?: NestedEnumemployees_employee_CivilStatusFilter<$PrismaModel> | $Enums.employees_employee_CivilStatus
  }

  export type Enumemployees_employee_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Status | Enumemployees_employee_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Status[]
    notIn?: $Enums.employees_employee_Status[]
    not?: NestedEnumemployees_employee_StatusFilter<$PrismaModel> | $Enums.employees_employee_Status
  }

  export type Enumemployees_employee_ShiftScheduleFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_ShiftSchedule | Enumemployees_employee_ShiftScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_ShiftSchedule[]
    notIn?: $Enums.employees_employee_ShiftSchedule[]
    not?: NestedEnumemployees_employee_ShiftScheduleFilter<$PrismaModel> | $Enums.employees_employee_ShiftSchedule
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Employees_attendanceListRelationFilter = {
    every?: employees_attendanceWhereInput
    some?: employees_attendanceWhereInput
    none?: employees_attendanceWhereInput
  }

  export type Employee_requestListRelationFilter = {
    every?: employee_requestWhereInput
    some?: employee_requestWhereInput
    none?: employee_requestWhereInput
  }

  export type employees_attendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employee_requestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type employeesOrderByRelevanceInput = {
    fields: employeesOrderByRelevanceFieldEnum | employeesOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type employeesCountOrderByAggregateInput = {
    employeeId?: SortOrder
    employee_FirstName?: SortOrder
    employee_LastName?: SortOrder
    employee_Address?: SortOrder
    employee_PhoneNumber?: SortOrder
    employee_HireDate?: SortOrder
    employee_Gender?: SortOrder
    employee_Position?: SortOrder
    employee_Department?: SortOrder
    employee_Salary?: SortOrder
    employee_CivilStatus?: SortOrder
    employee_Status?: SortOrder
    employee_ShiftSchedule?: SortOrder
    employee_TIN?: SortOrder
    employee_SSSNumber?: SortOrder
    employee_PhilhealthNumber?: SortOrder
    employee_emergencyContactName?: SortOrder
    employee_emergencyContactNumber?: SortOrder
    employee_imageURL?: SortOrder
    password?: SortOrder
    mustChangePassword?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    employeeId?: SortOrder
    employee_Salary?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    employeeId?: SortOrder
    employee_FirstName?: SortOrder
    employee_LastName?: SortOrder
    employee_Address?: SortOrder
    employee_PhoneNumber?: SortOrder
    employee_HireDate?: SortOrder
    employee_Gender?: SortOrder
    employee_Position?: SortOrder
    employee_Department?: SortOrder
    employee_Salary?: SortOrder
    employee_CivilStatus?: SortOrder
    employee_Status?: SortOrder
    employee_ShiftSchedule?: SortOrder
    employee_TIN?: SortOrder
    employee_SSSNumber?: SortOrder
    employee_PhilhealthNumber?: SortOrder
    employee_emergencyContactName?: SortOrder
    employee_emergencyContactNumber?: SortOrder
    employee_imageURL?: SortOrder
    password?: SortOrder
    mustChangePassword?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    employeeId?: SortOrder
    employee_FirstName?: SortOrder
    employee_LastName?: SortOrder
    employee_Address?: SortOrder
    employee_PhoneNumber?: SortOrder
    employee_HireDate?: SortOrder
    employee_Gender?: SortOrder
    employee_Position?: SortOrder
    employee_Department?: SortOrder
    employee_Salary?: SortOrder
    employee_CivilStatus?: SortOrder
    employee_Status?: SortOrder
    employee_ShiftSchedule?: SortOrder
    employee_TIN?: SortOrder
    employee_SSSNumber?: SortOrder
    employee_PhilhealthNumber?: SortOrder
    employee_emergencyContactName?: SortOrder
    employee_emergencyContactNumber?: SortOrder
    employee_imageURL?: SortOrder
    password?: SortOrder
    mustChangePassword?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    employeeId?: SortOrder
    employee_Salary?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Enumemployees_employee_GenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Gender | Enumemployees_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Gender[]
    notIn?: $Enums.employees_employee_Gender[]
    not?: NestedEnumemployees_employee_GenderWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_GenderFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_GenderFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Enumemployees_employee_CivilStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_CivilStatus | Enumemployees_employee_CivilStatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_CivilStatus[]
    notIn?: $Enums.employees_employee_CivilStatus[]
    not?: NestedEnumemployees_employee_CivilStatusWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_CivilStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_CivilStatusFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_CivilStatusFilter<$PrismaModel>
  }

  export type Enumemployees_employee_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Status | Enumemployees_employee_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Status[]
    notIn?: $Enums.employees_employee_Status[]
    not?: NestedEnumemployees_employee_StatusWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_StatusFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_StatusFilter<$PrismaModel>
  }

  export type Enumemployees_employee_ShiftScheduleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_ShiftSchedule | Enumemployees_employee_ShiftScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_ShiftSchedule[]
    notIn?: $Enums.employees_employee_ShiftSchedule[]
    not?: NestedEnumemployees_employee_ShiftScheduleWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_ShiftSchedule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_ShiftScheduleFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_ShiftScheduleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EmployeesScalarRelationFilter = {
    is?: employeesWhereInput
    isNot?: employeesWhereInput
  }

  export type employees_attendanceCountOrderByAggregateInput = {
    attendance_id?: SortOrder
    shiftSchedule?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
  }

  export type employees_attendanceAvgOrderByAggregateInput = {
    attendance_id?: SortOrder
    employeeId?: SortOrder
  }

  export type employees_attendanceMaxOrderByAggregateInput = {
    attendance_id?: SortOrder
    shiftSchedule?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
  }

  export type employees_attendanceMinOrderByAggregateInput = {
    attendance_id?: SortOrder
    shiftSchedule?: SortOrder
    employeeId?: SortOrder
    clockIn?: SortOrder
    clockOut?: SortOrder
  }

  export type employees_attendanceSumOrderByAggregateInput = {
    attendance_id?: SortOrder
    employeeId?: SortOrder
  }

  export type Enumemployee_request_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_status | Enumemployee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_status[]
    notIn?: $Enums.employee_request_status[]
    not?: NestedEnumemployee_request_statusFilter<$PrismaModel> | $Enums.employee_request_status
  }

  export type Enumemployee_request_leaveFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_leave | Enumemployee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_leave[]
    notIn?: $Enums.employee_request_leave[]
    not?: NestedEnumemployee_request_leaveFilter<$PrismaModel> | $Enums.employee_request_leave
  }

  export type employee_requestOrderByRelevanceInput = {
    fields: employee_requestOrderByRelevanceFieldEnum | employee_requestOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type employee_requestCountOrderByAggregateInput = {
    leaverequest_id?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    leave?: SortOrder
    employeeId?: SortOrder
  }

  export type employee_requestAvgOrderByAggregateInput = {
    leaverequest_id?: SortOrder
    employeeId?: SortOrder
  }

  export type employee_requestMaxOrderByAggregateInput = {
    leaverequest_id?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    leave?: SortOrder
    employeeId?: SortOrder
  }

  export type employee_requestMinOrderByAggregateInput = {
    leaverequest_id?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    leave?: SortOrder
    employeeId?: SortOrder
  }

  export type employee_requestSumOrderByAggregateInput = {
    leaverequest_id?: SortOrder
    employeeId?: SortOrder
  }

  export type Enumemployee_request_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_status | Enumemployee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_status[]
    notIn?: $Enums.employee_request_status[]
    not?: NestedEnumemployee_request_statusWithAggregatesFilter<$PrismaModel> | $Enums.employee_request_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployee_request_statusFilter<$PrismaModel>
    _max?: NestedEnumemployee_request_statusFilter<$PrismaModel>
  }

  export type Enumemployee_request_leaveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_leave | Enumemployee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_leave[]
    notIn?: $Enums.employee_request_leave[]
    not?: NestedEnumemployee_request_leaveWithAggregatesFilter<$PrismaModel> | $Enums.employee_request_leave
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployee_request_leaveFilter<$PrismaModel>
    _max?: NestedEnumemployee_request_leaveFilter<$PrismaModel>
  }

  export type Enumhr_employee_employee_GenderFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_employee_Gender | Enumhr_employee_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_employee_Gender[]
    notIn?: $Enums.hr_employee_employee_Gender[]
    not?: NestedEnumhr_employee_employee_GenderFilter<$PrismaModel> | $Enums.hr_employee_employee_Gender
  }

  export type Enumhr_employee_positionFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_position | Enumhr_employee_positionFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_position[]
    notIn?: $Enums.hr_employee_position[]
    not?: NestedEnumhr_employee_positionFilter<$PrismaModel> | $Enums.hr_employee_position
  }

  export type Enumhr_employee_request_leaveFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_leave | Enumhr_employee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_leave[]
    notIn?: $Enums.hr_employee_request_leave[]
    not?: NestedEnumhr_employee_request_leaveFilter<$PrismaModel> | $Enums.hr_employee_request_leave
  }

  export type Enumhr_employee_request_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_status | Enumhr_employee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_status[]
    notIn?: $Enums.hr_employee_request_status[]
    not?: NestedEnumhr_employee_request_statusFilter<$PrismaModel> | $Enums.hr_employee_request_status
  }

  export type hr_employeeOrderByRelevanceInput = {
    fields: hr_employeeOrderByRelevanceFieldEnum | hr_employeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type hr_employeeCountOrderByAggregateInput = {
    hrId?: SortOrder
    humanresources_firstname?: SortOrder
    humanresources_lastname?: SortOrder
    employee_Gender?: SortOrder
    hr_position?: SortOrder
    leave?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    password?: SortOrder
    hr_employee_imageURL?: SortOrder
  }

  export type hr_employeeAvgOrderByAggregateInput = {
    hrId?: SortOrder
  }

  export type hr_employeeMaxOrderByAggregateInput = {
    hrId?: SortOrder
    humanresources_firstname?: SortOrder
    humanresources_lastname?: SortOrder
    employee_Gender?: SortOrder
    hr_position?: SortOrder
    leave?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    password?: SortOrder
    hr_employee_imageURL?: SortOrder
  }

  export type hr_employeeMinOrderByAggregateInput = {
    hrId?: SortOrder
    humanresources_firstname?: SortOrder
    humanresources_lastname?: SortOrder
    employee_Gender?: SortOrder
    hr_position?: SortOrder
    leave?: SortOrder
    leaverequest_reason?: SortOrder
    leaverequest_status?: SortOrder
    password?: SortOrder
    hr_employee_imageURL?: SortOrder
  }

  export type hr_employeeSumOrderByAggregateInput = {
    hrId?: SortOrder
  }

  export type Enumhr_employee_employee_GenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_employee_Gender | Enumhr_employee_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_employee_Gender[]
    notIn?: $Enums.hr_employee_employee_Gender[]
    not?: NestedEnumhr_employee_employee_GenderWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_employee_Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_employee_GenderFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_employee_GenderFilter<$PrismaModel>
  }

  export type Enumhr_employee_positionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_position | Enumhr_employee_positionFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_position[]
    notIn?: $Enums.hr_employee_position[]
    not?: NestedEnumhr_employee_positionWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_positionFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_positionFilter<$PrismaModel>
  }

  export type Enumhr_employee_request_leaveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_leave | Enumhr_employee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_leave[]
    notIn?: $Enums.hr_employee_request_leave[]
    not?: NestedEnumhr_employee_request_leaveWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_request_leave
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_request_leaveFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_request_leaveFilter<$PrismaModel>
  }

  export type Enumhr_employee_request_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_status | Enumhr_employee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_status[]
    notIn?: $Enums.hr_employee_request_status[]
    not?: NestedEnumhr_employee_request_statusWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_request_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_request_statusFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_request_statusFilter<$PrismaModel>
  }

  export type employees_attendanceCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<employees_attendanceCreateWithoutEmployeeInput, employees_attendanceUncheckedCreateWithoutEmployeeInput> | employees_attendanceCreateWithoutEmployeeInput[] | employees_attendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employees_attendanceCreateOrConnectWithoutEmployeeInput | employees_attendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: employees_attendanceCreateManyEmployeeInputEnvelope
    connect?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
  }

  export type employee_requestCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<employee_requestCreateWithoutEmployeeInput, employee_requestUncheckedCreateWithoutEmployeeInput> | employee_requestCreateWithoutEmployeeInput[] | employee_requestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employee_requestCreateOrConnectWithoutEmployeeInput | employee_requestCreateOrConnectWithoutEmployeeInput[]
    createMany?: employee_requestCreateManyEmployeeInputEnvelope
    connect?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
  }

  export type employees_attendanceUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<employees_attendanceCreateWithoutEmployeeInput, employees_attendanceUncheckedCreateWithoutEmployeeInput> | employees_attendanceCreateWithoutEmployeeInput[] | employees_attendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employees_attendanceCreateOrConnectWithoutEmployeeInput | employees_attendanceCreateOrConnectWithoutEmployeeInput[]
    createMany?: employees_attendanceCreateManyEmployeeInputEnvelope
    connect?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
  }

  export type employee_requestUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<employee_requestCreateWithoutEmployeeInput, employee_requestUncheckedCreateWithoutEmployeeInput> | employee_requestCreateWithoutEmployeeInput[] | employee_requestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employee_requestCreateOrConnectWithoutEmployeeInput | employee_requestCreateOrConnectWithoutEmployeeInput[]
    createMany?: employee_requestCreateManyEmployeeInputEnvelope
    connect?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Enumemployees_employee_GenderFieldUpdateOperationsInput = {
    set?: $Enums.employees_employee_Gender
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type Enumemployees_employee_CivilStatusFieldUpdateOperationsInput = {
    set?: $Enums.employees_employee_CivilStatus
  }

  export type Enumemployees_employee_StatusFieldUpdateOperationsInput = {
    set?: $Enums.employees_employee_Status
  }

  export type Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput = {
    set?: $Enums.employees_employee_ShiftSchedule
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type employees_attendanceUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<employees_attendanceCreateWithoutEmployeeInput, employees_attendanceUncheckedCreateWithoutEmployeeInput> | employees_attendanceCreateWithoutEmployeeInput[] | employees_attendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employees_attendanceCreateOrConnectWithoutEmployeeInput | employees_attendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: employees_attendanceUpsertWithWhereUniqueWithoutEmployeeInput | employees_attendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: employees_attendanceCreateManyEmployeeInputEnvelope
    set?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    disconnect?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    delete?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    connect?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    update?: employees_attendanceUpdateWithWhereUniqueWithoutEmployeeInput | employees_attendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: employees_attendanceUpdateManyWithWhereWithoutEmployeeInput | employees_attendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: employees_attendanceScalarWhereInput | employees_attendanceScalarWhereInput[]
  }

  export type employee_requestUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<employee_requestCreateWithoutEmployeeInput, employee_requestUncheckedCreateWithoutEmployeeInput> | employee_requestCreateWithoutEmployeeInput[] | employee_requestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employee_requestCreateOrConnectWithoutEmployeeInput | employee_requestCreateOrConnectWithoutEmployeeInput[]
    upsert?: employee_requestUpsertWithWhereUniqueWithoutEmployeeInput | employee_requestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: employee_requestCreateManyEmployeeInputEnvelope
    set?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    disconnect?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    delete?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    connect?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    update?: employee_requestUpdateWithWhereUniqueWithoutEmployeeInput | employee_requestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: employee_requestUpdateManyWithWhereWithoutEmployeeInput | employee_requestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: employee_requestScalarWhereInput | employee_requestScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type employees_attendanceUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<employees_attendanceCreateWithoutEmployeeInput, employees_attendanceUncheckedCreateWithoutEmployeeInput> | employees_attendanceCreateWithoutEmployeeInput[] | employees_attendanceUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employees_attendanceCreateOrConnectWithoutEmployeeInput | employees_attendanceCreateOrConnectWithoutEmployeeInput[]
    upsert?: employees_attendanceUpsertWithWhereUniqueWithoutEmployeeInput | employees_attendanceUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: employees_attendanceCreateManyEmployeeInputEnvelope
    set?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    disconnect?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    delete?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    connect?: employees_attendanceWhereUniqueInput | employees_attendanceWhereUniqueInput[]
    update?: employees_attendanceUpdateWithWhereUniqueWithoutEmployeeInput | employees_attendanceUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: employees_attendanceUpdateManyWithWhereWithoutEmployeeInput | employees_attendanceUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: employees_attendanceScalarWhereInput | employees_attendanceScalarWhereInput[]
  }

  export type employee_requestUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<employee_requestCreateWithoutEmployeeInput, employee_requestUncheckedCreateWithoutEmployeeInput> | employee_requestCreateWithoutEmployeeInput[] | employee_requestUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: employee_requestCreateOrConnectWithoutEmployeeInput | employee_requestCreateOrConnectWithoutEmployeeInput[]
    upsert?: employee_requestUpsertWithWhereUniqueWithoutEmployeeInput | employee_requestUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: employee_requestCreateManyEmployeeInputEnvelope
    set?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    disconnect?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    delete?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    connect?: employee_requestWhereUniqueInput | employee_requestWhereUniqueInput[]
    update?: employee_requestUpdateWithWhereUniqueWithoutEmployeeInput | employee_requestUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: employee_requestUpdateManyWithWhereWithoutEmployeeInput | employee_requestUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: employee_requestScalarWhereInput | employee_requestScalarWhereInput[]
  }

  export type employeesCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<employeesCreateWithoutAttendancesInput, employeesUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutAttendancesInput
    connect?: employeesWhereUniqueInput
  }

  export type employeesUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<employeesCreateWithoutAttendancesInput, employeesUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: employeesCreateOrConnectWithoutAttendancesInput
    upsert?: employeesUpsertWithoutAttendancesInput
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutAttendancesInput, employeesUpdateWithoutAttendancesInput>, employeesUncheckedUpdateWithoutAttendancesInput>
  }

  export type employeesCreateNestedOneWithoutLeaveRequestsInput = {
    create?: XOR<employeesCreateWithoutLeaveRequestsInput, employeesUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutLeaveRequestsInput
    connect?: employeesWhereUniqueInput
  }

  export type Enumemployee_request_statusFieldUpdateOperationsInput = {
    set?: $Enums.employee_request_status
  }

  export type Enumemployee_request_leaveFieldUpdateOperationsInput = {
    set?: $Enums.employee_request_leave
  }

  export type employeesUpdateOneRequiredWithoutLeaveRequestsNestedInput = {
    create?: XOR<employeesCreateWithoutLeaveRequestsInput, employeesUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: employeesCreateOrConnectWithoutLeaveRequestsInput
    upsert?: employeesUpsertWithoutLeaveRequestsInput
    connect?: employeesWhereUniqueInput
    update?: XOR<XOR<employeesUpdateToOneWithWhereWithoutLeaveRequestsInput, employeesUpdateWithoutLeaveRequestsInput>, employeesUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type Enumhr_employee_employee_GenderFieldUpdateOperationsInput = {
    set?: $Enums.hr_employee_employee_Gender
  }

  export type Enumhr_employee_positionFieldUpdateOperationsInput = {
    set?: $Enums.hr_employee_position
  }

  export type Enumhr_employee_request_leaveFieldUpdateOperationsInput = {
    set?: $Enums.hr_employee_request_leave
  }

  export type Enumhr_employee_request_statusFieldUpdateOperationsInput = {
    set?: $Enums.hr_employee_request_status
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumemployees_employee_GenderFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Gender | Enumemployees_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Gender[]
    notIn?: $Enums.employees_employee_Gender[]
    not?: NestedEnumemployees_employee_GenderFilter<$PrismaModel> | $Enums.employees_employee_Gender
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumemployees_employee_CivilStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_CivilStatus | Enumemployees_employee_CivilStatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_CivilStatus[]
    notIn?: $Enums.employees_employee_CivilStatus[]
    not?: NestedEnumemployees_employee_CivilStatusFilter<$PrismaModel> | $Enums.employees_employee_CivilStatus
  }

  export type NestedEnumemployees_employee_StatusFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Status | Enumemployees_employee_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Status[]
    notIn?: $Enums.employees_employee_Status[]
    not?: NestedEnumemployees_employee_StatusFilter<$PrismaModel> | $Enums.employees_employee_Status
  }

  export type NestedEnumemployees_employee_ShiftScheduleFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_ShiftSchedule | Enumemployees_employee_ShiftScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_ShiftSchedule[]
    notIn?: $Enums.employees_employee_ShiftSchedule[]
    not?: NestedEnumemployees_employee_ShiftScheduleFilter<$PrismaModel> | $Enums.employees_employee_ShiftSchedule
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumemployees_employee_GenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Gender | Enumemployees_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Gender[]
    notIn?: $Enums.employees_employee_Gender[]
    not?: NestedEnumemployees_employee_GenderWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_GenderFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_GenderFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumemployees_employee_CivilStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_CivilStatus | Enumemployees_employee_CivilStatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_CivilStatus[]
    notIn?: $Enums.employees_employee_CivilStatus[]
    not?: NestedEnumemployees_employee_CivilStatusWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_CivilStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_CivilStatusFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_CivilStatusFilter<$PrismaModel>
  }

  export type NestedEnumemployees_employee_StatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_Status | Enumemployees_employee_StatusFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_Status[]
    notIn?: $Enums.employees_employee_Status[]
    not?: NestedEnumemployees_employee_StatusWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_StatusFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_StatusFilter<$PrismaModel>
  }

  export type NestedEnumemployees_employee_ShiftScheduleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employees_employee_ShiftSchedule | Enumemployees_employee_ShiftScheduleFieldRefInput<$PrismaModel>
    in?: $Enums.employees_employee_ShiftSchedule[]
    notIn?: $Enums.employees_employee_ShiftSchedule[]
    not?: NestedEnumemployees_employee_ShiftScheduleWithAggregatesFilter<$PrismaModel> | $Enums.employees_employee_ShiftSchedule
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployees_employee_ShiftScheduleFilter<$PrismaModel>
    _max?: NestedEnumemployees_employee_ShiftScheduleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumemployee_request_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_status | Enumemployee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_status[]
    notIn?: $Enums.employee_request_status[]
    not?: NestedEnumemployee_request_statusFilter<$PrismaModel> | $Enums.employee_request_status
  }

  export type NestedEnumemployee_request_leaveFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_leave | Enumemployee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_leave[]
    notIn?: $Enums.employee_request_leave[]
    not?: NestedEnumemployee_request_leaveFilter<$PrismaModel> | $Enums.employee_request_leave
  }

  export type NestedEnumemployee_request_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_status | Enumemployee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_status[]
    notIn?: $Enums.employee_request_status[]
    not?: NestedEnumemployee_request_statusWithAggregatesFilter<$PrismaModel> | $Enums.employee_request_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployee_request_statusFilter<$PrismaModel>
    _max?: NestedEnumemployee_request_statusFilter<$PrismaModel>
  }

  export type NestedEnumemployee_request_leaveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.employee_request_leave | Enumemployee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.employee_request_leave[]
    notIn?: $Enums.employee_request_leave[]
    not?: NestedEnumemployee_request_leaveWithAggregatesFilter<$PrismaModel> | $Enums.employee_request_leave
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumemployee_request_leaveFilter<$PrismaModel>
    _max?: NestedEnumemployee_request_leaveFilter<$PrismaModel>
  }

  export type NestedEnumhr_employee_employee_GenderFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_employee_Gender | Enumhr_employee_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_employee_Gender[]
    notIn?: $Enums.hr_employee_employee_Gender[]
    not?: NestedEnumhr_employee_employee_GenderFilter<$PrismaModel> | $Enums.hr_employee_employee_Gender
  }

  export type NestedEnumhr_employee_positionFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_position | Enumhr_employee_positionFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_position[]
    notIn?: $Enums.hr_employee_position[]
    not?: NestedEnumhr_employee_positionFilter<$PrismaModel> | $Enums.hr_employee_position
  }

  export type NestedEnumhr_employee_request_leaveFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_leave | Enumhr_employee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_leave[]
    notIn?: $Enums.hr_employee_request_leave[]
    not?: NestedEnumhr_employee_request_leaveFilter<$PrismaModel> | $Enums.hr_employee_request_leave
  }

  export type NestedEnumhr_employee_request_statusFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_status | Enumhr_employee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_status[]
    notIn?: $Enums.hr_employee_request_status[]
    not?: NestedEnumhr_employee_request_statusFilter<$PrismaModel> | $Enums.hr_employee_request_status
  }

  export type NestedEnumhr_employee_employee_GenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_employee_Gender | Enumhr_employee_employee_GenderFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_employee_Gender[]
    notIn?: $Enums.hr_employee_employee_Gender[]
    not?: NestedEnumhr_employee_employee_GenderWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_employee_Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_employee_GenderFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_employee_GenderFilter<$PrismaModel>
  }

  export type NestedEnumhr_employee_positionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_position | Enumhr_employee_positionFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_position[]
    notIn?: $Enums.hr_employee_position[]
    not?: NestedEnumhr_employee_positionWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_positionFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_positionFilter<$PrismaModel>
  }

  export type NestedEnumhr_employee_request_leaveWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_leave | Enumhr_employee_request_leaveFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_leave[]
    notIn?: $Enums.hr_employee_request_leave[]
    not?: NestedEnumhr_employee_request_leaveWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_request_leave
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_request_leaveFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_request_leaveFilter<$PrismaModel>
  }

  export type NestedEnumhr_employee_request_statusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.hr_employee_request_status | Enumhr_employee_request_statusFieldRefInput<$PrismaModel>
    in?: $Enums.hr_employee_request_status[]
    notIn?: $Enums.hr_employee_request_status[]
    not?: NestedEnumhr_employee_request_statusWithAggregatesFilter<$PrismaModel> | $Enums.hr_employee_request_status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumhr_employee_request_statusFilter<$PrismaModel>
    _max?: NestedEnumhr_employee_request_statusFilter<$PrismaModel>
  }

  export type employees_attendanceCreateWithoutEmployeeInput = {
    shiftSchedule: $Enums.employees_employee_ShiftSchedule
    clockIn: Date | string
    clockOut: Date | string
  }

  export type employees_attendanceUncheckedCreateWithoutEmployeeInput = {
    attendance_id?: number
    shiftSchedule: $Enums.employees_employee_ShiftSchedule
    clockIn: Date | string
    clockOut: Date | string
  }

  export type employees_attendanceCreateOrConnectWithoutEmployeeInput = {
    where: employees_attendanceWhereUniqueInput
    create: XOR<employees_attendanceCreateWithoutEmployeeInput, employees_attendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type employees_attendanceCreateManyEmployeeInputEnvelope = {
    data: employees_attendanceCreateManyEmployeeInput | employees_attendanceCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type employee_requestCreateWithoutEmployeeInput = {
    leaverequest_reason: string
    leaverequest_status: $Enums.employee_request_status
    leave: $Enums.employee_request_leave
  }

  export type employee_requestUncheckedCreateWithoutEmployeeInput = {
    leaverequest_id?: number
    leaverequest_reason: string
    leaverequest_status: $Enums.employee_request_status
    leave: $Enums.employee_request_leave
  }

  export type employee_requestCreateOrConnectWithoutEmployeeInput = {
    where: employee_requestWhereUniqueInput
    create: XOR<employee_requestCreateWithoutEmployeeInput, employee_requestUncheckedCreateWithoutEmployeeInput>
  }

  export type employee_requestCreateManyEmployeeInputEnvelope = {
    data: employee_requestCreateManyEmployeeInput | employee_requestCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type employees_attendanceUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: employees_attendanceWhereUniqueInput
    update: XOR<employees_attendanceUpdateWithoutEmployeeInput, employees_attendanceUncheckedUpdateWithoutEmployeeInput>
    create: XOR<employees_attendanceCreateWithoutEmployeeInput, employees_attendanceUncheckedCreateWithoutEmployeeInput>
  }

  export type employees_attendanceUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: employees_attendanceWhereUniqueInput
    data: XOR<employees_attendanceUpdateWithoutEmployeeInput, employees_attendanceUncheckedUpdateWithoutEmployeeInput>
  }

  export type employees_attendanceUpdateManyWithWhereWithoutEmployeeInput = {
    where: employees_attendanceScalarWhereInput
    data: XOR<employees_attendanceUpdateManyMutationInput, employees_attendanceUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type employees_attendanceScalarWhereInput = {
    AND?: employees_attendanceScalarWhereInput | employees_attendanceScalarWhereInput[]
    OR?: employees_attendanceScalarWhereInput[]
    NOT?: employees_attendanceScalarWhereInput | employees_attendanceScalarWhereInput[]
    attendance_id?: IntFilter<"employees_attendance"> | number
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFilter<"employees_attendance"> | $Enums.employees_employee_ShiftSchedule
    employeeId?: IntFilter<"employees_attendance"> | number
    clockIn?: DateTimeFilter<"employees_attendance"> | Date | string
    clockOut?: DateTimeFilter<"employees_attendance"> | Date | string
  }

  export type employee_requestUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: employee_requestWhereUniqueInput
    update: XOR<employee_requestUpdateWithoutEmployeeInput, employee_requestUncheckedUpdateWithoutEmployeeInput>
    create: XOR<employee_requestCreateWithoutEmployeeInput, employee_requestUncheckedCreateWithoutEmployeeInput>
  }

  export type employee_requestUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: employee_requestWhereUniqueInput
    data: XOR<employee_requestUpdateWithoutEmployeeInput, employee_requestUncheckedUpdateWithoutEmployeeInput>
  }

  export type employee_requestUpdateManyWithWhereWithoutEmployeeInput = {
    where: employee_requestScalarWhereInput
    data: XOR<employee_requestUpdateManyMutationInput, employee_requestUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type employee_requestScalarWhereInput = {
    AND?: employee_requestScalarWhereInput | employee_requestScalarWhereInput[]
    OR?: employee_requestScalarWhereInput[]
    NOT?: employee_requestScalarWhereInput | employee_requestScalarWhereInput[]
    leaverequest_id?: IntFilter<"employee_request"> | number
    leaverequest_reason?: StringFilter<"employee_request"> | string
    leaverequest_status?: Enumemployee_request_statusFilter<"employee_request"> | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFilter<"employee_request"> | $Enums.employee_request_leave
    employeeId?: IntFilter<"employee_request"> | number
  }

  export type employeesCreateWithoutAttendancesInput = {
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date | string
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal | DecimalJsLike | number | string
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword?: boolean
    leaveRequests?: employee_requestCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateWithoutAttendancesInput = {
    employeeId?: number
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date | string
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal | DecimalJsLike | number | string
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword?: boolean
    leaveRequests?: employee_requestUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesCreateOrConnectWithoutAttendancesInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutAttendancesInput, employeesUncheckedCreateWithoutAttendancesInput>
  }

  export type employeesUpsertWithoutAttendancesInput = {
    update: XOR<employeesUpdateWithoutAttendancesInput, employeesUncheckedUpdateWithoutAttendancesInput>
    create: XOR<employeesCreateWithoutAttendancesInput, employeesUncheckedCreateWithoutAttendancesInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutAttendancesInput, employeesUncheckedUpdateWithoutAttendancesInput>
  }

  export type employeesUpdateWithoutAttendancesInput = {
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    leaveRequests?: employee_requestUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateWithoutAttendancesInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    leaveRequests?: employee_requestUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesCreateWithoutLeaveRequestsInput = {
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date | string
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal | DecimalJsLike | number | string
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword?: boolean
    attendances?: employees_attendanceCreateNestedManyWithoutEmployeeInput
  }

  export type employeesUncheckedCreateWithoutLeaveRequestsInput = {
    employeeId?: number
    employee_FirstName: string
    employee_LastName: string
    employee_Address: string
    employee_PhoneNumber: string
    employee_HireDate: Date | string
    employee_Gender: $Enums.employees_employee_Gender
    employee_Position: string
    employee_Department: string
    employee_Salary: Decimal | DecimalJsLike | number | string
    employee_CivilStatus: $Enums.employees_employee_CivilStatus
    employee_Status: $Enums.employees_employee_Status
    employee_ShiftSchedule: $Enums.employees_employee_ShiftSchedule
    employee_TIN: string
    employee_SSSNumber: string
    employee_PhilhealthNumber: string
    employee_emergencyContactName: string
    employee_emergencyContactNumber: string
    employee_imageURL: string
    password: string
    mustChangePassword?: boolean
    attendances?: employees_attendanceUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type employeesCreateOrConnectWithoutLeaveRequestsInput = {
    where: employeesWhereUniqueInput
    create: XOR<employeesCreateWithoutLeaveRequestsInput, employeesUncheckedCreateWithoutLeaveRequestsInput>
  }

  export type employeesUpsertWithoutLeaveRequestsInput = {
    update: XOR<employeesUpdateWithoutLeaveRequestsInput, employeesUncheckedUpdateWithoutLeaveRequestsInput>
    create: XOR<employeesCreateWithoutLeaveRequestsInput, employeesUncheckedCreateWithoutLeaveRequestsInput>
    where?: employeesWhereInput
  }

  export type employeesUpdateToOneWithWhereWithoutLeaveRequestsInput = {
    where?: employeesWhereInput
    data: XOR<employeesUpdateWithoutLeaveRequestsInput, employeesUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type employeesUpdateWithoutLeaveRequestsInput = {
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    attendances?: employees_attendanceUpdateManyWithoutEmployeeNestedInput
  }

  export type employeesUncheckedUpdateWithoutLeaveRequestsInput = {
    employeeId?: IntFieldUpdateOperationsInput | number
    employee_FirstName?: StringFieldUpdateOperationsInput | string
    employee_LastName?: StringFieldUpdateOperationsInput | string
    employee_Address?: StringFieldUpdateOperationsInput | string
    employee_PhoneNumber?: StringFieldUpdateOperationsInput | string
    employee_HireDate?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_Gender?: Enumemployees_employee_GenderFieldUpdateOperationsInput | $Enums.employees_employee_Gender
    employee_Position?: StringFieldUpdateOperationsInput | string
    employee_Department?: StringFieldUpdateOperationsInput | string
    employee_Salary?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    employee_CivilStatus?: Enumemployees_employee_CivilStatusFieldUpdateOperationsInput | $Enums.employees_employee_CivilStatus
    employee_Status?: Enumemployees_employee_StatusFieldUpdateOperationsInput | $Enums.employees_employee_Status
    employee_ShiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    employee_TIN?: StringFieldUpdateOperationsInput | string
    employee_SSSNumber?: StringFieldUpdateOperationsInput | string
    employee_PhilhealthNumber?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactName?: StringFieldUpdateOperationsInput | string
    employee_emergencyContactNumber?: StringFieldUpdateOperationsInput | string
    employee_imageURL?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    mustChangePassword?: BoolFieldUpdateOperationsInput | boolean
    attendances?: employees_attendanceUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type employees_attendanceCreateManyEmployeeInput = {
    attendance_id?: number
    shiftSchedule: $Enums.employees_employee_ShiftSchedule
    clockIn: Date | string
    clockOut: Date | string
  }

  export type employee_requestCreateManyEmployeeInput = {
    leaverequest_id?: number
    leaverequest_reason: string
    leaverequest_status: $Enums.employee_request_status
    leave: $Enums.employee_request_leave
  }

  export type employees_attendanceUpdateWithoutEmployeeInput = {
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employees_attendanceUncheckedUpdateWithoutEmployeeInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employees_attendanceUncheckedUpdateManyWithoutEmployeeInput = {
    attendance_id?: IntFieldUpdateOperationsInput | number
    shiftSchedule?: Enumemployees_employee_ShiftScheduleFieldUpdateOperationsInput | $Enums.employees_employee_ShiftSchedule
    clockIn?: DateTimeFieldUpdateOperationsInput | Date | string
    clockOut?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type employee_requestUpdateWithoutEmployeeInput = {
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumemployee_request_statusFieldUpdateOperationsInput | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFieldUpdateOperationsInput | $Enums.employee_request_leave
  }

  export type employee_requestUncheckedUpdateWithoutEmployeeInput = {
    leaverequest_id?: IntFieldUpdateOperationsInput | number
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumemployee_request_statusFieldUpdateOperationsInput | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFieldUpdateOperationsInput | $Enums.employee_request_leave
  }

  export type employee_requestUncheckedUpdateManyWithoutEmployeeInput = {
    leaverequest_id?: IntFieldUpdateOperationsInput | number
    leaverequest_reason?: StringFieldUpdateOperationsInput | string
    leaverequest_status?: Enumemployee_request_statusFieldUpdateOperationsInput | $Enums.employee_request_status
    leave?: Enumemployee_request_leaveFieldUpdateOperationsInput | $Enums.employee_request_leave
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}