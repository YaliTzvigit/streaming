/* Home Page */

import { useState } from 'react';
import videos from '../data/videos';
import { Link } from 'react-router-dom';
/* Font awesome */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Tout voir');
  const [currentPage, setCurrentPage] = useState(1);

  const videosPerPage = 6;

  const categories = ['Tout voir', ...new Set(videos.map(v => v.category))];

  const filteredVideos = videos.filter((video) => {
    const matchSearch = video.title.toLowerCase().includes(search.toLowerCase()) ||
                        video.category.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === 'Tout voir' || video.category === category;
    return matchSearch && matchCategory;
  });

  // Pagination
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);
  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">EduStream 📚</h1>
      <p className="centerp text-muted"> Plateforme de streaming éducatif à petite échelle. </p>

      <br />

      {/* Recherche et filtre */}
      <div className="row mb-4">
        <div className="col-md-6 search-container">
          <input
            type="text"
            className="form-control searchvid"
            placeholder="Trouver une vidéo ..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FontAwesomeIcon icon={faSearch} className='search-icon' />
        </div>
        {/* select */}
        <div className="col-md-6">
          <select
            className="form-select searchvid"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Vidéos */}
      <div className="row">
        {currentVideos.length > 0 ? (
          currentVideos.map((video) => (
            <div className="col-md-4 mb-4" key={video.id}>
              <div className="card h-100 shadow-sm">
                <img src={video.thumbnail} className="card-img-top" alt={video.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{video.title}</h5>
                  <p className="card-text">{video.category}</p>
                  <Link to={`/video/${video.id}`} className="btn btn-primary mt-auto seevid">
                    Voir la vidéo
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">Aucune vidéo trouvée 😥</p>
        )}
      </div>

      {/* Pagination */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
