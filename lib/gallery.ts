export type GalleryItem = {
  src: string;
  alt: string;
};

// 18 Referenzbilder aus realen Kundenprojekten in Wien
export const GALLERY: GalleryItem[] = Array.from({ length: 18 }, (_, i) => {
  const n = i + 1;
  return {
    src: `/images/gallery/sa-stadt-installation-referenzen-${n}.jpg`,
    alt: `SA Stadtinstallation – Referenzprojekt ${n}: Installateurarbeiten in Wien`,
  };
});
