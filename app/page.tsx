import { DatePicker } from "@nextui-org/react";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <DatePicker className="max-w-[284px]" label="Birth date" />
    </div>
  );
}
