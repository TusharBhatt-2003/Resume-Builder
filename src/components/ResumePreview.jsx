import React from "react";

const ResumePreview = ({ formData }) => {
  return (
    <div className="p-6 bg-[#F2EEE5] rounded-3xl border-2 border-[#242424]">
      <h2 className="text-2xl font-bold mb-4 text-[#242424]">Resume:</h2>
      <div className="text-lg">
        <p><strong className="text-[#242424]">Name:</strong> {formData.name || "Your Name"}</p>
        <p><strong className="text-[#242424]">Contact:</strong> {formData.contact || "Your Contact Info"}</p>
        <p><strong className="text-[#242424]">Email:</strong> {formData.email || "your.email@example.com"}</p>
        <p><strong className="text-[#242424]">Education:</strong> {formData.education || "Your Education"}</p>
        <p><strong className="text-[#242424]">Experience:</strong> {formData.experience || "Your Experience"}</p>
        <p><strong className="text-[#242424]">Portfolio:</strong> {formData.portfolio || "Your Portfolio URL"}</p>

        {/* Certificates Section */}
        <p className="mt-4"><strong className="text-[#242424]">Certificates:</strong></p>
        {formData.certificates.length > 0 ? (
          <ul className="ml-6 list-disc">
            {formData.certificates.map((certificate, index) => (
              <li key={index} className="text-gray-700">
                <a href={certificate.link} target="_blank" rel="noopener noreferrer" className="underline">
                  {certificate.name || `Certificate ${index + 1}`}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 ml-6">No certificates added yet</p>
        )}

        {/* Skills Section */}
        <p className="mt-4"><strong className="text-[#242424]">Skills:</strong></p>
        <ul className="ml-6 list-disc">
          {formData.skills.length > 0 ? (
            formData.skills.map((skill, index) => (
              <li key={index} className="text-gray-700">{skill || `Skill ${index + 1}`}</li>
            ))
          ) : (
            <li className="text-gray-500">No skills added yet</li>
          )}

               {/* Projects Section */}
        <p className="mt-4"><strong className="text-[#242424]">Projects:</strong></p>
        {formData.projects.length > 0 ? (
          <ul className="ml-6 list-disc">
            {formData.projects.map((project, index) => (
              <li key={index} className="text-gray-700">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="underline">
                  {project.name || `Project ${index + 1}`}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 ml-6">No projects added yet</p>
        )}
        </ul>
      </div>
    </div>
  );
};

export default ResumePreview;
