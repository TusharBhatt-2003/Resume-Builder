import { useState } from "react";
import ResumePreview from "./components/ResumePreview";
import FormSection from "./components/FormSection";
import PDFGenerator from "./components/PDFGenerator";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    education: "",
    experience: "",
    portfolio: "",
    projects: [],  // Changed from projectsCertificates
    certificates: [], // New array for certificates
    skills: []
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addSkill = () => {
    setFormData({ ...formData, skills: [...formData.skills, ""] });
  };

  const handleSkillChange = (index, value) => {
    const newSkills = [...formData.skills];
    newSkills[index] = value;
    setFormData({ ...formData, skills: newSkills });
  };

  const removeSkill = (index) => {
    const newSkills = formData.skills.filter((_, i) => i !== index);
    setFormData({ ...formData, skills: newSkills });
  };

  // Add project
  const addProject = () => {
    setFormData({ ...formData, projects: [...formData.projects, { name: "", link: "" }] });
  };

  const handleProjectChange = (index, key, value) => {
    const newProjects = [...formData.projects];
    newProjects[index][key] = value;
    setFormData({ ...formData, projects: newProjects });
  };

  const removeProject = (index) => {
    const newProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: newProjects });
  };

  // Add certificate
  const addCertificate = () => {
    setFormData({ ...formData, certificates: [...formData.certificates, { name: "", link: "" }] });
  };

  const handleCertificateChange = (index, key, value) => {
    const newCertificates = [...formData.certificates];
    newCertificates[index][key] = value;
    setFormData({ ...formData, certificates: newCertificates });
  };

  const removeCertificate = (index) => {
    const newCertificates = formData.certificates.filter((_, i) => i !== index);
    setFormData({ ...formData, certificates: newCertificates });
  };

  return (
    <div className=" bg-[#F2EEE5] text-[#242424]">
      <header className="text-center py-2 bg-[#242424] text-[#F2EEE5] rounded-b-3xl select-none">
        <h1 className="text-4xl md:text-6xl font-[900] Bowlby-One">Resume Builder</h1>
        <p className="text-sm font-thin mt-2">Craft your resume with ease and download it as PDF</p>
      </header>
      <div className="flex flex-col md:flex-row justify-center gap-6 p-6">
        {/* Form for user input */}
        <div className="md:w-full p-6  bg-[#F2EEE5] rounded-3xl border-8 border-[#242424] select-none">
          <h2 className="text-3xl text-[#242424] mb-6 font-extrabold teko">Enter Your Details:</h2>
          
       <div className="grid grid-cols-2">
       <FormSection
            title="Full Name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange}
          />
          
          <FormSection
            title="Contact Information"
            name="contact"
            placeholder="Phone"
            value={formData.contact}
            onChange={handleInputChange}
          />

          <FormSection
            title="Email"
            name="email"
            placeholder="youremail@example.com"
            value={formData.email}
            onChange={handleInputChange}
          />
          
          <FormSection
            title="Education"
            name="education"
            placeholder="Your Education Details"
            value={formData.education}
            onChange={handleInputChange}
          />
          
          <FormSection
            title="Work Experience"
            name="experience"
            placeholder="Your Work Experience"
            value={formData.experience}
            onChange={handleInputChange}
          />

          <FormSection
            title="Portfolio"
            name="portfolio"
            placeholder="Your Portfolio URL"
            value={formData.portfolio}
            onChange={handleInputChange}
          />
       </div>

   {/* Skills Section */}
         <div className="mb-2">
            <label className="block text-lg font-semibold text-[#242424] mb-2">Skills:</label>
            {formData.skills.map((skill, index) => (
              <div key={index} className="flex items-center mb-2">
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleSkillChange(index, e.target.value)}
                  placeholder={`Skill ${index + 1}`}
                  className="w-full p-2 border border-[#242424] rounded-lg bg-[#fffefb] focus:ring focus:ring-[#242424]"
                />
                <button onClick={() => removeSkill(index)} className="ml-3 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#860404" viewBox="0 0 256 256"><path d="M216,40H68.53a16.08,16.08,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11A16.08,16.08,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM61.67,204.12,68.53,200h0ZM216,200H68.53l-43.2-72,43.2-72H216ZM106.34,146.34,124.69,128l-18.35-18.34a8,8,0,0,1,11.32-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128l18.35,18.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Z"></path></svg>
                </button>
              </div>
            ))}
            <button onClick={addSkill} className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#242424" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm104,48H40a8,8,0,0,0,0,16H144a8,8,0,0,0,0-16Zm88,0H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z"></path></svg>
            </button>
          </div>

          {/* Certificates Section */}
          <h2 className="text-lg font-semibold text-[#242424] mb-2">Certificates:</h2>
          {formData.certificates.map((certificate, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                placeholder="Certificate Name"
                value={certificate.name}
                onChange={(e) => handleCertificateChange(index, 'name', e.target.value)}
                className="w-1/2 p-2 border border-[#242424] rounded-lg bg-[#fffefb] focus:ring focus:ring-[#242424] mr-2"
              />
              <input
                type="text"
                placeholder="Certificate Link"
                value={certificate.link}
                onChange={(e) => handleCertificateChange(index, 'link', e.target.value)}
                className="w-1/2 p-2 border border-[#242424] rounded-lg bg-[#fffefb] focus:ring focus:ring-[#242424]"
              />
              <button onClick={() => removeCertificate(index)} className="ml-2 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#860404" viewBox="0 0 256 256"><path d="M216,40H68.53a16.08,16.08,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11A16.08,16.08,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM61.67,204.12,68.53,200h0ZM216,200H68.53l-43.2-72,43.2-72H216ZM106.34,146.34,124.69,128l-18.35-18.34a8,8,0,0,1,11.32-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128l18.35,18.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Z"></path></svg>
              </button>
            </div>
          ))}
          <button onClick={addCertificate}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#242424" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm104,48H40a8,8,0,0,0,0,16H144a8,8,0,0,0,0-16Zm88,0H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z"></path></svg>
          </button>

                 {/* Projects Section */}
                 <h2 className="text-lg font-semibold text-[#242424] mb-2">Projects:</h2>
          {formData.projects.map((project, index) => (
            <div key={index} className="flex mb-2">
              <input
                type="text"
                placeholder="Project Name"
                value={project.name}
                onChange={(e) => handleProjectChange(index, 'name', e.target.value)}
                className="w-1/2 p-2 border border-[#242424] rounded-lg bg-[#fffefb] focus:ring focus:ring-[#242424] mr-2"
              />
              <input
                type="text"
                placeholder="Project Link"
                value={project.link}
                onChange={(e) => handleProjectChange(index, 'link', e.target.value)}
                className="w-1/2 p-2 border border-[#242424] rounded-lg bg-[#fffefb] focus:ring focus:ring-[#242424]"
              />
              <button onClick={() => removeProject(index)} className="ml-2 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#860404" viewBox="0 0 256 256"><path d="M216,40H68.53a16.08,16.08,0,0,0-13.72,7.77L9.14,123.88a8,8,0,0,0,0,8.24l45.67,76.11A16.08,16.08,0,0,0,68.53,216H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM61.67,204.12,68.53,200h0ZM216,200H68.53l-43.2-72,43.2-72H216ZM106.34,146.34,124.69,128l-18.35-18.34a8,8,0,0,1,11.32-11.32L136,116.69l18.34-18.35a8,8,0,0,1,11.32,11.32L147.31,128l18.35,18.34a8,8,0,0,1-11.32,11.32L136,139.31l-18.34,18.35a8,8,0,0,1-11.32-11.32Z"></path></svg>
              </button>
            </div>
          ))}
          <button onClick={addProject}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#242424" viewBox="0 0 256 256"><path d="M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm104,48H40a8,8,0,0,0,0,16H144a8,8,0,0,0,0-16Zm88,0H216V168a8,8,0,0,0-16,0v16H184a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V200h16a8,8,0,0,0,0-16Z"></path></svg>
            </button>
        </div>
        

        {/* Live resume preview */}
        <div className="md:w-full">
          <div className="h-full p-6 bg-[#242424] rounded-3xl">
            <h2 className="text-3xl font-extrabold teko text-[#F2EEE5] mb-6 select-none">Live Resume Preview:</h2>
            <ResumePreview formData={formData} />
          </div>
        </div>
      </div>
      <div className="p-6 pb-10 select-none">
            <PDFGenerator formData={formData} />
          </div>
    </div>
  );
}

export default App;
