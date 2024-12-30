import { FormikErrors, FormikTouched } from 'formik';

export const ctrlFieldClassName =
  <T>(errors: FormikErrors<T>, touched: FormikTouched<T>) =>
  (fieldName: keyof T): string =>
    `form-control ${touched?.[fieldName] ? (errors?.[fieldName] ? 'is-invalid' : 'is-valid') : ''}`;
