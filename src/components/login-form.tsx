"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  email: z.string().email(),
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: FormData) {
    console.log(data);
    await signIn("nodemailer", {
      email: data.email,
      callbackUrl: "/dashboard",
      redirect: false,
    });
  }

  return (
    <>
      <div className="flex w-full flex-col justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-full justify-center gap-2"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Utilize seu email"
                      className="h-12 min-w-96 border-gray-600 bg-black/50 px-6 font-mono text-gray-400"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <button
              disabled={
                form.formState.isLoading || form.formState.isSubmitSuccessful
              }
              className="h-12 rounded-lg border border-violet-500 bg-black/50 from-violet-500/70 to-purple-500/70 px-8 py-2 text-white hover:bg-gradient-to-tr"
            >
              Enviar link de login
            </button>
          </form>
        </Form>

        {form.formState.isSubmitting && (
          <div className="flex items-center justify-center gap-2 rounded-lg p-3 text-sm text-gray-400">
            <LoaderIcon className="animate-spin" />
            <p>Aguarde...</p>
          </div>
        )}

        {form.formState.isSubmitSuccessful && (
          <div className="flex items-center justify-center gap-2 rounded-lg border-[1.5px] bg-gray-900 p-3 text-sm text-gray-400">
            <CheckCircle2 />
            <p>Sucesso! Link de login enviado ao seu email.</p>
          </div>
        )}
      </div>
    </>
  );
}
