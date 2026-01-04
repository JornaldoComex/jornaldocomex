import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Video } from "lucide-react";

/**
 * Jornal do Comex – Portal de Notícias de Comércio Exterior
 * 
 * Nota importante:
 * Todo o conteúdo editorial, planejamento e textos explicativos que não fazem parte
 * da renderização React devem ficar fora deste arquivo (ex: README, CMS ou documentação).
 * Manter apenas código JSX/TSX aqui evita erros de sintaxe como o Unexpected token.
 */

export default function JornalDoComex() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Jornal do Comex</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-blue-600">Notícias</a>
            <a href="#" className="hover:text-blue-600">Entrevistas</a>
            <a href="#" className="hover:text-blue-600">Vídeos</a>
            <a href="#" className="hover:text-blue-600">Análises</a>
            <a href="#" className="hover:text-blue-600">Legislação</a>
          </nav>
          <Button variant="outline" size="icon" aria-label="Buscar">
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-semibold">Destaques da Semana</h2>

          {[1, 2].map((item) => (
            <Card key={item} className="hover:shadow-md transition">
              <CardContent className="p-6 space-y-2">
                <span className="text-xs text-blue-600 font-medium">Notícia</span>
                <h3 className="text-lg font-bold">
                  Mudanças no comércio exterior impactam empresas brasileiras
                </h3>
                <p className="text-sm text-gray-600">
                  Leitura acessível com análise técnica complementar para profissionais de comex.
                </p>
                <Button variant="link" className="p-0">Ler matéria</Button>
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent className="p-6 space-y-3">
              <div className="flex items-center gap-2 text-blue-600">
                <Video className="w-4 h-4" />
                <span className="text-sm font-medium">Entrevista em Vídeo</span>
              </div>
              <h3 className="text-lg font-bold">
                Especialista explica tendências do comex em 2026
              </h3>
              <p className="text-sm text-gray-600">
                Conversa direta com linguagem clara, sem perder o conteúdo técnico.
              </p>
              <Button variant="link" className="p-0">Assistir</Button>
            </CardContent>
          </Card>
        </section>

        <aside className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Editorias</h3>
              <ul className="space-y-2 text-sm">
                <li>Importação</li>
                <li>Exportação</li>
                <li>Legislação Aduaneira</li>
                <li>Tributação</li>
                <li>Logística</li>
                <li>Opinião</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Newsletter Semanal</h3>
              <p className="text-sm text-gray-600 mb-4">
                Um resumo claro e técnico das principais notícias do comércio exterior.
              </p>
              <Button className="w-full">Assinar</Button>
            </CardContent>
          </Card>
        </aside>
      </main>

      <footer className="bg-white border-t mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
          <span>© 2026 Jornal do Comex</span>
          <span>Portal de notícias sobre comércio exterior</span>
        </div>
      </footer>
    </div>
  );
}
