import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
}

interface GallerySection {
  title: string;
  description: string;
  imageStart: number;
  imageEnd: number;
}

export default function GalleryWithSections() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const sections: GallerySection[] = [
    {
      title: "Aulas e Treinamento",
      description: "Momentos das aulas práticas onde nossos alunos aprendem os fundamentos da capoeira, desenvolvendo técnicas, ritmo e conexão com a cultura afro-brasileira. Aqui vemos o dia a dia do treinamento intensivo na Associação de Capoeira Guerreiros da Cultura Negra.",
      imageStart: 1,
      imageEnd: 15,
    },
    {
      title: "Apresentações e Eventos",
      description: "Apresentações públicas e eventos especiais onde a Associação compartilha a beleza e a energia da capoeira com a comunidade. Esses momentos refletem nosso compromisso em preservar e divulgar a cultura afro-brasileira.",
      imageStart: 16,
      imageEnd: 30,
    },
    {
      title: "Momentos Especiais",
      description: "Confraternizações, celebrações e momentos de integração entre mestres, professores e alunos. Esses encontros fortalecem os laços da nossa comunidade e celebram a tradição da capoeira.",
      imageStart: 31,
      imageEnd: 45,
    },
    {
      title: "Cultura e Tradição",
      description: "Detalhes que representam a essência da capoeira: instrumentos tradicionais, símbolos culturais, e momentos que conectam nossa associação com as raízes da cultura afro-brasileira.",
      imageStart: 46,
      imageEnd: 63,
    },
  ];

  const allImages: GalleryImage[] = Array.from({ length: 63 }).map((_, i) => ({
    id: i + 1,
    src: `/images/imagem_${i + 1}.jpg`,
  }));

  const getImageSize = (index: number) => {
    const pattern = [
      "col-span-2 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-1",
      "col-span-1 row-span-2",
      "col-span-1 row-span-1",
      "col-span-1 row-span-1",
      "col-span-2 row-span-2",
    ];
    return pattern[index % pattern.length];
  };

  return (
    <>
      {sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-20">
          {/* Seção Header */}
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-blue-900 mb-3">{section.title}</h3>
            <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
              {section.description}
            </p>
            <div className="w-20 h-1 bg-blue-900 mt-4"></div>
          </div>

          {/* Galeria Masonry da Seção */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[200px] mb-16">
            {allImages
              .slice(section.imageStart - 1, section.imageEnd)
              .map((image, index) => (
                <div
                  key={image.id}
                  className={`${getImageSize(index)} relative overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={`Foto ${image.id}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      const exts = ["jpeg", "png"];
                      const current = e.currentTarget.src.split(".").pop();
                      const nextExt = exts.find((ext) => ext !== current);
                      if (nextExt) {
                        e.currentTarget.src = `/images/imagem_${image.id}.${nextExt}`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                      <p className="text-sm font-semibold">Clique para ampliar</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}

      {/* Modal de Visualização em Tela Cheia */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors"
              aria-label="Fechar"
            >
              <X size={32} />
            </button>

            {/* Imagem Ampliada */}
            <img
              src={selectedImage.src}
              alt={`Foto ${selectedImage.id}`}
              className="w-full h-full object-contain rounded-lg"
              onError={(e) => {
                const exts = ["jpeg", "png"];
                const current = e.currentTarget.src.split(".").pop();
                const nextExt = exts.find((ext) => ext !== current);
                if (nextExt) {
                  e.currentTarget.src = `/images/imagem_${selectedImage.id}.${nextExt}`;
                }
              }}
            />

            {/* Informações */}
            <div className="text-center mt-4 text-white">
              <p className="text-sm">Foto {selectedImage.id} de {allImages.length}</p>
            </div>

            {/* Navegação */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => {
                  const prevId = selectedImage.id === 1 ? allImages.length : selectedImage.id - 1;
                  setSelectedImage(allImages.find((img) => img.id === prevId) || null);
                }}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                ← Anterior
              </button>
              <button
                onClick={() => {
                  const nextId = selectedImage.id === allImages.length ? 1 : selectedImage.id + 1;
                  setSelectedImage(allImages.find((img) => img.id === nextId) || null);
                }}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                Próxima →
              </button>
            </div>
          </div>

          {/* Fechar ao clicar fora */}
          <div
            className="absolute inset-0 -z-10"
            onClick={() => setSelectedImage(null)}
          />
        </div>
      )}
    </>
  );
}
