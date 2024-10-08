import React, { useEffect, useState } from 'react';
import { TranslationMappingList } from './utils/translationMapping';
import { Config, Institution } from './utils/types';

// Define the component
const InstitutionSelector: React.FC<{
  institutions: Institution[];
  config?: Config;
  onSelectInstitution: (id: string) => void; // Callback prop for institution selection
  onGoBack: () => void; // Callback prop for going back
}> = ({ institutions, config, onSelectInstitution, onGoBack }) => {
  const [i18n, setI18n] = useState({
    institution: TranslationMappingList.en['Select your bank'],
    search: TranslationMappingList.en['Search'],
    goBack: TranslationMappingList.en['Go back'],
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredInstitutions, setFilteredInstitutions] =
    useState(institutions);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const langQuery = params.get('lang') || 'en';
    const lang = TranslationMappingList[langQuery] ? langQuery : 'en';
    setI18n({
      institution: TranslationMappingList[lang]['Select your bank'],
      search: TranslationMappingList[lang]['Search'],
      goBack: TranslationMappingList[lang]['Go back'],
    });

    // Include CSS file for flag icons
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/flag-icons@6.1.1/css/flag-icons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Clean up
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  useEffect(() => {
    setFilteredInstitutions(
      institutions.filter((inst) =>
        inst.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  }, [searchTerm, institutions]);

  const handleInstitutionClick = (
    e: React.MouseEvent<HTMLDivElement>,
    id: string,
  ) => {
    e.preventDefault(); // Prevent default link navigation
    onSelectInstitution(id); // Trigger the callback with the selected institution's ID
  };

  const handleGoBack = () => {
    onGoBack(); // Call the go back callback
  };

  const createInstitutionListView = () => {
    return (
      <div className="institution-content-wrapper overflow-auto">
        <div
          className=" institution-modal-content"
          id="institution-modal-content"
        >
          <button onClick={handleGoBack} className="back-button">
            {i18n.goBack}
          </button>
          <header id="institution-modal-header">
            <h2>{i18n.institution}</h2>
          </header>
          <div className="search-box  m-5">
            <input
              id="institution-search"
              className="search-box-input"
              type="text"
              placeholder={i18n.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="overflow-visible institution-container institution-search-bx-body">
            {filteredInstitutions.length > 0 ? (
              filteredInstitutions.map((inst) => (
                <div
                  key={inst.id}
                  className="ob-institution ob-list-institution"
                  onClick={(e) => handleInstitutionClick(e, inst.id)}
                >
                  <a href="#">
                    <img
                      src={inst.logo}
                      alt={inst.name}
                      className="ob-institution-logo"
                    />
                    <span className="ob-span-text">{inst.name}</span>
                  </a>
                </div>
              ))
            ) : (
              <p>Not found </p> //update
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-w-full h-screen flex justify-center items-center">
      <div className="container-onboarding">
        {config?.logoUrl && (
          <div className="company-image-wrapper">
            <img
              src={config.logoUrl}
              className="institution-company-logo"
              alt="Logotype"
            />
          </div>
        )}
        {config?.text && <p>{config.text}</p>}
        <a href="#institution-modal-content">
          <img
            src="data:image/svg+xml;base64,..."
            alt="arrow image"
            className="ob-arrow-down"
          />
        </a>
      </div>
      {createInstitutionListView()}
    </div>
  );
};

export default InstitutionSelector;
