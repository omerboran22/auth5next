import * as z from 'zod';

export const LoginSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Boş Geçilemez ve Email Formatında Olmalıdır',
    })
    .email({
      message: 'Email Formatında Olmalıdır',
    }),
  password: z
    .string({
      invalid_type_error: 'Boş Geçilemez',
    })
    .min(6, {
      message: 'Şifre En Az 6 Karakter Olmalıdır',
    })
    .max(32),
});

export const RegisterSchema = z.object({
  email: z
    .string({
      invalid_type_error: 'Boş Geçilemez ve Email Formatında Olmalıdır',
    })
    .email({
      message: 'Email Formatında Olmalıdır',
    }),
  password: z
    .string({
      invalid_type_error: 'Boş Geçilemez',
    })
    .min(6, {
      message: 'Şifre En Az 6 Karakter Olmalıdır',
    })
    .max(32),
  name: z
    .string({
      invalid_type_error: 'Boş Geçilemez',
    })
    .min(2, {
      message: 'İsim En Az 2 Karakter Olmalıdır',
    }),
});
