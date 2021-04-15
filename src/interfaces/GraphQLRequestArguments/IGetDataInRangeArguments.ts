/*

Author: Corbin Murray
Date Created: April 14, 2021
Description: The date arguments should be parsed into native Date types. They are intercepted by a custom scalar
and should be appropriately handled based on their original input type (the raw request).

*/

interface IGetDataInRangeArguments {
  device_name: string;
  start_date_utc: Date;
  end_date_utc: Date;
}

export type { IGetDataInRangeArguments };
