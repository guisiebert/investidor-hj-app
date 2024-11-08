import { extractAndFormatFirstName } from "@/lib/normalize-name";

export function HelloName({
  userName,
}: {
  userName: string | null | undefined;
}) {
  return (
    <div className="col-span-2 flex h-32 w-full flex-col justify-center rounded-xl bg-gradient-to-tr from-violet-800 to-violet-500 p-6 text-gray-200 sm:col-span-4">
      <h1 className="text-3xl font-semibold">
        Olá, {extractAndFormatFirstName(userName)}
      </h1>
      <p>Bem-vindo à plataforma Investidor HJ</p>
    </div>
  );
}
