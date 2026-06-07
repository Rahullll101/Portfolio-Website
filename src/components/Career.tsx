import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI/ML Intern</h4>
                <h5>Zerokost Healthcare Pvt Ltd</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developing conversation scripts and structured prompts for LLM-based voice agents using Vapi. Assisting in prompt refinement for clarity and consistency, and supporting QA testing across conversational flows and edge cases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Prompt Engineer & QA</h4>
                <h5>Desible AI</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Created end-to-end conversation scripts and engineered structured prompts for LLM-based voice/chat agents. Optimized prompts for readability and LLM compatibility, and performed QA testing across flows and edge case scenarios.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Electronics & Communication</h4>
                <h5>Jain College of Engineering</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Graduated with a CGPA of 7.92. Gained strong foundations in Python programming, object-oriented concepts, and electronic systems while exploring machine learning and data science.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
