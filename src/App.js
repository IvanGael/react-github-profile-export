// App.js
import { useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import Profile from './Profile';
import PDFExportButton from './PDFExportButton';

function App() {
  const [profileData, setProfileData] = useState(null);

  const fetchProfile = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response.data);
      setProfileData(response.data);
    } catch (error) {
      console.error('Error fetching GitHub profile:', error);
    }
  };


  return (
    <div>
      <SearchForm onSearch={fetchProfile} />
      {profileData && <Profile data={profileData}/>}
      {profileData && <PDFExportButton data={profileData} />}
    </div>
  );
}

export default App;
