import { Linkedin, Award } from "lucide-react";
import { Author } from "@/lib/blog/articles";

interface AuthorBioProps {
  author: Author;
  variant?: "compact" | "full";
}

export default function AuthorBio({ author, variant = "full" }: AuthorBioProps) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-cinza-200 flex items-center justify-center text-cinza-700 font-bold text-lg">
          {author.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-cinza-900">{author.name}</p>
          <p className="text-cinza-500 text-sm">{author.role}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-cinza-50 rounded-2xl p-6 border border-cinza-100">
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className="w-16 h-16 rounded-full bg-cinza-200 flex items-center justify-center text-cinza-700 font-bold text-2xl flex-shrink-0">
          {author.name.charAt(0)}
        </div>

        <div className="flex-1">
          {/* Nome e credenciais */}
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h4 className="font-bold text-cinza-900 text-lg">{author.name}</h4>
            {author.crm && (
              <span className="inline-flex items-center gap-1 bg-verde/10 text-verde text-xs font-medium px-2 py-1 rounded-full">
                <Award className="w-3 h-3" />
                {author.crm}
              </span>
            )}
          </div>

          {/* Cargo */}
          <p className="text-dourado font-medium text-sm mb-3">{author.role}</p>

          {/* Bio */}
          <p className="text-cinza-600 text-sm leading-relaxed mb-4">{author.bio}</p>

          {/* Links */}
          {author.linkedin && (
            <a
              href={author.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cinza-500 hover:text-dourado transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Conectar no LinkedIn
            </a>
          )}
        </div>
      </div>

      {/* E-E-A-T Badge */}
      <div className="mt-4 pt-4 border-t border-cinza-200">
        <p className="text-xs text-cinza-500">
          Este artigo foi escrito por um profissional de saúde com registro ativo no
          Conselho Regional de Medicina, garantindo informações confiáveis e atualizadas.
        </p>
      </div>
    </div>
  );
}
