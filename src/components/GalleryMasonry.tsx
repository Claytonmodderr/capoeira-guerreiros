import { useState } from "react";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
}

export default function GalleryMasonry() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Criar array de imagens com padrão de tamanhos variados
  const images: GalleryImage[] = Array.from({ length: 63 }).map((_, i) => ({
    id: i + 1,
    src: `/images/imagem_${i + 1}.jpg`,
  }));

  // Função para determinar o tamanho da imagem (col-span e row-span)
  const getImageSize = (index: number) => {
    // Padrão: algumas imagens maiores, outras menores
    const pattern = [
      "col-span-2 row-span-2", // Grande
      "col-span-1 row-span-1", // Pequena
      "col-span-1 row-span-1", // Pequena
      "col-span-2 row-span-1", // Média horizontal
      "col-span-1 row-span-2", // Média vertical
      "col-span-1 row-span-1", // Pequena
      "col-span-1 row-span-1", // Pequena
      "col-span-2 row-span-2", // Grande
    ];
    return pattern[index % pattern.length];
  };

  return (
    <>
      {/* Galeria Masonry */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[200px]">
        {images.map((image, index) => (
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
                // Fallback para outras extensões se jpg não existir
                const exts = ["jpeg", "png"];
                const current = e.currentTarget.src.split(".").pop();
                const nextExt = exts.find((ext) => ext !== current);
                if (nextExt) {
                  e.currentTarget.src = `/images/imagem_${image.id}.${nextExt}`;
                }
              }}
            />
            {/* Overlay com efeito hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                <p className="text-sm font-semibold">Clique para ampliar</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Visualização em Tela Cheia */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl max-h-[90vh]">
            {/* Botão Fechar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-amber-400 transition-colors"
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
              <p className="text-sm">Foto {selectedImage.id} de {images.length}</p>
            </div>

            {/* Navegação */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => {
                  const prevId = selectedImage.id === 1 ? images.length : selectedImage.id - 1;
                  setSelectedImage(images.find((img) => img.id === prevId) || null);
                }}
                className="px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
              >
                ← Anterior
              </button>
              <button
                onClick={() => {
                  const nextId = selectedImage.id === images.length ? 1 : selectedImage.id + 1;
                  setSelectedImage(images.find((img) => img.id === nextId) || null);
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
