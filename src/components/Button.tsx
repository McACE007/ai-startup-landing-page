import { ReactNode } from "react";

function Button({ children }: { children: ReactNode }) {
  return (
    <button className="relative py-2 px-3 text-sm font-medium rounded-lg bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[0px_0px_12px_#8C45FF]">
      <span>{children}</span>
      <div className="absolute inset-0">
        <div className="absolute inset-0 border border-white/20 rounded-lg [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        <div className="absolute inset-0 border border-white/40 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
        <div className="absolute inset-0 shadow-[0px_0px_10px_rgb(140,69,255,.7)] rounded-lg"></div>
      </div>
    </button>
  );
}

export default Button;
