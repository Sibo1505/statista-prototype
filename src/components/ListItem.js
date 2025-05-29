// ListItem component to display a single statistic entry
export default function ListItem({ title, description, link, image }) {
  // Extract the first teaser image URL, or set to null if not available
  const imageUrl = image && image.length > 0 ? image[0].src : null;
  
  return (
    // Card container with background, padding, and responsive layout
    <div className="bg-white rounded shadow p-4 flex flex-col md:flex-row gap-6">
      {/* Left section: image and title below it */}
      <div className="flex flex-col items-center md:items-start gap-2 md:min-w-[180px] text-gray-500">
        {imageUrl ? (
          // Display the image if available
          <img
            src={imageUrl}
            alt={title}
            className="w-full md:w-40 h-32 object-cover rounded"
          />
        ) : (
          // Placeholder if no image exists
          <div className="w-full md:w-40 h-32 bg-gray-200 rounded flex items-center justify-center text-gray-400">
            Kein Bild
          </div>
        )}
        {/* Title below the image */}
        <p className="text-sm font-medium text-center md:w-40 break-words">{title}</p>
      </div>
      
      {/* Right section: clickable title and description text */}
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