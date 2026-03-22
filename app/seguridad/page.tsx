import fs from "fs";
import path from "path";

export default function Page() {
  const filePath = path.join(process.cwd(), "public/legal/politica-de-seguridad.md");
  const content = fs.readFileSync(filePath, "utf-8");

  const lines = content.split("\n");

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans">
      <div className="max-w-3xl mx-auto px-6 py-16">
        {lines.map((line, i) => {
          if (line.startsWith("# ")) return <h1 key={i} className="text-3xl font-bold mb-2 font-title">{line.replace("# ", "")}</h1>;
          if (line.startsWith("## ")) return <h2 key={i} className="text-xl font-semibold mt-10 mb-3 text-slate-800 border-b pb-2">{line.replace("## ", "")}</h2>;
          if (line.startsWith("### ")) return <h3 key={i} className="text-base font-semibold mt-6 mb-2 text-slate-700">{line.replace("### ", "")}</h3>;
          if (line.startsWith("- ")) return <li key={i} className="ml-4 list-disc text-slate-600 text-sm leading-relaxed">{line.replace("- ", "")}</li>;
          if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-slate-700 mt-4">{line.replaceAll("**", "")}</p>;
          if (line.trim() === "---") return <hr key={i} className="my-8 border-slate-200" />;
          if (line.trim() === "") return <div key={i} className="mb-2" />;
          return <p key={i} className="text-slate-600 text-sm leading-relaxed mb-1">{line}</p>;
        })}
      </div>
    </main>
  );
}
