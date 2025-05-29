export default function ListItem({ title, description, link, image }) {
  // Bild-URL aus dem ersten Eintrag in teaser_image_urls auslesen
  const imageUrl = image && image.length > 0 ? image[0].src : null;
  
  return (
    <div className="bg-white rounded shadow p-4 flex flex-col md:flex-row gap-6">
      {/* Linke Seite mit Bild und Titel darunter */}
      <div className="flex flex-col items-center md:items-start gap-2 md:min-w-[180px] text-gray-500">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full md:w-40 h-32 object-cover rounded"
          />
        ) : (
          <div className="w-full md:w-40 h-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">
            Kein Bild
          </div>
        )}
        <p className="text-sm font-medium text-center md:w-40 break-words">{title}</p>
      </div>
      
      {/* Rechte Seite mit Titel und Subject */}
      <div className="flex flex-col flex-1 justify-center">
        <a 
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold text-blue-600 hover:underline"
        >
          {title}
        </a>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
}