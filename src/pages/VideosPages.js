

import { useParams, Link } from 'react-router-dom';
import videos from '../data/videos';

function VideoPage() {
  const { id } = useParams();
  const video = videos.find((v) => v.id === parseInt(id));

  if (!video) {
    return (
      <div className="container py-5">
        <h2>Vidéo non trouvée 😢</h2>
        <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="mb-4">{video.title}</h1>
      <div className="ratio ratio-16x9 mb-4">
        <iframe
          src={video.url}
          title={video.title}
          allowFullScreen
        ></iframe>
      </div>
      <p className="lead">{video.description}</p>
      <Link to="/" className="btn btn-secondary mt-3">← Retour à l'accueil</Link>
    </div>
  );
}

export default VideoPage;
