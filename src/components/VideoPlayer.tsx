export const VideoPlayer = ({ videoId }: { videoId: string }) => (
  <div className="aspect-video w-full">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full rounded-lg"
    />
  </div>
)
